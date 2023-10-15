import Link from "next/link";
import Image from "next/image";
import { BsCart4 } from "react-icons/bs";
import { BiUser } from "react-icons/bi";
import { FaGraduationCap } from "react-icons/fa";

import { HiMenu } from "react-icons/hi";
import { CgClose } from "react-icons/cg";
import { useState, useEffect } from "react";

import axios from "axios";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import Cookies from "js-cookie";

const Navbar = () => {
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <section
      id="navbar"
      className=" bg-black"
    >
      <nav className="bg-[#fff0]  shadow-md  w-full">
        <div className="py-5 px-[2vmax] lg:px-[4vmax]  flex flex-col gap-5 lg:flex-row lg:justify-between lg:items-center">
          <div className="flex justify-between items-center z-40 ">
            <Link
              href="/"
              className="text-xl  flex items-center font-bold rounded-2xl px-2 ubuntu text-[#fafafa] "
            >
              {/* MyExams.com */}
              {/* <FaGraduationCap size={29} className="ml-1" /> */}
              <Image src={"/rlogo1.png"} width={250} height={70} alt="logo" />
            </Link>

            {open ? (
              <CgClose
                size={30}
                color={"white"}
                onClick={handleOpen}
                className="visible lg:hidden cursor-pointer"
              />
            ) : (
              <HiMenu
                size={30}
                color={"white"}
                onClick={handleOpen}
                className="visible lg:hidden cursor-pointer"
              />
            )}
          </div>

          <div
            className={`flex pb-5 pt-5   text-white duration-500 ease-in-out  flex-col lg:gap-5 gap-10 absolute lg:static  ${
              open
                ? "bg-[#ff004f] lg:bg-black top-0 left-0 pl-[3vmax] w-[180px] pt-[35px] items-start shadow-md    h-[100vh] "
                : "top-0  left-[-100%] h-[100vh] "
            } lg:h-[100%]  lg:flex-row lg:justify-end lg:items-center  lg:w-[60%] lg:shadow-none z-[999] pt-[10px] lg:-0`}
          >
            {/* <div className="flex flex-col gap-5  lg:flex-row  lg:justify-center lg:items-center"> */}
            {/* <input
            type="text"
            placeholder="Search..."
            className="text-sm block w-60 px-3 py-1 mt-2 lg:mt-none bg-white text-gray-600 rounded-full shadow-sm placeholder-slate-500  border border-slate-300 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500
              
              "
          /> */}

            <Link
              href={"/"}
              className="text-md navlink lg:mx-10 lg:my-0 relative text-white hover:text-gray-200 duration-300 "
            >
              Home
            </Link>

            <Link
              href={"#contactme"}
              className="text-md navlink relative lg:mx-10 lg:my-0 text-white hover:text-gray-200 duration-300"
              scroll={false}
            >
              Downloads
            </Link>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
