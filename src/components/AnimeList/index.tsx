import React from "react";
import { AnimeCard, AnimeCardProps } from "../AnimeCard";

type AnimeListProps = {
  api: AnimeCardProps;
  title: string;
};

const AnimeList = ({ api, title }: AnimeListProps) => {
  return (
    <section className="flex w-full flex-col">
      <div className="p-4">
        <h2 className="text-center text-2xl font-bold md:text-start">
          {title}
        </h2>
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
