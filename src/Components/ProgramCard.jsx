import React from "react";

const ProgramCard = ({children}) => {
  return (
    <>
      <div
        id="program-card"
        className= "bg-[#BED4CB] rounded-xl shadow-md p-4 h-full hover:shadow-xl hover:-translate-y-1 transition duration-300"
      >
        
       {children}
      </div>
    </>
  );
};

export default ProgramCard;
