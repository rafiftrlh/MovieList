"use client";
import { useParams } from "next/navigation";

export default function Page() {
  const params = useParams();
  console.log(params);
  return (
    <>
      <p>{params.id}</p>
    </>
  );
}
