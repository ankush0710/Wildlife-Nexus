import React, { useEffect, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FetchWildlifeData } from "../redux/action/action";
import Cards from "../Components/Cards";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Wildlife = () => {
  const dispatch = useDispatch();
  const WildlifeData = useSelector((state) => state.WildlifeData);
  const [currentPage, setCurrentPage] = useState(1);
  const [cardPerPage, setCardPerPage] = useState(9);

  useEffect(() => {
    dispatch(FetchWildlifeData());
  }, [WildlifeData]);

  //method for displaying 8 cards in md devices and 9 cards in lg devices
  useEffect(()=>{
    if(window.innerWidth >= 1024){
      setCardPerPage(9);
    }
    else if(window.innerWidth >= 768){
      setCardPerPage(8);
    }
  })

  //pagination logic start here
  const currentCard = useMemo(() => {
    const lastIndex = currentPage * cardPerPage;
    const startIndex = lastIndex - cardPerPage;
    return WildlifeData.slice(startIndex, lastIndex);
  }, [currentPage, cardPerPage]);

  // total number of pages will display 
  const TotalPage = Math.ceil(WildlifeData.length / cardPerPage);

  const selectPageHandle = (selected) => {
    if (
      selected >= 1 &&
      selected !== currentPage &&
      selected <= TotalPage
    ) {
      setCurrentPage(selected);
    }
  };

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
      <div className="w-full h-auto my-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {currentCard.map((Wdata) => {
          return (
            <Cards key={Wdata.id}>
              {/* background image div */}
              <div
                style={{ backgroundImage: `url('${Wdata.imageUrl}')` }}
                className="absolute w-full h-full bg-cover bg-center rounded-lg"
              >
                {/* overlay div  */}
                <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
              </div>
              <div className="relative z-10 p-6 space-y-1 group-hover:text-hidden">
                <h1 className="text-white font-heading text-xl">
                  Name :{" "}
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
                  Speed (in kms) :
                  <span className="font-body text-lg ps-5">{Wdata.speed}</span>
                </h1>
              </div>
            </Cards>
          );
        })}
      </div>
      {WildlifeData.length > 0 && (
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
          {[...Array.from({length: TotalPage})].map((_, i) => {
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
