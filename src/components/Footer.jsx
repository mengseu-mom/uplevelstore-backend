import React from "react";
import Fblogo from "../assets/fblogo.jpg";
import Instalogo from "../assets/instalogo.jpg";
import Hrplogo from "../assets/hrplogo.png";
import Telelogo from "../assets/telelogo.jpg";
import Logo from "../assets/logo.png";

const Footer = () => {
  return (
    <div className="bg-gradient-to-t from-green-300 via-green-200 to-white flex flex-col items-center justify-center space-y-7 py-10 px-4">
      <div className="flex flex-col xl:flex-row justify-between w-full space-y-5 lg:w-9/12 xl:gap-96">
        {/* Logo and Social Media Section */}
        <div className="flex flex-col sm:flex-row gap-4">
          <img src={Logo} alt="UpLevel Store Logo" className="w-12 h-12" />
          <div className="space-y-3">
            <p className="text-2xl md:text-3xl text-[#009639] font-bold">UpLevel Store</p>
            <p className="text-sm text-gray-500">©2025 Up Level Store</p>
            <p className="text-sm text-gray-500">All rights reserved</p>
            <div className="flex space-x-3">
              <img src={Fblogo} alt="Facebook" className="w-8 h-8 md:w-10 md:h-10 rounded-full" />
              <img src={Instalogo} alt="Instagram" className="w-8 h-8 md:w-10 md:h-10 rounded-full" />
              <img src={Hrplogo} alt="HRP" className="w-8 h-8 md:w-10 md:h-10 rounded-full" />
              <img src={Telelogo} alt="Telegram" className="w-8 h-8 md:w-10 md:h-10 rounded-full" />
            </div>
          </div>
        </div>

        {/* Combined Navigation Links Section */}
        <div className="flex flex-wrap justify-start gap-x-12 gap-y-8">
          <div className="space-y-3 min-w-[150px]">
            <p className="text-xl md:text-2xl lg:text-3xl text-[#009639] font-bold">About Us</p>
            <p className="text-sm text-gray-500">Who We Are</p>
            <p className="text-sm text-gray-500">Contact Us</p>
            <p className="text-sm text-gray-500">Join Us</p>
          </div>
          
          <div className="space-y-3 min-w-[150px]">
            <p className="text-xl md:text-2xl lg:text-3xl text-[#009639] font-bold">SmartPhones</p>
            <p className="text-sm text-gray-500">Apple</p>
            <p className="text-sm text-gray-500">Samsung</p>
            <p className="text-sm text-gray-500">Infinix</p>
            <p className="text-sm text-gray-500">Vivo</p>
          </div>
          
          <div className="space-y-3 min-w-[150px]">
            <p className="text-xl md:text-2xl lg:text-3xl text-[#009639] font-bold">Laptops</p>
            <p className="text-sm text-gray-500">Asus ROG</p>
            <p className="text-sm text-gray-500">MSI Gaming</p>
          </div>
          
          <div className="space-y-3 min-w-[150px]">
            <p className="text-xl md:text-2xl lg:text-3xl text-[#009639] font-bold">Watches</p>
            <p className="text-sm text-gray-500">Apple Watch</p>
            <p className="text-sm text-gray-500">Galaxy Watch</p>
            <p className="text-sm text-gray-500">Vivo Watch</p>
          </div>
          
          <div className="space-y-3 min-w-[150px]">
            <p className="text-xl md:text-2xl lg:text-3xl text-[#009639] font-bold">Accessories</p>
            <p className="text-sm text-gray-500">PowerBanks</p>
            <p className="text-sm text-gray-500">Cases</p>
            <p className="text-sm text-gray-500">VGA</p>
            <p className="text-sm text-gray-500">Charging cable</p>
          </div>
        </div>
      </div>
      
      <hr className="w-full lg:w-9/12 h-1 bg-[#009639] border border-[#009639]" />
      
      <div className="w-full lg:w-9/12 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
        <p className="text-sm text-gray-500">
          UpLevel Store ©2025 Up Level Store{" "}
          <span className="text-[#009639] font-bold">All rights reserved</span>
        </p>
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
          <p className="text-gray-500 text-sm">Privacy Policy</p>
          <p className="text-gray-500 text-sm">Term of use</p>
          <p className="text-gray-500 text-sm">
            <span className="text-[#009639] font-bold">Location:</span>
            Cambodia(EN)
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;