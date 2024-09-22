import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";

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
