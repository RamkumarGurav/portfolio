import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  BsFacebook,
  BsTwitter,
  BsYoutube,
  BsInstagram,
  BsGithub,
} from "react-icons/bs";

import { AiFillLinkedin } from "react-icons/ai";
import { RiInstagramFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";
import useSWRMutation from "swr/mutation";
import ButtonLoader from "./ButtonLoader";
import axios from "axios";

const Contact = () => {
  const [isBtnLoading, setIsBtnLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [msg, setMsg] = useState("");
  const initialStates = {
    name: "",
    email: "",
    message: "",
  };
  const [formValue, setFormValue] = useState(initialStates);
  const { name, email, message } = formValue;
  const handleChange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  async function fetcher(endpoint) {
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_SERVER_URL}${endpoint}`,
      formValue,
      { withCredentials: true }
    );
    return res.data;
  }

  const { data, isLoading, error, trigger } = useSWRMutation(
    "/portfolio-messages",
    fetcher,
    {
      onSuccess: (data) => {
        setIsBtnLoading(false);
        setShow(true);
        setFormValue(initialStates);
        setMsg(`Thank You for your response`);
      },
      onError: (err) => {
        setIsBtnLoading(false);
        setShow(true);
        console.log(err.response.data.message);
        setMsg("Something Went Wrong!, Try again ");
      },
    }
  );

  function handleSubmit(e) {
    e.preventDefault();
    setIsBtnLoading(true);
    trigger(formValue);
  }

  useEffect(() => {
    let delay;
    if (show) {
      delay = setTimeout(() => {
        setShow(false);
      }, 3000);
    }

    return () => {
      clearTimeout(delay);
    };
  }, [show]);

  return (
    <section id="contactme">
      <div className="flex items-center justify-center py-20">
        <div className="px-10 py-4 grid sm:grid-cols-2 place-content-center">
          <div className="contact-left pb-8">
            <h1 className="text-3xl font-semibold mb-10 text-white">
              Contact Me
            </h1>

            <div className="flex items-center gap-2 my-8 ">
              <MdEmail size={25} className="col-primary" />
              <span className="text-base text-white">
                {" "}
                ramkumarsgurav@gmail.com
              </span>
            </div>
            <div className="flex items-center gap-2">
              <BsTelephoneFill size={25} className="col-primary" />
              <span className="text-base text-white"> 8549065626</span>
              8549065626
            </div>

            <div className="social-icons">
              <a href="https://github.com/RamkumarGurav">
                <BsGithub size={25} />
              </a>
              <a href="https://www.linkedin.com/in/ramkumar-gurav-645585250/">
                <AiFillLinkedin size={25} />
              </a>
              <a href="https://twitter.com/Raamathecoder">
                <BsTwitter size={25} />
              </a>
              <a href="https://www.facebook.com/ram.gurav.79">
                <BsFacebook size={25} />
              </a>
            </div>
            {/* <a href="images/ramcircle.png" download className="btn btn2">
              Download CV
            </a> */}
          </div>
          <div className="contact-right">
            <form name="submit" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                id="Name"
                value={name}
                placeholder="Your Name"
                required
                onChange={handleChange}
              />

              <input
                type="email"
                name="email"
                id="email"
                value={email}
                placeholder="Your Email"
                onChange={handleChange}
                required
              />

              <textarea
                rows="6"
                placeholder="Your Message..."
                name="message"
                id="message"
                value={message}
                required
                onChange={handleChange}
              ></textarea>
              <button
                type="submit"
                className="bgx-primary rounded-md text-white text-base w-[150px] py-2 hover:bg-[#ff0051b9] flex items-center justify-center  uppercase"
              >
                Submit {isBtnLoading ? <ButtonLoader /> : null}
              </button>
              {show && (
                <div className="my">
                  <p
                    className={`my-2 px-2 bg-black  text-base ${
                      error ? "text-red-600" : "text-white"
                    }`}
                  >
                    {msg}
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
      <div className="py-4 bg-[#202020] flex justify-around items-center flex-wrap text-gray-300">
        <p>copyright &#169; 2023</p> <p>Designed by ramkumarsgurav</p>
      </div>
    </section>
  );
};

export default Contact;
