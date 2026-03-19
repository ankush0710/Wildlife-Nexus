import React, { useEffect, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FetchWildlifeData } from "../redux/action/action";
import Cards from "../Components/Cards";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import WildlifeBgImage from "../assets/wildlife-bg-image.avif";

const Wildlife = () => {
  const dispatch = useDispatch();
  const WildlifeData = useSelector((state) => state.WildlifeData);
  const [currentPage, setCurrentPage] = useState(1);
  const [cardPerPage, setCardPerPage] = useState(9);
  const [search, setSearch] = useState("");
  const [filteredSearch, setFilteredSearch] = useState("");
  const [catagory, setCatagory] = useState("");
  const [isHidden, setIsHidden] = useState(true);

  useEffect(() => {
    dispatch(FetchWildlifeData());
  }, []);

  // search logic for search data by name
  const filterName = useMemo(() => {
    return WildlifeData.filter((wd) => {
      //matching the string which user input in the search bar
      const matchSearch = wd.name.toLowerCase().includes(search.toLowerCase());

      // matching the option user selected from dropdown
      const matchCatagory = catagory
        ? wd.status.toLowerCase() === catagory.toLowerCase()
        : true;

      return matchSearch && matchCatagory;
    });
  }, [WildlifeData, search, catagory]);

  //pagination logic start here
  const currentCard = useMemo(() => {
    const lastIndex = currentPage * cardPerPage;
    const startIndex = lastIndex - cardPerPage;
    return filterName.slice(startIndex, lastIndex);
  }, [currentPage, cardPerPage, filterName]);

  // total number of pages will display
  const TotalPage = Math.ceil(filterName.length / cardPerPage);

  const selectPageHandle = (selected) => {
    if (selected >= 1 && selected !== currentPage && selected <= TotalPage) {
      setCurrentPage(selected);
    }
  };

  //function for back to original data
  const handleBack = () => {
    setSearch("");
    setFilteredSearch("");
    setCatagory("");
    setCurrentPage(1);
  };
  //method for displaying 8 cards in md devices and 9 cards in lg devices
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setCardPerPage(9);
      } else if (window.innerWidth >= 768) {
        setCardPerPage(8);
      } else {
        setCardPerPage(4);
      }
    };

    handleResize(); //run on initial render

    window.addEventListener("resize", handleResize);
    return () => window.addEventListener("resize", handleResize);
  }, []);

  //if data is yet to come then loading text will display
  if (!WildlifeData || WildlifeData.length == 0) {
    return (
      <div className="w-full my-10 text-center">
        <p className="font-body text-lg">
          Loading wildlife data please wait for few sec...
        </p>
      </div>
    );
  }

  return (
    <>
      {/* bg -image and intro of page  */}
      <div id="bg-image" className="w-full min-h-[80vh]">
        <div
          id="banner-image"
          style={{ backgroundImage: `url('${WildlifeBgImage}')` }}
          className="absolute top-0 w-full min-h-screen z-0 overflow-hidden bg-no-repeat bg-cover bg-center flex items-center justify-center"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20"></div>
          <div className="absolute z-10 inset-0 top-1/2 space-y-4 lg:px-80">
            <h1 className="text-2xl text-center text-[#EFD2B0] font-heading font-bold">
              <FontAwesomeIcon
                icon="fa-solid fa-quote-left"
                className="me-2 mb-1"
              />
              Making a difference to the welfare of Animals doesn't require a
              massive effort; it requires small actions that can make a
              significant impact.
              <FontAwesomeIcon
                icon="fa-solid fa-quote-right"
                className="ms-2 mb-1"
              />
            </h1>
          </div>
        </div>
      </div>

      {/* button for back to default state  */}
      <div className="mx-3 my-2 md:my-10 flex justify-between items-end md:flex-row md:justify-between md:items-center md:mx-15">
        {(search || catagory) && (
          <button
            onClick={handleBack}
            className="flex justify-center items-center gap-2 cursor-pointer"
          >
            <FontAwesomeIcon
              icon="fa-solid fa-hand-point-left"
              className="text-2xl text-[#44A194]"
            />
            <span className="font-heading font-semibold text-2xl text-[#44A194]">
              Back
            </span>
          </button>
        )}

        <div className="flex flex-col gap-5 items-center justify-between md:flex-1 md:flex-row">
          {/* //search bar and filter button */}
          <div className="relative mx-auto">
            <input
              type="text"
              value={filteredSearch}
              placeholder="Search by name"
              className="py-2 px-5 border border-gray-500 rounded-full bg-gray-300 focus:border-gray-600 md:px-8 lg:px-10"
              onChange={(e) => setFilteredSearch(e.target.value)}
            />
            <button
              onClick={() => {
                setSearch(filteredSearch);
                setCurrentPage(1);
              }}
              className="absolute inset-y-0 right-0 px-4 rounded-e-full border border-gray-500 bg-blue-500 text-white font-body font-semibold hover:bg-[#111F35] cursor-pointer"
            >
              Search
            </button>
          </div>

          {/* dropdown for filter the cards by species  */}
          <div className="relative flex flex-col justify-center items-center">
            <div
              onClick={() => setIsHidden(!isHidden)}
              className="bg-gray-300 flex items-center gap-8 px-5 py-2 border border-gray-500 cursor-pointer"
            >
              <span className="text-xl font-body font-bold text-gray-700">
                {catagory ? catagory : "Species"}
              </span>
              <FontAwesomeIcon
                icon="fa-solid fa-angle-down"
                className={
                  isHidden
                    ? "text-xl text-gray-700 transition transform rotate-0 ease-in-out duration-300"
                    : "text-xl text-gray-700 transition transform rotate-180 ease-in-out duration-300 "
                }
              />
            </div>

            {/* dropdown list  */}
            <div
              className={
                isHidden
                  ? "hidden"
                  : "border-2 border-gray-300 top-12 shadow-xl absolute z-30"
              }
            >
              <p
                onClick={() => {
                  setCatagory("");
                  setIsHidden(true);
                }}
                className="text-lg font-body font-semibold bg-white border-1 border-gray-300 text-center text-nowrap text-gray-800 cursor-pointer py-2 px-13 hover:bg-gray-400"
              >
                All
              </p>
              <p
                onClick={() => {
                  setCatagory("Endangered");
                  setIsHidden(true);
                  setCurrentPage(1);
                }}
                className="text-lg font-body font-semibold bg-white border-1 border-gray-300 text-center text-nowrap text-gray-800 cursor-pointer py-2 px-13 hover:bg-gray-400"
              >
                Endangered
              </p>
              <p
                onClick={() => {
                  setCatagory("Vulnerable");
                  setIsHidden(true);
                  setCurrentPage(1);
                }}
                className="text-lg font-body font-semibold bg-white border-1 border-gray-300 text-center text-nowrap text-gray-800 cursor-pointer py-2 px-13 hover:bg-gray-400"
              >
                Vulnerable
              </p>
              <p
                onClick={() => {
                  setCatagory("Least Concern");
                  setIsHidden(true);
                  setCurrentPage(1);
                }}
                className="text-lg font-body font-semibold bg-white border-1 border-gray-300 text-center text-nowrap text-gray-800 cursor-pointer py-2 px-13 hover:bg-gray-400"
              >
                Least Concern
              </p>
              <p
                onClick={() => {
                  setCatagory("Near Threatened");
                  setIsHidden(true);
                  setCurrentPage(1);
                }}
                className="text-lg font-body font-semibold bg-white border-1 border-gray-300 text-center text-nowrap text-gray-800 cursor-pointer py-2 px-13 hover:bg-gray-400"
              >
                Near Threatened
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* main content section  */}
      <div className="p-10 w-full h-auto my-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {currentCard.map((Wdata) => {
          return (
            <Cards
              key={Wdata.id}
              className="transform transition-all duration-300 ease-in-out hover:scale-120 hover:shadow-3xl hover:z-10"
            >
              {/* background image div */}
              <div
                style={{ backgroundImage: `url('${Wdata.imageUrl}')` }}
                className="absolute w-full h-full bg-cover bg-center rounded-lg"
              >
                {/* overlay div  */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20 rounded-lg"></div>
              </div>
              <div className="relative z-10 p-6 space-y-1 group-hover:text-hidden">
                <h1 className="text-white font-heading text-xl">
                  Name :
                  <span className="font-body text-lg ps-5">{Wdata.name}</span>
                </h1>
                <h1 className="text-white font-heading text-xl">
                  Species :
                  <span className="font-body text-lg ps-5">
                    {Wdata.species}
                  </span>
                </h1>
                <h1 className="text-white font-heading text-xl">
                  Habitat :
                  <span className="font-body text-lg ps-5">
                    {Wdata.habitat}
                  </span>
                </h1>
                <h1 className="text-white font-heading text-xl">
                  Diet :
                  <span className="font-body text-lg ps-5">{Wdata.diet}</span>
                </h1>
                <h1 className="text-white font-heading text-xl">
                  Status :
                  <span className="font-body text-lg ps-5">{Wdata.status}</span>
                </h1>
                <h1 className="text-white font-heading text-xl">
                  LifeSpan (years) :
                  <span className="font-body text-lg ps-5">
                    {Wdata.lifespan}
                  </span>
                </h1>
                <h1 className="text-white font-heading text-xl">
                  Weight (in kgs) :
                  <span className="font-body text-lg ps-5">{Wdata.weight}</span>
                </h1>
                <h1 className="text-white font-heading text-xl">
                  Height (in meters) :
                  <span className="font-body text-lg ps-5">{Wdata.height}</span>
                </h1>
                <h1 className="text-white font-heading text-xl">
                  Speed (in KM) :
                  <span className="font-body text-lg ps-5">{Wdata.speed}</span>
                </h1>
              </div>
            </Cards>
          );
        })}
      </div>

      {/* Pagination based on component length  */}
      {WildlifeData.length > 0 && (
        <div
          id="pagination"
          className="flex justify-center flex-nowrap text-xl  mt-5 space-x-5 font-heading font-semibold mb-10"
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
          <span className="text-black transform translate scale-140 ease-in-out duration-300">
            {currentPage} / {TotalPage}
          </span>
          <span>
            <FontAwesomeIcon
              icon="fa-solid fa-angle-right"
              className={
                currentPage !== TotalPage
                  ? "text-gray-400 hover:text-black hover:transform hover:scale-130 hover:duration-300 cursor-pointer"
                  : "opacity-0"
              }
              onClick={() => selectPageHandle(currentPage + 1)}
            />
          </span>
        </div>
      )}
    </>
  );
};

export default Wildlife;
