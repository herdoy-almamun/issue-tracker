import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

interface Props {
  params: {
    id: string;
  };
}

export const DELETE = async (request: NextRequest, { params }: Props) => {
  try {
    const issue = await prisma.issue.findUnique({ where: { id: params.id } });
    if (!issue) return NextResponse.json("Invalid Issue Id!", { status: 400 });
    await prisma.issue.delete({ where: { id: issue.id } });
    return NextResponse.json("Successfully deleted issue.", { status: 200 });
  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  }
};

export const PUT = async (request: NextRequest, { params }: Props) => {
  try {
    const body = await request.json();
    const issue = await prisma.issue.findUnique({ where: { id: params.id } });
    if (!issue) return NextResponse.json("Invalid Issue Id!", { status: 400 });
    const { email } = body;
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) return NextResponse.json("Invalid user");
    await prisma.issue.update({
      where: { id: params.id },
      data: { userId: user.id },
    });
    return NextResponse.json("Successfully deleted issue.", { status: 200 });
  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  }
};
