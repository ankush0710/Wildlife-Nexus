import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Carausal = ({ carousalData, current }) => {
  return (
    <>
      <div className="overflow-hidden relative w-full">
        {/* slides  */}
        <div
          className={`flex transition-transform ease-in-out duration-700`}
          style={{
            transform: `translateX(-${current * 100}%)`,
          }}
        >
          {carousalData.map((d) => {
            return (
              <>
                <div
                  key={d.id}
                  className="w-full flex-shrink-0 relative h-[300px] h-[500px] lg:h-[600px]"
                >
                  {/* Background Image */}
                  <img
                    src={d.image}
                    alt="slide"
                    className="w-full h-full object-cover"
                  />

                  {/* Gradient Overlay (better than black box) */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>

                  {/* Content Card */}
                  <div className="absolute bottom-6 sm:bottom-10 left-1/2 md:left-1/3 -translate-x-1/2 w-[92%] sm:w-[80%] md:w-[65%] lg:w-[500px]">
                    <div className="backdrop-blur-md bg-white/80 p-4 sm:p-6 rounded-2xl shadow-2xl border border-white/30 transition-all duration-500 hover:scale-[1.02]">
                      {/* Quote */}
                      <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed text-center">
                        <FontAwesomeIcon
                          icon="fa-solid fa-quote-left"
                          className="me-2 text-blue-500"
                        />
                        {d.message}
                        <FontAwesomeIcon
                          icon="fa-solid fa-quote-right"
                          className="ms-2 text-blue-500"
                        />
                      </p>

                      {/* Name */}
                      <p className="text-gray-900 font-semibold text-base sm:text-lg text-right mt-4">
                        ~ {d.name}
                      </p>

                      {/* Position */}
                      <p className="text-gray-600 text-xs sm:text-sm text-right">
                        {d.position}
                      </p>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Carausal;
