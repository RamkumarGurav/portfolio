import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div id="about" className="px-10 py-10">
      <div className="flex flex-col sm:flex-row items-start justify-around gap-10">
        <div className=" sm:w-[900px]">
          <Image
            src={"/ram-square-removebg-preview-2.png"}
            width={500}
            height={500}
            alt="photo"
            className="shadow-md  rounded-md"
          />
        </div>
        <div className="">
          <h1 className="text-4xl sm:text-[60px] text-white py-6">About Me</h1>
          <p className="poppins text-md">
            Hi I am Ramkumar Shrikant Gurav. I have a passion for developing
            scalable web applications and working across the full-stack.I am
            looking to join forces with Web Development technologies to continue
            to grow my skill set while contributing to the positive outcome of
            making people "richer,smarter, and happier."
          </p>
          <div className="tab-titles">
            <p className="tab-links border-b-2 border-b-[#ff004f]">Education</p>
          </div>
          <div className="tab-contents active-tab" id="skills">
            <ul>
              <li>
                <br />
                BE in ECE ,from JSS Academy of Technical Education Bengaluru
                560060.
                <br />
                cgpa: 8.02
              </li>
              <li>
                <br />
                PUC from Tungal PU Composite College JamaKhandi.
              </li>
            </ul>
          </div>
          <div className="tab-contents" id="education">
            <ul>
              <li>
                <span>2019</span>
                <br />
                BE in ECE ,from JSS Academy of Technical Education Bengaluru.
              </li>
              <li>
                <span>2015</span>
                <br />
                PUC from Tungal PU Composite College JamaKhandi.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
