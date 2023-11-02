import { patchJobSchema } from "@/app/validationsSchemas";
import prisma from "@/prisma/client";
import { NextResponse } from "next/server";

export async function PATCH(
  response: NextResponse,
  { params }: { params: { id: string } }
) {
  const body = await response.json();

  const validation = patchJobSchema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.format(), {
      status: 400,
    });

  const job = await prisma.jobPost.findUnique({
    where: { id: params.id },
  });

  if (!job) return NextResponse.json({ error: "Invalid job" }, { status: 404 });

  const updatedJob = await prisma.jobPost.update({
    where: { id: params.id },
    data: {
      ...body,
    },
  });

  return NextResponse.json(updatedJob);
}

export async function DELETE(
  response: NextResponse,
  { params }: { params: { id: string } }
) {
  const job = await prisma.jobPost.findUnique({
    where: { id: params.id },
  });

  if (!job) return NextResponse.json({ error: "Invalid job" }, { status: 404 });

  const result = await prisma.jobPost.delete({
    where: { id: params.id },
  });
  return NextResponse.json(result, { status: 201 });
}
