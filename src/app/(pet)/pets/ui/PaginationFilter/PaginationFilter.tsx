"use client";
import Image from "next/image";

type Props = {
  setCurrentPage: (pageNumber: number) => void;
  currentPage: number;
  maxPage: number;
};

export default function PaginationFilter({
  setCurrentPage,
  currentPage,
  maxPage,
}: Props) {
  console.log(maxPage, currentPage);
  
  const handleClicNext = () => {
    if (currentPage < maxPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleClicPrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <section className=" flex gap-x-2 items-center">
      <button onClick={handleClicPrev}>
        <Image
          src={"/arrowLeftPagination.svg"}
          width={13}
          height={24}
          alt={"flecha izquierda del paginado"}
        />
      </button>
      <div className=" border border-violetGrow-700 w-10 px-1">
        {currentPage}
      </div>
      <p>De {maxPage}</p>
      <button onClick={handleClicNext}>
        <Image
          src={"/ArrowRightPagination.svg"}
          width={13}
          height={24}
          alt={"flecha izquierda del paginado"}
        />
      </button>
    </section>
  );
}
