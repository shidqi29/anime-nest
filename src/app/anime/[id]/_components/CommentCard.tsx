import { Divider, User } from "@nextui-org/react";
import React from "react";

import prisma from "@/lib/prisma";
import { formattedDate } from "@/lib/utils";
import { CommentCardType } from "@/types";

export const CommentCard = async ({ mal_id }: { mal_id: string }) => {
  const comments = await prisma.comment.findMany({
    where: {
      mal_id,
    },
  });

  return (
    <div className="flex w-full flex-col gap-4">
      {comments.map((comment: CommentCardType) => (
        <div
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
        </div>
      ))}
    </div>
  );
};
