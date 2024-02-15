import { Card, CardFooter } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";

export type AnimeCardProps = {
  mal_id: number;
  title?: string;
  images: any;
  year?: number;
  genres?: string[];
};

export const AnimeCard = ({
  mal_id,
  title,
  images,
  year,
  genres,
}: AnimeCardProps) => {
  return (
    <Link href={`/anime/${mal_id}`}>
      <Card className="h-60 w-44 hover:scale-105">
        <Image
          alt={`Poster of ${title}`}
          className="h-full w-full object-cover"
          src={images}
          height={240}
          width={176}
          title={title}
        />
        <CardFooter className="absolute bottom-0 z-10 justify-between bg-gradient-to-b from-transparent to-black">
          <div className="flex flex-col">
            <p className="line-clamp-1 text-sm font-medium">{title}</p>
            {(year || genres) && (
              <p className="line-clamp-1 text-xs">
                {year ? `${year} -` : "Unknown -"}{" "}
                <span>{genres ? `${genres}` : "Unknown"}</span>
              </p>
            )}
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
};
