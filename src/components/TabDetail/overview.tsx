import React from "react";

export type OverviewProps = {
  synopsis: string;
  type: string;
  episodes: number;
  genres: { name: string }[];
  aired: { string: string };
  status: string;
  season: string;
  studios: { name: string }[];
  source: string;
  rating: string;
  duration: string;
};

export const Overview = (props: OverviewProps) => {
  const {
    synopsis,
    type,
    episodes,
    genres,
    aired,
    status,
    season,
    studios,
    source,
    rating,
    duration,
  } = props;

  const details = [
    {
      title: "Type",
      value: type,
    },
    {
      title: "Episodes",
      value: episodes,
    },
    {
      title: "Genres",
      value: genres.map((genre) => genre.name).join(", "),
    },
    {
      title: "Aired",
      value: aired.string,
    },
    {
      title: "Status",
      value: status,
    },
    {
      title: "Season",
      value: season,
    },
    {
      title: "Studios",
      value: studios.map((studio) => studio.name).join(", "),
    },
    {
      title: "Source",
      value: source,
    },
    {
      title: "Rating",
      value: rating,
    },
    {
      title: "Duration",
      value: duration,
    },
  ];

  return (
    <div className="w-full">
      <div className="grid grid-cols-[30vw_1fr]">
        <div className="flex w-full flex-col gap-y-4">
          <h2 className="text-2xl font-semibold">Details</h2>
          {details.map((detail) => (
            <div key={detail.title} className="grid grid-cols-[25%_1fr]">
              <span className="font-semibold">{detail.title}</span>
              <span>{detail.value ? detail.value : "-"}</span>
            </div>
          ))}
        </div>
        <div className="flex w-full flex-col gap-y-4">
          <h2 className="text-2xl font-semibold">Synopsis</h2>
          <p>{synopsis}</p>
        </div>
      </div>
    </div>
  );
};
