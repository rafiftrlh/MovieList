import { imageUrl } from "@/lib/api";
import Image from "next/image";
import { AiFillStar } from "react-icons/ai";

export default function Card({ image, title, popularity, overview }) {
  return (
    <>
      <div className="rounded-md bg-slate-300 w-60 h-[520px] relative shadow-xl overflow-hidden scale-90 md:scale-100">
        <Image src={imageUrl + image} alt={title} width="1000" height="1000" />
        <div className="px-2 mt-5">
          <h3 className="font-semibold text-lg line-clamp-1">{title}</h3>
          <div>
            <p className="line-clamp-2">{overview}</p>
          </div>
          <p className="flex items-center absolute bottom-2">
            <AiFillStar className="mr-2 fill-yellow-400" />
            {popularity}
          </p>
        </div>
      </div>
    </>
  );
}
