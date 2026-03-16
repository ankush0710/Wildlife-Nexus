import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Pagination = ({ totalCards, current, setCurrent }) => {

  // function for go to previous slide
  const prevSlide = () => {
    if (current === 0) {
      setCurrent(totalCards - 1);
    }
    else{
      setCurrent(current - 1)
    }
  };

  // function for go to next slide
  const nextSlide = () => {
    if (current === totalCards - 1) {
      setCurrent(0);
    }
    else{
      setCurrent(current + 1);
    }
  };

  return (
    <>
      <div className="absolute inset-0 h-full w-full flex justify-between items-center text-black px-5">
        <button onClick={prevSlide} className="absolute left-4 top-1/2 text-xl md:text-4xl">
          <FontAwesomeIcon icon="fa-solid fa-angle-left" />
        </button>
        <button onClick={nextSlide} className="absolute right-4 top-1/2 text-xl md:text-4xl">
          <FontAwesomeIcon icon="fa-solid fa-angle-right" />
        </button>
      </div>
    </>
  );
};

export default Pagination;
