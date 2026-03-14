import React from "react";
import Carausal from "../Components/Carausal";
import bannerVideo from "../assets/bannerVideo.mp4";

const Dashboard = () => {
  // local state for dashboard content only
  const dashboardData = [
    {
      id: 1,
      title: "Who We Are ?",
      description:
        "Guardians of Wildlife is an organization work as a dedicated steward focused on preserving biodiversity, safeguarding endangered species, and managing natural habitats against threats like poaching and climate change across the world. We continously working to protect our wildlife, our forest, our ecosystem as the human. ",
      image:
        "https://cdn.pixabay.com/photo/2024/05/23/10/41/dear-8782915_640.jpg",
    },
    {
      id: 2,
      title: "What We Serve ?",
      description:
        "We serve as an Guardians of Wildlife where we protect the plants and animal species as wildlife is a integral to the world's ecosystems, providing balance and stability to the nature's processes. National and international organizations like the World Wildlife Fund, Conservation International, the Wildlife Conservation Society, the United Nations and National Geographic itself work to support global animal and habitat conservation efforts on many different fronts.They work with the government to establish and protect public lands, like national parks and wildlife refuges.s. They help write legislation, such as the Endangered Species Act (ESA) of 1973 in the United States, to protect various species.",
      image:
        "https://cdn.pixabay.com/photo/2018/10/12/11/33/eagle-3741968_1280.jpg",
    },
    {
      id:3,
      title: "Core Initiatives",
      description:["", "", ""],
      image: "https://ic.c4assets.com/vps/wildlife-rescue/9BE87BD6-23A6-43C1-95AAAD351D9256CB.jpg?imformat=chrome&resize=700px:*"
    }
  ];

  // state for slider images for carousal of founder section
  const carousalData = [
    {
      id: 1,
      image:"https://img.freepik.com/free-photo/confident-young-man-looking-determined-cross-arms-chest-wearing-orange-winter-sweater-standing-ag_1258-155306.jpg?semt=ais_rp_progressive&w=740&q=80",
      name: "Saurabh Sharma",
      position: "CEO, Founder of Gaurdians of Wildlife",
      message:
        "Wildlife conservation is essential to maintain ecosystem balance, protect biodiversity, and ensure a healthy planet for future generations by safeguarding habitats and endangered species. The core message is to protect natural habitats from destruction, combat species reduction caused by humans, and recognize that wildlife is a priceless treasure",
    },
    {
      id: 2,
      image:
        "https://as2.ftcdn.net/jpg/02/88/33/79/1000_F_288337966_NdtrgYYHMgPxvCu3mEPZZKuKecxVpXA2.jpg",
      name: "Dr. Abhinav Thakur",
      position: "Marketing Head, Co-founder of Gaurdians of Wildlife",
      message:
        "The human population has grown exponentially over the past 200 years, to more than eight billion humans as of November 2022, and it continues to rapidly grow. This means natural resources are being consumed faster than ever by the billions of people on the planet. This growth and development also endangers the habitats and existence of various types of wildlife around the world, particularly animals and plants that may be displaced for land development, used for food or other human purposes. Other threats to wildlife include the introduction of invasive species from other parts of the world, climate change, pollution, hunting, fishing and poaching.",
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
      <h1 className="my-2 text-3xl font-heading text-center font-bold text-gray-500 md:text-5xl md:my-5">
        {dashboardData[0].title}
      </h1>
      <div className="my-5 md:flex md:justify-between">
        <div id="text-contain" className="mx-10">
          <p className="text-center mt-4 text-lg text-justify">
            {dashboardData[0].description}
          </p>
        </div>
        <div className="my-4 mx-5 min-w-64 h-auto md:w-xl lg:w-5xl border border-gray-400 rounded-lg md:shadow-xl">
          <img
            src={dashboardData[0].image}
            alt="dear-image"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>

      <div className="border-1 border-gray-400 m-5"></div>

      {/* this section describe about the work we are doing */}
      <h1 className="mt-10 text-3xl font-heading text-center font-bold text-gray-500 md:text-5xl">
        {dashboardData[1].title}
      </h1>
      <div className="my-5 md:flex md:justify-between md:flex-row-reverse">
        
        <div id="text-contain" className="mx-10">
          <p className="text-center mt-4 text-lg text-justify">
            {dashboardData[1].description}
          </p>
        </div>
        <div className="my-4 mx-5 min-w-64 h-auto md:w-xl lg:w-full border border-gray-400 rounded-lg md:shadow-xl">
          <img
            src={dashboardData[1].image}
            alt="dear-image"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
      <div className="border-1 border-gray-400 m-5"></div>

      {/* meet the founder of the oganization section  */}
      <h1 className="my-10 text-3xl font-heading text-center font-bold text-gray-500 md:text-5xl">
        Meet Our Founders
      </h1>
      <div id="carousal" className="w-[100%] h-2xl my-10">
          <Carausal carousalData={carousalData} />
      </div>

      {/* core initiatives section  */}
      <div id="core-initiative" className="">
        
      </div>
    </>
  );
};

export default Dashboard;
