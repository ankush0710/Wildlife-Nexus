import React from "react";

const Cards = ({children}) => {
  return (
    <>
      <div id="card" className="relative mx-3 w-auto h-86 border-2 border-black rounded-xl group md:shrink-0 md:max-w-xl md:h-90">
        {children}
      </div>
    </>
  );
};

export default Cards;
