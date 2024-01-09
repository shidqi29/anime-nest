"use client";

import { AnimeCardProps, ErrorMessage, LoadingSkeleton } from "@/components";
import AnimeList from "@/components/AnimeList";
import { axiosInstance } from "@/lib/api";
import { PaginationType } from "@/types";
import { Pagination } from "@nextui-org/react";
import { useQuery } from "@tanstack/react-query";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

type AnimeData = {
  data: AnimeCardProps[];
  pagination: PaginationType;
};

export default function Catalog() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const currentPage = Number(searchParams.get("page")) || 1;
  const [page, setPage] = useState(currentPage);

  const { data, isLoading, isError, error } = useQuery<AnimeData>({
    queryKey: ["anime", { page: currentPage }],
    queryFn: async () => {
      const response = await axiosInstance.get("/anime", {
        params: {
          page: currentPage,
        },
      });
      return response.data;
    },
  });

  const handlePageChange = (page: number) => {
    setPage(page);
    router.replace(`${pathname}?page=${page}`);
    window.scrollTo(0, 0);
  };

  if (isLoading) return <LoadingSkeleton />;

  if (isError) return <ErrorMessage message={error.message} />;

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
