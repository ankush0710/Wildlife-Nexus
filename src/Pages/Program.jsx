import React, { useEffect, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProgramCard from "../Components/ProgramCard";
import { Link } from "react-router-dom";
import { FetchProgramData } from "../redux/action/action";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Pagination from "../Components/Pagination";
import ProgramBgImage from "../assets/program-bg-image.jpg";

const Program = () => {
  const dispatch = useDispatch();
  const ProgramData = useSelector((state) => state.ProgramData);
  const [currentPage, setCurrentPage] = useState(1);
  const [cardPerPage, setCardPerPage] = useState(3);

  //pagination logic
  const currentCard = useMemo(() => {
    const lastIndex = currentPage * cardPerPage;
    const startIndex = lastIndex - cardPerPage;
    return ProgramData.slice(startIndex, lastIndex);
  }, [currentPage, cardPerPage, ProgramData]);

  const TotalPage = Math.ceil(ProgramData.length / cardPerPage);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setCardPerPage(3);
      else if (window.innerWidth >= 768) setCardPerPage(2);
      else setCardPerPage(3);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (currentPage > TotalPage) setCurrentPage(1);
  }, [ProgramData]);

  //disppatch the funtion and render the data
  useEffect(() => {
    dispatch(FetchProgramData());
  }, [dispatch]);

  // if there's no data yet, we can render a simple message or spinner
  if (!ProgramData || ProgramData.length === 0) {
    return (
      <div className="w-full my-10 text-center">
        <p className="font-body text-lg">
          {" "}
          Loading Programs please wait for few sec...
        </p>
      </div>
    );
  }
  //else part
  return (
    <>
      {/*bg image and intro of the page */}
      <section id="bg-image">
        <div className="w-full min-h-[80vh]">
          <div
            id="banner-image"
            style={{ backgroundImage: `url('${ProgramBgImage}')` }}
            className="absolute top-0 w-full min-h-screen z-0 overflow-hidden bg-no-repeat bg-cover bg-center flex items-center justify-center"
          >
            <div className="bg-black absolute inset-0 opacity-50"></div>
            <div className="absolute z-10 inset-0 top-1/2 space-y-4">
              <h1 className="text-4xl text-center text-[#44A194] font-heading font-bold md:text-7xl">
                Our Programs
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* quote section for some quotes  */}
      <section id="quote-section">
        <div className="my-10 border-t border-b border-gray-500 py-3 mx-10">
          <p className="text-[#406093] text-lg font-semibold leading-relaxed text-center md:text-2xl">
            <FontAwesomeIcon
              icon="fa-solid fa-quote-left"
              className="me-2 mb-2 text-blue-500 text-lg"
            />
            No water, no life. No blue, no green.
            <FontAwesomeIcon
              icon="fa-solid fa-quote-right"
              className="ms-2 mb-2 text-blue-500 text-lg"
            />
          </p>
        </div>
      </section>

      {/* main content of the page where all cards and card details were dsplayed  */}
      <section id="main-content">
        <div className="w-full mb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
            {currentCard.map((data) => (
              <ProgramCard key={data.id}>
                <div
                  id="card-image"
                  className="relative w-full h-78 flex-shrink-0"
                >
                  <img
                    src={data.imageUrl}
                    alt="image"
                    className="w-full h-full object-coverx` rounded-lg"
                  />
                  <div className="absolute inset-0 rounded-lg bg-black opacity-50 hover:opacity-0"></div>
                </div>

                {/* heading and tthe main description about the project  */}
                <div
                  id="description"
                  className="flex flex-col gap-6 pt-4 flex-grow"
                >
                  <h1 className="font-heading text-center font-bold text-xl">
                    {data.programName}
                  </h1>
                  <p className="font-body text-md line-clam-3">
                    <span className="font-bold text-lg pe-2 text-black">
                      Description:
                    </span>
                    {data.description.slice(0, 200)}
                  </p>
                </div>

                {/* button to see full detailed article of the respective project  */}
                <div className="flex justify-center mt-8 md:justify-end">
                  <Link to={`/Program/${data.id}`}>
                    <button
                      type="submit"
                      className="text-[#8A7650] font-semibold font-body bg-transparent border-2 border-[#8A7650] px-6 py-2 rounded-full cursor-pointer group hover:text-[#562F00] hover:bg-[#8A7650] hover:border-2 hover:border-[#562F00] hover:duration-600"
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
                </div>
              </ProgramCard>
            ))}
          </div>
        </div>
      </section>

      {/* number and next, previous arrow  */}
      <Pagination
        TotalPage={TotalPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
};

export default Program;
