import React, { useEffect } from "react";
import Slider from "react-slick";
import Iphone from "../assets/iphon16prosilver.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { ProductStore } from "../store/store";
import AOS from "aos";
import "aos/dist/aos.css";

// Custom Next Arrow
function SampleNextArrow({ onClick }) {
  return (
    <div
      className="absolute right-[-20px] top-1/2 transform -translate-y-1/2 z-10 cursor-pointer bg-white text-[#009639] text-3xl border border-[#009639] p-2 rounded-full shadow hover:bg-[#009639] hover:text-white transition"
      onClick={onClick}
    >
      <FaChevronRight />
    </div>
  );
}

// Custom Prev Arrow
function SamplePrevArrow({ onClick }) {
  return (
    <div
      className="absolute left-[-20px] top-1/2 transform -translate-y-1/2 z-10 cursor-pointer bg-white text-[#009639] text-3xl border border-[#009639] p-2 rounded-full shadow hover:bg-[#009639] hover:text-white transition"
      onClick={onClick}
    >
      <FaChevronLeft />
    </div>
  );
}

const MoreDevice = () => {
  const { moreDevice } = ProductStore();

  useEffect(() => {
    AOS.init({ duration: 1200, once: false });
    setTimeout(() => {
      AOS.refresh();
    }, 500);
  }, []);

  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="w-9/12 my-12">
      <div className="flex justify-between">
        <h2
          className="text-4xl font-bold text-[#009639] mb-6"
          data-aos="zoom-in-up"
        >
          More Devices
        </h2>
        <a
          href="#"
          className="text-[#009639] underline"
          data-aos="zoom-in-up"
        >
          view mores
        </a>
      </div>

      <div className="relative" data-aos="zoom-in-up">
        <Slider {...settings}>
          {moreDevice.map((product, index) => (
            <div key={index}>
              <div className="mx-1 my-1">
                <div
                  className="py-3 rounded-3xl ring ring-green-200 flex flex-col items-center space-y-4"
                  data-aos="zoom-in-up"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-[280px] h-[350px]"
                    data-aos="zoom-in-up"
                  />
                  <div className="space-y-1 mr-20" data-aos="zoom-in-up">
                    <p className="text-[#009639] text-xl font-bold">
                      {product.name}
                    </p>
                    <p className="text-sm text-gray-500">{product.color}</p>
                    <p className="text-[#009639]">{product.price}</p>
                    <button className="mt-2 bg-[#009639] text-yellow-500 rounded-lg px-4 py-2 text-sm shadow hover:bg-green-700 transition">
                      View Detail
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default MoreDevice;
