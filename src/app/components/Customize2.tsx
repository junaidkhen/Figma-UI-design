import React from "react";
import Image from "next/image";
import button3 from "../assets/Btn-3.png";
const Customize2 = () => {
  return (
    <>
        <div className="w-[1920x] h-[812.09px] pt-[140px] pb-[140px] pr-[220px] pl-[220px] flex justify-between items-center">
        <div className="w-[714px] h-[532.09px] bg-[#C4DEFD]"></div>
          <div className="w-[697px] h-[294px]">
            <h2 className="font-bold text-7xl mb-6">
            Customise it <br />
            to your needs
            </h2>
            <p className="font-normal text-lg mb-16 text-balance">
            Customise the app  with  plugins,  custom themes and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API.
            </p>  
            <button className="w-[219px] h-[63px] rounded-lg bg-[#4F9CF9]">
              <Image src={button3} alt="" />
            </button>
          </div>
          
        </div>
    </>
  );
};

export default Customize2;
