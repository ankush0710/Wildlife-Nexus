import React from 'react';
import {Routes, Route} from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import {faInstagram, faFacebook, faTwitter, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {faCheck, faAngleDown} from '@fortawesome/free-solid-svg-icons';
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Dashboard from "./Pages/Dashboard";
import Wildlife from "./Pages/Wildlife";
import JoinTeam from "./Pages/JoinTeam";
import ContactUs from "./Pages/ContactUs";
import Program from "./Pages/Program";

function App() {
  library.add(faInstagram, faFacebook, faTwitter, faLinkedin, faCheck, faAngleDown);
  return (
    <>
      <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard/>}/>
          <Route path="/Home" element={<Dashboard/>}/>
          <Route path="/Join Our Team" element={<JoinTeam/>}/>
          <Route path="/Wildlife" element={<Wildlife/>}/>
          <Route path="/ContactUs" element={<ContactUs/>}/>
          <Route path="/Program" element={<Program />} />
        </Routes>
      <Footer />
    </>
  )
}

export default App
