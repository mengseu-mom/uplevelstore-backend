import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import PowerBank from "../assets/accessories/powerbank.png";
import Case from "../assets/accessories/case.png";
import Usbc from "../assets/accessories/usbc.png";
import Geforce from "../assets/accessories/geforce.png";

const Accessories = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: false,
    });
  }, []);

  return (
    <div className="w-9/12 h-[665px] mx-auto">
      <p
        className="text-[#009639] text-4xl font-bold text-center"
        data-aos="zoom-in-up"
      >
        Accessories
      </p>

      <div className="mt-16 flex space-x-2">
        {/* Left Column */}
        <div className="w-1/2 space-y-2">
          {/* Power Bank */}
          <div
            className="rounded-3xl group flex relative shadow bg-gradient-to-t from-green-200 via-green-200 to-white hover:from-yellow-400 hover:via-yellow-400 hover:to-yellow-300 hover:scale-98 transition-all duration-500"
            data-aos="zoom-in-up"
          >
            <div className="space-y-3 ml-10 mt-2 pt-4 py-10">
              <p className="text-2xl font-bold" data-aos="zoom-in-up">Magsafe</p>
              <p className="text-sm text-gray-500" data-aos="zoom-in-up">
                Phones can deliver up to 15W of Power
              </p>
              <p className="text-[#009639]" data-aos="zoom-in-up">200,000 | $50</p>
              <button
                className="bg-[#009639] text-white rounded-lg px-4 py-2 text-sm shadow focus:outline-none"
                data-aos="zoom-in-up"
              >
                Buy Now
              </button>
            </div>
            <div
              className="absolute -right-20 -bottom-8"
              data-aos="zoom-in-up"
              data-aos-delay="100"
            >
              <img
                src={PowerBank}
                alt="Magsafe Power Bank"
                className="w-[340px] h-[315px] group-hover:scale-105 transition duration-400"
              />
            </div>
          </div>

          {/* Case and USBC Row */}
          <div className="flex space-x-2">
            {/* iPhone Case */}
            <div
              className="w-1/2 group space-y-3 px-5 pb-4 inset-shadow-2xs rounded-3xl bg-gradient-to-t from-green-200 via-green-200 to-white hover:from-yellow-400 hover:via-yellow-400 hover:to-yellow-300 hover:scale-98 transition duration-500"
              data-aos="zoom-in-up"
            >
              <div className="flex items-center justify-center" data-aos="zoom-in-up">
                <img
                  src={Case}
                  alt="iPhone Case"
                  className="group-hover:scale-105 transition duration-400"
                />
              </div>
              <div className="space-y-3">
                <p className="text-2xl font-bold" data-aos="zoom-in-up">iPhone 16 Pro Max Case</p>
                <p className="text-sm text-gray-500" data-aos="zoom-in-up">Clear Case with MagSafe</p>
                <p className="text-[#009639]" data-aos="zoom-in-up">282,900 | $69</p>
                <button
                  className="bg-[#009639] text-white rounded-lg px-4 py-2 text-sm shadow focus:outline-none"
                  data-aos="zoom-in-up"
                >
                  Buy Now
                </button>
              </div>
            </div>

            {/* USB-C Cable */}
            <div className="w-1/2">
              <div
                className="group relative h-full space-y-3 w-full px-5 pt-6 inset-shadow-2xs rounded-3xl bg-gradient-to-t from-green-200 via-green-200 to-white hover:from-yellow-400 hover:via-yellow-400 hover:to-yellow-300 hover:scale-98 hover:duration-500"
                data-aos="zoom-in-up"
              >
                <div className="space-y-3">
                  <p className="text-2xl font-bold" data-aos="zoom-in-up">USBC 2M</p>
                  <p className="text-sm text-gray-500" data-aos="zoom-in-up">
                    Support IPhone and Android
                  </p>
                  <p className="text-[#009639]" data-aos="zoom-in-up">40,000.000 | $10</p>
                  <button
                    className="bg-[#009639] text-white rounded-lg px-4 py-2 text-sm shadow focus:outline-none"
                    data-aos="zoom-in-up"
                  >
                    Buy Now
                  </button>
                </div>
                <div
                  className="absolute top-18 -right-24 flex items-center justify-center"
                  data-aos="zoom-in-up"
                >
                  <img
                    src={Usbc}
                    alt="USB-C Cable"
                    className="group-hover:scale-103 duration-400"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: RTX Card */}
        <div className="w-1/2">
          <div
            className="h-full group inset-shadow-2xs rounded-3xl bg-gradient-to-t from-green-200 via-green-200 to-white hover:from-yellow-400 hover:via-yellow-400 hover:to-yellow-300 hover:scale-98 hover:duration-500"
            data-aos="zoom-in-up"
          >
            <div className="flex items-center justify-center -rotate-75" data-aos="zoom-in-up">
              <img
                src={Geforce}
                alt="GeForce RTX 5090"
                className="group-hover:scale-103 duration-400"
              />
            </div>
            <div className="space-y-3 pl-10 pt-16">
              <p className="text-2xl font-bold" data-aos="zoom-in-up">GeForce RTX 5090</p>
              <p className="text-sm text-gray-500" data-aos="zoom-in-up">
                21,760 CUDA cores, a 512-bit memory interface, 32GB of GDDR7 memory, and supports PCIe 5.0, DisplayPort 2.1, and HDMI 2.1
              </p>
              <p className="text-[#009639]" data-aos="zoom-in-up">៛ 3,212,000 | $5000</p>
              <button
                className="bg-[#009639] text-white rounded-lg px-6 py-2 text-sm shadow focus:outline-none"
                data-aos="zoom-in-up"
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accessories;
