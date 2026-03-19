import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Pagination = ({ TotalPage, currentPage, setCurrentPage }) => {
  const selectPageHandle = (selected) => {
    if (selected >= 1 && selected !== currentPage && selected <= TotalPage) {
      setCurrentPage(selected);
    }
  };

  return (
    <>
      {/* Pagination based on component length  */}
      {TotalPage > 0 && (
        <div
          id="pagination"
          className="flex justify-center flex-nowrap text-xl  mt-5 space-x-5 font-heading font-semibold mb-10"
        >
          <span>
            <FontAwesomeIcon
              icon="fa-solid fa-arrow-left"
              className={
                currentPage > 1
                  ? "text-gray-400 hover:text-black hover:transform hover:scale-130 hover:duration-300 cursor-pointer"
                  : "opacity-0"
              }
              onClick={() => selectPageHandle(currentPage - 1)}
            />
          </span>
          <span className="text-gray-600 transform translate scale-140 ease-in-out duration-300">
            {currentPage} / {TotalPage}
          </span>
          <span>
            <FontAwesomeIcon
              icon="fa-solid fa-arrow-right"
              className={
                currentPage !== TotalPage
                  ? "text-gray-400 hover:text-black hover:transform hover:scale-130 hover:duration-300 cursor-pointer"
                  : "opacity-0"
              }
              onClick={() => selectPageHandle(currentPage + 1)}
            />
          </span>
        </div>
      )}
    </>
  );
};

export default Pagination;
