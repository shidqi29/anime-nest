import { Card } from "@nextui-org/react";
import Image from "next/image";
import { Star } from "@phosphor-icons/react/dist/ssr";

import { TabDetail, VideoPlayer } from "@/components";
import { axiosInstance } from "@/lib/api";

type DetailAnimeProps = {
  params: {
    id: string;
  };
};

export default async function DetailAnime({
  params: { id },
}: DetailAnimeProps) {
  const { data: anime } = await axiosInstance.get(`/anime/${id}/full`);
  const { data: animeCharacters } = await axiosInstance.get(
    `/anime/${id}/characters`,
  );

  return (
    <>
      <VideoPlayer
        url={anime.data.trailer.url}
        thumbnailImg={anime.data.trailer.images.small_image_url}
        title={anime.data.title}
      />
      <div className="px-8 py-6 lg:-translate-y-32">
        <div className="mb-10 grid grid-cols-[224px_1fr] space-x-6">
          <Card className="h-80 w-56">
            <Image
              src={anime.data.images.webp.image_url}
              alt="Anime Poster"
              width={1280}
              height={720}
              className="h-full w-full object-cover"
            />
          </Card>
          <div className="flex flex-col gap-y-4 lg:translate-y-32">
            <h1 className="text-4xl font-bold">{anime.data.title}</h1>
            <div className="flex items-center space-x-2 text-lg">
              <Star className="text-yellow-400" weight="fill" />
              <span>{anime.data.score}</span>
            </div>
          </div>
        </div>
        <TabDetail overview={anime.data} characters={animeCharacters} />
      </div>
    </>
  );
}
