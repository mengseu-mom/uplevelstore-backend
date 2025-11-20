import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { request } from "../util/request";
import {
  FaChevronRight,
  FaChevronLeft,
  FaPlus,
  FaMinus,
  FaFacebook,
  FaInstagram,
  FaTelegram,
} from "react-icons/fa";
import { VscStarEmpty, VscStarFull } from "react-icons/vsc";
import { ImStarEmpty } from "react-icons/im";
import { HiMinusSm } from "react-icons/hi";
import { SlScreenSmartphone } from "react-icons/sl";
import Galary1 from "../assets/gala1.png";
import Galary2 from "../assets/gala2.jpg";
import Galary3 from "../assets/gala3.jpg";
const ViewDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedColor, setSelectedColor] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await request(`products/${id}`, "get");
        setProduct(data);

        const colorImages = JSON.parse(data.image || "[]");
        if (colorImages.length > 0) {
          setSelectedColor({
            color: colorImages[0].color,
          });
        }
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const getImageUrl = (path) => {
    if (!path) return "";
    const cleanPath = path.replace(/\\/g, "/");
    return `http://localhost:8000/storage/${cleanPath}`;
  };

  const handleColorSelect = (colorGroup) => {
    setSelectedColor({ color: colorGroup.color });
    setCurrentImageIndex(0);
  };

  // const nextImage = () => {
  //   setCurrentImageIndex(prev =>
  //     (prev + 1) % (currentImages.length || 1)
  //   );
  // };

  // const prevImage = () => {
  //   setCurrentImageIndex(prev =>
  //     (prev - 1 + (currentImages.length || 1)) % (currentImages.length || 1)
  //   );
  // };

  const getColorOptions = () => {
    if (!product?.image) return [];

    try {
      const colorImages = JSON.parse(product.image);
      const colorGroups = {};

      colorImages.forEach((item) => {
        if (!colorGroups[item.color]) {
          colorGroups[item.color] = [];
        }
        colorGroups[item.color].push(item);
      });

      return Object.entries(colorGroups).map(([color, images]) => ({
        color,
        images,
      }));
    } catch (err) {
      console.error("Error grouping images by color:", err);
      return [];
    }
  };

  if (loading)
    return (
      <div className=" flex items-center justify-center py-40">
        <div role="status">
        <svg
          aria-hidden="true"
          className="inline w-10 h-20 text-gray-200 animate-spin dark:text-gray-600 fill-green-500"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
        <span className="sr-only">Loading...</span>
      </div>
      </div>
    );
  if (!product)
    return <div className="text-center py-20">Product not found</div>;

  const colorOptions = getColorOptions();
  const currentImages =
    selectedColor && product?.image
      ? JSON.parse(product.image).filter(
          (img) => img.color === selectedColor.color
        )
      : [];

  return (
    <div className="flex flex-col items-center justify-center mb-52">
      <div className="w-9/12 flex">
        {/* Product Images Section */}
        <div className="flex flex-col w-1/2">
          <div className="px-36 pt-14 pb-18 relative">
            {currentImages.length > 0 ? (
              <div>
                <img
                  src={getImageUrl(currentImages[currentImageIndex]?.path)}
                  alt={`${product.model} - ${selectedColor.color}`}
                  className="w-full h-[461px] object-contain"
                />

                {/* Navigation Arrows */}
                {/* {currentImages.length > 1 && (
                  <div>
                    <div
                      onClick={nextImage}
                      className="hover:text-white hover:bg-[#009639] absolute top-1/2 ring ring-[#009639] rounded-full right-10 transform -translate-y-1/2 z-10 cursor-pointer text-3xl text-[#009639] flex items-center justify-center w-12 h-12"
                    >
                      <FaChevronRight />
                    </div>
                    <div
                      onClick={prevImage}
                      className="hover:text-white hover:bg-[#009639] absolute top-1/2 ring ring-[#009639] rounded-full left-10 transform -translate-y-1/2 z-10 cursor-pointer text-3xl text-[#009639] flex items-center justify-center w-12 h-12"
                    >
                      <FaChevronLeft />
                    </div>
                  </div>
                )} */}
              </div>
            ) : (
              <div className="w-full h-[461px] flex items-center justify-center bg-gray-100">
                <p>No images available</p>
              </div>
            )}
          </div>

          {/* Rating Section */}
          <div className="flex space-x-10 mt-20">
            <div className="space-y-1 py-5">
              <p className="font-bold text-7xl">4.5</p>
              <div className="flex space-x-1 text-[#009639] text-2xl font-bold">
                <VscStarFull />
                <VscStarFull />
                <VscStarFull />
                <VscStarFull />
                <ImStarEmpty />
              </div>
              <p className="text-sm text-gray-500">(Reviews 367)</p>
            </div>
            <div className="h-46 w-[1px] bg-gray-600"></div>
            <div className="flex flex-col space-y-6 py-5 w-full">
              {["Performance", "Camera", "Battery", "Display", "Design"].map(
                (item, i) => (
                  <div
                    key={i}
                    className="relative w-full h-2 rounded-full bg-gray-300"
                  >
                    <div
                      className="absolute left-0 top-0 h-2 rounded-full bg-[#009639]"
                      style={{ width: `${75 - i * 5}%` }}
                    ></div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>

        {/* Product Info Section */}
        <div className="w-1/2 py-10 space-y-3 pl-10 pr-10">
          <p className="text-gray-400 font-bold">{product.brand}</p>
          <p className="text-3xl font-bold">{product.model}</p>

          <div className="flex space-x-3">
            <div className="flex space-x-1 text-[#009639] text-2xl font-bold">
              <VscStarFull />
              <VscStarFull />
              <VscStarFull />
              <VscStarFull />
              <VscStarEmpty />
            </div>
            <p className="text-gray-400">4.5 (Review 367)</p>
          </div>

          <p className=" text-sm text-gray-400">
            Aluminum design <br />
            Latest-generation Ceramic Shield front <br />
            Color-infused glass back (Black, Pink, Teal, Ultramarine)
          </p>

          {/* Specifications */}
          <div>
            <p className="text-lg text-[#009639]">Specs</p>
            <div className="space-x-2 mt-2">
              <button className="text-white text-sm bg-[#009639] px-3 py-1 rounded">
                {product.ram}
              </button>
              {/*  */}
              {/* <button className="text-white text-sm bg-[#009639] px-3 py-1 rounded">
                {product.refresh_rate}
              </button> */}
            </div>
          </div>

          <div className=" flex items-center space-x-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              id="Gift--Streamline-Phosphor"
              height={18}
              width={18}
              style={{ color: "#009639", fontWeight: 50 }}
            >
              <desc>
                {"\n    Gift Streamline Icon: https://streamlinehq.com\n  "}
              </desc>
              <path
                d="M14.63384375 4.68360625h-2.6444875c0.0294 -0.02488125 0.05955 -0.049 0.0882 -0.0753875 0.462825 -0.4111875 0.7335125 -0.9965375 0.74705625 -1.61549375 0.04181875 -1.4143 -1.1155875 -2.57205 -2.52990625 -2.5306625 -0.6192125 0.0133375 -1.20488125 0.28404375 -1.61624375 0.7470625 -0.281575 0.3263375 -0.5104875 0.694625 -0.6784625 1.09156875 -0.167975 -0.39694375 -0.3968875 -0.76523125 -0.6784625 -1.09156875 -0.4113625 -0.46301875 -0.99703125 -0.733725 -1.61624375 -0.7470625 -1.41431875 -0.0413875 -2.57171875 1.1163625 -2.52990625 2.5306625 0.01354375 0.61895625 0.28423125 1.20430625 0.74705625 1.61549375 0.02865 0.024875 0.0588 0.049 0.0882 0.0753875H1.36615625c-0.66614375 0 -1.20615625 0.5400125 -1.20615625 1.20615v2.41230625c0 0.66614375 0.5400125 1.20615625 1.20615625 1.20615625v4.8246125c0 0.6661625 0.5399875 1.2061875 1.20615 1.20615625h10.8553875c0.66615625 0.00003125 1.20615 -0.53999375 1.20615 -1.20615625v-4.8246125c0.66614375 0 1.20615625 -0.5400125 1.20615625 -1.20615625V5.88975625c0 -0.66611875 -0.5400375 -1.206125 -1.20615625 -1.20615Zm-5.05076875 -2.6754c0.19304375 -0.213175 0.466275 -0.33613125 0.75385 -0.33923125h0.0369375c0.7021625 0.0043875 1.263625 0.58489375 1.2446 1.2868125 -0.0031 0.287575 -0.12605625 0.56080625 -0.33923125 0.75385 -0.7154 0.633225 -1.90270625 0.85636875 -2.6384625 0.93476875 0.0904625 -0.798325 0.33923125 -1.95849375 0.94230625 -2.6362Zm-4.8314 0.0271375c0.23365 -0.233625 0.5500875 -0.3655625 0.88049375 -0.367125h0.0369375c0.287575 0.0031 0.56080625 0.12605625 0.75385 0.33923125 0.632475 0.71464375 0.8556125 1.89969375 0.9340125 2.63243125 -0.7327375 -0.0753875 -1.91778125 -0.3015375 -2.63243125 -0.93401875 -0.21316875 -0.1930375 -0.336125 -0.466275 -0.33923125 -0.75384375 -0.00944375 -0.3424125 0.12188125 -0.673725 0.36335625 -0.916675ZM1.36615625 5.88975625h6.03076875v2.41230625H1.36615625Zm1.20615 3.6184625h4.82461875v4.82461875H2.57230625Zm10.8553875 4.82461875h-4.82461875v-4.82461875h4.82461875Zm1.20615 -6.030775h-6.03076875V5.88975625h6.03076875v2.41230625Z"
                strokeWidth={0.0625}
              />
            </svg>
            <p className=" text-[#009639] font-bold">FREE BUNDLE</p>
          </div>
          <div>
            <ul className="list-disc list-inside text-sm text-gray-500">
              <li>Clear cover case</li>
              <li>Screen protector</li>
              <li>Apple Adapter 20W</li>
            </ul>
          </div>
          {/* Color Selection */}
          <div className="space-y-4 rounded pl-14 py-6 mt-6 shadow-sm">
            <p className="text-sm">
              Choose your color: {""}
              <span className="underline uppercase text-[#009639]">
                {selectedColor?.color}
              </span>
            </p>
            <div className="flex space-x-5">
              {colorOptions.map((colorGroup, i) => (
                <div
                  key={i}
                  className={`w-5 h-5 rounded-full cursor-pointer ring-2 ${
                    selectedColor?.color === colorGroup.color
                      ? "ring-[#009639] ring-offset-2 scale-110"
                      : "ring-transparent"
                  }`}
                  style={{
                    backgroundColor: getComputedColor(colorGroup.color),
                    border: `1px solid ${getBorderColor(colorGroup.color)}`,
                  }}
                  onClick={() => handleColorSelect(colorGroup)}
                  title={colorGroup.color}
                ></div>
              ))}
            </div>
          </div>

          {/* Price and Quantity */}
          <div className="flex space-x-10 items-center bg-gray-100 rounded mt-5 py-10 px-8">
            <div className="text-[#009639] items-center flex flex-col space-y-4 font-bold">
              <p>Quantity</p>
              <div className="flex items-center">
                <button onClick={() => setQuantity((q) => Math.max(1, q - 1))}>
                  <HiMinusSm />
                </button>
                <div className="py-1 px-2 w-20 items-center flex justify-center bg-white shadow-sm">
                  {quantity}
                </div>
                <button onClick={() => setQuantity((q) => q + 1)}>
                  <FaPlus />
                </button>
              </div>
            </div>
            <div className="w-[1px] h-20 bg-[#009639]"></div>
            <div className="space-y-3">
              <p className="px-5 text-center rounded-lg bg-[#009639] text-white py-1">
                Full price
              </p>
              <p className="text-[#009639] font-bold">
                ${(parseFloat(product.price) * quantity).toFixed(2)}
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-4 mt-5">
            <button className="w-full py-3 bg-[#009639] rounded-xl text-white hover:bg-[#007f2c] transition">
              Add to Cart
            </button>
            <button className="w-full py-3 bg-[#009639] rounded-xl text-white hover:bg-[#007f2c] transition">
              Buy Now
            </button>
          </div>

          {/* Product Meta */}
          <div className="text-[#009639] text-sm mt-10 pt-4 border-t border-[#009639]">
            <p>
              Code: <span className="text-gray-400">{product.id}</span>
            </p>
            <p>
              Category:{" "}
              <span className="text-gray-400">{product.category || "N/A"}</span>
            </p>
            <div className="flex space-x-4 mt-2">
              <p>Share:</p>
              <div className="space-x-2 text-gray-400 flex items-center">
                <FaFacebook className="hover:text-[#1877F2] cursor-pointer" />
                <FaInstagram className="hover:text-[#E4405F] cursor-pointer" />
                <FaTelegram className="hover:text-[#0088CC] cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" w-full flex flex-col items-center justify-center">
        <div className="relative mt-5 w-full text-center bg-[#009639] text-white text-2xl font-bold py-6">
          Specification
          <div className="w-9/12 h-1 bg-yellow-500 absolute bottom-0 left-1/2 transform -translate-x-1/2" />
        </div>
        <div className=" w-9/12 mt-10 ">
          <p className="text-[#009639] text-3xl font-bold">Key Features</p>
          <div className=" flex space-x-10 mt-10">
            <div
              className="flex items-center space-x-10  px-10 py-2"
              style={{
                boxShadow: "0px 1px 3px 0px rgba(0, 0, 0, 0.12)",
              }}
            >
              <div>
                <SlScreenSmartphone className="text-4xl text-[#009639]" />
              </div>
              <div className="space-y-2">
                <p className="text-md font-bold">Display</p>
                <p className="text-sm text-gray-500">6.1” display</p>
              </div>
            </div>
            {/* Feature 3: Battery */}
            <div
              className="flex items-center space-x-10 px-10 py-2"
              style={{
                boxShadow: "0px 1px 3px 0px rgba(0, 0, 0, 0.12)",
              }}
            >
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  height={40}
                  width={40}
                  className="text-[#009639]"
                >
                  <path
                    d="M24 24H6a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2h18a2 2 0 0 1 2 2v1h1a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-1v1a2 2 0 0 1-2 2ZM6 10v12h18v-3h3v-6h-3v-3Z"
                    fill="currentColor"
                  />
                  <path
                    transform="rotate(90 15 16)"
                    d="M11 9h8v14h-8Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <div className="space-y-2">
                <p className="text-md font-bold">Battery</p>
                <p className="text-sm text-gray-500">3,561mAh</p>
              </div>
            </div>

            {/* Feature 4: Camera */}
            <div
              className="flex items-center space-x-10 px-10 py-2"
              style={{
                boxShadow: "0px 1px 3px 0px rgba(0, 0, 0, 0.12)",
              }}
            >
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  height={36}
                  width={36}
                  className="text-[#009639]"
                >
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
                <p className="text-md font-bold">Camera</p>
                <p className="text-sm text-gray-500">12 MP Ultra Wide camera</p>
              </div>
            </div>
          </div>
          <p className="text-[#009639] text-3xl font-bold mt-10">
            Device Specifications
          </p>
          <div className=" mt-5">
            <div className=" w-full bg-gray-200 pl-7 py-3 rounded">
              <div className="flex">
                <p className=" font-bold w-1/3">OS </p>
                <p className="w-1/2 text-gray-500  font-normal ">
                  iOS 17, upgradable to iOS 17.3
                </p>
              </div>
            </div>
            <div className=" w-full  pl-7 py-3 rounded">
              <div className="flex">
                <p className=" font-bold w-1/3 ">CPU </p>
                <p className="text-gray-500 w-1/2 font-normal ">
                  A17 Pro (3 nm)
                </p>
              </div>
            </div>
            <div className=" w-full bg-gray-200 pl-7 py-3 rounded">
              <div className="flex">
                <p className=" font-bold w-1/3">Storage </p>
                <p className="text-gray-500 w-1/2 font-normal ">
                  128GB/512GB/1TB
                </p>
              </div>
            </div>
            <div className=" w-full  pl-7 py-3 rounded">
              <div className="flex">
                <p className=" font-bold w-1/3">RAM </p>
                <p className="text-gray-500 w-1/2 font-normal ">8GB</p>
              </div>
            </div>
            <div className=" w-full bg-gray-200 pl-7 py-3 rounded">
              <div className="flex">
                <p className=" font-bold w-1/3">Screen Size </p>
                <p className="text-gray-500 w-1/2 font-normal ">
                  6.7 inches, 110.2 cm2 (~89.8% screen-to-body ratio)
                </p>
              </div>
            </div>
            <div className=" w-full  pl-7 py-3 rounded">
              <div className="flex">
                <p className=" font-bold w-1/3">NetWork </p>
                <p className="text-gray-500 w-1/2 font-normal ">5G, 4G VoLTE</p>
              </div>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="relative mt-5 w-full text-center bg-[#009639] text-white text-2xl font-bold py-6">
          Gallery
          <div className="w-9/12 h-1 bg-yellow-500 absolute bottom-0 left-1/2 transform -translate-x-1/2" />
        </div>
        <div className="w-9/12 flex gap-x-5 h-[90vh] mt-10 ">
          <div className="w-3/5 h-full flex flex-col justify-between">
            <img
              src={Galary1}
              alt=""
              className="w-full  rounded-xl object-cover "
              style={{
                height: "48%",
                boxShadow: "0px 1px 3px 0px rgba(0, 0, 0, 0.12)",
              }}
            />
            <img
              src={Galary2}
              alt=""
              className="w-full  rounded-xl object-cover"
              style={{
                height: "48%",
                boxShadow: "0px 1px 3px 0px rgba(0, 0, 0, 0.12)",
              }}
            />
          </div>
          <div className="w-2/5 h-full">
            <img
              src={Galary3}
              alt=""
              className="w-full h-full rounded-xl object-cover"
              style={{ boxShadow: "0px 1px 3px 0px rgba(0, 0, 0, 0.12)" }}
            />
          </div>
        </div>
        <div className="relative mt-10 w-full text-center bg-[#009639] text-white text-2xl font-bold py-6">
          Relate Device
          <div className="w-9/12 h-1 bg-yellow-500 absolute bottom-0 left-1/2 transform -translate-x-1/2" />
        </div>
      </div>
    </div>
  );
};

// Color Helper Functions
const getComputedColor = (colorName) => {
  const colorMap = {
    black: "#000000",
    white: "#ffffff",
    gray: "#808080",
    silver: "#c0c0c0",
    pink: "#ffc0cb",
    blue: "#0000ff",
    teal: "#008080",
    gold: "#ffd700",
  };
  return colorMap[colorName.toLowerCase()] || "#cccccc";
};

const getBorderColor = (colorName) => {
  return colorName.toLowerCase() === "white" ? "#cccccc" : "transparent";
};

export default ViewDetail;
