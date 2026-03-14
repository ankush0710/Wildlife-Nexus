import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FetchBlogData } from "../redux/action/action";
import bannerImage from "../assets/blog-banner-image.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Blog = () => {
  // local state for storing the quotes and author name to display it in UI
  const quotes = [
    {
      id: 1,
      bgImage: "https://t4.ftcdn.net/jpg/03/48/33/01/360_F_348330128_gbGvQ1OtIlz6FW0NwJmn7QofDDxNG3lm.jpg",
      quotes:
        "We forget, in a world completely transformed by man, that what we’re looking at is not necessarily the environment wildlife prefer, but the depleted remnant that wildlife is having to cope with: what it has is not necessarily what it wants.",
      author: "Isabell Tree, Wilding",
    },
    {
      id: 2,
      bgImage: "https://media.istockphoto.com/id/505722859/photo/deep-forest-waterfall-national-park-panoramic-view.jpg?s=612x612&w=0&k=20&c=8RcxLnoKE4ZESSJ364C-GOIOiUaD5sAFZAjkK4LwwfQ=",
      quotes:
        "the updated 2016 State of Nature report discovered that the UK has lost significantly more biodiversity over the long term than the world average. Ranked twenty-ninth lowest out of 218 countries, we are among the most nature-depleted countries in the world.",
      author: "Kedar dhepe",
    },
    {
      id: 3,
      bgImage:
        "https://media.geeksforgeeks.org/wp-content/uploads/20230802132058/Wildlife-Sanctuary.webp",
      quotes:
        "Before we can truly understand the Animal Kingdom, we must first learn to respect all of the sentient beings that exist within it",
      author: "Paul Oxton",
    },
  ];
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
  }, [BlogData]);

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
        className="w-contain h-auto mx-3 my-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:justify-items-center lg:mx-20"
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

      {/* quotes section for some quotes for wildlife conservation */}
      <h1 className="font-heading font-bold  text-center text-3xl text-black py-4">
        Quotes for Wildlife Conservation
      </h1>
      {quotes.map((q) => {
        return (
          <div
            key={q.id}
            id="quotes-section"
            className="relative w-auto min-h-xl my-10 mx-3 md:min-h-72"
          >
            <div
              id="card-1"
              className="absolute w-full h-full border-2 border-gray-400 rounded-xl bg-center bg-cover  md:bg-cover"
              style={{ backgroundImage: `url('${q.bgImage}')` }}
            >
              <div className="absolute inset-0 bg-black opacity-50 rounded-xl"></div>
            </div>
            <div id="quotes" className="relative z-10 p-5 md:p-10">
              <p className="font-body text-lg text-white py-2 md:text-center">
                <FontAwesomeIcon
                  icon="fa-solid fa-quote-right"
                  className="ps-3 pb-1 rotate-y-180"
                />
                {q.quotes}
                <FontAwesomeIcon
                icon="fa-solid fa-quote-right"
                className="ps-3 pb-1"
              />
              </p>
              <p className="font-body font-semibold text-md text-white text-right pt-2 md:pt-10">
                ~ {q.author}
              </p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Blog;
