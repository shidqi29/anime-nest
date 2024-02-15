import { Divider, User } from "@nextui-org/react";
import { getServerSession } from "next-auth";
import Link from "next/link";
import React from "react";

import prisma from "@/lib/prisma";
import { formattedDate } from "@/lib/utils";
import { CommentCardType } from "@/types";

export default async function CommentPage() {
  const { user } = await getServerSession();
  const comments = await prisma.comment.findMany({
    where: {
      user_email: user.email,
    },
  });

  return (
    <div className="flex w-full flex-col gap-4">
      {comments.map((comment: CommentCardType) => (
        <Link
          href={`/anime/${comment.mal_id}`}
          className="rounded-lg border-2 border-primary p-4"
          key={comment.id}
        >
          <User
            name={comment.username}
            avatarProps={{ src: comment.user_image }}
            description={formattedDate(comment.createdAt)}
          />
          <Divider className="my-2" />
          <p>{comment.comment}</p>
        </Link>
      ))}
    </div>
  );
}
