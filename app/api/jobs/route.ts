import { jobListingSchema } from "@/app/validationsSchemas";
import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest) => {
  const body = await request.json();
  const validation = jobListingSchema.safeParse(body);
  if (!validation.success) {
    return NextResponse.json(validation.error.format(), { status: 400 });
  }

  const job = await prisma.jobPost.create({
    data: {
      ...body,
    },
  });

  return NextResponse.json(job, { status: 201 });
};
