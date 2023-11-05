import authOptions from "@/app/auth/authOptions";
import { favoriteListingSchema } from "@/app/validationsSchemas";
import prisma from "@/prisma/client";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest) => {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({}, { status: 401 });

  const body = await request.json();

  const validation = favoriteListingSchema.safeParse(body);

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

  const favorite = await prisma.favorite.create({
    data: {
      ...body,
    },
  });

  return NextResponse.json(favorite, { status: 201 });
};
