import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FetchGovProgramData, FetchTeamData } from "../redux/action/action";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import JoinTeamCard from "../Components/JoinTeamCard";
import Pagination from "../Components/Pagination";
import ProgramCard from "../Components/ProgramCard";
import Chart from "../Components/Chart";
import bgImage from "../assets/Giant-panda.webp";

const JoinTeam = () => {
  const dispatch = useDispatch();
  const govProgram = useSelector((state) => state.GovProgram);
  const teamData = useSelector((state) => state.TeamData);
  const rescueData = useSelector((state) => state.RescueData);
  const celebrityData = useSelector((state) => state.CelebrityData);
  const volunteerData = useSelector((state)=>state.VolunteerData)
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
      <h1 className="my-5 text-3xl font-heading text-center font-bold text-gray-500 md:text-5xl">
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
      <h1 className="my-5 mx-3 text-3xl font-heading text-center font-bold text-gray-500 md:text-5xl">
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
      <h1 className="mb-5 mx-3 text-3xl font-heading text-center font-bold text-gray-500 md:text-5xl">
        Our Work
      </h1>
      <p className="font-body text-xl text-center font-semibol px-3">
        This is how we contribute towards wildlife conservation by rescued many
        different species in past 6 years.
      </p>
      <div id="chart" className="w-full h-[500px] my-10 ">
        <Chart data={rescueData} />
      </div>

      {/* line for seperation  */}
      <div className="border-1 border-gray-400 mb-5 mx-3"></div>

      {/* This section display those celebrities who connect with us */}
      <h1 className="my-5 mx-3 text-3xl font-heading text-center font-bold text-gray-500 md:text-5xl">
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
                    <p className="font-heading text-xl font-bold text-center pb-10 underline text-gray-700">
                      What {cd.Name} Takes an action towards Wildlife
                      Conservation with Us
                    </p>
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

      {/* line for seperation  */}
      <div className="border-1 border-gray-400 mb-5 mx-3"></div>

      {/* This section contains the form and other information */}
      <div className="mx-3">
        <h1 className="my-5 mx-3 text-2xl font-heading text-center font-bold text-gray-500 md:text-5xl">
          Now it's Your turn to take a first step and contribute to Wildlife
          Conservation
        </h1>
        <p className="font-body text-lg text-gray-600 py-2 text-center">
          <FontAwesomeIcon
            icon="fa-solid fa-quote-right"
            className="ps-3 pb-1 rotate-y-180"
          />
          If you have any idea, any innovation or want to contribute to our
          country or our ecosystem, It's a great oppertunity to join our team
          and work with us.
          <FontAwesomeIcon
            icon="fa-solid fa-quote-right"
            className="ps-3 pb-1"
          />
        </p>
      </div>
      <div id="main-container" className="px-auto w-full h-auto lg:flex">
        {/* address of offices in INDIA and LA  */}
        <div
          id="cards-section"
          className="flex flex-col gap-8 mx-3 my-5 flex-1"
        >
          {
            volunteerData.map((vd)=>{
              return(
                <>
                <div
            id={vd.id}
            style={{ backgroundImage: `url('${vd.bgImage}')` }}
            className="relative w-full h-48  rounded-lg shadow-lg p-4 bg-cover bg-center"
          >
            <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
            <p className="absolute top-1/2 left-10 font-body text-lg text-white font-semibold">
              <span className="text-2xl">{vd.volunteer}+ </span> Volunteers works in India
            </p>
          </div>
                </>
              )
            })
          }
        </div>

        {/* form to where user enter thier details  */}
        <div id="form">
          {/* contact form for contact details  */}
          <Formik>
            <div id="contact-form" className="relative mt-10 md:flex-1">
              <h1 className="font-heading text-3xl font-bold text-center">
                Connect with Us
              </h1>
              <div
                id="contact-form"
                className="bg-[#ECE7D1] rounded-xl flex flex-col py-15 px-10 mx-3 my-10 relative md:w-auto lg:w-2xl md:shadow-lg"
              >
                <Form>
                  <div className="md:flex md:gap-4">
                    {/* input box for first name  */}
                    <div className="relative z-0 w-full mb-5 mt-3 group md:flex-1">
                      <Field
                        type="text"
                        name="firstName"
                        id="firstName"
                        className="block py-2.5 px-0 w-full text-md bg-transparent border-0 border-b-2 border-default-medium border-[#8A7650] appearance-none focus:outline-none focus:ring-0 focus:border-[#562F00] peer"
                        placeholder=""
                      />
                      <ErrorMessage
                        name="firstName"
                        component="div"
                        className="text-red-500 text-sm mt-1"
                      />
                      <label
                        for="firstName"
                        className="absolute font-body text-md text-[#8A7650] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                      >
                        First Name
                      </label>
                    </div>

                    {/* input box for last name  */}
                    <div className="relative z-0 w-full mt-3 group md:flex-1">
                      <Field
                        type="text"
                        name="lastName"
                        id="lastName"
                        className="block py-2.5 px-0 w-full text-md bg-transparent border-0 border-b-2 border-default-medium border-[#8A7650] appearance-none focus:outline-none focus:ring-0 focus:border-[#562F00] peer"
                        placeholder=""
                      />
                      <ErrorMessage
                        name="lastName"
                        component="div"
                        className="text-red-500 text-sm mt-1"
                      />
                      <label
                        for="lastName"
                        className="absolute font-body text-md text-[#8A7650] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                      >
                        Last Name
                      </label>
                    </div>
                  </div>

                  {/* input box for email  */}
                  <div className="relative z-0 w-full mb-5 mt-3 group">
                    <Field
                      type="email"
                      name="email"
                      id="email"
                      className="block py-2.5 px-0 w-full text-md bg-transparent border-0 border-b-2 border-default-medium border-[#8A7650] appearance-none focus:outline-none focus:ring-0 focus:border-[#562F00] peer"
                      placeholder=""
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                    <label
                      for="email"
                      className="absolute font-body text-md text-[#8A7650] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                    >
                      Email
                    </label>
                  </div>

                  {/* input box for contact number  */}
                  <div className="relative z-0 w-full mb-5 mt-3 group">
                    <Field
                      type="number"
                      name="contactNumber"
                      id="contactNumber"
                      className="block py-2.5 px-0 w-full text-md bg-transparent border-0 border-b-2 border-default-medium border-[#8A7650] appearance-none focus:outline-none focus:ring-0 focus:border-[#562F00] peer"
                      placeholder=""
                    />
                    <ErrorMessage
                      name="contactNumber"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                    <label
                      for="contactNumber"
                      className="absolute font-body text-md text-[#8A7650] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                    >
                      Contact Number
                    </label>
                  </div>

                  {/* message for query  */}
                  <div className="relative z-0 w-full mb-5 mt-3 group">
                    <Field
                      as="textarea"
                      id="message"
                      name="message"
                      rows="4"
                      className="bg-neutral-secondary-medium border-2 border-default-medium border-[#8A7650] text-md text-[#562F00] text-semibold trounded-base focus:ring-brand focus:outline-none focus:border-[#562F00] block w-full p-3.5 shadow-xs placeholder:text-body"
                      placeholder="Your Query for us ...."
                    />
                    <ErrorMessage
                      name="message"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>

                  {/* checkbox for terms and condition  */}
                  <div className="flex items-start mb-4 mt-3">
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      value=""
                      className="w-8 h-8 border-2 border-[#562F00] rounded-xs"
                    />
                    <label
                      for="default-checkbox"
                      className="font-body select-none ms-2 text-sm font-medium text-[#562F00]"
                    >
                      By submitting this form, I agree to the collection and use
                      my personla data as per the privacy Policy for marketing
                      purpose.
                    </label>
                  </div>

                  {/* form submitt button  */}
                  <div className="absolute right-0 px-10">
                    <button
                      type="submit"
                      className="text-[#8A7650] font-semibold font-body bg-transparent border-2 border-[#8A7650] px-8 py-2 rounded-full hover:text-[#562F00] hover:bg-[#8A7650] hover:border-2 hover:border-[#562F00] hover:duration-600"
                    >
                      Submit
                    </button>
                  </div>
                </Form>
              </div>
            </div>
          </Formik>
        </div>
      </div>
    </>
  );
};

export default JoinTeam;

// https://sheet2api.com/v1/LZ3hk9ALR3i2/goverment_initiatives
