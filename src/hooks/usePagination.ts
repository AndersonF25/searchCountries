import { useState } from "react";
import { CardProps } from "../types";

export const usePagination = (items: CardProps[], itemsPerPage: number) => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const totalPages = Math.ceil(items?.length / itemsPerPage);
  const currentItems = items.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const changeCurrentPage = (n: number) => {
    if (n >= 1 && n <= totalPages) {
      setCurrentPage(n);
    }
  };

  return {
    currentItems,
    currentPage,
    totalPages,
    nextPage,
    prevPage,
    changeCurrentPage,
  };
};
