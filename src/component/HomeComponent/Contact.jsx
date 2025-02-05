import {
  AiOutlineArrowRight,
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineClose,
} from "react-icons/ai";

import { SlLocationPin } from "react-icons/sl";
import state from "../../store";
import { useState } from "react";

import axiosInstance from "../../../Axios";
import ContactValidation from "./ContactValidation";

function Contact() {
  const [error, setError] = useState({});
  const [message, setMessage] = useState({
    name: "",
    email: "",
    contact: "",
    message: "",
  });

  const handleContact = (e) => {
    const { name, value } = e.target;

    setMessage({
      ...message,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let error = ContactValidation(message);
    setError(error);
    if (Object.keys(error).length == 0) {
      axiosInstance
        .post("message/send-contact", message)
        .then(
          () => (state.showContact = false)
      )
        .catch((err) => console.log(err));
    } else {
      console.log("Validation Error: ", error);
    }
  };

  return (
    <div className="fixed inset-0  left-auto right-auto h-screen w-full justify-center  flex items-center z-10 px-3">
      <div
        className={` w-full lg:w-[55rem] flex lg:flex-row flex-col-reverse shadow-emerald-200 h-[40rem] lg:h-[36rem] pb-3 contact-box-gradiant z-50 `}
      >
        <div className="inputVlues w-full lg:w-[50%] font-light text-white h-[50%] lg:pt-64 flex flex-col items-center justify-center gap-5 lg:px-10 px-5">
          <div className="flex flex-col w-full">
            <label className="text-sm  ">NAME</label>
            <input
              type="text"
              onChange={handleContact}
              name="name"
              className="bg-transparent border-b-[1px] focus:outline-none"
            />
            {error.name && (
              <p className="text-red text-sm px-1">{error.name}</p>
            )}
          </div>
          <div className="flex flex-col w-full">
            <label className="text-sm  ">EMAIL</label>
            <input
              type="text"
              onChange={handleContact}
              name="email"
              className="bg-transparent border-b-[1px] focus:outline-none"
            />
            {error.email && (
              <p className="text-red text-sm px-1">{error.email}</p>
            )}
          </div>
          <div className="flex flex-col w-full">
            <label className="text-sm  ">PHONE NUMBER</label>
            <input
              type="text"
              onChange={handleContact}
              name="contact"
              className="bg-transparent border-b-[1px] focus:outline-none"
            />
            {error.contact && (
              <p className="text-red text-sm px-1">{error.contact}</p>
            )}
          </div>
          <div className="flex flex-col w-full gap-2">
            <label className="text-sm  ">YOUR MESSAGE</label>
            <textarea
              type="text"
              onChange={handleContact}
              name="message"
              className="bg-transparent border-b-[1px] h-32 focus:outline-none "
            />
            {error.message && (
              <p className="text-red text-sm px-1">{error.message}</p>
            )}
          </div>
        </div>
        <div className="w-full lg:w-[50%] h-full text-white font-medium flex flex-col justify-center gap-5 lg:pt-16 lg:pr-10">
          <h1 className="text-3xl font-bold">Contact Us</h1>
          <p className="text-start">
            Our high-bandwidth infrastructure guarantees uninterrupted
            streaming, even during peak usage, so your audience never misses a
            moment.
          </p>
          <ul>
            <li className="flex justify-start items-center gap-2">
              <AiOutlineMail /> hello@skystreaming.com
            </li>
            <li className="flex justify-start items-center gap-2">
              <AiOutlinePhone /> +91 999-999-9999
            </li>
            <li className="flex justify-start items-center gap-2">
              <SlLocationPin /> Trivandrum, India
            </li>
          </ul>
          <button
            onClick={handleSubmit}
            className="flex justify-center hover:scale-105 transform items-center button-gradient px-10 text-lg py-3 max-w-fit"
          >
            Send <AiOutlineArrowRight />
          </button>
        </div>
        <div
          className="absolute right-7 hover:scale-105 transform top-5 cursor-pointer"
          onClick={() => (state.showContact = false)}
        >
          <AiOutlineClose fontSize="28px" className="text-white " />
        </div>
      </div>
    </div>
  );
}

export default Contact;
