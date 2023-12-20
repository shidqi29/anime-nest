import AnimeCard from "@/components/AnimeCard";
import { axiosInstance } from "@/lib/api";

export default async function Home() {
  const { data } = await axiosInstance.get("/top/anime?limit=8");

  return (
    <div className="min-h-screen">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
        {data.data.map((item: any) => (
          <AnimeCard
            key={item.mal_id}
            title={item.title}
            image={item.images.webp.image_url}
            year={item.year}
            genres={item.genres.map((genre: any) => genre.name).join(", ")}
          />
        ))}
      </div>
    </div>
  );
}
