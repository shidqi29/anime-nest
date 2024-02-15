"use client";

import { CommentInputProps } from "@/types";
import { Button, Textarea } from "@nextui-org/react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

export const CommentInput = ({
  mal_id,
  user_email,
  username,
  user_image,
  title,
  createdAt,
}: CommentInputProps) => {
  const [comment, setComment] = useState("");
  const router = useRouter();

  const handleSubmitComment = async (e: React.MouseEvent) => {
    e.preventDefault();
    const data = {
      mal_id,
      user_email,
      comment,
      username,
      user_image,
      title,
      createdAt,
    };
    const response = await axios.post("/api/v1/comment", JSON.stringify(data));

    if (response.data.isCreated) {
      toast.success("Comment Added!", {
        position: "bottom-right",
      });
      setComment("");
      router.refresh();
    }
  };

  return (
    <div className="flex w-full flex-col gap-4">
      <Textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        variant="bordered"
      />
      <div>
        <Button onClick={handleSubmitComment}>Submit</Button>
      </div>
    </div>
  );
};
