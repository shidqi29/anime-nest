import React from "react";

import { AnimeCard, AnimeCardProps } from "../AnimeCard";
import { Header } from "./header";

type AnimeListProps = {
  api: AnimeCardProps;
  title?: string;
  linkHref?: string;
};

const AnimeList = ({ api, title, linkHref }: AnimeListProps) => {
  return (
    <section className="flex w-full flex-col">
      <Header title={title} linkHref={linkHref} />
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
