import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const Pagination = ({ page, setPage }) => {
  const scrollTop = () => {
    scrollTo({
      behavior: "smooth",
      top: 0,
    });
  };

  const handleNextPage = () => {
    setPage((prevState) => prevState + 1);
    scrollTop();
  };

  const handlePrevPage = () => {
    setPage((prevState) => prevState - 1);
    scrollTop();
  };

  return (
    <div className="flex justify-center items-center py-4 px-2 gap-5 font-bold text-lg">
      {page <= 1 ? null : (
        <button
          onClick={handlePrevPage}
          className="transition hover:text-blue-500"
        >
          <AiOutlineLeft />
        </button>
      )}
      <button>{page} of 40749</button>
      {page >= 40749 ? null : (
        <button
          onClick={handleNextPage}
          className="transition hover:text-blue-500"
        >
          <AiOutlineRight />
        </button>
      )}
    </div>
  );
};

export default Pagination;
