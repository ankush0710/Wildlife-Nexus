import React from 'react';
import {FETCH_BLOG_DATA, FETCH_PROGRAM_DATA, FETCH_WILDLIFE_DATA, FETCH_GOV_PROGRAM_DATA, FETCH_TEAM_DATA} from '../action/actionType';

const initialState = {
    ProgramData : [],
    BlogData : [],
    WildlifeData: [],
    GovProgram: [],
    TeamData : [],
    RescueData : [
        {
            id:1,
            year: 2020,
            MarineSpecies: 180,
            WildlifeSpecies: 131,
            BirdsSpecies: 155,
        },
        {
            id:2,
            year: 2021,
            MarineSpecies: 200,
            WildlifeSpecies: 180,
            BirdsSpecies: 200,
        },
        {
            id:3,
            year:2022,
            MarineSpecies: 220,
            WildlifeSpecies: 180,
            BirdsSpecies: 200,
        },
        {
            id:4,
            year:2023,
            MarineSpecies: 240,
            WildlifeSpecies: 202,
            BirdsSpecies: 185,
             
        },
        {
            id:5,
            year:2024,
            MarineSpecies:260,
            WildlifeSpecies: 211,
            BirdsSpecies: 250,
        },
        {
            id:6,
            year:2025,
            MarineSpecies:300,
            WildlifeSpecies: 220,
            BirdsSpecies: 305,
        },
    ],

    CelebrityData : [
        {
            id:1,
            Name: "Mr. Anant Ambani",
            Position: "Chairman of Reliance Foundation and Founder of Vantara",
            Work: "Anant Ambani is deeply passionate about animal welfare, viewing it as a calling rather than a project, with a lifelong dedication to rescuing and rehabilitating animals. He founded Vantara, a massive 3,000-acre non-profit facility in Jamnagar, Gujarat, dedicated to providing high-quality medical care and natural, cage-free habitats for rescued animals",
            imageUrl: "https://img.etimg.com/thumb/width-1200,height-900,imgsize-1588499,resizemode-75,msid-123518912/news/india/sc-orders-probe-on-ambani-sons-wildlife-park-over-animal-mistreatment-allegations-vantara-says-will-extend-full-cooperation.jpg",
        },
        {
            id:2,
            Name: "Sachin Tendulkar",
            Position: "Ex-Captian of Indian Cricket Team",
            Work: "Sachin Tendulkar is a passionate wildlife enthusiast and advocate for animal welfare, frequently sharing his love for nature, particularly tigers, on social media. He supports conservation efforts, enjoys safaris in Indian national parks, and has promoted the adoption of stray animals.  Tendulkar has demonstrated his love for animals by adopting dogs, such as his Shepherdor, CoCo, and has used his platform to promote the adoption of strays.",
            imageUrl: "https://d3lzcn6mbbadaf.cloudfront.net/media/details/ANI-20250409074837.jpg",
        },
        {
            id:3,
            Name: "Lionel Messi",
            Position: "Football Player (G.O.A.T)",
            Work: "He interacted with rescued animals, fed elephants, and had a lion cub named 'Lionel' in his honor. Messi expressed admiration for the dedicated care and rescue operations provided to endangered species at the site. His reaction was the work as 'genuinely impressive' and supported the rehabilitation of creatures such as big cats, elephants, and reptiles.",
            imageUrl: "https://ss-i.thgim.com/public/incoming/v6p28d/article70404725.ece/alternates/FREE_1200/PTI12_16_2025_000651B.jpg",
        },
        {
            id:4,
            Name: "Giorgia Meloni",
            Position: "Prime Minister of Republic of Italy",
            Work: "Giorgia Meloni's government has taken a contradictory stance on animal issues, focusing on strict population control for wildlife while advancing animal welfare laws. Her administration authorized hunting wild boar in urban areas and tightened laws against animal cruelty, including banning puppy yoga, aimed at strengthening animal protection.",
            imageUrl: "https://c8.alamy.com/comp/2YFARTP/italian-premier-giorgia-meloni-pets-a-dog-during-the-celebrations-for-the-day-of-national-unity-and-the-armed-forces-at-the-altare-della-patria-monument-in-rome-monday-nov-4-2024-cecilia-fabianolapresse-via-ap-2YFARTP.jpg",
        }
    ],

    VolunteerData : [
        {
            id:1,
            volunteer: "20,000",
            bgImage: "https://thumbs.dreamstime.com/b/african-elephant-bull-walking-sand-road-wilderness-32046828.jpg"
        },
        {
            id:2,
            volunteer: "7000",
            bgImage: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Grosser_Panda.JPG"
        },
        {
            id:3,
            volunteer: "13,000",
            bgImage: "https://en.nabu.de/imperia/md/nabu/images/international/asien/230426-nabu-saiga-antelope-p-romanov.jpeg"
        },
    ]
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

        case FETCH_TEAM_DATA:
            return{
                ...state,
                TeamData: action.payload,
            }
            
        default:
            return state;
    }
}

export default reducer