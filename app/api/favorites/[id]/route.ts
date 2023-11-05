import authOptions from "@/app/auth/authOptions";
import prisma from "@/prisma/client";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function DELETE(
  response: NextResponse,
  { params }: { params: { id: string } }
) {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({}, { status: 401 });

  const favorite = await prisma.favorite.findUnique({
    where: { id: params.id },
  });

  if (!favorite)
    return NextResponse.json({ error: "Invalid Favorite" }, { status: 404 });

  const result = await prisma.jobPost.delete({
    where: { id: params.id },
  });
  return NextResponse.json(result, { status: 201 });
}
