import AnimeList from "@/components/AnimeList";
import { axiosInstance } from "@/lib/api";

export default async function Home() {
  const { data: topAnime } = await axiosInstance.get("/top/anime?limit=8");

  return (
    <div className="flex w-full items-center justify-center border">
      <AnimeList api={topAnime} title="Top Anime" />
    </div>
  );
}
