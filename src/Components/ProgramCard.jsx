import React from "react";

const ProgramCard = ({children}) => {
  return (
    <>
      <div
        id="program-card"
        className="w-contain h-auto mx-3 my-10 p-2 rounded-lg shadow-xl flex flex-col gap-5 items-center border border-gray-300 bg-[#ECE7D1] md:h-2xl md:flex md:flex-row md:items-start"
      >
        
       {children}
      </div>
    </>
  );
};

export default ProgramCard;
