import {FETCH_PROGRAM_DATA, FETCH_BLOG_DATA, FETCH_WILDLIFE_DATA, FETCH_GOV_PROGRAM_DATA} from "./actionType";
import axios from "axios";


// function for fetching program data 
export const FetchProgramData = () => {
    return async (dispatch) => {

        // data will come from api through axios and use redux-thunk middleware  
        try{
            const response = await axios.get("https://sheet2api.com/v1/FQT6wK8QRCyE/program");
            
            // dispach the data come from api 
            dispatch({
                type: FETCH_PROGRAM_DATA,
                payload: response.data,
            });
            
        }
        catch(error){
            console.log("program data error: ", error);
        }
    }
}


// function for fetching blog data 
export const FetchBlogData = () => {
    return async (dispatch) => {

        // data will come from api through axios and use redux-thunk middleware  
        try{
            const response = await axios.get("https://sheet2api.com/v1/FQT6wK8QRCyE/blog");
            
            // dispach the data come from api 
            dispatch({
                type: FETCH_BLOG_DATA,
                payload: response.data
            })
        }
        catch(error){
            console.log("blog data error: ", error);
        }

    }
}

//function for fetching the wildlife data
export const FetchWildlifeData = () => {
    return async (dispatch) => {

        //data will come from api through the axios and use redux-thunk middleware
        try{
            const response = await axios.get("https://sheet2api.com/v1/LZ3hk9ALR3i2/animal");

            // dispach the data come from api
            dispatch({
                type: FETCH_WILDLIFE_DATA,
                payload: response.data,
            })
        }
        catch(error){
            console.log("wildlife data error: ", error);
        }
    }
}

export const FetchGovProgramData = () => {
    return async(dispatch) => {

        //data will come from the api through axios and use redux thunk middlware
        try{
            const response = await axios.get("https://sheet2api.com/v1/LZ3hk9ALR3i2/goverment_initiatives");

            dispatch({
                type: FETCH_GOV_PROGRAM_DATA,
                payload: response.data,
            })
        }
        catch(error){
            console.log("FETCH_GOV_PROGRAM_DATA: ", FETCH_GOV_PROGRAM_DATA);
        }
    }
}