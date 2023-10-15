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

const Footer = () => {
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
    <section id="footer"  className="bg-black">
     
      <div className="py-4 bg-[#202020] flex justify-around items-center flex-wrap text-gray-300">
        <p>copyright &#169; 2023</p> <p>Designed by ramkumarsgurav</p>
      </div>
    </section>
  );
};

export default Footer;
