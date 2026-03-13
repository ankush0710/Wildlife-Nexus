import React from "react";
import bannerVideo from "../assets/bannerVideo.mp4";

const Dashboard = () => {
  return (
    <>
      <div id="video-container" className="w-full min-h-screen absolute inset-0 overflow-hidden">
        <video autoPlay muted loop className="w-contain h-screen absolute">
          <source src={bannerVideo} type="video/mp4" />
        </video>
        <div className="bg-black absolute inset-0 opacity-50"></div>
        <h1 className="relative z-10 text-3xl text-[#FFF8F0] font-heading font-bold px-10">
          Home
        </h1>
      </div>
    </>
  );
};

export default Dashboard;
