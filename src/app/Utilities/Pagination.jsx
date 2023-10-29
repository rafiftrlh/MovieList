import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const Pagination = ({}) => {
  return (
    <div className="flex justify-center items-center py-4 px-2 gap-5 font-bold text-lg">
      <button className="transition hover:text-blue-500">
        <AiOutlineLeft />
      </button>
      <button>1</button>
      <button className="transition hover:text-blue-500">
        <AiOutlineRight />
      </button>
    </div>
  );
};

export default Pagination;
