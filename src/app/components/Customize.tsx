import React from "react";
import Image from "next/image";
import button3 from "../assets/Btn-3.png";
const Customize = () => {
  return (
    <>
        <div className="w-[1920x] h-[759px] pt-[140px] pb-[140px] pr-[220px] pl-[220px] bg-[#043873] flex justify-between items-center">
          <div className="w-[697px] h-[294px]">
            <h2 className="font-bold text-7xl text-white mb-6">
            Use as Extension
            </h2>
            <p className="font-normal text-lg text-white mb-16">
            Use the web clipper extension, available on Chrome and Firefox, to save web pages <br />
            or take screenshots as notes.
            </p>  
            <button className="w-[219px] h-[63px] rounded-lg bg-[#4F9CF9]">
              <Image src={button3} alt="" />
            </button>
          </div>
          <div className="w-[686px] h-[479px] bg-[#C4DEFD]"></div>
        </div>
    </>
  );
};

export default Customize;
