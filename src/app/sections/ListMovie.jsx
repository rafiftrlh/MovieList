"use client";
import { useGetMovies } from "@/hooks/useMovies";
import Card from "../components/Card";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

export default function ListMovie() {
  const [sortBy, setSortBy] = useState("popularity.desc");
  const params = useSearchParams();

  const data = useGetMovies(sortBy, params.get("page"));
  return (
    <>
      <div>
        <select name="" id="" onChange={(e) => setSortBy(e.target.value)}>
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
      <div className="flex justify-center gap-10 mt-10 mb-10">
        <ul className="flex items-center gap-5">
          <li>
            <AiOutlineLeft />
          </li>
          <li>
            <Link href="/?page=1" className="active:bg-red-500">
              1
            </Link>
          </li>
          <li>
            <Link href="/?page=2">2</Link>
          </li>
          <li>
            <Link href="/?page=3">3</Link>
          </li>
          <li>
            <Link href="/?page=4">4</Link>
          </li>
          <li>
            <Link href="/?page=5">5</Link>
          </li>
          <li>
            <AiOutlineRight />
          </li>
        </ul>
      </div>
    </>
  );
}
