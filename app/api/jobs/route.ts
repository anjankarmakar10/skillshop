import authOptions from "@/app/auth/authOptions";
import { jobListingSchema } from "@/app/validationsSchemas";
import prisma from "@/prisma/client";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest) => {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({}, { status: 401 });

  const body = await request.json();

  const validation = jobListingSchema.safeParse(body);
  if (!validation.success) {
    return NextResponse.json(validation.error.format(), { status: 400 });
  }

  if (body.userEmail) {
    const user = await prisma.user.findUnique({
      where: { email: body.userEmail },
    });

    if (!user)
      return NextResponse.json({ error: "Invalid user." }, { status: 400 });
  }

  const job = await prisma.jobPost.create({
    data: {
      ...body,
    },
  });

  return NextResponse.json(job, { status: 201 });
};
