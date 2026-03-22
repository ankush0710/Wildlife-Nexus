import React from "react";
import notFoundImg from "../assets/404-not-found.png";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <div className="relative w-76 h-60 mx-auto">
        <img src={notFoundImg} alt="not-found-img" className="w-full h-full" />
      </div>
      <div className="w-full mb-10">
        <p className="text-center text-5xl text-[#C44A3A] pb-5">
          Page Not Found
        </p>
        <Link to="/">
          <p className="text-lg text-center font-medium text-blue-500 cursor-pointer hover:text-blue-700">
            Go To Home
          </p>
        </Link>
      </div>
    </>
  );
};

export default NotFound;
