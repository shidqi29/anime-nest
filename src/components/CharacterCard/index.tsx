import { Card, CardFooter } from "@nextui-org/react";
import Image from "next/image";

export type CharacterCardProps = {
  character: {
    mal_id: number;
    images: {
      webp: {
        image_url: string;
      };
    };
    name: string;
  };
  role: string;
};

export const CharacterCard = (props: CharacterCardProps) => {
  const { character, role } = props;
  return (
    <Card className="h-60 w-44 hover:scale-105">
      <Image
        alt={`Picture of ${character.name}`}
        className="h-full w-full object-cover"
        src={character.images.webp.image_url}
        height={240}
        width={176}
        title={character.name}
      />
      <CardFooter className="absolute bottom-0 z-10 justify-between bg-gradient-to-b from-transparent to-black">
        <div className="flex flex-col">
          <p className="line-clamp-1 text-sm font-medium">{character.name}</p>
          <p className="line-clamp-1 text-xs">{role}</p>
        </div>
      </CardFooter>
    </Card>
  );
};
