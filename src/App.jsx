import React from 'react';
import {Routes, Route} from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import {faInstagram, faFacebook, faTwitter, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {faCheck, faAngleDown, faArrowDown, faArrowRight, faQuoteLeft, faQuoteRight, faAngleRight, faAngleLeft, faHandPointLeft} from '@fortawesome/free-solid-svg-icons';
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Dashboard from "./Pages/Dashboard";
import Wildlife from "./Pages/Wildlife";
import JoinTeam from "./Pages/JoinTeam";
import ContactUs from "./Pages/ContactUs";
import Program from "./Pages/Program";
import ProgramDetails from "./Pages/ProgramDetails";
import Blog from "./Pages/Blog";

function App() {
  library.add(faInstagram, faFacebook, faTwitter, faLinkedin, faCheck, faAngleDown, faArrowDown, faArrowRight, faQuoteLeft, faQuoteRight, faAngleRight, faAngleLeft, faHandPointLeft);

  return (
    <>
      <div className='flex flex-col min-h-screen'>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard/>}/>
          <Route path="/Home" element={<Dashboard/>}/>
          <Route path="/join-our-team" element={<JoinTeam/>}/>
          <Route path="/Wildlife" element={<Wildlife/>}/>
          <Route path="/contact-us" element={<ContactUs/>}/>
          <Route path="/Program" element={<Program />} />
          <Route path="/Program/:id" element={<ProgramDetails />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      <Footer />
      </div>
    </>
  )
}

export default App
