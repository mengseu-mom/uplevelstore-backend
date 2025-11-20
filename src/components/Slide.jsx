import React, { useState } from "react";
import Slider from "react-slick";
import Black from "../assets/Iphone16/black.png";
import Blue from "../assets/Iphone16/blue.png";
import Pink from "../assets/Iphone16/pink.png";
import Silver from "../assets/Iphone16/silver.png";
import Teal from "../assets/Iphone16/teal.png";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const NextArrow = ({ onClick }) => (
  <div
    className="hover:text-white hover:bg-[#009639] absolute top-1/2 ring ring-[#009639] rounded-full  -right-20 transform -translate-y-1/2 z-10 cursor-pointer text-4xl   text-[#009639]  flex items-center justify-center   w-14 h-14"
    onClick={onClick}
  >
    <FaChevronRight />
  </div>
);


const PrevArrow = ({ onClick }) => (
  <div
    className="absolute top-1/2 -left-20 hover:text-white hover:bg-[#009639] ring ring-[#009639] rounded-full  transform -translate-y-1/2 z-10 cursor-pointer text-4xl   text-[#009639]   w-14 h-14 flex items-center justify-center "
    onClick={onClick}
  >
    <FaChevronLeft />
  </div>
);

function Slide() {
  const [activeIndex, setActiveIndex] = useState(0);

  const slideImages = [
    { color: "black", src: Black },
    { color: "blue", src: Blue },
    { color: "pink", src: Pink },
    { color: "silver", src: Silver },
    { color: "teal", src: Teal },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (oldIndex, newIndex) => setActiveIndex(newIndex),
    appendDots: (dots) => (
      <div style={{ marginTop: "20px" }}>
        <ul className="flex justify-center space-x-3">{dots}</ul>
      </div>
    ),
    customPaging: (i) => {
      const isActive = i === activeIndex;
      return (
        <div className=" mt-5">
          <div
            className={`w-6 h-6 rounded-full  transition-all duration-300 ${
              isActive ? "ring-[#009639]  ring ring-offset-2  scale-110" : ""
            }`}
            style={{ backgroundColor: slideImages[i].color }}
          />
        </div>
      );
    },
  };

  return (
    <div
      className="slider-container relative"
      style={{
        width: "500px",
        height: "500px",
        margin: "40px auto",
        padding: "30px ",
      }}
    >
      <Slider {...settings}>
        {slideImages.map((item, index) => (
          <div key={index} className="flex justify-center px-3">
            <img
              src={item.src}
              alt={item.color}
              className="focus:outline-none object-contain mx-auto"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Slide;
