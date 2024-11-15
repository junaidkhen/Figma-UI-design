import next from "next";
import Image from "next/image";
import content from "../assets/Content.png";

export default function Footer() {
  return (
  
      <div className=" w-[1920px] h-[461px] pt-[140px] pr-[220px] pb-[140px] pl-[220x] top-[5195px] gap-[200px] bg-[#043873]">
            <div className="w-[1480px] h-[289px] gap-[100px] ml-64">
                <Image src={content} alt="" />
            </div>
        </div>
    )
}