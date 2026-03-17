import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Carausal = ({ carousalData, current }) => {
  return (
    <>
      <div className="overflow-hidden relative w-full">
        <div
          className={`flex transition-transform ease-in-out duration-500`}
          style={{
            transform: `translateX(-${current * 100}%)`,
          }}
        >
          {carousalData.map((d) => {
            return (
              <>
                <div
                  key={d.id}
                  className="w-full flex-shrink-0 relative h-[320px] sm:h-[500px] md:h-[450px] lg:h-[550px]"
                >
                  <img
                    src={d.image}
                    alt="image"
                    className="w-full h-full object-cover"
                  />
                  <div className="bg-black absolute inset-0 opacity-50"></div>
                  <div
                    id="card"
                    className="absolute bottom-10 left-80 transform-all sm:-translate-x-1/2 w-[90%] h-auto sm:w-[80%] md:w-[60%] md:bottom-15 md:left-60 lg:w-[450px] bg-[#EBF4F6] p-4 md:p-5 rounded-lg shadow-xl border border-gray-300"
                  >
                    <p className="font-body text-sm text-gray-600 py-2 md:text-base md:text-center">
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
                    <p className="text-gray-500 font-body font-semibold text-lg text-right mt-4">
                      ~ {d.name}
                    </p>
                    <p className="text-gray-500 font-body font-semibold text-sm text-right">
                      - {d.position}
                    </p>
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
