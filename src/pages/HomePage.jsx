import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Main from "../components/Main";
import RunningBrand from "../components/RunningBrand";
import IconPage from "../components/IconPage";
import BestSeller from "../components/BestSeller";
import LaptopModel from "../components/LaptopModel";
import TrendingModel from "../components/TrendingModel";
import MoreDevice from "../components/MoreDevice";
import Accessories from "../components/Accessories";


const HomePage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  });

  return (
    <div className="">
      <div data-aos="+">
        <Main />
      </div>
      

      <div data-aos="" className=" relative">
        <IconPage />
      </div>

      <div data-aos="fade-up">
        <RunningBrand />
      </div>

      <div
        className="flex items-center justify-center my-[100px]"
        data-aos="fade-up"
      >
        <BestSeller />
      </div>

      <div data-aos="fade-up">
        <LaptopModel />
      </div>

      <div className="mb-20" data-aos="fade-up">
        <TrendingModel />
      </div>

      <div className="flex items-center justify-center" data-aos="fade-up">
        <MoreDevice />
      </div>

      <div
        className="mb-36 flex items-center justify-center"
        data-aos="fade-up"
      >
        <Accessories />
      </div>
    </div>
  );
};

export default HomePage;
