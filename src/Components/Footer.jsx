import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#111F35] max-w-screen flex flex-col justify-center gap-10 py-18">
        {/* Website name appears in the middle section */}
        <div id="footer-logo" className="flex flex-col justify-center">
          <h1 className="font-heading font-semibold text-white text-2xl text-center">
            Guardians Of Wildlife.
          </h1>
          <p className="font-body font-medium text-white text-sm text-center">
            Protect Wildlife, Preserve Life
          </p>
        </div>

        {/* quote line for the website section*/}
        <div
          id="quotes"
          className="flex flex-col justify-center items-center gap-4"
        >
          <h1 className="font-heading text-2xl text-white font-semibold">
            Our Vision
          </h1>
          <p className="font-body text-lg text-white font-medium px-10 text-center">
            We're in the process of bringing about the extinction of all of the
            species we most care about — including our own.
          </p>
        </div>

        {/* Socal media links section  */}
        <div
          id="social-media"
          className="flex flex-col justify-center items-center gap-4"
        >
          <h1 className="font-heading text-2xl text-white font-semibold">
            Social Media
          </h1>
          <div className="flex gap-4">
            <a href="#">
              <FontAwesomeIcon
                icon="fa-brands fa-facebook"
                className="text-white text-lg border rounded-full p-2"
              />
            </a>
            <a href="#">
              <FontAwesomeIcon
                icon="fa-brands fa-twitter"
                className="text-white text-lg border rounded-full p-2"
              />
            </a>
            <a href="#">
              <FontAwesomeIcon
                icon="fa-brands fa-instagram"
                className="text-white text-lg border rounded-full p-2"
              />
            </a>
            <a href="#">
              <FontAwesomeIcon
                icon="fa-brands fa-linkedin"
                className="text-white text-lg border rounded-full p-2"
              />
            </a>
          </div>
        </div>

          {/* pages links and message form  */}
        <div className="md:flex md:justify-around md:px-10 md:overflow-x-hidden md:items-center">
          {/* all pages link section  */}
          <div id="container" className="flex justify-around gap-10 flex-1">
            <div
              id="pages-container"
              className="flex flex-col gap-4 text-start"
            >
              <h1 className="font-heading text-2xl text-white font-semibold">
                Pages
              </h1>
              <div className="text-start">
                <ul className="flex flex-col gap-3">
                  <NavLink to="/" className={({isActive}) => isActive ? 'font-body text-white underline underline-offset-4 text-md hover:text-[#ECE7D1]' : 'font-body text-white text-md hover:text-[#ECE7D1]'}>
                    Home
                  </NavLink>
                  <NavLink to="/Wildlife" className={({isActive}) => isActive ? 'font-body text-white underline underline-offset-4 text-md hover:text-[#ECE7D1]' : 'font-body text-white text-md hover:text-[#ECE7D1]'}>
                    Wildlife
                  </NavLink>
                  <NavLink to="/Program" className={({isActive}) => isActive ? 'font-body text-white underline underline-offset-4 text-md hover:text-[#ECE7D1]' : 'font-body text-white text-md hover:text-[#ECE7D1]'}>
                    Programs
                  </NavLink>
                  <NavLink to="/blog" className={({isActive}) => isActive ? 'font-body text-white underline underline-offset-4 text-md hover:text-[#ECE7D1]' : 'font-body text-white text-md hover:text-[#ECE7D1]'}>
                    Blogs
                  </NavLink>
                  <NavLink to="/join-our-team" className={({isActive}) => isActive ? 'font-body text-white underline underline-offset-4 text-md hover:text-[#ECE7D1]' : 'font-body text-white text-md hover:text-[#ECE7D1]'}>
                    Join Our Team
                  </NavLink>
                  <NavLink to="/contact-us" className={({isActive}) => isActive ? 'font-body text-white underline underline-offset-4 text-md hover:text-[#ECE7D1]' : 'font-body text-white text-md hover:text-[#ECE7D1]'}>
                    Contact Us
                  </NavLink>
                </ul>
              </div>
            </div>

            {/* queries details for contact  */}
            <div id="queries" className="text-start">
              <h1 className="font-heading text-2xl text-white font-semibold">
                Queries
              </h1>
              <p className="font-body text-white text-sm pt-3">Mail us at: </p>
              <span className="font-body text-white text-xs">
                example@guardiansofwildlife.org
              </span>
              <p className="font-body text-white text-sm pt-4">Call us at: </p>
              <span className="font-body text-white text-xs">
                +91 1234567890, +01 2736535177
              </span>
              <p className="font-body text-white text-sm pt-4">For Media:</p>
              <span className="font-body text-white text-xs">
                media@guardiansofwildlife.org
              </span>
            </div>
          </div>

          {/* Form for leave message  */}
          <div
            id="message-form"
            className="bg-[#213C51] rounded-xl flex flex-col pt-10 pb-15 px-10 mx-6 mt-10 md:w-auto lg:w-2xl"
          >
            <form action="">
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="text"
                  name="floating_name"
                  id="floating_name"
                  className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-default-medium border-[#6594B1] appearance-none focus:outline-none focus:ring-0 focus:border-white peer"
                  placeholder=" "
                  required
                />
                <label
                  for="floating_email"
                  className="absolute font-body text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                >
                  Name
                </label>
              </div>

              <div className="relative z-0 w-full mb-5 mt-3 group">
                <input
                  type="email"
                  name="email"
                  id="floating_email"
                  class="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-default-medium border-[#6594B1] appearance-none focus:outline-none focus:ring-0 focus:border-white peer"
                  placeholder=" "
                  required
                />
                <label
                  for="message"
                  class="absolute font-body text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                >
                  Email
                </label>
              </div>

              <div className="relative z-0 w-full mb-5 mt-3 group">
                <textarea
                  id="message"
                  rows="4"
                  className="bg-neutral-secondary-medium border-2 border-default-medium border-[#6594B1] text-sm text-white rounded-base focus:ring-brand focus:outline-none focus:border-white block w-full p-3.5 shadow-xs placeholder:text-body"
                  placeholder="Your Message for us ...."
                ></textarea>
              </div>

              {/* checkbox for terms and condition  */}
              <div className="flex items-start mb-4 mt-3">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  className="w-8 h-8 border-2 border-default-medium border-[#6594B1] rounded-xs focus:ring-2 focus:ring-brand-soft"
                />
                <label
                  for="default-checkbox"
                  className="font-body select-none ms-2 text-sm font-medium text-white"
                >
                  By submitting this form, I agree to the collection and use my
                  personla dataas per the privacy Policy for marketing purpose.
                </label>
              </div>

              {/* form submitt button  */}
              <div className="absolute right-0 px-10 md:px-20">
                <button
                  type="button"
                  className="text-white font-body bg-transparent border-2 border-[#111F35] px-8 py-2 rounded-full hover:bg-[#111F35] hover:border-2 hover:border-[#6594B1] hover:duration-600"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* terms and condition  */}
        <div id="terms_condition">
          <p className="font-body text-white text-sm text-center py-4 md:mt-10">
            &copy; {new Date().getFullYear()} Guardians of Wildlife. All rights
            reserved.
          </p>
          <div className="flex gap-3 justify-center font-body text-white font-sm">
            <p className="font-body">
              <a href="#">Terms & Conditions</a>
            </p>
            <p className="font-body">
              <a href="#">Privacy Policy</a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
