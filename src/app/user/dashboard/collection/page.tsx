import { getServerSession } from "next-auth";
import React from "react";

import { AnimeCard } from "@/components";
import prisma from "@/lib/prisma";
import { CollectionType } from "@/types";

export default async function CollectionPage() {
  const { user } = await getServerSession();
  const collection = await prisma.collection.findMany({
    where: {
      user_email: user.email,
    },
  });
  return (
    <div>
      <h1>Collection Page: {user.email}</h1>
      <div className="flex flex-wrap gap-4">
        {collection.map((item: CollectionType) => (
          <AnimeCard
            images={item.image}
            title={item.title}
            mal_id={item.mal_id}
            key={item.id}
          />
        ))}
      </div>
    </div>
  );
}
