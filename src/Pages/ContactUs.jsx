import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Accordian from "../Components/Accordians";

const ContactUs = () => {
  // local state for faq section
  const faqData = [
    {
      id: 1,
      question: "What is WildSphere ?",
      answer:
        "WildSphere is an organization which is certified by the goverment of 25+ independent countries. We continously work for the animal of different species of different region. We save their species. We care them to grow and save them from extinction.",
    },
    {
      id: 2,
      question: "How we Contact the Guardian of Wildlife Team ?",
      answer:
        "You can contact us via filling contact form or via email mentioned below and also you can can call us on mentioned number. We will available 24x7 for you help",
    },
    {
      id: 3,
      question: "What are the Operative Hours ?",
      answer:
        "We are avalaible 24x7 to help and resolve your problem. Our team is working very hard to save wildlife and contribute to our ecosystem.",
    },
    {
      id: 4,
      question: "Can I visit office for ?",
      answer:
        "Yes, You can also visit our office currently we have our office in 15+ countrie. Our headquater is located in Bangalore, India",
    },
    {
      id: 5,
      question: "Can I contact to the team in weekends or holidays ?",
      answer:
        "Yes, our team is working 365 days and 24x7 hrs. We fully try to save each and every life. Whatever the possible things we can do, we will do.",
    },
    {
      id: 6,
      question: "How much time it takes to revert back of query ?",
      answer:
        "Within 24 hrs we revert back to you. Sometime it may vary due to tarffic as we receives many call at same time.",
    },
  ];

  const [isSubmit, setIsSubmit] = useState(false);

  // This method is used to capture the input field
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    contactNumber: "",
    message: "",
    terms: false,
  };

  // this method is for validate the inpit field and display error message
  const validationSchema = Yup.object({
    firstName: Yup.string().required("* first name is required"),

    lastName: Yup.string().required("* last name is required"),

    email: Yup.string()
      .email("* Please enter valid email")
      .required("* email is required"),

    contactNumber: Yup.string().required("* please enter contact number"),

    message: Yup.string().required("* Please enter message"),

    terms: Yup.boolean().oneOf([true], "* Accept terms and conditions"),
  });

  // this method is to captured the input on click of a submit button
  const onSubmit = (values, { resetForm, setIsSubmit }) => {
    console.log("Contact Form Value:", values);

    setTimeout(() => {
      toast.success("Form submitting successfully");
      resetForm();
      setSubmitting(false);
    }, 1000);
  };

  return (
    <>
      {/* quote section for some quotes  */}
      <section id="quote-section">
        <div className="mb-10 border-t border-b border-gray-500 py-3 mx-10">
          <p className="text-[#406093] text-lg font-semibold leading-relaxed text-center md:text-2xl">
            <FontAwesomeIcon
              icon="fa-solid fa-quote-left"
              className="me-2 mb-2 text-blue-500 text-lg"
            />
            Every drop counts, every action matters. Our oceans, our
            responsibility.
            <FontAwesomeIcon
              icon="fa-solid fa-quote-right"
              className="ms-2 mb-2 text-blue-500 text-lg"
            />
          </p>
        </div>
      </section>

      <div id="container" className="relative md:flex md:justify-between">
        {/* address of offices in INDIA and LA  */}
        <div
          id="address_section"
          className="flex flex-col gap-10 mx-3 mt-10 md:flex-1 md:ms-8"
        >
          <h1 className="font-heading text-3xl font-bold text-center">
            Find Us
          </h1>
          <div
            id="card-1"
            className="h-lg max-w-xl bg-[#BED4CB] rounded-xl shadow-lg p-4"
          >
            <p className="font-body text-lg font-semibold pb-4">
              Benguluru Office
            </p>
            <p className="font-body text-md leading-8">
              Plot No. 31/2, Phase II, Electronics City, Bangalore, Karnataka
              560100.
            </p>
            <p className="font-body text-md leading-8">
              Contact -
              <span className="hover:border-b-2 hover:p-1 hover:cursor-pointer">
                +91-1234567890
              </span>
              .
            </p>
            <p className="font-body text-md leading-8">
              Location -
              <span className="px-1 hover:border-b-2 hover:p-1 hover:cursor-pointer">
                12.9722&deg;N
              </span>
              ,
              <span className="px-1 hover:border-b-2 hover:p-1 hover:cursor-pointer">
                79.5956&deg;E
              </span>
              .
            </p>
          </div>
          <div
            id="card-2"
            className="h-lg max-w-xl bg-[#BED4CB] rounded-xl shadow-lg p-4"
          >
            <p className="font-body text-lg font-semibold pb-4">
              Los Angeles Office
            </p>
            <p className="font-body text-md leading-8">
              {" "}
              300 South Spring Street, Room 12513, Los Angeles, CA 90013.
            </p>
            <p className="font-body text-md leading-8">
              Contact -
              <span className="hover:border-b-2 hover:p-1 hover:cursor-pointer">
                +01-2736535177
              </span>
              .
            </p>
            <p className="font-body text-md leading-8">
              Location -
              <span className="px-1 hover:border-b-2 hover:p-1 hover:cursor-pointer">
                12.9722&deg;N
              </span>
              ,
              <span className="px-1 hover:border-b-2 hover:p-1 hover:cursor-pointer">
                79.5956&deg;E
              </span>
              .
            </p>
          </div>
        </div>

        {/* contact form for contact details  */}
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ isValid, dirty, isSubmitting }) => (
            <div
              id="contact-form-container"
              className="relative mt-10 md:flex-1"
            >
              <h1 className="font-heading text-3xl font-bold text-center">
                Contact Us
              </h1>
              <div
                id="contact-form"
                className="bg-[#BED4CB] rounded-xl flex flex-col py-15 px-10 mx-3 my-10 relative md:w-auto lg:w-2xl md:shadow-lg"
              >
                <Form>
                  <div className="md:flex md:gap-4">
                    {/* input box for first name  */}
                    <div className="relative z-0 w-full mb-5 mt-3 group md:flex-1">
                      <Field
                        type="text"
                        name="firstName"
                        id="firstName"
                        className="block py-2.5 px-0 w-full text-md bg-transparent border-0 border-b-2 border-default-medium border-[#8A7650] appearance-none focus:outline-none focus:ring-0 focus:border-[#562F00] peer"
                        placeholder=""
                      />
                      <ErrorMessage
                        name="firstName"
                        component="div"
                        className="text-red-500 text-sm mt-1"
                      />
                      <label
                        htmlFor="firstName"
                        className="absolute font-body text-md text-[#8A7650] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                      >
                        First Name
                      </label>
                    </div>

                    {/* input box for last name  */}
                    <div className="relative z-0 w-full mt-3 group md:flex-1">
                      <Field
                        type="text"
                        name="lastName"
                        id="lastName"
                        className="block py-2.5 px-0 w-full text-md bg-transparent border-0 border-b-2 border-default-medium border-[#8A7650] appearance-none focus:outline-none focus:ring-0 focus:border-[#562F00] peer"
                        placeholder=""
                      />
                      <ErrorMessage
                        name="lastName"
                        component="div"
                        className="text-red-500 text-sm mt-1"
                      />
                      <label
                        htmlFor="lastName"
                        className="absolute font-body text-md text-[#8A7650] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                      >
                        Last Name
                      </label>
                    </div>
                  </div>

                  {/* input box for email  */}
                  <div className="relative z-0 w-full mb-5 mt-3 group">
                    <Field
                      type="email"
                      name="email"
                      id="email"
                      className="block py-2.5 px-0 w-full text-md bg-transparent border-0 border-b-2 border-default-medium border-[#8A7650] appearance-none focus:outline-none focus:ring-0 focus:border-[#562F00] peer"
                      placeholder=""
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                    <label
                      htmlFor="email"
                      className="absolute font-body text-md text-[#8A7650] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                    >
                      Email
                    </label>
                  </div>

                  {/* input box for contact number  */}
                  <div className="relative z-0 w-full mb-5 mt-3 group">
                    <Field
                      type="text"
                      name="contactNumber"
                      id="contactNumber"
                      className="block py-2.5 px-0 w-full text-md bg-transparent border-0 border-b-2 border-default-medium border-[#8A7650] appearance-none focus:outline-none focus:ring-0 focus:border-[#562F00] peer"
                      onInput={(e) =>
                        (e.target.value = e.target.value.replace(/[^0-9]/g, ""))
                      }
                      placeholder=""
                    />
                    <ErrorMessage
                      name="contactNumber"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                    <label
                      htmlFor="contactNumber"
                      className="absolute font-body text-md text-[#8A7650] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                    >
                      Contact Number
                    </label>
                  </div>

                  {/* message for query  */}
                  <div className="relative z-0 w-full mb-5 mt-3 group">
                    <Field
                      as="textarea"
                      id="message"
                      name="message"
                      rows="4"
                      className="bg-neutral-secondary-medium border-2 border-default-medium border-[#8A7650] text-md text-[#562F00] text-semibold trounded-base focus:ring-brand focus:outline-none focus:border-[#562F00] block w-full p-3.5 shadow-xs placeholder:text-body"
                      placeholder="Your Query for us ...."
                    />
                    <ErrorMessage
                      name="message"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>

                  {/* checkbox for terms and condition  */}
                  <div className="flex items-start mb-4 mt-3">
                    <Field
                      id="default-checkbox"
                      type="checkbox"
                      name="terms"
                      className="w-8 h-8 border-2 border-[#562F00] rounded-xs"
                    />
                    <label
                      htmlFor="default-checkbox"
                      className="font-body select-none ms-2 text-sm font-medium text-[#562F00]"
                    >
                      By submitting this form, I agree to the collection and use
                      my personla data as per the privacy Policy for marketing
                      purpose.
                    </label>
                    <ErrorMessage
                      name="terms"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>

                  {/* form submitt button  */}
                  <div className="absolute right-0 px-10">
                    <button
                      type="submit"
                      disabled={!(isValid && dirty) || isSubmitting}
                      className={`px-8 py-2 rounded-full font-semibold border-2 
                          ${
                            !(isValid && dirty)
                              ? "text-gray-500 font-semibold font-body bg-gray-300 border-2 border-gray-500 cursor-not-allowed"
                              : "text-[#8A7650] font-semibold font-body bg-transparent border-2 border-[#8A7650] px-8 py-2 rounded-full hover:text-[#562F00] hover:bg-[#8A7650] hover:border-2 hover:border-[#562F00] hover:duration-600"
                          }`}
                    >
                      {isSubmitting ? "Submitting..." : "Submit"}
                    </button>
                  </div>
                </Form>
              </div>
            </div>
          )}
        </Formik>

        {/* this successfull message will pop-up when form is submitted  */}
        {/* //Tost message when the user click on submitt */}
        <ToastContainer position="top-right" autoClose={3000} />
      </div>

      {/* line for seperation  */}
      <div className="border-1 border-gray-400 my-5 mx-3"></div>

      {/* some Frequentlt Asked Question to help user */}
      <div id="faq-container" className="mt-5">
        <h1 className="font-heading text-3xl font-bold text-center">
          Frequently Asked Questions
        </h1>
        <div className="m-10">
          <Accordian data={faqData} />
        </div>
      </div>
    </>
  );
};

export default ContactUs;
