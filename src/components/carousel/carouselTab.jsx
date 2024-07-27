import React from "react";

const CarouselTab = ({ img, movieName, description }) => {
  return (
    <div className="relative w-full h-[25rem] overflow-hidden">
      <img src={img} alt="" className="w-full object-cover"/>
      <div className="absolute inset-0 bg-gradient-to-r from-[#1d1d1dad] "></div>
      <div className="absolute top-[200px] left-[50px] h-[10rem] gap-4 pr-12">
        <h1 className="poppins font-semibold  text-white text-[36px]">
          {movieName}
        </h1>
        <span className="poppins font-normal text-white text-[16px] leading-7">
          {description}
        </span>
      </div>
    </div>
  );
};

export default CarouselTab;
