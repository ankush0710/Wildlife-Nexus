import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FetchBlogData } from "../redux/action/action";
import bannerImage from "../assets/blog-banner-image.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Blog = () => {
  const dispatch = useDispatch();
  const BlogData = useSelector((state) => state.BlogData);
  const [currentPage, setCurrentPage] = useState(1);
  const [blogsPerPage, setBlogsPerPage] = useState(3);

  //pagination logic
  const lastIndex = currentPage * blogsPerPage;
  const firstIndex = lastIndex - blogsPerPage;
  const currentNumber = BlogData.slice(firstIndex, lastIndex);

  const selectPageHandle = (selectedPage) => {
    if (
      selectedPage >= 1 &&
      selectedPage !== currentPage &&
      selectedPage <= BlogData.length / 3
    ) {
      setCurrentPage(selectedPage);
    }
  };

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
      <div
        id="container"
        className="mx-3 my-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:justify-items-center lg:mx-20"
      >
        {currentNumber.map((data) => {
          return (
            <>
              <div
                key={data.id}
                id="card"
                className="w-full max-h-xl border p-6 rounded-xl bg-[#ECE7D1] md:max-w-sm"
              >
                {/* heading section of blog card  */}
                <div
                  id="heading"
                  className="text-center font-semibold font-heading text-xl"
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
                  <div className="flex flex-col justify-center gap-5 mb-5">
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
                  </div>

                  {/* button to see full detailed article of the respective project  */}
                  <div className="my-3">
                    <Link to={data.wedsiteUrl}>
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
                  <div className="border-b-2 border-gray-400 py-5"></div>

                  {/* social media link icons  */}
                  <div className="flex gap-4 items-center">
                    <h1 className="font-heading font-bold text-xl">
                      Follow us :-
                    </h1>
                    <a href={data.facebook}>
                      <FontAwesomeIcon
                        icon="fa-brands fa-facebook"
                        className="text-blue-500 text-sm border rounded-full p-2 hover:text-blue-800"
                      />
                    </a>
                    <a href={data.twitter}>
                      <FontAwesomeIcon
                        icon="fa-brands fa-twitter"
                        className="text-blue-500 text-sm border rounded-full p-2 hover:text-blue-800"
                      />
                    </a>
                    <a href={data.instagram}>
                      <FontAwesomeIcon
                        icon="fa-brands fa-instagram"
                        className="text-red-400 text-sm border rounded-full p-2 hover:text-red-800"
                      />
                    </a>
                    <a href={data.linkdin}>
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
        })}
      </div>


       {/* number and next, previous arrow  */}
        {BlogData.length > 0 && (
          <div
            id="pagination"
            className="flex justify-center text-xl mt-5 space-x-5 font-heading font-semibold mb-10"
          >
            <span>
              <FontAwesomeIcon
                icon="fa-solid fa-angle-left"
                className={
                  currentPage > 1
                    ? "text-gray-400 hover:text-black hover:transform hover:scale-130 hover:duration-300 cursor-pointer"
                    : "opacity-0"
                }
                onClick={() => selectPageHandle(currentPage - 1)}
              />
            </span>
            {[...Array(BlogData.length / 3)].map((_, i) => {
              return (
                <span
                  key={i}
                  className={
                    currentPage == i + 1
                      ? "text-black transform translate scale-140 ease-in-out duration-300 cursor-pointer"
                      : "text-gray-400 cursor-pointer"
                  }
                  onClick={() => selectPageHandle(i + 1)}
                >
                  {i + 1}
                </span>
              );
            })}
            <span>
              <FontAwesomeIcon
                icon="fa-solid fa-angle-right"
                className={
                  currentPage == BlogData.length / 3
                    ? "opacity-0"
                    : "text-gray-400 hover:text-black hover:transform hover:scale-130 hover:duration-300 cursor-pointer"
                }
                onClick={() => selectPageHandle(currentPage + 1)}
              />
            </span>
          </div>
        )}
    </>
  );
};

export default Blog;
