import AnimeList from "@/components/AnimeList";
import { axiosInstance } from "@/lib/api";

export default async function Home() {
  const { data: topAnime } = await axiosInstance.get("/top/anime?limit=8");

  return (
    <>
      <section></section>
      <div className="flex w-full items-center justify-center">
        <AnimeList api={topAnime} title="Top Anime" linkHref="/top/anime" />
      </div>
      <div className="flex w-full items-center justify-center">
        <AnimeList api={topAnime} title="Trending"/>
      </div>
    </>
  );
}
