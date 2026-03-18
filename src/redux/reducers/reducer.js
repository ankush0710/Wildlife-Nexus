import React from 'react';
import {FETCH_BLOG_DATA, FETCH_PROGRAM_DATA, FETCH_WILDLIFE_DATA, FETCH_GOV_PROGRAM_DATA, FETCH_TEAM_DATA} from '../action/actionType';

const initialState = {
    //state variable for program data
    ProgramData : [],

    //state variable for blog data
    BlogData : [],

    //state variable for Wildlife data
    WildlifeData: [],

    //state variable for dashboard page
    DashboardData : [
    {
      id: 1,
      title: "Who We Are ?",
      description:
        "Guardians of Wildlife is an organization work as a dedicated steward focused on preserving biodiversity, safeguarding endangered species, and managing natural habitats against threats like poaching and climate change across the world. We continously working to protect our wildlife, our forest, our ecosystem as the human. ",
      image:
        "https://cdn.pixabay.com/photo/2024/05/23/10/41/dear-8782915_640.jpg",
    },
    {
      id: 2,
      title: "What We Serve ?",
      description:
        "We serve as an Guardians of Wildlife where we protect the plants and animal species as wildlife is a integral to the world's ecosystems, providing balance and stability to the nature's processes. National and international organizations like the World Wildlife Fund, Conservation International, the Wildlife Conservation Society, the United Nations and National Geographic itself work to support global animal and habitat conservation efforts on many different fronts.They work with the government to establish and protect public lands, like national parks and wildlife refuges.s. They help write legislation, such as the Endangered Species Act (ESA) of 1973 in the United States, to protect various species.",
      image:
        "https://cdn.pixabay.com/photo/2018/10/12/11/33/eagle-3741968_1280.jpg",
    },
    ],

     // state for slider images for carousal of founder section
    CarousalData: [
      {
        id: 1,
        image:"https://img.freepik.com/free-photo/confident-young-man-looking-determined-cross-arms-chest-wearing-orange-winter-sweater-standing-ag_1258-155306.jpg?semt=ais_rp_progressive&w=740&q=80",
        name: "Saurabh Sharma",
        position: "CEO, Founder of Gaurdians of Wildlife",
        message:
          "Wildlife conservation is essential to maintain ecosystem balance, protect biodiversity, and ensure a healthy planet for future generations by safeguarding habitats and endangered species. The core message is to protect natural habitats from destruction, combat species reduction caused by humans, and recognize that wildlife is a priceless treasure",
      },
      {
        id: 2,
        image:
          "https://as2.ftcdn.net/jpg/02/88/33/79/1000_F_288337966_NdtrgYYHMgPxvCu3mEPZZKuKecxVpXA2.jpg",
        name: "Dr. Abhinav Thakur",
        position: "Marketing Head, Co-founder of Gaurdians of Wildlife",
        message:
          "The human population has grown exponentially over the past 200 years, to more than eight billion humans as of November 2022, and it continues to rapidly grow. This means natural resources are being consumed faster than ever by the billions of people on the planet. This growth and development also endangers the habitats and existence of various types of wildlife around the world, particularly animals and plants that may be displaced for land development, used for food or other human purposes. Other threats to wildlife include the introduction of invasive species from other parts of the world, climate change, pollution, hunting, fishing and poaching.",
      },
    ],

    //state variable for nature and wildlife section
    InformationData : [
      {
        id: 1,
        message:
          "Nature is the foundation of life on Earth. Forests, rivers, oceans, and wildlife together create a delicate balance that supports all living beings, including humans. When we protect nature, we are ultimately protecting ourselves.",
      },
      {
        id: 2,
        message:
          "Wildlife plays a crucial role in maintaining ecological stability. Every species, from the smallest insect to the largest mammal, contributes to the health of ecosystems. They help in pollination, seed dispersal, controlling pests, and maintaining food chains. The loss of even a single species can disrupt this balance and lead to long-term environmental consequences.",
      },
      {
        id: 3,
        message:
          "Conservation of nature is also essential for combating climate change. Trees absorb carbon dioxide, regulate temperature, and provide oxygen. Healthy ecosystems act as natural buffers against disasters like floods, droughts, and storms.",
      },
      {
        id: 4,
        message:
          "Moreover, nature holds cultural, medicinal, and economic value. Many communities depend directly on forests and wildlife for their livelihoods. Preserving biodiversity ensures that future generations can continue to benefit from these resources.",
      },
    ],

    //state variable for climat change and wildlife section
    ClimateWildlifeData : [
         {
        id: 1,
        subHeading: "Habitat Loss and Changes",
        message:
          "Rising temperatures and shifting rainfall patterns can alter or destroy natural habitats",
        example: ["Forests may turn into grasslands or dry out.", "Wetlands can shrink or disappear.", "Melting ice affects species like polar animals that depend on cold environments."],
         },
      {
        id: 2,
        subHeading: "Migration and Movement",
        message:
          "Many animals migrate based on seasonal climate patterns. Changes in temperature or weather can:",
        example: ["Shift migration timing.", "Force animals to move to new areas.", "Cause conflicts when species enter human habitats."],
         },
      {
        id: 3,
        subHeading: "Extreme Weather Events",
        message:"Events like floods, droughts, wildfires, and storms are becoming more intense:",
        example: ["Destroy nests and habitats.", "Kill animals directly.", "Reduce long-term survival chances."],
         },
      {
        id: 4,
        subHeading: "Ocean Changes",
        message:
          "Climate change affects oceans through warming and acidification:",
        example: ["Coral reefs suffer (coral bleaching).", "Marine ecosystems become unstable."],
         },
    ],

    //state variable for core initiatives section
    Initiatives: [
        {
            id: 1,
            initiative: "Anti-Poaching Laws",
            description: ["Strict wildlife protection laws", "Forest guards and surveillance systems"],
        },
        {
            id: 2,
            initiative: "Protected Areas",
            description: ["National Parks", "Wildlife Sanctuaries", "Biosphere Reserves"],
        },
        {
            id: 3,
            initiative: "Awareness Campaigns",
            description: ["Educating people about wildlife protection"],
        },
        {
            id: 4,
            initiative: "Community Participation",
            description: ["Involving local people in conservation"],
        },
        {
            id:5,
            initiative: "Convention on International Trade in Endangered Species",
            description: ["Regulates trade of endangered species", "Prevents illegal wildlife trafficking"]
        },
        {
            id:6,
            initiative: "Green India Mission",
            description: ["Aims to increase forest cover", "Improves biodiversity and ecosystem balance"]
        }
    ],

    //state variable for goverment recognition
    recognitionData: [
        {
            id:1,
            leaderName: "Shri Narendra Modi",
            position: "Hon. Prime Minister Of India",
            imageUrl: "https://www.hindustantimes.com/ht-img/img/2024/03/08/550x309/ANI-20240308094-0_1709893371275_1709893704137.jpg",
            description: "Prime Minister Narendra Modi has emphasized that India’s wildlife conservation efforts are rooted in cultural tradition,, aiming for coexistence between ecology and economy. Key initiatives include the International Big Cat Alliance, the cheetah relocation project, and protecting habitats for tigers and lions, resulting in a thriving ecosystem",
        },
         {
            id:2,
            leaderName: "Donald. J Trump",
            position: "President Of The United States of America",
            imageUrl: "https://dims.apnews.com/dims4/default/f7c767a/2147483647/strip/true/crop/3000x2000+0+0/resize/599x399!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F9c%2F0c%2Fe000e408f5fe8cfb39dd62e2aff7%2F4c0ca452925f4db3b462836625024ec2",
            description: "Donald Trump's approach to wildlife conservation has generally focused on prioritizing economic development, energy production, and regulatory streamlining over the strict preservation of habitats. His administration's actions and statements often targeted the Endangered Species Act (ESA) and other environmental regulations, framing them as obstacles to growth",
        },
         {
            id:3,
            leaderName: "Vladmir Putin",
            position: "President Of Russian Federation",
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDd7yugwLVgKIbFfdOsejjVuwVWEUJ5-T_bw&s",
            description: "Vladimir Putin has frequently integrated wildlife conservation into his public image and political agenda, particularly focusing on the protection of endangered species in Russia's Far East, such as the Amur tiger, Siberian white cranes, and snow leopards.",
        },
         {
            id:4,
            leaderName: "Dr. Akinwumi Adesina's ",
            position: "President of African Devlopment ",
            imageUrl: "https://www.afdb.org/sites/default/files/1500-prst-receiving-abn-award.jpg",
            description: "Dr. Akinwumi Adesina, President of the African Development Bank (AfDB), approaches wildlife conservation and environmental stewardship through the lens of sustainable development, economic investment, and environmental stability. ",
        },
        {
            id:5,
            leaderName: "Carter Roberts",
            position: "CEO of World Wildlife Fund ",
            imageUrl: "https://c8.alamy.com/comp/2N4120P/actor-and-activist-leonardo-dicaprio-pauses-while-speaking-after-accepting-an-award-at-theclinton-global-citizen-awards-dinner-in-new-york-sunday-sept-21-2014-left-is-carter-roberts-president-and-ceo-of-world-wildlife-fund-who-presented-him-the-award-ap-photocraig-ruttle-2N4120P.jpg",
            description: "He details the steps WWF and partners have taken to reverse the global extinction of tigers and lessons learned that will help in preserving other endangered species for years to come",
        },
    ],

    //state variable for logos of all funding organization
    FundingData: [
        {
            id:1,
            logoUrl: "https://ard.wb.gov.in/assets/images/wbard_logo.png",
        },
        {
            id:2,
            logoUrl: "https://minfahd.gov.in/sites/default/files/2022-07/minfahd.png",
        },
        {
            id:3,
            logoUrl: "https://vishnuias.com/wp-content/uploads/2021/06/Untitled-design.jpg",
        },
        {
            id:4,
            logoUrl: "https://upload.wikimedia.org/wikipedia/commons/5/58/Flag-United-Nations-Logo.jpg",
        },
        {
            id:5,
            logoUrl: "https://media.telanganatoday.com/wp-content/uploads/2024/03/Vantara.png",
        },
        {
            id:6,
            logoUrl: "https://logowik.com/content/uploads/images/the-international-monetary-fund-imf2806.jpg",
        },
        {
            id:7,
            logoUrl: "https://images.squarespace-cdn.com/content/v1/671fdf20f8c6e262b41fdb46/871b81b4-93bd-4813-8d64-cb7e9d6a31c1/ICAW.png",
        },
        {
            id:8,
            logoUrl: "https://media.licdn.com/dms/image/v2/C4E0BAQHO2Xy54ZumXw/company-logo_100_100/company-logo_100_100/0/1635244775017/global_animal_law_gal_association_logo?e=2147483647&v=beta&t=TS36e2UpZJfYG30tjXfOEYxZ2Ck_ArVILgd_cEyVQ1g",
        },
        {
            id:9,
            logoUrl: "https://i.ytimg.com/vi/XceGrhIwZ2o/sddefault.jpg",
        },
        {
            id:10,
            logoUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSrgBO-avzkmGf-98iT6-P-M7jxuwLAXkKkA&s",
        } 
    ],

    //state variable for join our team page
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
            country: "Works Globally",
            bgImage: "https://thumbs.dreamstime.com/b/african-elephant-bull-walking-sand-road-wilderness-32046828.jpg"
        },
        {
            id:2,
            volunteer: "3000",
            country: "Works in India",
            bgImage: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Grosser_Panda.JPG"
        },
        {
            id:3,
            volunteer: "16,000",
            country: "Works in Other Country (USA, Africa, China, Italy, Russia)",
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