import React from "react";
import bannerVideo from "../assets/bannerVideo.mp4";

const Dashboard = () => {
  return (
    <>
      <div id="video-container" className="w-full h-screen relative">
        <video autoPlay muted loop className="w-full h-full absolute inset-0 object-cover">
          <source src={bannerVideo} type="video/mp4" />
        </video>
        <div className="bg-black absolute inset-0 opacity-50"></div>
        <div className="relative z-10 top-1/2 mx-10 space-y-4">
            <h1  className=" text-7xl text-center text-[#FFF8F0] font-body font-bold">Welcome To</h1>
            <h1 className=" text-3xl text-center text-[#FFF8F0] font-heading font-bold">
          Guardians Of Wildlife
        </h1>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
