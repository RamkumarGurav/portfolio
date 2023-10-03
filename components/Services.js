import React from "react";
import { FaCode } from "react-icons/fa";
import { SiZend } from "react-icons/si";

const Services = () => {
  return (
    <div id="services" className="w-full mb-12">
      <div className="w-full">
      <h1 className="text-4xl text-white font-semibold  sm:text-[60px] mb-10 px-10 my-4">My Services</h1>
        <div className="services-list px-6 sm:px-20">
          <div>
            <FaCode size={35} color="white" className="mb-2" />
            <h1 className="text-white">Web Applications</h1>
            <p className="text-white">
              Ready to build the web applications as per your requirements using
              modern tools and libraries.
            </p>
          </div>
          <div>
            <SiZend size={35} color="white" className="mb-2" />
            <h1 className="text-white">UI/UX Design</h1>
            <p className="text-white">
              Ready to design modern User interfaces as per your requirements
              using modern tools and libraries.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
