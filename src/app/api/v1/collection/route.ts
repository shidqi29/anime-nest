import { NextRequest } from "next/server";

import prisma from "@/lib/prisma";

export async function POST(request: NextRequest) {
  const { mal_id, user_email, image, title } = await request.json();

  const data = { mal_id, user_email, image, title };

  const createdCollection = await prisma.collection.create({
    data,
  });

  if (!createdCollection) {
    return Response.json({ status: 500, isCreated: false });
  }
  return Response.json({ status: 200, isCreated: true });
}
