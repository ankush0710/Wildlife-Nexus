import React, {useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { FetchGovProgramData } from "../redux/action/action";
import bgImage from "../assets/Giant-panda.webp";

const JoinTeam = () => {
    const dispatch = useDispatch();
    const govProgram = useSelector((state) => state.GovProgram);

  //disppatch the funtion and render the data
    useEffect(()=>{
        dispatch(FetchGovProgramData());
    }, [dispatch]);
  return (
    <>
    {/* bg -image and intro of page  */}
      <div id="bg-image" className="w-full min-h-screen">
        <div
          id="banner-image"
          style={{ backgroundImage: `url('${bgImage}')` }}
          className="absolute top-0 w-full min-h-screen z-0 overflow-hidden bg-no-repeat bg-cover bg-center flex items-center justify-center"
        >
          <div className="bg-black absolute inset-0 opacity-50"></div>
          <div className="absolute z-10 inset-0 top-1/2 space-y-4">
            <h1 className="text-4xl text-center text-[#44A194] font-heading font-bold md:text-7xl">
              Join Our Team
            </h1>
          </div>
        </div>
      </div>

      {/* carausal section for goverment initiatives and Program  */}
      <div id="gov-carousal">
        
      </div>
    </>
  );
};

export default JoinTeam;

// https://sheet2api.com/v1/LZ3hk9ALR3i2/goverment_initiatives
