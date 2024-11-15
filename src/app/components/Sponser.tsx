import next from "next";
import Image from "next/image";
import sponser from "../assets/sponsors.png";

export default function Sponser() {
  return (
  
      <div className=" w-[1920px] h-[538px] pt-[140px] pr-[220px] pb-[140px] pl-[220x] top-[4654px] gap-[100px] ">
            <div className="w-[1482px] h-[87px] font-bold text-7xl ml-56  flex justify-center text-center ">
            Our sponsors
            </div>
            <div className="w-[1482px] h-[71px] mt-[100px] mr-[220px] mb-[140px] ml-56 mx-auto">
                <Image src={sponser} alt="Centered Image"/>
            </div>
        </div>
    )
}