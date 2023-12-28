import { Card, CardFooter, Image } from "@nextui-org/react";
import Link from "next/link";

export type AnimeCardProps = {
  [x: string]: any;
  mal_id: number;
  title: string;
  image: string;
  year?: number;
  genres?: [];
};

export const AnimeCard = ({
  mal_id,
  title,
  image,
  year,
  genres,
}: AnimeCardProps) => {
  return (
    <Link href={`/anime/${mal_id}`}>
      <Card className="h-60 w-44 hover:scale-105">
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 h-full w-full object-cover"
          src={image}
        />
        <CardFooter className="absolute bottom-0 z-10 justify-between bg-gradient-to-b from-transparent to-black">
          <div className="flex flex-col">
            <p className="line-clamp-1 text-sm font-medium">{title}</p>
            <p className="line-clamp-1 text-xs">
              {year ? `${year} -` : "Unknown -"} <span>{genres}</span>
            </p>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
};
