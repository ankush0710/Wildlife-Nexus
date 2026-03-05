import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import sample from "../assets/sample-image.jpg";

const ProgramCard = () => {
  return (
    <>
      <div
        id="program-card"
        className="w-76 h-auto mx-3 p-2 rounded-lg shadow-xl flex flex-col gap-5 items-center border border-gray-300 bg-[#ECE7D1] md:w-auto md:h-2xl md:flex md:flex-row md:items-start md:border-b-2"
      >
        <div
          id="card-image"
          className="w-full h-70 md:h-50 md:w-xl"
        >
          <img
            src={sample}
            alt="image"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* heading and tthe main description about the project  */}
        <div id="description" className="space-y-3 md:pt-5">
          <h1 className="font-heading font-bold text-2xl">Project Tiger</h1>
          <p className="font-body text-sm">
            Project Tiger was launched in 1973 with the aim of conserving Bengal
            tigers. This program established over 50 tiger reserves across India
            to safeguard tigers and their natural habitats. Efforts include
            anti-poaching strategies, habitat restoration, and enhancing the
            protected areas' management. Additionally, eco-tourism is promoted
            around tiger reserves to generate funds and engage local
            communities. The initiative has seen a significant increase in tiger
            populations in India and has played a vital role in creating a
            broader conservation model.
          </p>
        </div>

        {/* button to see full detailed article of the respective project  */}
        <div className="pb-10 mx-3 my-auto">
          <button
            type="submit"
            className="text-[#8A7650] font-semibold font-body bg-transparent border-2 border-[#8A7650] px-6 py-2 rounded-full group hover:text-[#562F00] hover:bg-[#8A7650] hover:border-2 hover:border-[#562F00] hover:duration-600"
          >
            <p className="text-nowrap">View Details
            <span>
              <FontAwesomeIcon
                icon="fa-solid fa-arrow-down"
                className="ps-5 group-hover:translate-y-1 transition duration-300"
              />
            </span>
            </p>
          </button>
        </div>
      </div>
    </>
  );
};

export default ProgramCard;
