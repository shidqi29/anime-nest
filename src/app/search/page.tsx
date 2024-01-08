import AnimeList from "@/components/AnimeList";
import { axiosInstance } from "@/lib/api";

export default async function Search({
  searchParams,
}: {
  searchParams: { query: string };
}) {
  const { data } = await axiosInstance.get(
    `/anime?q=${searchParams.query}`,
  );

  return (
    <>
      <div className="flex w-full items-center justify-center">
        <AnimeList
          api={data}
          title={`Search result for ${searchParams.query}`}
        />
      </div>
    </>
  );
}
