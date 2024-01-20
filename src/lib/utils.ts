import { AnimeCardProps } from "@/components";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// function to get nested fetch data
export const getNestedFetch = (
  value: { data: AnimeCardProps[] }, // value to get data from
  objProperty: string, // object property to get data from
) => {
  return value.data.flatMap((item: { [x: string]: any }) => item[objProperty]);
};

// function to reproduce data
export const reproduce = (data: AnimeCardProps[], gap: number) => {
  const firstIndex = ~~(Math.random() * (data.length - gap) + 1);
  const lastIndex = firstIndex + gap;

  const response = {
    data: data.slice(firstIndex, lastIndex),
  };

  return response;
};
