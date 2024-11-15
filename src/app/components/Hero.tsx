import Image from "next/image";
import button1 from "../assets/Btn-free-trial.png";
const Hero = () => {
  return (
    <div className=" w-[1920px] h-[829px] py-[140px] px-[220px] top-[92px]  text-white flex justify-between items-center bg-[#043873]">
      <div className="w-[656px] h-[361px] gap-[60px]">
        <h2 className="font-bold text-[64px] leading-[77.45px] tracking-[-0.02em] mb-6">
          Get More Done with whitepace
        </h2>
        <p className="font-normal text-lg ">
          Project management software that enables your teams to collaborate,
          plan, analyze and manage everyday tasks
        </p>
        <button className="w-[219px] h-[63px] rounded-lg bg-[#4F9CF9] mt-12">
          <Image src={button1} alt="" />
        </button>
      </div>
      <div className="w-[824px] h-[549px] bg-[#C4DEFD]"></div>
    </div>
  );
};

export default Hero;
