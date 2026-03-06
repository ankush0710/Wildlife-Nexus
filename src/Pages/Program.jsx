import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import ProgramCard from "../Components/ProgramCard";
import Pagination from "../Components/Pagination";
import { Link } from "react-router-dom";
import { FetchProgramData } from "../redux/action/action";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Program = () => {
  const dispatch = useDispatch();
  const ProgramData = useSelector((state) => state.ProgramData);
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage, setCardsPerPage] = useState(2);

  //pagination logic
  const lastIndex = currentPage * cardsPerPage;
  const startIndex = lastIndex - cardsPerPage;
  const currentNumber = ProgramData.slice(startIndex, lastIndex);

  //disppatch the funtion and render the data
  useEffect(() => {
    dispatch(FetchProgramData());
  }, [dispatch]);

  // if there's no data yet, we can render a simple message or spinner
  if (!ProgramData || ProgramData.length === 0) {
    return (
      <div className="w-full my-10 text-center">
        <p className="font-body text-lg">Loading programs...</p>
      </div>
    );
  }
  //else part
  return (
    <>
      <div className="w-full my-10">
        <h1 className="font-heading text-3xl font-bold text-center pb-10">
          Our Programs
        </h1>
        <div className="grid grid-cols-1 gap-4">
          {currentNumber.map((data) => (
            <ProgramCard key={data.id}>
              <div
                id="card-image"
                className="relative w-full h-70 md:h-50 md:w-xl"
              >
                <img
                  src={data.imageUrl}
                  alt="image"
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute inset-0 rounded-lg bg-black z-10 opacity-50 hover:opacity-0"></div>
              </div>

              {/* heading and tthe main description about the project  */}
              <div id="description" className="space-y-3 md:pt-5">
                <h1 className="font-heading font-bold text-2xl">
                  {data.programName}
                </h1>
                <p className="font-body text-sm">{data.description}</p>
              </div>

              {/* button to see full detailed article of the respective project  */}
              <Link to={`/Program/${data.id}`} className="pb-10 mx-3 my-auto">
                  <button
                    type="submit"
                    className="text-[#8A7650] font-semibold font-body bg-transparent border-2 border-[#8A7650] px-6 py-2 rounded-full group hover:text-[#562F00] hover:bg-[#8A7650] hover:border-2 hover:border-[#562F00] hover:duration-600"
                  >
                    <p className="text-nowrap">
                      View Details
                      <span>
                        <FontAwesomeIcon
                          icon="fa-solid fa-arrow-down"
                          className="ps-5 group-hover:translate-y-1 transition duration-300"
                        />
                      </span>
                    </p>
                  </button>
              </Link>
            </ProgramCard>
          ))}
          <Pagination
            totalPages={ProgramData.length}
            cardsPerPage={cardsPerPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
    </>
  );
};

export default Program;
