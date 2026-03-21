import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FetchGovProgramData, FetchTeamData } from "../redux/action/action";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import JoinTeamCard from "../Components/JoinTeamCard";
import CaraousalPagination from "../Components/CaraousalPagination";
import ProgramCard from "../Components/ProgramCard";
import Chart from "../Components/Chart";
import joinTeamBgImage from "../assets/Giant-panda.webp";

const JoinTeam = () => {
  const dispatch = useDispatch();
  const govProgram = useSelector((state) => state.GovProgram);
  const teamData = useSelector((state) => state.TeamData);
  const rescueData = useSelector((state) => state.RescueData);
  const celebrityData = useSelector((state) => state.CelebrityData);
  const volunteerData = useSelector((state) => state.VolunteerData);
  const countryDocumentMap = useSelector((state) => state.countryDocumentMap);
  const [current, setCurrent] = useState(0);
  const [currentTeamCard, setCurrentTeamCard] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(1);
  const [isSubmit, setIsSubmit] = useState(false);

  // This method is used to capture the input field
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    contactNumber: ["", ""],
    country: "",
    document: null, 
    message: "",
  };

  // this method is for validate the inpit field and display error message
  const validate = (values) => {
    const errors = {};
    errors.contactNumber = [];

    if (!values.firstName) {
      errors.firstName = "* Please enter first name";
    }

    if (!values.lastName) {
      errors.lastName = "* Please enter last name";
    }

    if (!values.email) {
      errors.email = "* Please enter email";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Invalid email address";
    }

    if (!values.contactNumber[0]) {
      errors.contactNumber[0] = "* Please enter primary contact number";
    } else if (!/^\d{12}$/.test(values.contactNumber[0])) {
      errors.contactNumber[0] = "* Contact number should be atleast of 10 digits";
    }

    if (!values.contactNumber[1]) {
      errors.contactNumber[1] = "* Please enter secondary contact number";
    } else if (!/^\d{12}$/.test(values.contactNumber[1])) {
      errors.contactNumber[1] = "* Contact number should be atleast of 10 digits";
    }

    if (!values.message) {
      errors.message = "* Please enter your query for us";
    }

    // console.log("formik error:", contactDetails.errors);
    return errors;
  };

  // this method is to captured the input on click of a submit button
  const onSubmit = (values, { resetForm }) => {
    console.log("form data", values);
    setIsSubmit(true);
    resetForm();
  };

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
    <div className="overflow-x-hidden">
      <section id="bg-image">
        <div className="w-full min-h-[100vh]">
          <div
            id="banner-image"
            style={{ backgroundImage: `url('${joinTeamBgImage}')` }}
            className="absolute top-0 w-full min-h-screen z-0 overflow-hidden bg-no-repeat bg-cover bg-center flex items-center justify-center"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20"></div>

            <div className="absolute z-10 inset-0 top-1/2 space-y-4">
              <h1 className="text-4xl text-center text-[#44A194] font-heading font-bold md:text-7xl">
                Join Our Team
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* quote section for some quotes  */}
      <section id="quote-section">
        <div className="mb-10 border-t border-b border-gray-500 py-3 mx-10">
          <p className="text-[#8C5A3C] text-lg font-semibold leading-relaxed text-center md:text-2xl">
            <FontAwesomeIcon
              icon="fa-solid fa-quote-left"
              className="me-2 mb-2 text-blue-500 text-lg"
            />
            Our planet's alarm is going off, and it is time to wake up and take
            action!
            <FontAwesomeIcon
              icon="fa-solid fa-quote-right"
              className="ms-2 mb-2 text-blue-500 text-lg"
            />
          </p>
        </div>
      </section>

      {/* carausal section for goverment initiatives and Program  */}
      <section id="goverment-initiative">
        <h1 className="my-5 text-3xl font-heading text-center font-bold text-[#C44A3A] md:text-5xl">
          Goverment Initiatives
        </h1>
        <JoinTeamCard>
          <div
            className={`flex gap-4 transition-transform ease-in-out duration-400`}
            style={{
              transform: `translateX(-${current * 100}%)`,
            }}
          >
            {govProgram.map((gp) => (
              <div
                key={gp.id}
                className="relative w-full md:w-1/2 lg:w-1/3 flex-shrink-0 min-w-0 h-auto mb-10 border-1 border-gray-400 rounded-xl"
              >
                <div
                  id="crad-image"
                  className="relative w-full h-75 rounded-t-xl"
                >
                  <img
                    src={gp.imageUrl}
                    alt="card-image"
                    className="w-full h-full object-cover object-center rounded-t-xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20"></div>
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
            ))}
          </div>
          <CaraousalPagination
            setCurrent={setCurrent}
            current={current}
            totalCards={totalCards}
          />
        </JoinTeamCard>
      </section>

      {/* line for seperation  */}
      <div className="border-1 border-gray-400 mb-5 mx-3"></div>

      {/* carausal section for Meet Our Team  */}
      <section id="leaders-section">
        <h1 className="my-5 mx-3 text-3xl font-heading text-center font-bold text-[#406093] md:text-5xl">
          Meet Our Team Leaders
        </h1>
        <JoinTeamCard>
          <div
            className={`flex gap-4 transition-transform ease-in-out duration-400`}
            style={{
              transform: `translateX(-${currentTeamCard * 100}%)`,
            }}
          >
            {teamData.map((td) => (
              <div
                key={td.id}
                className="relative w-full md:w-1/2 lg:w-1/3 flex-shrink-0 min-w-0 h-auto mb-10 border border-gray-400 rounded-xl"
              >
                <div
                  id="crad-image"
                  className="relative w-full h-80 rounded-t-xl"
                >
                  <img
                    src={td.imageUrl}
                    alt="card-image"
                    className="w-full h-full object-cover object-center rounded-t-xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20"></div>
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
            ))}
          </div>
          <CaraousalPagination
            setCurrent={setCurrentTeamCard}
            current={currentTeamCard}
            totalCards={teamCards}
          />
        </JoinTeamCard>
      </section>

      {/* line for seperation  */}
      <div className="border-1 border-gray-400 mb-5 mx-3"></div>

      {/* Our Work section which highlight the work in form of charts */}
      <section id="chart-section">
        <h1 className="mb-5 mx-3 text-3xl font-heading text-center font-bold text-[#44A194] md:text-5xl">
          Our Work
        </h1>
        <p className="font-body text-xl text-center font-semibol px-3">
          This is how we contribute towards wildlife conservation by rescued
          many different species in past 6 years.
        </p>
        <div id="chart" className="w-full h-[500px] my-10 ">
          <Chart data={rescueData} />
        </div>
      </section>

      {/* line for seperation  */}
      <div className="border-1 border-gray-400 mb-5 mx-3"></div>

      {/* This section display those celebrities who connect with us */}
      <section id="celebrity-section">
        <h1 className="my-5 mx-3 text-3xl font-heading text-center font-bold text-[#406093] md:text-5xl">
          Some Famous Personality also Work With Us
        </h1>
        <div
          id="persnality"
          className="mb-10 mx-5 grid gap-4 grid-cols-1 md:grid-cols-2"
        >
          {celebrityData.map((cd) => (
            <ProgramCard key={cd.id}>
              <div
                id="card-image"
                className="relative w-full h-78 flex-shrink-0"
              >
                <img
                  src={cd.imageUrl}
                  alt="image"
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute inset-0 rounded-lg bg-black opacity-50 hover:opacity-0"></div>
              </div>

              {/* heading and tthe main description about the project  */}
              <div id="main-content" className="my-5 px-3 lg:px-5">
                <p className="font-heading text-xl font-bold text-center pb-10 underline text-gray-700">
                  What {cd.Name} Takes an action towards Wildlife Conservation
                  with Us
                </p>
                <p className="font-body text-md text-gray-700 py-2 md:text-center">
                  <FontAwesomeIcon
                    icon="fa-solid fa-quote-right"
                    className="ps-3 pb-1 rotate-y-180 text-blue-500"
                  />
                  {cd.Work}
                  <FontAwesomeIcon
                    icon="fa-solid fa-quote-right"
                    className="ps-3 pb-1 text-blue-500"
                  />
                </p>
                <p className="text-gray-500 font-body font-semibold text-lg text-right pt-10">
                  ~ {cd.Name}
                </p>
                <p className="text-gray-500  font-body font-semibold text-sm text-end pt-1">
                  - {cd.Position}
                </p>
              </div>
            </ProgramCard>
          ))}
        </div>
      </section>

      {/* line for seperation  */}
      <div className="border-1 border-gray-400 mb-5 mx-3"></div>

      {/* This section contains the form and other information */}
      <section id="-join-our-team-form">
        <div className="mx-3">
          <h1 className="my-5 mx-3 text-2xl font-heading text-center font-bold text-[#406093] md:text-5xl">
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
        <div
          id="main-container"
          className="w-full h-auto flex flex-col lg:flex-row gap-5"
        >
          {/* card for Volunteers  */}

          <div
            id="cards-section"
            className="w-full flex flex-col gap-6 m-5 lg:w-1/2 px-3"
          >
            {volunteerData.map((vd) => (
              <div
                id={vd.id}
                style={{ backgroundImage: `url('${vd.bgImage}')` }}
                className="relative w-72 h-48 rounded-lg shadow-lg bg-cover bg-center"
              >
                <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
                <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-body text-lg text-white font-semibold">
                  <span className="text-2xl">{vd.volunteer}+ </span>{" "}
                  {vd.country}
                </p>
              </div>
            ))}
          </div>

          {/* form to where user enter thier details  */}
          <div id="form" className="w-full lg:w-1/2 px-3">
            {/* contact form for contact details  */}
            <Formik
              initialValues={initialValues}
              validate={validate}
              onSubmit={onSubmit}
            >
              {() => (
                <div id="contact-form" className="relative mt-10">
                <h1 className="font-heading text-gray-600 text-3xl font-bold text-center">
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
                          htmlFor="firstName"
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
                          htmlFor="lastName"
                          className="absolute font-body text-md text-[#8A7650] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                        >
                          Last Name
                        </label>
                      </div>
                    </div>

                    <div className="md:flex md:gap-4">
                      {/* input box for primary phone number  */}
                      <div className="relative z-0 w-full mb-5 mt-3 group md:flex-1">
                        <Field
                          type="text"
                          name="contactNumber[0]"
                          id="primaryPhoneNumber"
                          className="block py-2.5 px-0 w-full text-md bg-transparent border-0 border-b-2 border-default-medium border-[#8A7650] appearance-none focus:outline-none focus:ring-0 focus:border-[#562F00] peer"
                          
                        />
                        <ErrorMessage
                          name="contactNumber[0]"
                          component="div"
                          className="text-red-500 text-sm mt-1"
                        />
                        <label
                          htmlFor="contactNumber[0]"
                          onInput={(e) => (e.target.value = e.target.value.replace(/[^0-9]/g, ""))}
                          className="absolute font-body text-md text-[#8A7650] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                        >
                          Contact Number
                        </label>
                      </div>

                      {/* input box for secondaru phone number */}
                      <div className="relative z-0 w-full mt-3 group md:flex-1">
                        <Field
                          type="text"
                          name="contactNumber[1]"
                          id="secondaryPhoneNumber"
                          onInput={(e) => (e.target.value = e.target.value.replace(/[^0-9]/g, ""))}
                          className="block py-2.5 px-0 w-full text-md bg-transparent border-0 border-b-2 border-default-medium border-[#8A7650] appearance-none focus:outline-none focus:ring-0 focus:border-[#562F00] peer"     
                        />
                        <ErrorMessage
                          name="contactNumber[1]"
                          component="div"
                          className="text-red-500 text-sm mt-1"
                        />
                        <label
                          htmlFor="contactNumber[1]"
                          className="absolute font-body text-md text-[#8A7650] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                        >
                          Alternate Contact Number
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
                        
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="text-red-500 text-sm mt-1"
                      />
                      <label
                        htmlFor="email"
                        className="absolute font-body text-md text-[#8A7650] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                      >
                        Email
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
                        htmlFor="default-checkbox"
                        className="font-body select-none ms-2 text-sm font-medium text-[#562F00]"
                      >
                        By submitting this form, I agree to the collection and
                        use my personla data as per the privacy Policy for
                        marketing purpose.
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
              )}
            </Formik>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JoinTeam;
