//here I am created responsive navbar and all routes and link
import React from "react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { HiMiniBars2 } from "react-icons/hi2";
import { FaXmark } from "react-icons/fa6";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState(false);

  return (
    <>
      <nav
        className={
          isOpen
            ? "hidden"
            : "relative z-20 opacity-50 bg-[#111F35] w-80 py-3 px-6 rounded-full mx-auto my-10 md:w-2xl md:px-10 hover:opacity-100"
        }
      >
        <div id="navbar" className="flex justify-between items-center">
          {/* left side nav links  */}
          <div
            id="nav-links-left"
            className="hidden lg:flex items-center gap-4"
          >
            <NavLink to="/" className={({isActive})=>isActive?'font: font-body text-white underline underline-offset-4 text-md hover:text-[#ECE7D1]':'font: font-body text-white text-sm hover:text-[#ECE7D1]'}>
              HOME
            </NavLink>
            <NavLink to="/Program" className={({isActive})=>isActive?'font: font-body text-white underline underline-offset-4 text-md hover:text-[#ECE7D1]':'font: font-body text-white text-sm hover:text-[#ECE7D1]'}>
              PROGRAM
            </NavLink>
          </div>

          {/* Website name appears in the middle  */}
          <NavLink to="/">
            <div id="nav-logo" className="flex flex-col justify-center">
              <h1 className="font: font-heading font-semibold text-white text-xl text-center">
                Guardians Of Wildlife.
              </h1>
              <p className="font: font-body font-medium text-white text-xs text-center">
                Protect Wildlife, Preserve Life
              </p>
            </div>
          </NavLink>

          {/* right side nav links  */}
          <div
            id="navlinks-right"
            className="hidden lg:flex items-center gap-4"
          >
            <NavLink to="/join-our-team" className={({isActive})=>isActive?'font: font-body text-white underline underline-offset-4 text-md hover:text-[#ECE7D1]':'font: font-body text-white text-sm hover:text-[#ECE7D1]'}>
              JOIN OUR TEAM
            </NavLink>
            <NavLink to="/contact-us" className={({isActive})=>isActive?'font: font-body text-white underline underline-offset-4 text-md hover:text-[#ECE7D1]':'font: font-body text-white text-sm hover:text-[#ECE7D1]'}>
             CONTACT US
            </NavLink>
          </div>

          {/* For mobile view hammburger button will display*/}
          <button
            id="bars-button"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
            className={
              isOpen ? "hidden" : "block lg:hidden text-white cursor-pointer"
            }
          >
            <HiMiniBars2 size={30} />
          </button>
        </div>
      </nav>

      {/* links for mobile view */}
      {isOpen && (
        <div className="relative w-full h-screen bg-[#111F35] py-10 transition duration-600 ease-in-out lg:hidden">
          {/* close button only when click on hamburger button  */}
          <button className="absolute top-4 right-4 text-white hover:text-[#FFC300] transition duration-300 lg:hidden">
            <FaXmark size={30} onClick={() => setIsOpen(false)} />
          </button>

          {/* All pages names and link in mobile view  */}
          <div className="flex flex-col gap-8 items-center mt-10">
            <Link
              className="font: font-body text-white text-2xl font-medium hover:text-[#ECE7D1]"
              to="/"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              HOME
            </Link>
            <Link
              className="font: font-body text-white text-2xl font-medium hover:text-[#ECE7D1]"
              to="/Wildlife"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              WILDLIFE
            </Link>
            <Link
              className="font: font-body text-white text-2xl font-medium hover:text-[#ECE7D1]"
              to="/Program"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              PROGRAM
            </Link>
            <Link
              className="font: font-body text-white text-2xl font-medium hover:text-[#ECE7D1]"
              to="/join-our-team"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              JOIN OUR TEAM
            </Link>
            <Link
              className="font: font-body text-white text-2xl font-medium hover:text-[#ECE7D1]"
              to="/blog"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              BLOGS
            </Link>
            {/* <Link
              className="font: font-body text-white text-2xl font-medium hover:text-[#ECE7D1]"
              to="/about-us"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              ABOUT US
            </Link> */}
            <Link
              className="font: font-body text-white text-2xl font-medium hover:text-[#ECE7D1]"
              to="/contact-us"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              CONTACT US
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
