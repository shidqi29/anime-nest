import { Card, CardFooter } from "@nextui-org/react";
import Image from "next/image";

export type StaffCardProps = {
  person: {
    mal_id: number;
    images: {
      jpg: {
        image_url: string;
      };
    };
    name: string;
  };
  positions: string[];
};

export const StaffCard = (props: StaffCardProps) => {
  const { person, positions } = props;

  return (
    <Card className="h-60 w-44 hover:scale-105">
      <Image
        alt={`Picture of ${person.name}`}
        className="h-full w-full object-cover"
        src={person.images.jpg.image_url}
        height={240}
        width={176}
        title={person.name}
      />
      <CardFooter className="absolute bottom-0 z-10 justify-between bg-gradient-to-b from-transparent to-black">
        <div className="flex flex-col">
          <p className="line-clamp-1 text-sm font-medium">{person.name}</p>
          <p className="line-clamp-1 text-xs">{positions.join(", ")}</p>
        </div>
      </CardFooter>
    </Card>
  );
};
