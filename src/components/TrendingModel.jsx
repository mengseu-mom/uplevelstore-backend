
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { SlScreenSmartphone } from "react-icons/sl";
import Slide from "../components/Slide";

const TrendingModel = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: false });

    // Ensure AOS refreshes after mount
    setTimeout(() => {
      AOS.refresh();
    }, 500);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center">
      <p data-aos="zoom-in-up" className="text-[#009639] text-4xl font-bold text-center">
        Trending Models
      </p>

      <div className="w-9/12 flex justify-between mt-16">
        <div>
          <p data-aos="zoom-in-up" className="text-4xl font-bold">
            IPhone 16 Pro 512GB
          </p>

          <div className="grid grid-cols-2 gap-y-20 px-5 py-10">
            {/* Feature 1: Display */}
            <div className="flex items-center space-x-7">
              <div data-aos="zoom-in-up">
                <SlScreenSmartphone className="text-5xl text-[#009639]" />
              </div>
              <div className="space-y-2">
                <p data-aos="zoom-in-up" className="text-lg font-bold">Display</p>
                <p data-aos="zoom-in-up" className="text-sm text-gray-500">6.1” display</p>
              </div>
            </div>

            {/* Feature 2: Refresh Rate */}
            <div className="flex items-center space-x-7">
              <div data-aos="zoom-in-up">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  height={48}
                  width={48}
                  className="text-[#009639]"
                >
                  <path
                    d="M10 4h-1A2.5 2.5 0 0 0 4 4H3a3.5 3.5 0 0 1 7 0Z"
                    fill="currentColor"
                  />
                  <path
                    d="M12.5 7.5a1.47 1.47 0 0 0 -0.735 0.2A1.5 1.5 0 0 0 10.5 7a1.47 1.47 0 0 0 -0.735 0.2A1.5 1.5 0 0 0 8 6.59V4a1.5 1.5 0 0 0 -3 0v5.55l-1.115 -0.76A1.465 1.465 0 0 0 3 8.5a1.5 1.5 0 0 0 -1.06 2.565l4 3.65A3.08 3.08 0 0 0 8 15.5h2.5a3.5 3.5 0 0 0 3.5 -3.5v-3a1.5 1.5 0 0 0 -1.5 -1.5Zm0.5 4.5a2.5 2.5 0 0 1 -2.5 2.5h-2.5a2.085 2.085 0 0 1 -1.38 -0.5l-3.975 -3.65A0.5 0.5 0 0 1 2.5 10a0.5 0.5 0 0 1 0.8 -0.4l2.7 1.85V4a0.5 0.5 0 0 1 1 0v5.5h1v-1.5a0.5 0.5 0 0 1 1 0v1.5h1v-1a0.5 0.5 0 0 1 1 0v1h1v-0.5a0.5 0.5 0 0 1 1 0Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <div className="space-y-2">
                <p data-aos="zoom-in-up" className="text-lg font-bold">Refresh Rate</p>
                <p data-aos="zoom-in-up" className="text-sm text-gray-500">60Hz refresh rate</p>
              </div>
            </div>

            {/* Feature 3: Battery */}
            <div className="flex items-center space-x-7">
              <div data-aos="zoom-in-up">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" height={48} width={48} className="text-[#009639]">
                  <path
                    d="M24 24H6a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2h18a2 2 0 0 1 2 2v1h1a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-1v1a2 2 0 0 1-2 2ZM6 10v12h18v-3h3v-6h-3v-3Z"
                    fill="currentColor"
                  />
                  <path transform="rotate(90 15 16)" d="M11 9h8v14h-8Z" fill="currentColor" />
                </svg>
              </div>
              <div className="space-y-2">
                <p data-aos="zoom-in-up" className="text-lg font-bold">Battery</p>
                <p data-aos="zoom-in-up" className="text-sm text-gray-500">3,561mAh</p>
              </div>
            </div>

            {/* Feature 4: Camera */}
            <div className="flex items-center space-x-7">
              <div data-aos="zoom-in-up">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" height={48} width={48} className="text-[#009639]">
                  <path
                    d="M14.5 13H1.5a0.5 0.5 0 0 1 -0.5 -0.5V4a0.5 0.5 0 0 1 0.5 -0.5h3.23l0.855 -1.275A0.5 0.5 0 0 1 6 2h4a0.5 0.5 0 0 1 0.415 0.225L11.27 3.5H14.5a0.5 0.5 0 0 1 0.5 0.5v8.5a0.5 0.5 0 0 1 -0.5 0.5ZM2 12h12V4.5h-3a0.5 0.5 0 0 1 -0.415 -0.225L9.73 3h-3.46l-0.855 1.275A0.5 0.5 0 0 1 5 4.5H2Z"
                    fill="currentColor"
                  />
                  <path
                    d="M8 11a3 3 0 1 1 3 -3 3 3 0 0 1 -3 3Zm0 -5a2 2 0 1 0 2 2 2 2 0 0 0 -2 -2Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <div className="space-y-2">
                <p data-aos="zoom-in-up" className="text-lg font-bold">Camera</p>
                <p data-aos="zoom-in-up" className="text-sm text-gray-500">12 MP Ultra Wide camera</p>
              </div>
            </div>

            {/* Feature 5: Chip */}
            <div className="flex items-center space-x-7">
              <div data-aos="zoom-in-up">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" height={48} width={48} className="text-[#009639]">
                  <path d="M5.5 5.5v5h5V5.5Zm4 4h-3v-3h3Z" fill="currentColor" />
                  <path d="M15 6.5v-1h-2V4a1 1 0 0 0 -1 -1h-1.5V1h-1v2h-3V1h-1v2H4a1 1 0 0 0 -1 1v1.5H1v1h2v3H1v1h2v1.5a1 1 0 0 0 1 1h1.5v2h1v-2h3v2h1v-2h1.5a1 1 0 0 0 1 -1v-1.5h2v-1h-2v-3Zm-3 5.5H4V4h8Z" fill="currentColor" />
                </svg>
              </div>
              <div className="space-y-2">
                <p data-aos="zoom-in-up" className="text-lg font-bold">Chip</p>
                <p data-aos="zoom-in-up" className="text-sm text-gray-500">A18 chip</p>
              </div>
            </div>
          </div>

          <button
            data-aos="zoom-in-up"
            className="text-white bg-[#009639] px-16 py-5 rounded-3xl text-2xl"
          >
            View Detail
          </button>
        </div>

        <div className="shadow pb-24 px-5 rounded-2xl">
          <Slide />
        </div>
      </div>
    </div>
  );
};

export default TrendingModel;
