import React from "react";
import { FaFilePdf } from "react-icons/fa";
import { SiZend } from "react-icons/si";
import DownloadCard from "./DownloadCard";

const EnglsihMaterials = () => {
  return (
    <div id="downloads" className="min-h-[600px] bg-orange-300 py-10">
      <div className="w-full ">
        <div className="w-full">
          <h2 className="rounded-md  mx-10 py-4 pl-4  text-xl font-semibold nunito uppercase  sm:text-[30px] text-white bg-[#000000]">
            Spoken English Materials <br />
          </h2>

          <div className="pdfs-list px-6 sm:px-10">
            <div className="flex flex-col justify-between">
              <FaFilePdf size={35} color="white" className="mb-2" />
              <h4 className="text-white text-bold text-lg my-10">
                English conversation practices
              </h4>
              <DownloadCard>
                ./pdfs/english_conversation_practices.pdf
              </DownloadCard>
            </div>
            <div className="flex flex-col justify-between">
              <FaFilePdf size={35} color="white" className="mb-2" />
              <h4 className="text-white text-bold text-lg my-10">
                Practice Makes Perfect:English
              </h4>
              <DownloadCard>
                ./pdfs/English-Conversation-Premium.pdf
              </DownloadCard>
            </div>
            <div className="flex flex-col justify-between">
              <FaFilePdf size={35} color="white" className="mb-2" />
              <h4 className="text-white text-bold text-lg my-10">
                Everyday english practices
              </h4>
              <DownloadCard>./pdfs/everyday_english_practices.pdf</DownloadCard>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnglsihMaterials;
