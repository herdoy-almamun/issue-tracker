import { validateIssue } from "@/utils/Issue";
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";

export const POST = async (request: NextRequest) => {
  const body = await request.json();
  const { error } = validateIssue(body);
  if (error)
    return NextResponse.json(error.details[0].message, { status: 400 });
  const { title, description } = body;
  const newIssue = await prisma.issue.create({ data: { title, description } });
  return NextResponse.json(newIssue, { status: 201 });
};
