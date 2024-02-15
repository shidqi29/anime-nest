import { NextRequest } from "next/server";

import prisma from "@/lib/prisma";

export async function POST(request: NextRequest) {
  const {
    mal_id,
    user_email,
    comment,
    username,
    user_image,
    title,
    createdAt,
  } = await request.json();

  const data = {
    mal_id,
    user_email,
    comment,
    username,
    user_image,
    title,
    createdAt,
  };

  const postComment = await prisma.comment.create({
    data,
  });

  if (!postComment) {
    return Response.json({ status: 500, isCreated: false });
  }
  return Response.json({ status: 200, isCreated: true });
}
