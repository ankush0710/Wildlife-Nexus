import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FetchGovProgramData, FetchTeamData } from "../redux/action/action";
import JoinTeamCard from "../Components/JoinTeamCard";
import Pagination from "../Components/Pagination";
import ProgramCard from "../Components/ProgramCard";
import Chart from "../Components/Chart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import bgImage from "../assets/Giant-panda.webp";

const JoinTeam = () => {
  const dispatch = useDispatch();
  const govProgram = useSelector((state) => state.GovProgram);
  const teamData = useSelector((state) => state.TeamData);
  const rescueData = useSelector((state) => state.RescueData);
  const celebrityData = useSelector((state) => state.CelebrityData);
  const [current, setCurrent] = useState(0);
  const [currentTeamCard, setCurrentTeamCard] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(1);

  //disppatch the funtion and render the goverment program data
  useEffect(() => {
    dispatch(FetchGovProgramData());
  }, [dispatch]);

  //dispatch the funtion and render the team-mates data
  useEffect(() => {
    dispatch(FetchTeamData());
  }, [dispatch]);

  //displaying cards in different device size
  useEffect(() => {
    const handleCard = () => {
      if (window.innerWidth >= 1024) {
        setCardsPerView(3);
      } else if (window.innerWidth >= 768) {
        setCardsPerView(2);
      } else {
        setCardsPerView(1);
      }
    };

    handleCard();
    window.addEventListener("resize", handleCard);

    return () => window.removeEventListener("resize", handleCard);
  }, []);

  const totalCards = Math.ceil(govProgram.length / cardsPerView);
  const teamCards = Math.ceil(teamData.length / cardsPerView);

  return (
    <>
      {/* bg -image and intro of page  */}
      <div id="bg-image" className="w-full min-h-[80vh]">
        <div
          id="banner-image"
          style={{ backgroundImage: `url('${bgImage}')` }}
          className="absolute top-0 w-full min-h-screen z-0 overflow-hidden bg-no-repeat bg-cover bg-center flex items-center justify-center"
        >
          <div className="bg-black absolute inset-0 opacity-50"></div>
          <div className="absolute z-10 inset-0 top-1/2 space-y-4">
            <h1 className="text-4xl text-center text-[#44A194] font-heading font-bold md:text-7xl">
              Join Our Team
            </h1>
          </div>
        </div>
      </div>

      {/* line for seperation  */}
      <div className="border-1 border-gray-400 my-5 mx-3"></div>

      {/* carausal section for goverment initiatives and Program  */}
      <h1 className="mb-5 text-3xl font-heading text-center font-bold text-gray-500 md:text-5xl">
        Goverment Initiatives
      </h1>
      <JoinTeamCard>
        <div
          className={`flex gap-4 transition-transform ease-in-out duration-400`}
          style={{
            transform: `translateX(-${current * 100}%)`,
          }}
        >
          {govProgram.map((gp) => {
            return (
              <>
                <div
                  key={gp.id}
                  className="relative w-full md:w-1/2 lg:w-1/3 flex-shrink-0 min-w-0 h-auto mb-10 border-1 border-gray-400 rounded-xl"
                >
                  <div id="crad-image" className="w-full h-75 rounded-t-xl">
                    <img
                      src={gp.imageUrl}
                      alt="card-image"
                      className="w-full h-full object-cover object-center rounded-t-xl"
                    />
                  </div>
                  <div className="border-1 border-gray-400 mx-10 my-5 "></div>
                  <div id="card-content" className="p-5 space-y-3">
                    <div className="flex justify-between">
                      <p className="font-heading font-semibold text-md text-black">
                        Project Name:{" "}
                        <span className="font-body text-md text-gray-600">
                          {gp.programName}
                        </span>
                      </p>
                      <p className="font-heading font-semibold text-md text-black">
                        Country:{" "}
                        <span className="font-body text-md text-gray-600">
                          {gp.country}
                        </span>
                      </p>
                    </div>
                    <p className="font-heading font-semibold text-md text-black">
                      Launched Year:{" "}
                      <span className="font-body text-md text-gray-600">
                        {gp.year}
                      </span>
                    </p>
                    <p className="font-heading font-semibold text-md text-black">
                      About:{" "}
                      <span className="font-body text-md text-gray-600">
                        {gp.description}
                      </span>
                      <Link
                        to="/Program"
                        className="ps-2 text-blue-500 text-md font-light hover:cursor-pointer hover:text-blue-800"
                      >
                        Read More...
                      </Link>
                    </p>

                    <p className="font-heading font-semibold text-md text-black">
                      Department:{" "}
                      <span className="font-body text-md text-gray-600">
                        {gp.goverment}
                      </span>
                    </p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
        <Pagination
          setCurrent={setCurrent}
          current={current}
          totalCards={totalCards}
        />
      </JoinTeamCard>

      {/* line for seperation  */}
      <div className="border-1 border-gray-400 mb-5 mx-3"></div>

      {/* carausal section for Meet Our Team  */}
      <h1 className="mb-5 text-3xl font-heading text-center font-bold text-gray-500 md:text-5xl">
        Meet Our Team Leaders
      </h1>
      <JoinTeamCard>
        <div
          className={`flex gap-4 transition-transform ease-in-out duration-400`}
          style={{
            transform: `translateX(-${currentTeamCard * 100}%)`,
          }}
        >
          {teamData.map((td) => {
            return (
              <>
                <div
                  key={td.id}
                  className="relative w-full md:w-1/2 lg:w-1/3 flex-shrink-0 min-w-0 h-auto mb-10 border-1 border-gray-400 rounded-xl"
                >
                  <div id="crad-image" className="w-full h-80 rounded-t-xl">
                    <img
                      src={td.imageUrl}
                      alt="card-image"
                      className="w-full h-full object-cover object-center rounded-t-xl"
                    />
                  </div>
                  <div className="border-1 border-gray-400 mx-10 my-5"></div>
                  <div id="card-content" className="p-5 space-y-3">
                    <div className="flex justify-between">
                      <p className="font-heading font-semibold text-md text-black">
                        Project Name: {""}
                        <span className="font-body text-md text-gray-600">
                          {td.Name}
                        </span>
                      </p>
                    </div>

                    <p className="font-heading font-semibold text-md text-black">
                      Year Of experience:{" "}
                      <span className="font-body text-md text-gray-600">
                        {td.experience}+ years
                      </span>
                    </p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
        <Pagination
          setCurrent={setCurrentTeamCard}
          current={currentTeamCard}
          totalCards={teamCards}
        />
      </JoinTeamCard>

      {/* line for seperation  */}
      <div className="border-1 border-gray-400 mb-5 mx-3"></div>

      {/* Our Work section which highlight the work in form of charts */}
      <div id="work-section">
        <h1 className="mb-5 text-3xl font-heading text-center font-bold text-gray-500 md:text-5xl">
          Our Work
        </h1>
        <div id="chart" className="">
          <Chart data={rescueData} />
        </div>
      </div>

      {/* line for seperation  */}
      <div className="border-1 border-gray-400 mb-5 mx-3"></div>

      {/* Our Work section which highlight the work in form of charts */}
      <div id="celebrity-section">
        <h1 className="mb-5 text-3xl font-heading text-center font-bold text-gray-500 md:text-5xl">
          Some Famous Personality also Work With Us
        </h1>
        <div id="persnality" className="mb-10">
          {celebrityData.map((cd) => {
            return (
              <>
                <ProgramCard key={cd.id}>
                  <div className="md:flex gap-5 items-center">
                    <div id="image" className="w-full md:min-w-md lg:min-w-xl">
                      <img
                        src={cd.imageUrl}
                        alt="profile-image"
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                    <div id="main-content" className="my-5 px-3 lg:px-5">
                      <p className="font-heading text-xl font-bold text-center pb-10 underline text-gray-700">What Our Celebrities Believes about Wildlife Conservation</p>
                      <p className="font-body text-md text-gray-600 py-2 md:text-center">
                      <FontAwesomeIcon
                        icon="fa-solid fa-quote-right"
                        className="ps-3 pb-1 rotate-y-180"
                      />
                      {cd.Work}
                      <FontAwesomeIcon
                        icon="fa-solid fa-quote-right"
                        className="ps-3 pb-1"
                      />
                    </p>
                    <p className="text-gray-500 font-body font-semibold text-lg text-right pt-10">
                      ~ {cd.Name}
                    </p>
                    <p className="text-gray-500  font-body font-semibold text-sm text-end pt-1">
                      - {cd.Position}
                    </p>
                    </div>
                  </div>
                </ProgramCard>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default JoinTeam;

// https://sheet2api.com/v1/LZ3hk9ALR3i2/goverment_initiatives
