import Image from "next/image";
import button4 from "../assets/button4.png";
const Hero = () => {
  return (
  
      <div className=" w-[1920px] h-[574px] pt-[140px] pr-[220px] pb-[140px] pl-[220x] top-[4080px] bg-[#043873]">
        <div className="w-[1481px] h-[294px] gap-[60px] ml-[480px] ">
          <div className="w-[1064px] h-[171px] gap[24px] text-white">
            <h2 className="font-bold text-7xl mb-6">
            Your work, everywhere you are
            </h2>
            <p className="font-normal text-lg ">
            Access your notes from your computer, phone or tablet by synchronising with various services, including whitepace, Dropbox and OneDrive. The app is available on Windows, macOS, Linux, Android and iOS. A terminal app is also available!
            </p>
          </div>
          <div className="mt-12">
            <button className="w-[195px] h-[63px] rounded-lg bg-[#4F9CF9] ml-[450px]">
              <Image src={button4} alt="" />
            </button>
          </div>
        </div>
      </div>
  
  );
};

export default Hero;