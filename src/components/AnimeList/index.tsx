import React from "react";
import { AnimeCard, AnimeCardProps } from "../AnimeCard";
import Link from "next/link";

type AnimeListProps = {
  api: AnimeCardProps;
  title: string;
  linkHref: string;
};

const AnimeList = ({ api, title, linkHref }: AnimeListProps) => {
  return (
    <section className="flex w-full flex-col">
      <div className="flex items-center justify-between p-4">
        <h2 className="text-2xl font-bold">{title}</h2>
        <Link
          href={linkHref}
          className="transition-colors hover:text-default-500"
        >
          See More
        </Link>
      </div>
      <article className="grid grid-cols-1 place-items-center gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {api.data.map((item) => (
          <AnimeCard
            key={item.mal_id}
            mal_id={item.mal_id}
            title={item.title}
            image={item.images.webp.image_url}
            year={item.year}
            genres={item.genres.map((genre) => genre.name).join(", ")}
          />
        ))}
      </article>
    </section>
  );
};

export default AnimeList;
