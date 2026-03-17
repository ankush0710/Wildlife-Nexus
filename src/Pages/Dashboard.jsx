import React, { useState } from "react";
import { useSelector } from "react-redux";
import Carausal from "../Components/Carausal";
import ProgramCard from "../Components/ProgramCard";
import Pagination from "../Components/Pagination";
import bannerVideo from "../assets/bannerVideo.mp4";

const Dashboard = () => {
  const dasboardData = useSelector((state) => state.DashboardData);
  const carousalData = useSelector((state) => state.CarousalData);
  const [current, setCurrent] = useState(0);

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
        <h1 className="my-2 text-3xl font-heading text-center font-bold text-gray-500 md:text-5xl md:my-5">
          {dasboardData[0].title}
        </h1>
        <div className="my-5 md:flex md:justify-between">
          <div id="text-contain" className="mx-10">
            <p className="text-center mt-4 text-lg text-justify">
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
        <h1 className="mt-10 text-3xl font-heading text-center font-bold text-gray-500 md:text-5xl">
          {dasboardData[1].title}
        </h1>
        <div className="my-5 md:flex md:justify-between md:flex-row-reverse">
          <div id="text-contain" className="mx-10">
            <p className="text-center mt-4 text-lg text-justify">
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
        <h1 className="my-10 text-3xl font-heading text-center font-bold text-gray-500 md:text-5xl">
          Meet Our Founders
        </h1>
        <div id="carousal" className="relative w-[100%] h-2xl my-10">
          <Carausal current={current} carousalData={carousalData} />
          <Pagination
            current={current}
            setCurrent={setCurrent}
            totalCards={carousalData.length}
          />
        </div>
      </section>

      {/*Importance of Nature and Wildlife conservation */}
      <section id="NatureAndWildlife">
        <div id="nature-and-wildlife" className="w-full h-auto">
          <ProgramCard>
              
          </ProgramCard>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
