import Image from "next/image";
import logo from "@/app/assets/Logo.png";

const Navbar = () => {
  return (
    <>
      <div className="w-[1920px] h-[92px] pt-[140px] pb-[140px] pr-[220px] pl-[220px] bg-[#043873] flex justify-between">
        <div className="w-[191px] h-[34px] flex">
          <Image src={logo} alt="" />
        </div>
        <div className="w-[737.5px] h-[60px] justify-between items-center">
          <div className="W-[549px] h-[23px] ">
            <ul className="flex flex-row justify-between text-white m-2 font-medium">
              <li>Products</li>
              <li>Solution</li>
              <li>Resources</li>
              <li>Pricing</li>
            </ul>
          </div>
        </div>
        <div className="w-[126px] h-[60px]">
          <button className="px-10 py-4 rounded-lg bg-[#FFE492]">Login</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
