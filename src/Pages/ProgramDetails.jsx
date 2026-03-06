import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from "react-redux";

const PrgramDetails = () => {
    const {id} = useParams();
    const ProgramData = useSelector((state)=>state.ProgramData);

    const ProgramDetails = ProgramData.find((data)=>data.id === Number(id));

    if(!ProgramDetails){
        return(
            <div className="w-full my-10 text-center">
        <p className="font-body text-lg">Oops Something Went Wrong...</p>
      </div>
        )
    }
    return(
        <>
        <div id='container' className='w-full h-screen'>
            {/* header section  */}
             <div id='heading' className='text-black'>{ProgramDetails.programName}</div>

             {/* description section  */}
             <div id='sub_conatainer'>

                {/* main description  */}
                <div id='description'></div>

                {/* image and others details  */}
                <div id='image_and_details'></div>
             </div>
        </div>
        </>
    )
}

export default PrgramDetails