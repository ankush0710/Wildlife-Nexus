import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FetchBlogData } from "../redux/action/action";
import bannerImage from "../assets/blog-banner-image.png";
import sample from "../assets/sample-image.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Blog = () => {
  const dispatch = useDispatch();
  const BlogData = useSelector((state) => state.BlogData);

  useEffect(() => {
    dispatch(FetchBlogData());
  }, [dispatch]);

   // if there's no data yet, we can render a simple message or spinner
  if (!BlogData || BlogData.length === 0) {
    return (
      <div className="w-full my-10 text-center">
        <p className="font-body text-lg">Loading Blogs...</p>
      </div>
    );
  }

  //else part
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
        {BlogData.map((data) => {
          return (
            <>
              <div
                key={data.id}
                id="card"
                className="w-full h-auto border px-6 rounded-xl bg-[#ECE7D1] md:max-w-sm"
              >
                {/* heading section of blog card  */}
                <div
                  id="heading"
                  className="text-center font-semibold font-heading text-3xl pt-5"
                >
                  {data.blogTitle}
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
                      src={data.imageUrl}
                      alt="sample-image"
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>
                  <p className="font-heading text-xl font-bold">
                    Author :-
                    <span className="font-body text-md font-normal ps-2">
                      {data.author}
                    </span>
                  </p>
                  <p className="font-heading text-xl font-bold">
                    Last Update :-
                    <span className="font-body text-md font-normal ps-2">
                      {data.lastupdate}
                    </span>
                  </p>
                  <p className="font-heading text-xl font-bold">
                    Description :-
                    <span className="font-body text-md font-normal ps-2">
                      {data.description}
                    </span>
                  </p>

                  {/* button to see full detailed article of the respective project  */}
                  <Link to={data.wedsiteUrl} className="py-5">
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
                  <h1 className="font-heading font-bold text-xl">
                    Follow us :-
                  </h1>
                  <a href="#">
                    <FontAwesomeIcon
                      icon="fa-brands fa-facebook"
                      className={data.facebook ? "text-blue-500 text-sm border rounded-full p-2 hover:text-blue-800": "opacity-0"}
                    />
                  </a>
                  <a href="#">
                    <FontAwesomeIcon
                      icon="fa-brands fa-twitter"
                      className={data.twitter ? "text-blue-500 text-sm border rounded-full p-2 hover:text-blue-800": "opacity-0"}
                    />
                  </a>
                  <a href="#">
                    <FontAwesomeIcon
                      icon="fa-brands fa-instagram"
                      className={data.instagram ? "text-red-400 text-sm border rounded-full p-2 hover:text-red-800": "opacity-0"}
                    />
                  </a>
                  <a href="#">
                    <FontAwesomeIcon
                      icon="fa-brands fa-linkedin"
                      className={data.linkdin ? "text-blue-500 text-sm border rounded-full p-2 hover:text-blue-800": "opacity-0"}
                    />
                  </a>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Blog;
