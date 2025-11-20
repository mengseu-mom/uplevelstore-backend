import MoreDevice from "./MoreDevice";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import Slider from "react-slick";

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

const Recommend = (props) => {
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
    <div className="w-full">
      <div className="text-center">
        <h2 className="text-[2rem] sm:text-[2.5rem] md:text-[3rem] font-bold text-[#009639]">
          Best Recommended
        </h2>
        <span className="text-[1rem] sm:text-[1.2rem] text-gray-500 font-bold">
          Spend More, Save More
        </span>
      </div>

      <div className="flex justify-center mt-8 mb-4">
        <div className="w-11/12 sm:w-10/12">
          <Slider {...settings}>
            {props.data.map((product, index) => (
              <div key={index} className="mx-1 my-1">
                <div className="py-3 rounded-3xl shadow-md flex flex-col items-center sm:mx-2 space-y-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-[180px] h-[220px] sm:w-[240px] sm:h-[290px]"
                  />
                  <div className="space-y-1 ml-[-30%]">
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
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Recommend;
