import React, { useEffect, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FetchBlogData } from "../redux/action/action";
import blogBgImage from "../assets/blog-bg-image.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Pagination from "../Components/Pagination";

const Blog = () => {
  // local state for storing the quotes and author name to display it in UI
  const quotes = [
    {
      id: 1,
      bgImage:
        "https://t4.ftcdn.net/jpg/03/48/33/01/360_F_348330128_gbGvQ1OtIlz6FW0NwJmn7QofDDxNG3lm.jpg",
      quotes:
        "We forget, in a world completely transformed by man, that what we’re looking at is not necessarily the environment wildlife prefer, but the depleted remnant that wildlife is having to cope with: what it has is not necessarily what it wants.",
      author: "Isabell Tree, Wilding",
    },
    {
      id: 2,
      bgImage:
        "https://media.istockphoto.com/id/505722859/photo/deep-forest-waterfall-national-park-panoramic-view.jpg?s=612x612&w=0&k=20&c=8RcxLnoKE4ZESSJ364C-GOIOiUaD5sAFZAjkK4LwwfQ=",
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
  const [cardPerPage, setCardPerPage] = useState(3);

  //pagination logic
  const currentCard = useMemo(() => {
    const lastIndex = currentPage * cardPerPage;
    const startIndex = lastIndex - cardPerPage;
    return BlogData.slice(startIndex, lastIndex);
  }, [currentPage, cardPerPage, BlogData]);

  const TotalPage = Math.ceil(BlogData.length / cardPerPage);

  //method for displaying card for different devices
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setCardPerPage(3);
      } else if (window.innerWidth >= 768) {
        setCardPerPage(2);
      } else {
        setCardPerPage(3);
      }
    };

    handleResize(); //run on initial render
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (currentPage > TotalPage) setCurrentPage(1);
  }, [BlogData]);

  useEffect(() => {
    dispatch(FetchBlogData());
  }, [dispatch]);

  // if there's no data yet, we can render a simple message or spinner
  if (!BlogData || BlogData.length === 0) {
    return (
      <div className="w-full my-10 text-center">
        <p className="font-body text-lg">
          Loading Blogs please wait for few sec...
        </p>
      </div>
    );
  }

  //else part
  return (
    <>
      {/*bg image and intro of the page */}
      <section id="bg-image">
        <div className="w-full min-h-[100vh]">
          <div
            id="banner-image"
            style={{ backgroundImage: `url('${blogBgImage}')` }}
            className="absolute top-0 w-full min-h-screen z-0 overflow-hidden bg-no-repeat bg-cover bg-center flex items-center justify-center"
          >
            <div className="bg-black absolute inset-0 opacity-50"></div>
            <div className="absolute z-10 inset-0 top-1/2 space-y-4">
              <h1 className="text-4xl text-center text-[#44A194] font-heading font-bold md:text-7xl">
                Blogs
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* quote section for some quotes  */}
      <section id="quote-section">
        <div className="mb-10 border-t border-b border-gray-500 py-3 mx-10">
          <p className="text-[#C44A3A] text-lg font-semibold leading-relaxed text-center md:text-2xl">
            <FontAwesomeIcon
              icon="fa-solid fa-quote-left"
              className="me-2 mb-2 text-blue-500 text-lg"
            />
            Respect Earth, Respect life.
            <FontAwesomeIcon
              icon="fa-solid fa-quote-right"
              className="ms-2 mb-2 text-blue-500 text-lg"
            />
          </p>
        </div>
      </section>

      {/* main container that contains cards  */}
      <section id="main-container">
        <div
          id="container"
          className="w-contain h-auto mx-3 my-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:justify-items-center lg:mx-20"
        >
          {currentCard.map((data) => {
            return (
              <>
                <div
                  key={data.id}
                  id="card"
                  className="w-full border p-6 rounded-xl bg-[#BED4CB] md:max-w-sm flex flex-col justify-between"
                >
                  {/* heading section of blog card  */}
                  <section id="heading-section">
                    <div className="text-center font-semibold font-heading text-xl">
                      {data.blogTitle}
                    </div>
                  </section>

                  {/* line for seperation  */}
                  <div className="border-b-2 border-gray-500 my-5"></div>

                  {/* main description section of blog card  */}
                  <section id="description-section">
                    <div id="body" className="flex flex-col gap-5 flex-grow">
                      {/* card image came from api  */}
                      <img
                        src={data.imageUrl}
                        alt="sample-image"
                        className="w-full h-80 md:h-50 object-cover object-center rounded-xl"
                      />
                      <p className="font-heading text-lg font-bold">
                        Author :-
                        <span className="font-body text-md font-normal ps-2">
                          {data.author}
                        </span>
                      </p>
                      <p className="font-heading text-lg font-bold">
                        Last Update :-
                        <span className="font-body text-md font-normal ps-2">
                          {data.lastupdate}
                        </span>
                      </p>
                      <p className="font-heading text-lg font-bold line-clamp-3">
                        Description :-
                        <span className="font-body text-md font-normal ps-2 ">
                          {data.description}
                        </span>
                      </p>
                    </div>
                  </section>

                  {/* button to see full detailed article of the respective project  */}
                  <section id="butto-section">
                    <div className="mt-8 flex items-center flex-grow">
                      <Link to={data.websiteUrl}>
                        <button
                          type="submit"
                          className="text-[#8A7650] font-semibold font-body bg-transparent border-2 border-[#8A7650] px-4 py-2 rounded-full cursor-pointer group hover:text-[#562F00] hover:bg-[#8A7650] hover:border-2 hover:border-[#562F00] hover:duration-600"
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
                  </section>

                  {/* line for seperation  */}
                  <div className="border-b-2 border-gray-400 my-5"></div>

                  {/* social media link icons  */}
                  <section id="social-medin">
                    <div className="flex items-center gap-4">
                      <h1 className="font-heading font-bold text-xl">
                        Follow us :-
                      </h1>
                      <div className="flex items-center gap-3">
                        <a href={data.facebook}>
                          <FontAwesomeIcon
                            icon="fa-brands fa-facebook"
                            className="w-5 h-5 rounded-full text-blue-500 border p-2 flex items-center justify-center hover:text-blue-800 hover:scale-110 transition"
                          />
                        </a>
                        <a href={data.twitter}>
                          <FontAwesomeIcon
                            icon="fa-brands fa-twitter"
                            className="w-5 h-5 rounded-full text-blue-500 border p-2 flex items-center justify-center hover:text-blue-800 hover:scale-110 transition"
                          />
                        </a>
                        <a href={data.instagram}>
                          <FontAwesomeIcon
                            icon="fa-brands fa-instagram"
                            className="w-5 h-5 rounded-full text-red-500 border p-2 flex items-center justify-center hover:text-red-800 hover:scale-110 transition"
                          />
                        </a>
                        <a href={data.linkdin}>
                          <FontAwesomeIcon
                            icon="fa-brands fa-linkedin"
                            className="w-5 h-5 rounded-full text-blue-500 border p-2 flex items-center justify-center hover:text-blue-800 hover:scale-110 transition"
                          />
                        </a>
                      </div>
                    </div>
                  </section>
                </div>
              </>
            );
          })}
        </div>
      </section>

      {/* number and next, previous arrow  */}
      <Pagination
        TotalPage={TotalPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />

      {/* line for speration  */}
      <div className="border-1 border-gray-500 mx-10 my-5"></div>

      {/* quotes section for some quotes for wildlife conservation */}
      <section id="quote-section">
        <h1 className="font-heading font-bold text-3xl text-center lg:text-4xl text-[#C44A3A] py-4">
          Quotes for Wildlife Conservation
        </h1>
        {quotes.map((q) => {
          return (
            <div
              key={q.id}
              id="quotes-section"
              className="relative w-auto h-[400px] my-10 mx-5 md:mx-20 md:min-h-72"
            >
              <div
                id="card-1"
                className="absolute inset-0 w-full h-full border-2 border-gray-400 rounded-xl bg-center bg-cover"
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
                <p className="font-body font-semibold text-md text-white text-right pt-10">
                  ~ {q.author}
                </p>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default Blog;
