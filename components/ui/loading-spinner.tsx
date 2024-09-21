import React from "react";
// border: 2px solid;

// border-image-source: conic-gradient(from 95.5deg at 50% 50%, #000000 0deg, rgba(0, 0, 0, 0) 93.17deg, rgba(0, 0, 0, 0) 127.46deg, #000000 360deg);

const LoadingSpinner = () => {
  return (
    <div
      role="loading-animation"
      className="rounded-full w-5 h-5 relative bg-gradientE animate-spin"
    >
      <div className="absolute m-auto inset-0 bg-white w-[15px] h-[15px] rounded-full"></div>
    </div>
  );
};

export default LoadingSpinner;
