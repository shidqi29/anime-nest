import { Hero } from "@/components/Hero";
import AnimeList from "@/components/AnimeList";
import { axiosInstance } from "@/lib/api";
import { getNestedFetch, reproduce } from "@/lib/utils";

export default async function Home() {
  const LIMIT_VALUE = 5;

  const [topAnime, randomAnime] = await Promise.all([
    axiosInstance.get(`/top/anime?limit=${LIMIT_VALUE}`),
    axiosInstance.get("/random/anime"),
  ]);

  let { data: recommendationsAnime } = await axiosInstance.get(
    "/recommendations/anime",
  );

  recommendationsAnime = getNestedFetch(recommendationsAnime, "entry"); // get nested data with key "entry"
  recommendationsAnime = reproduce(recommendationsAnime, LIMIT_VALUE); // reproduce data with limit value

  return (
    <>
      <Hero
        backgroundImage={randomAnime.data.data.images.webp.large_image_url}
        mal_id={randomAnime.data.data.mal_id}
        title={randomAnime.data.data.title}
        synopsis={randomAnime.data.data.synopsis}
      />
      <div className="lg:-translate-y-32">
        <AnimeList api={topAnime.data} title="Top Anime" />
        <AnimeList api={recommendationsAnime} title="Recommendation for you" />
      </div>
    </>
  );
}
