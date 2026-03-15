import React from 'react';
import {FETCH_BLOG_DATA, FETCH_PROGRAM_DATA, FETCH_WILDLIFE_DATA, FETCH_GOV_PROGRAM_DATA} from '../action/actionType';

const initialState = {
    ProgramData : [],
    BlogData : [],
    WildlifeData: [],
    GovProgram: [],
}

const reducer = (state=initialState, action) => {

    // fetch the data from the api and store it in the localStorage
    switch(action.type) {
        case FETCH_PROGRAM_DATA:
            return {
                ...state,
                ProgramData: action.payload,
            };
        
        case FETCH_BLOG_DATA:
            return {
                ...state,
                BlogData: action.payload,
            };

        case FETCH_WILDLIFE_DATA:
            return {
                ...state,
                WildlifeData: action.payload,
            };

        case FETCH_GOV_PROGRAM_DATA:
            return{
                ...state,
                GovProgram: action.payload,
            }
            
        default:
            return state;
    }
}

export default reducer