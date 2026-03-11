import React from "react";
import Cards from "../Components/Cards";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import sample from "../assets/sample-image.jpg"

const Wildlife = () => {
  return (
    <>
      <div className="w-full h-screen grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <Cards>
          {/* background image div */}
          <div
            style={{ backgroundImage: `url('${sample}')` }}
            className="absolute w-full h-full bg-cover bg-center rounded-lg"
          >
            {/* overlay div  */}
            <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
          </div>
          <div className="relative z-10 p-6 space-y-1 group-hover:text-hidden">
            <h1 className="text-white font-heading text-xl">
              Name : <span className="font-body text-lg ps-5">Parrot</span>
            </h1>
            <h1 className="text-white font-heading text-xl">
              Species : <span className="font-body text-lg ps-5">Loxodon</span>
            </h1>
            <h1 className="text-white font-heading text-xl">
              Habitat : <span className="font-body text-lg ps-5">Savana</span>
            </h1>
            <h1 className="text-white font-heading text-xl">
              Diet : <span className="font-body text-lg ps-5">Herbivorous</span>
            </h1>
            <h1 className="text-white font-heading text-xl">
              Status :{" "}
              <span className="font-body text-lg ps-5">Vulnerable</span>
            </h1>
            <h1 className="text-white font-heading text-xl">
              LifeSpan (years) :{" "}
              <span className="font-body text-lg ps-5">10</span>
            </h1>
            <h1 className="text-white font-heading text-xl">
              Weight (in kgs) :{" "}
              <span className="font-body text-lg ps-5">6000</span>
            </h1>
            <h1 className="text-white font-heading text-xl">
              Height (in meters) :{" "}
              <span className="font-body text-lg ps-5">300</span>
            </h1>
            <h1 className="text-white font-heading text-xl">
              Speed (in kms) :{" "}
              <span className="font-body text-lg ps-5">40</span>
            </h1>
          </div>
        </Cards>
      </div>
    </>
  );
};

export default Wildlife;
