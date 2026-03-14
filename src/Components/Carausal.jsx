import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Carausal = ({ carousalData }) => {
  const [current, setCurrent] = useState(0);

  // function for go to previous slide
  const prevSlide = () => {
    if (current == 0) {
      setCurrent(carousalData.length - 1);
    } else {
      setCurrent(current - 1);
    }
  };

  // function for go to next slide
  const nextSlide = () => {
    if (current == carousalData.length - 1) {
      setCurrent(0);
    } else {
      setCurrent(current + 1);
    }
  };
  return (
    <>
      <div className="overflow-hidden relative w-full">
        <div
          className={`flex transition-transform ease-in-out duration-400`}
          style={{
            transform: `translateX(-${current * 100}%)`,
          }}
        >
          {carousalData.map((d) => {
            return (
              <>
                <div
                  key={d.id}
                  className="w-full flex-shrink-0 relative h-[320px] sm:h-[380px] md:h-[450px] lg:h-[550px]"
                >
                  <img
                    src={d.image}
                    alt="image"
                    className="w-full h-full object-cover"
                  />
                  <div className="bg-black absolute inset-0 opacity-50"></div>
                  <div
                    id="card"
                    className="absolute top-50 w-full md:w-[65%] md:top-2 md:bottom-6 md:-translate-x-50 lg:w-[420px] bg-[#EBF4F6] p-4 md:p-5 md:left-80 rounded-lg shadow-xl border border-gray-300"
                  >
                    <p className="font-body text-md text-gray-600 py-2 md:text-center">
                      <FontAwesomeIcon
                        icon="fa-solid fa-quote-right"
                        className="ps-3 pb-1 rotate-y-180"
                      />
                      {d.message}
                      <FontAwesomeIcon
                        icon="fa-solid fa-quote-right"
                        className="ps-3 pb-1"
                      />
                    </p>
                    <p className="text-gray-500 font-body font-semibold text-lg text-right pt-10">
                      ~ {d.name}
                    </p>
                    <p className="text-gray-500  font-body font-semibold text-sm text-end pt-1">
                      - {d.position}
                    </p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
        <div className="absolute top-0 h-full w-full flex justify-between items-center text-white px-5">
          <button onClick={prevSlide} className="text-xl">
            <FontAwesomeIcon icon="fa-solid fa-angle-left" />
          </button>
          <button onClick={nextSlide} className="text-xl hover:text-2xl">
            <FontAwesomeIcon icon="fa-solid fa-angle-right" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Carausal;
