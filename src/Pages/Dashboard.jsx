import React from "react";
import bannerVideo from "../assets/bannerVideo.mp4";

const Dashboard = () => {
  return (
    <>
      <div id="video-container" className="absolute top-0 left-0 w-full h-[100vh] z-0 overflow-hidden">
        <video autoPlay muted loop className="w-full h-full object-cover">
          <source src={bannerVideo} type="video/mp4" />
        </video>
        <div className="bg-black absolute inset-0 opacity-50"></div>
        <div className="absolute z-10 top-1/2 left-1/2 space-y-4">
            <h1  className=" text-7xl text-center text-[#FFF8F0] font-body font-bold">Welcome To</h1>
            <h1 className=" text-3xl text-center text-[#FFF8F0] font-heading font-bold">
          Guardians Of Wildlife
        </h1>
        </div>
      </div>
      {/* Spacer to push content below the video */}
      <div className="h-screen">
        Hello 
      </div>
    </>
  );
};

export default Dashboard;
