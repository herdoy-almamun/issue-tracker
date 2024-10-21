import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

interface Props {
  params: {
    email: string;
  };
}

export const GET = async (request: NextRequest, { params }: Props) => {
  const users = await prisma.user.findMany({
    where: {
      NOT: {
        email: params.email,
      },
    },
  });

  return NextResponse.json(users);
};
