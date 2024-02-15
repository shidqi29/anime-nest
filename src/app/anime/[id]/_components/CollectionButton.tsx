"use client";

import { Button } from "@nextui-org/react";
import axios from "axios";
import { useState } from "react";
import { toast } from "sonner";
import { Plus, Check } from "@phosphor-icons/react/dist/ssr";

type CollectionButtonProps = {
  mal_id: string;
  user_email?: string | null;
  image?: string;
  title?: string;
};

export const CollectionButton = ({
  mal_id,
  user_email,
  image,
  title,
}: CollectionButtonProps) => {
  const [isAdded, setIsAdded] = useState(false);

  const handleCollection = async (e: React.MouseEvent) => {
    e.preventDefault();
    const data = { mal_id, user_email, image, title };
    const response = await axios.post(
      "/api/v1/collection",
      JSON.stringify(data),
    );

    if (response.data.isCreated) {
      setIsAdded(true);
      toast.success("Added to Collection", {
        position: "bottom-right",
      });
    }
  };

  return (
    <>
      {isAdded ? (
        <Button disabled={isAdded} startContent={<Check />} variant="flat">
          Already in Collection
        </Button>
      ) : (
        <Button
          onClick={handleCollection}
          disabled={isAdded}
          startContent={<Plus />}
          variant="flat"
        >
          Add to Collection
        </Button>
      )}
    </>
  );
};
