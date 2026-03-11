import React from "react";

const Cards = ({children}) => {
  return (
    <>
      <div id="card" className="relative max-w-md h-86 border-2 border-black mx-3 rounded-xl group md:shrink-0 md:max-w-xl md:h-90">
        {children}
      </div>
    </>
  );
};

export default Cards;
