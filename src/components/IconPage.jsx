import React from "react";
import { SlScreenSmartphone } from "react-icons/sl";
import { FaTabletAlt } from "react-icons/fa";
import { BsSmartwatch } from "react-icons/bs";
import { MdLaptopMac } from "react-icons/md";
const IconPage = () => {
  return (
    <div className="bg-[#009639] w-full text-white cursor-pointer  flex py-2 items-center justify-center space-x-10">
      <div className="  group  flex flex-col items-center justify-center">
        <SlScreenSmartphone className=" group text-4xl group-hover:scale-125  duration-500 " />
        <p className=" text-sm mt-1 group-hover:text-yellow-600">phone</p>
      </div>
      <div className=" group flex flex-col items-center justify-center">
        <FaTabletAlt className=" text-4xl group-hover:scale-125  duration-500"/>
        <p className=" text-sm mt-1 group-hover:text-yellow-600">Tablets</p>
      </div>
      <div className=" group flex flex-col items-center justify-center">
        <BsSmartwatch className=" text-4xl group-hover:scale-125  duration-500"/>
        <p className=" text-sm mt-1 group-hover:text-yellow-600">Watchs</p>
      </div>
      <div className="group flex flex-col items-center justify-center">
        <MdLaptopMac className=" text-4xl group-hover:scale-125  duration-500"/>
        <p className=" text-sm mt-1 group-hover:text-yellow-600">Laptops</p>
      </div>
    </div>
  );
};

export default IconPage;
