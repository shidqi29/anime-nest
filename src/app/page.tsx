import { Hero } from "@/components/Hero";
import AnimeList from "@/components/AnimeList";
import { axiosInstance } from "@/lib/api";

export default async function Home() {
  const { data: topAnime } = await axiosInstance.get("/top/anime?limit=5");
  const { data: randomAnime } = await axiosInstance.get("/random/anime");

  return (
    <>
      <Hero
        backgroundImage={randomAnime.data.images.webp.large_image_url}
        mal_id={randomAnime.data.mal_id}
        title={randomAnime.data.title}
        synopsis={randomAnime.data.synopsis}
      />
      <div className="lg:-translate-y-32">
        <AnimeList api={topAnime} title="Top Anime" />
        <AnimeList api={topAnime} title="Trending" linkHref="/top/anime" />
      </div>
    </>
  );
}
