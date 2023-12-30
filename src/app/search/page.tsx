import AnimeList from "@/components/AnimeList";
import { axiosInstance } from "@/lib/api";

export default async function Search({
  searchParams,
}: {
  searchParams: { query: string };
}) {
  const { data: topAnime } = await axiosInstance.get(
    `/anime?q=${searchParams.query}`,
  );

  return (
    <>
      <h1>{searchParams.query}</h1>
      <div className="flex w-full items-center justify-center">
        <AnimeList api={topAnime} title="Top Anime" linkHref="/top/anime" />
      </div>
      <div className="flex w-full items-center justify-center">
        <AnimeList api={topAnime} title="Top Anime" linkHref="/top/anime" />
      </div>
    </>
  );
}
