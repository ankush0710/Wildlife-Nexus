import React from "react";
import bannerVideo from "../assets/bannerVideo.mp4";

const Dashboard = () => {
  // local state for dashboard content only
  const dashboardData = [
    {
      id: 1,
      title: "Who We Are ?",
      description:
        "Guardians of Wildlife is an organization work as a dedicated steward focused on preserving biodiversity, safeguarding endangered species, and managing natural habitats against threats like poaching and climate change across the world. We continously working to protect our wildlife, our forest, our ecosystem as the human. ",
    },
    {
      id: 2,
      title: "What We Serve ?",
      description: "We serve as an Guardians of Wildlife where we protect the plants and animal species as wildlife is a integral to the world's ecosystems, providing balance and stability to the nature's processes. National and international organizations like the World Wildlife Fund, Conservation International, the Wildlife Conservation Society, the United Nations and National Geographic itself work to support global animal and habitat conservation efforts on many different fronts.They work with the government to establish and protect public lands, like national parks and wildlife refuges.s. They help write legislation, such as the Endangered Species Act (ESA) of 1973 in the United States, to protect various species.",
    },
  ];
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
      <div className="my-5 mx-5">
        <h1 className="font-heading text-5xl text-center font-bold text-gray-500">
          {dashboardData[0].title}
        </h1>
        <p className="text-center mt-4 text-lg text-justify">
          {dashboardData[0].description}
        </p>
      </div>

      <div className="border-1 border-gray-400 m-5"></div>

      {/* introduction of the organzation section*/}
      <div className="my-5 mx-5">
        <h1 className="font-heading text-5xl text-center font-bold text-gray-500">
          {dashboardData[1].title}
        </h1>
        <p className="text-center mt-4 text-lg text-justify">
          {dashboardData[1].description}
        </p>
      </div>

      <div className="border-1 border-gray-400 m-5"></div>
    </>
  );
};

export default Dashboard;
