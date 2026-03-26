import React, { Component } from "react";
import Navbar from "../Components/Navbar";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

// writing test case to check wether the compnent will router properly or not

const renderWithRouter = (component) => {
  return {
    ...render(<Router>{component}</Router>),
  };
};

describe("test cases for all routes of the navbar", () => {
  //test cases for checking dashboard page wil render properly or not
  it("should render dashboard page properly", () => {
    const { getByTestId } = renderWithRouter(<Navbar />);

    //test scenario
    const navbar = screen.getByTestId("navbar");
    const dashboard = screen.getByTestId("home");

    //expected result
    expect(navbar).toContainElement(dashboard);
  });

  //test cases for checking program page wil render properly or not
  it("should render program page properly", () => {
    const { getByTestId } = renderWithRouter(<Navbar />);

    //test scenario
    const navbar = screen.getByTestId("navbar");
    const program = screen.getByTestId("program");

    ///expected result
    expect(navbar).toContainElement(program);
  });

  //test cases for checking join our team page wil render properly or not
  it("should render join our team page properly", () => {
    const { getByTestId } = renderWithRouter(<Navbar />);

    //test scenario
    const navbar = screen.getByTestId("navbar");
    const joinOurTeam = screen.getByTestId("join-our-team");

    //expected result
    expect(navbar).toContainElement(joinOurTeam);
  });

  //test cases for checking contact us page wil render properly or not
  it("should render contact us page properly", () => {
    const { getByTestId } = renderWithRouter(<Navbar />);

    //test scenario
    const navbar = screen.getByTestId("navbar");
    const contactUs = screen.getByTestId("contact-us");

    //expected result
    expect(navbar).toContainElement(contactUs);
  });
});

describe("test case for onClick event on hamburger button", () => {
//test case for checking whether navbar of mobile view will open onClick of a hambuger button or not

it("test case for checking on click event of a button", ()=>{
    const {getByTestId} = renderWithRouter(<Navbar />);

    //test scenario
    const btn = screen.getByTestId("bars-button");
    fireEvent.click(btn);

    //expected result
    expect(screen.getByTestId("mobile-nav")).toBeInTheDocument();

})
});
