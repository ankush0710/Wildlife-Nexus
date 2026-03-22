import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const PrgramDetails = () => {
  const { id } = useParams();
  const ProgramData = useSelector((state) => state.ProgramData);

  const ProgramDetails = ProgramData.find((data) => data.id === Number(id));

  if (!ProgramDetails || ProgramData.length === 0) {
    return (
      <div className="w-full my-10 text-center">
        <p className="font-body text-2xl text-red-500">
          Oops Something Went Wrong...
        </p>
      </div>
    );
  }

  return (
    <>
      <div id="container" className="min-h-screen mx-3">

        <Link to="/Program">
            <button
              className="flex justify-center items-center gap-2 cursor-pointer"
            >
              <FontAwesomeIcon
                icon="fa-solid fa-hand-point-left"
                className="text-2xl text-[#44A194]"
              />
              <span className="font-heading font-semibold text-2xl text-[#44A194]">
                Back
              </span>
            </button>
        </Link>
        {/* header section */}
        <section id="heading">
          <div id="heading" className="space-y-3 pt-10 pb-5">
          <h1 className="font-heading text-black text-3xl font-bold text-center md:text-5xl">
            {ProgramDetails.programName}
          </h1>
          <p className="font-heading text-black text-xl font-semibold pt-5 md:text-center">
            Launced by:-
            <span className="font-body text-black ps-3 tracking-wider text-lg">
              {ProgramDetails.govermentAgency}
            </span>
          </p>
          <p className="font-heading text-black tracking-wider text-xl font-semibold md:text-center">
            Country:-
            <span className="font-body text-black ps-3 text-lg">
              {ProgramDetails.country}
            </span>
          </p>
        </div>
        </section>

        <div className="border-b-2 border-gray-400 my-5 lg:hidden"></div>

        <div id="sub_conatainer" className="lg:mx-3 lg:my-10 lg:flex gap-20">
          {/* image and others details  */}
         <section id="image_and_details">
            <div
              id="image"
              className="w-full h-70 md:h-50 lg:w-lg md:h-96 md:shadow-xl"
            >
              <img
                src={ProgramDetails.imageUrl}
                alt="image"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="space-y-2 mt-7">
              <p className="font-body text-lg font-semibold">
                Launched year of the Program:-
                <span className="font-medium ps-2">
                  {ProgramDetails.yearLaunched}
                </span>
              </p>
              <p className="font-body text-lg font-semibold">
                Duration of the Program:-
                <span className="font-medium ps-2">
                  {ProgramDetails.duration}
                </span>
              </p>
              <p className="font-body text-lg font-semibold">
                Funding in (USD):-
                <span className="font-medium ps-2">
                  {ProgramDetails.funding}
                </span>
              </p>
              <p className="font-body text-lg font-semibold">
                Target species:-
                <span className="font-medium ps-2">
                  ({ProgramDetails.targetSpecies})
                </span>
              </p>
              <p className="font-body text-lg font-semibold">
                Current status of the Program:-
                <span className="font-medium ps-2">
                  {ProgramDetails.currentStatus}
                </span>
              </p>
            </div>
         </section>

          {/* border line between image and description  */}
          <div className="border-r-2 border-gray-400"></div>

          {/* main description section*/}
          <section id="description">
            <div className="my-5">
            <p className="font-body text-lg font-semibold">
              Description:-
              <span className="font-body font-medium ps-2">
                {ProgramDetails.description}
              </span>
            </p>
          </div>
          </section>
        </div>

        {/* object and goals section */}
        <section id="objective">
          <div className="mt-10 mb-5">
          <h1 className="font-heading text-2xl pb-5 font-bold text-center">
            Objective and Goals
          </h1>
          <p className="font-body text-lg font-bold text-center text-gray-500">
            <FontAwesomeIcon
              icon="fa-solid fa-quote-right"
              className="ps-3 pb-1 rotate-y-180"
            />
            {ProgramDetails.objectivesAndGoals}
            <FontAwesomeIcon
              icon="fa-solid fa-quote-right"
              className="ps-3 pb-1"
            />
          </p>
        </div>
        </section>
      </div>
    </>
  );
};

export default PrgramDetails;
