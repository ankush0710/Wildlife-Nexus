import React, { useState } from "react";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Carausal from "../Components/Carausal";
import natureImage from "../assets/nature-pengiune.webp";
import climateImage from "../assets/climate-and-wildlife.webp";
import initiativeImage from "../assets/initiative-bg-image.jpg";
import Pagination from "../Components/Pagination";
import bannerVideo from "../assets/bannerVideo.mp4";

const Dashboard = () => {
  const dasboardData = useSelector((state) => state.DashboardData);
  const carousalData = useSelector((state) => state.CarousalData);
  const informationData = useSelector((state) => state.InformationData);
  const climateWildlifeData = useSelector((state) => state.ClimateWildlifeData)
  const initiatives = useSelector((state) => state.Initiatives);
  const [current, setCurrent] = useState(0);
  const [isShown, setIsShown] = useState(null);

  return (
    <>
      <div className="w-full h-[85vh]">
        <div
          id="video-container"
          className="absolute top-0 left-0 w-full h-[100vh] z-0 overflow-hidden"
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src={bannerVideo} type="video/mp4" />
          </video>
          <div className="bg-black absolute inset-0 opacity-50"></div>
          <div className="absolute z-10 inset-0 top-1/2 space-y-4">
            <h1 className="text-4xl text-center text-[#FFF8F0] font-body font-bold md:text-7xl">
              Welcome To
            </h1>
            <h1 className="text-xl text-center text-[#44A194] font-heading font-bold md:text-3xl">
              Guardians Of Wildlife
            </h1>
          </div>
        </div>
      </div>

      {/* introduction of the organzation section*/}
      <section id="whoWeAre">
        <h1 className="text-2xl font-heading text-center font-bold text-[#44A194] md:text-4xl md:my-5">
          {dasboardData[0].title}
        </h1>
        <div className="my-5 md:flex md:justify-between">
          <div id="text-contain" className="mx-10">
            <p className="text-center text-gray-500 mt-4 text-lg text-justify">
              {dasboardData[0].description}
            </p>
          </div>
          <div className="my-4 mx-5 min-w-64 h-auto md:w-xl lg:w-5xl border border-gray-400 rounded-lg md:shadow-xl">
            <img
              src={dasboardData[0].image}
              alt="dear-image"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </section>

      <div className="border-1 border-gray-400 m-5"></div>

      {/* this section describe about the work we are doing */}
      <section id="WhatWeServe">
        <h1 className="mt-7 text-2xl font-heading text-center font-bold text-[#44A194] md:text-4xl md:mt-10">
          {dasboardData[1].title}
        </h1>
        <div className="my-5 md:flex md:justify-between md:flex-row-reverse">
          <div id="text-contain" className="mx-10">
            <p className="text-center text-gray-500 mt-4 text-lg text-justify">
              {dasboardData[1].description}
            </p>
          </div>
          <div className="my-4 mx-5 min-w-64 h-auto md:w-xl lg:w-full border border-gray-400 rounded-lg md:shadow-xl">
            <img
              src={dasboardData[1].image}
              alt="dear-image"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </section>

      <div className="border-1 border-gray-400 m-5"></div>

      {/* meet the founder of the oganization section  */}
      <section id="carousal">
        <h1 className="mt-10 text-3xl font-heading text-center font-bold text-[#44A194] md:text-5xl">
          Meet Our Founders
        </h1>
        <div id="carousal" className="relative w-[100%] h-2xl mt-10">
          <Carausal current={current} carousalData={carousalData} />
          <Pagination
            current={current}
            setCurrent={setCurrent}
            totalCards={carousalData.length}
          />
        </div>
      </section>

      {/*This section describes Importance of Nature and Wildlife conservation */}
      <section id="NatureAndWildlife">
        <div className="w-full md:flex md:justify-center">
          <div
            id="image-container flex-1"
            style={{ backgroundImage: `url('${natureImage}')` }}
            className="relative w-full md:w-[50%] h-[350px] md:h-auto bg-cover bg-center"
          >
            <div className="absolute inset-0 bg-black opacity-50"></div>

          </div>
          <div id="text-container" className="my-10 mx-5 md:w-[50%]">
            <h1 className="font-heading text-[#406093] text-2xl text-center font-bold md:text-4xl">
              Why Nature and Wildlife Conservation is important ?
            </h1>
            {informationData.map((q) => {
              return (
                <p className="px-5 py-5">
                  <FontAwesomeIcon
                    icon="fa-solid fa-check"
                    className="text-[#C08552] text-2xl font-bold"
                  />
                  <span className="text-gray-600 text-lg font-body px-3 leading-10">
                    {q.message}
                  </span>
                </p>
              );
            })}
            <p className="font-body text-lg text-gray-600 pt-10 md:text-base text-center md:text-xl">
              <FontAwesomeIcon
                icon="fa-solid fa-quote-right"
                className="ps-3 pb-1 rotate-y-180"
              />
              Protect nature today, so life can thrive tomorrow.
              <FontAwesomeIcon
                icon="fa-solid fa-quote-right"
                className="ps-3 pb-1"
              />
            </p>
          </div>
        </div>
      </section>

      {/*This section describes How climate change can affect wildlife */}
      <section id="ClimateAndWildlife">
        <div className="w-full mb-10 md:mt-5 md:flex md:justify-center md:flex-row-reverse">
          <div
            id="image-container flex-1"
            style={{ backgroundImage: `url('${climateImage}')`, 
             }}
            
            className="relative w-full md:w-[50%] h-[350px] md:h-auto bg-cover bg-center"
          >
            <div className="absolute inset-0 bg-black opacity-50"></div>

          </div>
           <div id="text-container" className="my-10 mx-5 md:w-[50%]">
            <h1 className="font-heading text-[#44A194] pb-10 text-2xl text-center font-bold lg:text-4xl">
              How Climate Change affects Wildlife ?
            </h1>
            {climateWildlifeData.map((s) => {
              return (
                <>
                <p className="p-3">
                  <FontAwesomeIcon
                    icon="fa-solid fa-check"
                    className="text-[#2FA4D7] text-2xl font-bold"
                  />
                  <span className="text-[#408A71] text-lg font-heading font-semibold px-3 md:text-xl">
                    {s.subHeading} 
                  </span>
                </p>
                <p className="pl-15 pb-5 text-gray-600 text-lg font-heading px-3 md:text-xl">{s.message}</p>
                <p className="pl-15 text-gray-600 text-lg font-semibold font-heading md:text-xl">Example:-</p>
                <div className="py-8">
                  {
                  s.example.map((example) => {
                    return <p className=" pl-20 md:text-[17px]"><span><FontAwesomeIcon icon="fa-solid fa-arrow-right" className="px-5 text-[#408A71]"/></span>{example}</p>
                  })
                }
                </div>
                </>
              );
            })}
          </div>
        </div>
      </section>

      {/* This section describes the core initiatves towards wildlife conservation*/}
      <section id="CoreInitiative">
        <div className="w-full mb-10 md:mt-5 md:flex md:justify-center ">
          <div
            id="image-container flex-1"
            style={{ backgroundImage: `url('${initiativeImage}')` }}
            className="relative w-full md:w-[50%] h-[350px] md:h-auto bg-cover bg-center"
          >
            <div className="absolute inset-0 bg-black opacity-50"></div>
          </div>
           <div id="text-container" className="my-10 mx-5 md:w-[50%]">
            <h1 className="font-heading text-[#44A194] pb-10 text-2xl text-center font-bold md:text-4xl">
              Core Initiatives 
            </h1>
            {
            initiatives.map((i) => {
              return (
                <>
                <p className="p-3">
                  <FontAwesomeIcon
                    icon="fa-solid fa-check-double"
                    className="text-[#111FA2] text-xl font-bold"
                  />
                  <span className="text-gray-500 text-xl font-heading font-semibold px-3 cursor-pointer hover:text-2xl hover:text-[#]" onMouseEnter={() => setIsShown(i.id)} onMouseLeave={() => setIsShown(null)}>
                    {i.initiative} 
                  </span>
                </p>

                <div className={`overflow-hidden transition-all ease-in-out duration-500 ${(isShown === i.id)?"py-5 opacity-100":"max-h-0 opacity-0"}`}>
                  {
                  i.description.map((description) => {
                    return <p className=" pl-10 pt-2 font-semibold text-[#406093]"><span><FontAwesomeIcon icon="fa-solid fa-arrow-right" className="px-5 text-[#406093]"/></span>{description}</p>
                  })
                }
                </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
