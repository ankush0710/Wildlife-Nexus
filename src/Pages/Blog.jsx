import React from "react";
import bannerImage from "../assets/blog-banner-image.png";
import sample from "../assets/sample-image.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <>
      {/* main banner image  */}
      <div
        id="banner-image"
        className=""
        style={{ backgroundImage: `url(${bannerImage})` }}
      ></div>

      {/* main container that contains cards  */}
      <div id="container" className="mx-3 mb-10">
        <div
          id="card"
          className="w-full h-auto border px-6 rounded-xl bg-[#ECE7D1] md:max-w-sm"
        >
          {/* heading section of blog card  */}
          <div
            id="heading"
            className="text-center font-semibold font-heading text-3xl pt-5"
          >
            First Blog
          </div>
          <div className="border-b-2 border-gray-400 my-5"></div>

          {/* main description section of blog card  */}
          <div id="body" className="flex flex-col gap-4">
            {/* card image for came from api  */}
            <div
              id="card-image"
              className="relative w-full h-78 border border-gray-500 rounded-xl"
            >
              <img
                src={sample}
                alt="sample-image"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            <p className="font-heading text-xl font-bold">
              Author :-
              <span className="font-body text-md font-normal">
                Ankush Kurvey
              </span>
            </p>
            <p className="font-heading text-xl font-bold">
              Last Update :-
              <span className="font-body text-md font-normal">
                Dec-1925
              </span>
            </p>
            <p className="font-heading text-xl font-bold">
              Description :-
              <span className="font-body text-md font-normal">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero
                sunt dolores veritatis cum cupiditate magni fuga cumque, tempore
                laboriosam, ratione dicta voluptates placeat culpa, accusantium
                alias eius facilis.
              </span>
            </p>

            {/* button to see full detailed article of the respective project  */}
            <Link to="" className="py-5">
              <button
                type="submit"
                className="text-[#8A7650] font-semibold font-body bg-transparent border-2 border-[#8A7650] px-6 py-2 rounded-full cursor-pointer group hover:text-[#562F00] hover:bg-[#8A7650] hover:border-2 hover:border-[#562F00] hover:duration-600"
              >
                <p className="text-nowrap">
                  Visit Website
                  <span>
                    <FontAwesomeIcon
                      icon="fa-solid fa-arrow-right"
                      className="ps-5 group-hover:translate-x-2 transition duration-300"
                    />
                  </span>
                </p>
              </button>
            </Link>
          </div>
          <div className="border-b-2 border-gray-400 my-5"></div>

          {/* social media link icons  */}
          <div className="flex gap-4 items-center pb-5">
            <h1 className="font-heading font-bold text-xl">Follow us :-</h1>
            <a href="#">
              <FontAwesomeIcon
                icon="fa-brands fa-facebook"
                className="text-blue-500 text-sm border rounded-full p-2 hover:text-blue-800"
              />
            </a>
            <a href="#">
              <FontAwesomeIcon
                icon="fa-brands fa-twitter"
                className="text-blue-500 text-sm border rounded-full p-2 hover:text-blue-800"
              />
            </a>
            <a href="#">
              <FontAwesomeIcon
                icon="fa-brands fa-instagram"
                className="text-red-400 text-sm border rounded-full p-2 hover:text-red-800"
              />
            </a>
            <a href="#">
              <FontAwesomeIcon
                icon="fa-brands fa-linkedin"
                className="text-blue-500 text-sm border rounded-full p-2 hover:text-blue-800"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
