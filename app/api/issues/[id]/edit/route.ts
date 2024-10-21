import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

interface Props {
  params: {
    id: string;
  };
}

export const PUT = async (request: NextRequest, { params }: Props) => {
  try {
    const body = await request.json();
    const issue = await prisma.issue.findUnique({ where: { id: params.id } });
    if (!issue) return NextResponse.json("Invalid Issue Id!", { status: 400 });
    const { title, description } = body;
    await prisma.issue.update({
      where: { id: params.id },
      data: { title, description },
    });
    return NextResponse.json("Successfully deleted issue.", { status: 200 });
  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  }
};
