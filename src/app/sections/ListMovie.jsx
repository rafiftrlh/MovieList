"use client";
import { useGetMovies } from "@/hooks/useMovies";
import Card from "../components/Card";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import Pagination from "../Utilities/Pagination";

export default function ListMovie() {
  const [sortBy, setSortBy] = useState("popularity.desc");
  const [page, setPage] = useState(1);

  const data = useGetMovies(sortBy, page);
  return (
    <>
      <div className="my-6">
        <select
          className="py-2 px-4 rounded-md border-2 outline-none"
          name=""
          id=""
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="popularity.desc">Popularity DESC</option>
          <option value="popularity.asc">Popularity ASC</option>
        </select>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 justify-center sm:justify-evenly gap-0 md:gap-3 lg:gap-5">
        {data?.results?.map((item, index) => (
          <Link href={`/movie/${item.id}`} key={item.id}>
            <Card
              image={item.poster_path}
              overview={item.overview}
              id={item.id}
              popularity={item.popularity}
              title={item.title}
            />
          </Link>
        ))}
      </div>
      <Pagination page={page} setPage={setPage} />
    </>
  );
}
