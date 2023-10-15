// components/PDFDownloadButton.js

import React from "react";

const DownloadCard = ({ children }) => {
  return (
    <a
      href={`${children}`}
      download
      className="bgx-primary rounded-md text-white text-base w-[150px] py-2 hover:bg-[#ff0051b9] flex items-center justify-center  uppercase"
    >
      <button>Download PDF</button>
    </a>
  );
};

export default DownloadCard;
