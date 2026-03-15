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
      <div className="absolute top-0 h-full w-full flex justify-between items-center text-black px-5">
        <button onClick={prevSlide} className="text-xl md:text-2xl">
          <FontAwesomeIcon icon="fa-solid fa-angle-left" />
        </button>
        <button onClick={nextSlide} className="text-xl md:text-2xl">
          <FontAwesomeIcon icon="fa-solid fa-angle-right" />
        </button>
      </div>
    </>
  );
};

export default Pagination;
