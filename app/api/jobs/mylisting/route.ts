import authOptions from "@/app/auth/authOptions";
import prisma from "@/prisma/client";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest) => {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({}, { status: 401 });

  if (session) {
    const user = await prisma.user.findUnique({
      where: { email: session.user?.email!! },
    });

    if (!user)
      return NextResponse.json({ error: "Invalid user." }, { status: 400 });
  }

  const jobs = await prisma.jobPost.findMany({
    where: { userEmail: session.user?.email },
  });

  return NextResponse.json(jobs, { status: 201 });
};
