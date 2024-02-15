import { Button, Card } from "@nextui-org/react";
import Image from "next/image";
import { Check, Star } from "@phosphor-icons/react/dist/ssr";
import { getServerSession } from "next-auth";

import { TabContent, VideoPlayer } from "@/components";
import { axiosInstance } from "@/lib/api";
import prisma from "@/lib/prisma";
import { Characters, CollectionButton, Overview, Staff } from "./_components";
import { CommentInput } from "./_components/CommentInput";
import { CommentCard } from "./_components/CommentCard";

type DetailAnimeProps = {
  params: {
    id: string;
  };
};

export default async function DetailAnime({
  params: { id },
}: DetailAnimeProps) {
  const [animeFull, animeCharacters, animeStaff] = await Promise.all([
    axiosInstance.get(`/anime/${id}/full`),
    axiosInstance.get(`/anime/${id}/characters`),
    axiosInstance.get(`/anime/${id}/staff`),
  ]);

  const addedCollection = await prisma.collection.findFirst({
    where: {
      mal_id: id,
    },
  });

  const session = await getServerSession();

  const tabs = [
    {
      label: "Overview",
      content: <Overview {...animeFull.data.data} />,
    },
    {
      label: "Characters",
      content: <Characters {...animeCharacters.data} />,
    },
    {
      label: "Staff",
      content: <Staff {...animeStaff.data} />,
    },
  ];

  return (
    <>
      <VideoPlayer
        url={animeFull.data.data.trailer.url}
        thumbnailImg={animeFull.data.data.trailer.images.small_image_url}
        title={animeFull.data.data.title}
      />
      <div className="px-8 py-6 lg:-translate-y-32">
        <div className="mb-10 grid grid-cols-[224px_1fr] space-x-6">
          <Card className="h-80 w-56">
            <Image
              src={animeFull.data.data.images.webp.image_url}
              alt="Anime Poster"
              width={1280}
              height={720}
              className="h-full w-full object-cover"
            />
          </Card>
          <div className="flex flex-col gap-y-4 lg:translate-y-32">
            <h1 className="text-4xl font-bold">{animeFull.data.data.title}</h1>
            <div className="flex items-center space-x-2 text-lg">
              <Star className="text-yellow-400" weight="fill" />
              <span>{animeFull.data.data.score}</span>
            </div>
            <div>
              {addedCollection ? (
                <Button disabled startContent={<Check />} variant="flat">
                  Already in Collection
                </Button>
              ) : (
                <CollectionButton
                  mal_id={id}
                  user_email={session?.user?.email}
                  title={animeFull.data.data.title}
                  image={animeFull.data.data.images.webp.image_url}
                />
              )}
            </div>
          </div>
        </div>
        <TabContent tabs={tabs} />
        {session && (
          <div className="mt-5">
            <CommentInput
              mal_id={id}
              user_email={session?.user?.email}
              username={session?.user?.name}
              title={animeFull.data.data.title}
              user_image={session?.user?.image}
              createdAt={new Date().toISOString()}
            />
          </div>
        )}
        <div className="mt-5">
          <CommentCard mal_id={id} />
        </div>
      </div>
    </>
  );
}
