import { Button } from "@nextui-org/react";
import Link from "next/link";
import React from "react";

type HeroProps = {
  mal_id: number;
  backgroundImage: string;
  title: string;
  synopsis: string;
};

export const Hero = ({
  mal_id,
  backgroundImage,
  title,
  synopsis,
}: HeroProps) => {
  return (
    <section className="hidden lg:block">
      <div
        className="relative flex h-[80vh] flex-col items-start justify-start overflow-hidden rounded-xl bg-cover bg-fixed bg-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <div className="my-auto ml-10 flex w-[35%] flex-col items-start justify-end gap-y-2 rounded-xl bg-gradient-to-b from-transparent to-primary/40 p-2 transition-all hover:bg-primary/70">
          <h1 className="line-clamp-2 text-4xl font-bold">{title}</h1>
          <p className="line-clamp-3 font-medium">{synopsis}</p>
          <Button
            as={Link}
            href={`/anime/${mal_id}`}
            variant="ghost"
            color="secondary"
          >
            See Anime
          </Button>
        </div>
      </div>
    </section>
  );
};
