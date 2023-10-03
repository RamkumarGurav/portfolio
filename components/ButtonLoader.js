import React from "react";

const ButtonLoader = () => {
  return (
    <p className="btn-loading ">
      <style jsx>
        {`
          .btn-loading {
            width: 1rem;
            height: 1rem;
            border-radius: 50%;
            border-bottom: 2px solid white;
            animation: loadingRotate 800ms linear infinite;
          }

          @keyframes loadingRotates {
            to {
              transform: rotate(360deg);
            }
          }
        `}
      </style>
    </p>
  );
};

export default ButtonLoader;
