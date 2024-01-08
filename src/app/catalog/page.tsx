"use client";

import { AnimeCardProps } from "@/components";
import AnimeList from "@/components/AnimeList";
import { axiosInstance } from "@/lib/api";
import { PaginationType } from "@/types";
import { Pagination } from "@nextui-org/react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

type AnimeData = {
  data: AnimeCardProps[];
  pagination: PaginationType
};

export default function Catalog() {
  const [data, setData] = useState<AnimeData | null>(null);

  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const currentPage = Number(searchParams.get("page")) || 1;
  const [page, setPage] = useState(currentPage);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get("/anime", {
          params: {
            page: currentPage,
          },
        });
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [currentPage]);

  const handlePageChange = (page: number) => {
    setPage(page);
    router.replace(`${pathname}?page=${page}`);
  };

  if (!data) return null;

  return (
    <div className="mb-10 flex flex-col items-center justify-center gap-y-5">
      <AnimeList api={data} />
      <Pagination
        total={data?.pagination?.last_visible_page || 0}
        initialPage={data?.pagination?.current_page}
        color="warning"
        showControls
        page={page}
        onChange={handlePageChange}
      />
    </div>
  );
}
