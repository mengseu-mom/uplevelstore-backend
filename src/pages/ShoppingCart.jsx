// import React from "react";
// import { HiX } from "react-icons/hi";
// import Iphone from "../assets/Iphone16/blue.png";
// import { HiMinusSm } from "react-icons/hi";
// import { FaPlus } from "react-icons/fa6";
// import { useNavigate } from "react-router-dom";
// const ShoppingCart = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="w-full flex  flex-col justify-center items-center mb-20">
//       <div className=" w-full flex flex-col items-center justify-center space-y-14  bg-gradient-to-t from-green-200 via-green-200 to-white py-16 rounded-b-lg">
//         <p className=" text-5xl font-bold text-[#009639]">Shopping Cart</p>
//         <div className=" flex space-x-4">
//           <svg
//             width="44"
//             height="44"
//             viewBox="0 0 44 44"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <circle
//               cx="22"
//               cy="22"
//               r="21"
//               fill="none"
//               stroke="#009639"
//               stroke-width="2"
//             />
//             <mask id="path-2-inside-1_527_9183" fill="white">
//               <path d="M29.6881 13.4H27.1612C27.1612 10.4165 24.8997 8 22.1075 8C19.3153 8 17.0537 10.4165 17.0537 13.4H14.5269C13.1371 13.4 12 14.615 12 16.1V32.3C12 33.785 13.1371 35 14.5269 35H29.6881C31.0779 35 32.215 33.785 32.215 32.3V16.1C32.215 14.615 31.0779 13.4 29.6881 13.4ZM22.1075 10.7C23.4973 10.7 24.6343 11.915 24.6343 13.4H19.5806C19.5806 11.915 20.7177 10.7 22.1075 10.7ZM29.6881 32.3H14.5269V16.1H17.0537V18.8C17.0537 19.5425 17.6223 20.15 18.3172 20.15C19.0121 20.15 19.5806 19.5425 19.5806 18.8V16.1H24.6343V18.8C24.6343 19.5425 25.2029 20.15 25.8978 20.15C26.5927 20.15 27.1612 19.5425 27.1612 18.8V16.1H29.6881V32.3Z" />
//             </mask>
//             <path
//               d="M29.6881 13.4H27.1612C27.1612 10.4165 24.8997 8 22.1075 8C19.3153 8 17.0537 10.4165 17.0537 13.4H14.5269C13.1371 13.4 12 14.615 12 16.1V32.3C12 33.785 13.1371 35 14.5269 35H29.6881C31.0779 35 32.215 33.785 32.215 32.3V16.1C32.215 14.615 31.0779 13.4 29.6881 13.4ZM22.1075 10.7C23.4973 10.7 24.6343 11.915 24.6343 13.4H19.5806C19.5806 11.915 20.7177 10.7 22.1075 10.7ZM29.6881 32.3H14.5269V16.1H17.0537V18.8C17.0537 19.5425 17.6223 20.15 18.3172 20.15C19.0121 20.15 19.5806 19.5425 19.5806 18.8V16.1H24.6343V18.8C24.6343 19.5425 25.2029 20.15 25.8978 20.15C26.5927 20.15 27.1612 19.5425 27.1612 18.8V16.1H29.6881V32.3Z"
//               fill="white"
//             />
//             <path
//               d="M27.1612 13.4H22.1172V18.444H27.1612V13.4ZM17.0537 13.4V18.444H22.0978V13.4H17.0537ZM24.6343 13.4V18.444H29.6784V13.4H24.6343ZM19.5806 13.4H14.5366V18.444H19.5806V13.4ZM29.6881 32.3V37.344H34.7321V32.3H29.6881ZM14.5269 32.3H9.48284V37.344H14.5269V32.3ZM14.5269 16.1V11.056H9.48284V16.1H14.5269ZM17.0537 16.1H22.0978V11.056H17.0537V16.1ZM19.5806 16.1V11.056H14.5366V16.1H19.5806ZM24.6343 16.1H29.6784V11.056H24.6343V16.1ZM27.1612 16.1V11.056H22.1172V16.1H27.1612ZM29.6881 16.1H34.7321V11.056H29.6881V16.1ZM29.6881 13.4V8.35597H27.1612V13.4V18.444H29.6881V13.4ZM27.1612 13.4H32.2052C32.2052 7.95084 27.9951 2.95597 22.1075 2.95597V8V13.044C22.0691 13.044 22.0276 13.0341 21.9985 13.0209C21.974 13.0099 21.9781 13.0058 21.9986 13.0278C22.0415 13.0737 22.1172 13.1928 22.1172 13.4H27.1612ZM22.1075 8V2.95597C16.2199 2.95597 12.0097 7.95084 12.0097 13.4H17.0537H22.0978C22.0978 13.1928 22.1734 13.0737 22.2163 13.0278C22.2369 13.0058 22.241 13.0099 22.2165 13.0209C22.1873 13.0341 22.1458 13.044 22.1075 13.044V8ZM17.0537 13.4V8.35597H14.5269V13.4V18.444H17.0537V13.4ZM14.5269 13.4V8.35597C10.0417 8.35597 6.95597 12.1493 6.95597 16.1H12H17.044C17.044 17.0807 16.2325 18.444 14.5269 18.444V13.4ZM12 16.1H6.95597V32.3H12H17.044V16.1H12ZM12 32.3H6.95597C6.95597 36.2507 10.0417 40.044 14.5269 40.044V35V29.956C16.2325 29.956 17.044 31.3193 17.044 32.3H12ZM14.5269 35V40.044H29.6881V35V29.956H14.5269V35ZM29.6881 35V40.044C34.1733 40.044 37.259 36.2507 37.259 32.3H32.215H27.1709C27.1709 31.3193 27.9825 29.956 29.6881 29.956V35ZM32.215 32.3H37.259V16.1H32.215H27.1709V32.3H32.215ZM32.215 16.1H37.259C37.259 12.1493 34.1733 8.35597 29.6881 8.35597V13.4V18.444C27.9825 18.444 27.1709 17.0807 27.1709 16.1H32.215ZM22.1075 10.7V15.744C20.4019 15.744 19.5903 14.3807 19.5903 13.4H24.6343H29.6784C29.6784 9.44934 26.5926 5.65597 22.1075 5.65597V10.7ZM24.6343 13.4V8.35597H19.5806V13.4V18.444H24.6343V13.4ZM19.5806 13.4H24.6246C24.6246 14.3807 23.8131 15.744 22.1075 15.744V10.7V5.65597C17.6223 5.65597 14.5366 9.44934 14.5366 13.4H19.5806ZM29.6881 32.3V27.256H14.5269V32.3V37.344H29.6881V32.3ZM14.5269 32.3H19.5709V16.1H14.5269H9.48284V32.3H14.5269ZM14.5269 16.1V21.144H17.0537V16.1V11.056H14.5269V16.1ZM17.0537 16.1H12.0097V18.8H17.0537H22.0978V16.1H17.0537ZM17.0537 18.8H12.0097C12.0097 22.0082 14.5269 25.194 18.3172 25.194V20.15V15.106C20.7177 15.106 22.0978 17.0768 22.0978 18.8H17.0537ZM18.3172 20.15V25.194C22.1075 25.194 24.6246 22.0082 24.6246 18.8H19.5806H14.5366C14.5366 17.0768 15.9167 15.106 18.3172 15.106V20.15ZM19.5806 18.8H24.6246V16.1H19.5806H14.5366V18.8H19.5806ZM19.5806 16.1V21.144H24.6343V16.1V11.056H19.5806V16.1ZM24.6343 16.1H19.5903V18.8H24.6343H29.6784V16.1H24.6343ZM24.6343 18.8H19.5903C19.5903 22.0082 22.1075 25.194 25.8978 25.194V20.15V15.106C28.2983 15.106 29.6784 17.0768 29.6784 18.8H24.6343ZM25.8978 20.15V25.194C29.6881 25.194 32.2052 22.0082 32.2052 18.8H27.1612H22.1172C22.1172 17.0768 23.4973 15.106 25.8978 15.106V20.15ZM27.1612 18.8H32.2052V16.1H27.1612H22.1172V18.8H27.1612ZM27.1612 16.1V21.144H29.6881V16.1V11.056H27.1612V16.1ZM29.6881 16.1H24.6441V32.3H29.6881H34.7321V16.1H29.6881Z"
//               fill="#009639"
//               mask="url(#path-2-inside-1_527_9183)"
//             />
//           </svg>
//           <svg
//             width="44"
//             height="44"
//             viewBox="0 0 44 44"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <circle cx="22" cy="22" r="21" stroke="#009639" stroke-width="2" />
//             <path
//               d="M23.9834 34H18.6601C15.8051 34 14.3776 34 13.3879 33.1175C12.3969 32.2363 12.1549 30.7487 11.6698 27.7737L10.2058 18.8C9.98451 17.4438 9.87386 16.7662 10.2289 16.3212C10.5827 15.8762 11.2345 15.8762 12.5367 15.8762H30.5664C31.8686 15.8762 32.5204 15.8762 32.8742 16.3212C33.2293 16.7662 33.1174 17.4437 32.8973 18.8012L32.5581 20.8763M28.2391 15.875C28.2391 14.0516 27.5345 12.303 26.2804 11.0136C25.0262 9.72433 23.3252 9 21.5516 9C19.7779 9 18.0769 9.72433 16.8227 11.0136C15.5686 12.303 14.864 14.0516 14.864 15.875M27.0232 30.875C27.6202 31.5075 29.2119 34 30.063 34M30.063 34C30.9141 34 32.5058 31.5075 33.1028 30.875M30.063 34V24"
//               stroke="#009639"
//               stroke-width="3"
//               stroke-linecap="round"
//               stroke-linejoin="round"
//             />
//           </svg>
//           <svg
//             width="44"
//             height="44"
//             viewBox="0 0 44 44"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <circle cx="22" cy="22" r="21" stroke="#009639" stroke-width="2" />
//             <path
//               d="M31.5252 16.25H11.5028V13.625H31.5252M31.5252 29.375H11.5028V21.5H31.5252M31.5252 11H11.5028C10.1137 11 9 12.1681 9 13.625V29.375C9 30.0712 9.26369 30.7389 9.73305 31.2312C10.2024 31.7234 10.839 32 11.5028 32H31.5252C32.189 32 32.8256 31.7234 33.295 31.2312C33.7643 30.7389 34.028 30.0712 34.028 29.375V13.625C34.028 12.9288 33.7643 12.2611 33.295 11.7688C32.8256 11.2766 32.189 11 31.5252 11Z"
//               fill="#009639"
//             />
//           </svg>
//           <svg
//             width="44"
//             height="44"
//             viewBox="0 0 44 44"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <circle cx="22" cy="22" r="21" stroke="#009639" stroke-width="2" />
//             <path
//               d="M30.3017 13.3333H12.1354V11H30.3017V13.3333ZM25.4082 22.6667H23.4893V24.6383C22.774 25.7467 22.3539 27.065 22.3539 28.5C22.3539 28.8967 22.3994 29.2817 22.4561 29.6667H12.1354V22.6667H11V20.3333L12.1354 14.5H30.3017L31.4371 20.3333V21.9083C30.7218 21.6517 29.9611 21.5 29.1663 21.5C27.7698 21.5 26.4868 21.9317 25.4082 22.6667ZM21.2185 22.6667H14.4062V27.3333H21.2185V22.6667ZM31.8231 24.8133L27.7471 29.0017L25.9418 27.1467L24.6247 28.5L27.7471 32L33.1402 26.4583L31.8231 24.8133Z"
//               fill="#009639"
//             />
//           </svg>
//         </div>
//       </div>
//       <div className=" sm:px-0 px-3 space-x-5 flex flex-col justify-center items-center space-y-10 xl:flex-row xl:space-y-0 w-full sm:w-9/12 mt-10 sm:mt-20 ">
//         <div className="w-full xl:w-3/5 space-y-10">
//           <div
//             className=" bg-[#009639] w-full flex justify-between px-5 sm:px-16 py-5"
//             style={{
//               boxShadow:
//                 "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
//             }}
//           >
//             <p className=" text-white text-sm sm:inter ">Product</p>
//             <div className=" text-white text-sm sm:inter flex space-x-6 sm:space-x-20">
//               <p>Price</p>

//               <p>Quantity</p>
//               <p>SubTotal</p>
//             </div>
//           </div>
//           <div className="w-full flex flex-col space-y-4">
//             <div
//               className=" space-x-4 px-5 sm:px-6 py-2 sm:py-4 w-full flex justify-between"
//               style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
//             >
//               <div className=" flex items-center justify-center space-x-2 sm:space-x-4 ">
//                 <HiX className="text-[#009639] text-2xl sm:text-4xl" />
//                 {/* <div> */}
//                   <img src={Iphone} alt="" className="w-12 sm:w-16" />
//                 {/* </div> */}
//                 <div className="space-y-1">
//                   <p className=" font-bold text-xs sm:text-md ">IPhone 16 Plus</p>
//                   <p className=" text-gray-500 text-xs sm:text-sm">Color Teal | 128GB</p>
//                 </div>
//               </div>
//               <div className=" flex space-x-6.5 sm:space-x-16 items-center justify-center sm:pr-12">
//                 <p className=" font-bold text-xs sm:text-md">$1300</p>
//                 <div
//                   className=" text-[#009639] text-xs sm:text-md flex justify-center items-center space-x-2 sm:space-x-3 h-7 px-2 rounded-md"
//                   style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
//                 >
//                   <HiMinusSm />
//                   <p>1</p>
//                   <FaPlus />
//                 </div>
//                 <p className=" text-xs font-bold sm:text-md">$1300</p>
//               </div>
//             </div>
//             {/* <div
//               className=" px-6 py-4 w-full flex justify-between"
//               style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
//             >
//               <div className=" flex items-center justify-center space-x-4 ">
//                 <HiX className="text-[#009639] text-4xl" />
//                 <div>
//                   <img src={Iphone} alt="" className=" w-16" />
//                 </div>
//                 <div className="space-y-1">
//                   <p className=" font-bold">IPhone 16 Plus</p>
//                   <p className="text-sm text-gray-500">Color Teal | 128GB</p>
//                 </div>
//               </div>
//               <div className=" flex space-x-16 items-center justify-center pr-12">
//                 <p className=" font-bold">$1300</p>
//                 <div
//                   className=" flex justify-center items-center space-x-3 h-7 px-2 rounded-md"
//                   style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
//                 >
//                   <HiMinusSm />
//                   <p>1</p>
//                   <FaPlus />
//                 </div>
//                 <p className=" font-bold">$1300</p>
//               </div>
//             </div>
//             <div
//               className=" px-6 py-4 w-full flex justify-between"
//               style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
//             >
//               <div className=" flex items-center justify-center space-x-4 ">
//                 <HiX className="text-[#009639] text-4xl" />
//                 <div>
//                   <img src={Iphone} alt="" className=" w-16" />
//                 </div>
//                 <div className="space-y-1">
//                   <p className=" font-bold">IPhone 16 Plus</p>
//                   <p className="text-sm text-gray-500">Color Teal | 128GB</p>
//                 </div>
//               </div>
//               <div className=" flex space-x-16 items-center justify-center pr-12">
//                 <p className=" font-bold">$1300</p>
//                 <div
//                   className=" flex justify-center items-center space-x-3 h-7 px-2 rounded-md"
//                   style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
//                 >
//                   <HiMinusSm />
//                   <p>1</p>
//                   <FaPlus />
//                 </div>
//                 <p className=" font-bold">$1300</p>
//               </div>
//             </div>
//             <div
//               className=" px-6 py-4 w-full flex justify-between"
//               style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
//             >
//               <div className=" flex items-center justify-center space-x-4 ">
//                 <HiX className="text-[#009639] text-4xl" />
//                 <div>
//                   <img src={Iphone} alt="" className=" w-16" />
//                 </div>
//                 <div className="space-y-1">
//                   <p className=" font-bold">IPhone 16 Plus</p>
//                   <p className="text-sm text-gray-500">Color Teal | 128GB</p>
//                 </div>
//               </div>
//               <div className=" flex space-x-16 items-center justify-center pr-12">
//                 <p className=" font-bold">$1300</p>
//                 <div
//                   className=" flex justify-center items-center space-x-3 h-7 px-2 rounded-md"
//                   style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
//                 >
//                   <HiMinusSm />
//                   <p>1</p>
//                   <FaPlus />
//                 </div>
//                 <p className=" font-bold">$1300</p>
//               </div>
//             </div> */}
//           </div>
//           <div className=" flex justify-between ">
//             <div className=" space-x-4 ">
//               <input
//                 type="text"
//                 placeholder="Promote code"
//                 className=" w-full sm:py-5 pl-6  placeholder:text-sm inter"
//                 style={{
//                   boxShadow:
//                     "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
//                 }}
//               />
//               <button
//                 style={{
//                   boxShadow:
//                     "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
//                 }}
//                 className=" bg-[#009639] sm:py-5.5 sm:px-7 text-white inter text-sm"
//               >
//                 Apply Coupon
//               </button>
//             </div>
//             <p className="text-[#009639] underline text-sm mt-11">
//               Clear Shopping Cart
//             </p>
//           </div>
//         </div>

//         <div
//           className="w-full xl:w-2/5 rounded-lg h-fit py-9.5 space-y-6"
//           style={{
//             boxShadow:
//               "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
//           }}
//         >
//           <p className="text-[#009639] text-lg inter ml-5">Order Summary</p>
//           <hr className="text-[#009639]" />
//           <div className=" space-y-3">
//             <div className=" flex justify-between px-5 text-sm text-gray-400 ">
//               <p>Items</p>
//               <p>4</p>
//             </div>
//             <div className=" flex justify-between px-5 text-sm text-gray-400">
//               <p>Sub Total</p>
//               <p>$5200.00</p>
//             </div>
//             <div className=" flex justify-between px-5 text-sm text-gray-400 ">
//               <p>Shiiping</p>
//               <p>$00.00</p>
//             </div>
//             <div className=" flex justify-between px-5 text-sm text-gray-400 ">
//               <p>Taxes</p>
//               <p>$00.00</p>
//             </div>
//             <div className=" flex justify-between px-5 text-sm text-gray-400">
//               <p>Coupon Discount</p>
//               <p>-$200.00</p>
//             </div>
//           </div>
//           <hr className="text-[#009639]" />
//           <div className=" flex justify-between px-5 text-sm text-gray-400 ">
//             <p>Total</p>
//             <p>$5000.00</p>
//           </div>
//           <div className=" w-full flex items-center justify-center mt-10">
//             <button
//               onClick={() => navigate("/checkout")}
//               className="bg-[#009639] text-white px-10 rounded-md py-3"
//             >
//               Proceed to Checkout
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ShoppingCart;








import React from "react";
import { HiX } from "react-icons/hi";
import Iphone from "../assets/Iphone16/blue.png";
import { HiMinusSm } from "react-icons/hi";
import { FaPlus } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
const ShoppingCart = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full flex  flex-col justify-center items-center mb-20">
      <div className=" w-full flex flex-col items-center justify-center space-y-14  bg-gradient-to-t from-green-200 via-green-200 to-white py-16 rounded-b-lg">
        <p className=" text-5xl font-bold text-[#009639]">Shopping Cart</p>
        <div className=" flex space-x-4">
          <svg
            width="44"
            height="44"
            viewBox="0 0 44 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="22"
              cy="22"
              r="21"
              fill="none"
              stroke="#009639"
              stroke-width="2"
            />
            <mask id="path-2-inside-1_527_9183" fill="white">
              <path d="M29.6881 13.4H27.1612C27.1612 10.4165 24.8997 8 22.1075 8C19.3153 8 17.0537 10.4165 17.0537 13.4H14.5269C13.1371 13.4 12 14.615 12 16.1V32.3C12 33.785 13.1371 35 14.5269 35H29.6881C31.0779 35 32.215 33.785 32.215 32.3V16.1C32.215 14.615 31.0779 13.4 29.6881 13.4ZM22.1075 10.7C23.4973 10.7 24.6343 11.915 24.6343 13.4H19.5806C19.5806 11.915 20.7177 10.7 22.1075 10.7ZM29.6881 32.3H14.5269V16.1H17.0537V18.8C17.0537 19.5425 17.6223 20.15 18.3172 20.15C19.0121 20.15 19.5806 19.5425 19.5806 18.8V16.1H24.6343V18.8C24.6343 19.5425 25.2029 20.15 25.8978 20.15C26.5927 20.15 27.1612 19.5425 27.1612 18.8V16.1H29.6881V32.3Z" />
            </mask>
            <path
              d="M29.6881 13.4H27.1612C27.1612 10.4165 24.8997 8 22.1075 8C19.3153 8 17.0537 10.4165 17.0537 13.4H14.5269C13.1371 13.4 12 14.615 12 16.1V32.3C12 33.785 13.1371 35 14.5269 35H29.6881C31.0779 35 32.215 33.785 32.215 32.3V16.1C32.215 14.615 31.0779 13.4 29.6881 13.4ZM22.1075 10.7C23.4973 10.7 24.6343 11.915 24.6343 13.4H19.5806C19.5806 11.915 20.7177 10.7 22.1075 10.7ZM29.6881 32.3H14.5269V16.1H17.0537V18.8C17.0537 19.5425 17.6223 20.15 18.3172 20.15C19.0121 20.15 19.5806 19.5425 19.5806 18.8V16.1H24.6343V18.8C24.6343 19.5425 25.2029 20.15 25.8978 20.15C26.5927 20.15 27.1612 19.5425 27.1612 18.8V16.1H29.6881V32.3Z"
              fill="white"
            />
            <path
              d="M27.1612 13.4H22.1172V18.444H27.1612V13.4ZM17.0537 13.4V18.444H22.0978V13.4H17.0537ZM24.6343 13.4V18.444H29.6784V13.4H24.6343ZM19.5806 13.4H14.5366V18.444H19.5806V13.4ZM29.6881 32.3V37.344H34.7321V32.3H29.6881ZM14.5269 32.3H9.48284V37.344H14.5269V32.3ZM14.5269 16.1V11.056H9.48284V16.1H14.5269ZM17.0537 16.1H22.0978V11.056H17.0537V16.1ZM19.5806 16.1V11.056H14.5366V16.1H19.5806ZM24.6343 16.1H29.6784V11.056H24.6343V16.1ZM27.1612 16.1V11.056H22.1172V16.1H27.1612ZM29.6881 16.1H34.7321V11.056H29.6881V16.1ZM29.6881 13.4V8.35597H27.1612V13.4V18.444H29.6881V13.4ZM27.1612 13.4H32.2052C32.2052 7.95084 27.9951 2.95597 22.1075 2.95597V8V13.044C22.0691 13.044 22.0276 13.0341 21.9985 13.0209C21.974 13.0099 21.9781 13.0058 21.9986 13.0278C22.0415 13.0737 22.1172 13.1928 22.1172 13.4H27.1612ZM22.1075 8V2.95597C16.2199 2.95597 12.0097 7.95084 12.0097 13.4H17.0537H22.0978C22.0978 13.1928 22.1734 13.0737 22.2163 13.0278C22.2369 13.0058 22.241 13.0099 22.2165 13.0209C22.1873 13.0341 22.1458 13.044 22.1075 13.044V8ZM17.0537 13.4V8.35597H14.5269V13.4V18.444H17.0537V13.4ZM14.5269 13.4V8.35597C10.0417 8.35597 6.95597 12.1493 6.95597 16.1H12H17.044C17.044 17.0807 16.2325 18.444 14.5269 18.444V13.4ZM12 16.1H6.95597V32.3H12H17.044V16.1H12ZM12 32.3H6.95597C6.95597 36.2507 10.0417 40.044 14.5269 40.044V35V29.956C16.2325 29.956 17.044 31.3193 17.044 32.3H12ZM14.5269 35V40.044H29.6881V35V29.956H14.5269V35ZM29.6881 35V40.044C34.1733 40.044 37.259 36.2507 37.259 32.3H32.215H27.1709C27.1709 31.3193 27.9825 29.956 29.6881 29.956V35ZM32.215 32.3H37.259V16.1H32.215H27.1709V32.3H32.215ZM32.215 16.1H37.259C37.259 12.1493 34.1733 8.35597 29.6881 8.35597V13.4V18.444C27.9825 18.444 27.1709 17.0807 27.1709 16.1H32.215ZM22.1075 10.7V15.744C20.4019 15.744 19.5903 14.3807 19.5903 13.4H24.6343H29.6784C29.6784 9.44934 26.5926 5.65597 22.1075 5.65597V10.7ZM24.6343 13.4V8.35597H19.5806V13.4V18.444H24.6343V13.4ZM19.5806 13.4H24.6246C24.6246 14.3807 23.8131 15.744 22.1075 15.744V10.7V5.65597C17.6223 5.65597 14.5366 9.44934 14.5366 13.4H19.5806ZM29.6881 32.3V27.256H14.5269V32.3V37.344H29.6881V32.3ZM14.5269 32.3H19.5709V16.1H14.5269H9.48284V32.3H14.5269ZM14.5269 16.1V21.144H17.0537V16.1V11.056H14.5269V16.1ZM17.0537 16.1H12.0097V18.8H17.0537H22.0978V16.1H17.0537ZM17.0537 18.8H12.0097C12.0097 22.0082 14.5269 25.194 18.3172 25.194V20.15V15.106C20.7177 15.106 22.0978 17.0768 22.0978 18.8H17.0537ZM18.3172 20.15V25.194C22.1075 25.194 24.6246 22.0082 24.6246 18.8H19.5806H14.5366C14.5366 17.0768 15.9167 15.106 18.3172 15.106V20.15ZM19.5806 18.8H24.6246V16.1H19.5806H14.5366V18.8H19.5806ZM19.5806 16.1V21.144H24.6343V16.1V11.056H19.5806V16.1ZM24.6343 16.1H19.5903V18.8H24.6343H29.6784V16.1H24.6343ZM24.6343 18.8H19.5903C19.5903 22.0082 22.1075 25.194 25.8978 25.194V20.15V15.106C28.2983 15.106 29.6784 17.0768 29.6784 18.8H24.6343ZM25.8978 20.15V25.194C29.6881 25.194 32.2052 22.0082 32.2052 18.8H27.1612H22.1172C22.1172 17.0768 23.4973 15.106 25.8978 15.106V20.15ZM27.1612 18.8H32.2052V16.1H27.1612H22.1172V18.8H27.1612ZM27.1612 16.1V21.144H29.6881V16.1V11.056H27.1612V16.1ZM29.6881 16.1H24.6441V32.3H29.6881H34.7321V16.1H29.6881Z"
              fill="#009639"
              mask="url(#path-2-inside-1_527_9183)"
            />
          </svg>
          <svg
            width="44"
            height="44"
            viewBox="0 0 44 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="22" cy="22" r="21" stroke="#009639" stroke-width="2" />
            <path
              d="M23.9834 34H18.6601C15.8051 34 14.3776 34 13.3879 33.1175C12.3969 32.2363 12.1549 30.7487 11.6698 27.7737L10.2058 18.8C9.98451 17.4438 9.87386 16.7662 10.2289 16.3212C10.5827 15.8762 11.2345 15.8762 12.5367 15.8762H30.5664C31.8686 15.8762 32.5204 15.8762 32.8742 16.3212C33.2293 16.7662 33.1174 17.4437 32.8973 18.8012L32.5581 20.8763M28.2391 15.875C28.2391 14.0516 27.5345 12.303 26.2804 11.0136C25.0262 9.72433 23.3252 9 21.5516 9C19.7779 9 18.0769 9.72433 16.8227 11.0136C15.5686 12.303 14.864 14.0516 14.864 15.875M27.0232 30.875C27.6202 31.5075 29.2119 34 30.063 34M30.063 34C30.9141 34 32.5058 31.5075 33.1028 30.875M30.063 34V24"
              stroke="#009639"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <svg
            width="44"
            height="44"
            viewBox="0 0 44 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="22" cy="22" r="21" stroke="#009639" stroke-width="2" />
            <path
              d="M31.5252 16.25H11.5028V13.625H31.5252M31.5252 29.375H11.5028V21.5H31.5252M31.5252 11H11.5028C10.1137 11 9 12.1681 9 13.625V29.375C9 30.0712 9.26369 30.7389 9.73305 31.2312C10.2024 31.7234 10.839 32 11.5028 32H31.5252C32.189 32 32.8256 31.7234 33.295 31.2312C33.7643 30.7389 34.028 30.0712 34.028 29.375V13.625C34.028 12.9288 33.7643 12.2611 33.295 11.7688C32.8256 11.2766 32.189 11 31.5252 11Z"
              fill="#009639"
            />
          </svg>
          <svg
            width="44"
            height="44"
            viewBox="0 0 44 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="22" cy="22" r="21" stroke="#009639" stroke-width="2" />
            <path
              d="M30.3017 13.3333H12.1354V11H30.3017V13.3333ZM25.4082 22.6667H23.4893V24.6383C22.774 25.7467 22.3539 27.065 22.3539 28.5C22.3539 28.8967 22.3994 29.2817 22.4561 29.6667H12.1354V22.6667H11V20.3333L12.1354 14.5H30.3017L31.4371 20.3333V21.9083C30.7218 21.6517 29.9611 21.5 29.1663 21.5C27.7698 21.5 26.4868 21.9317 25.4082 22.6667ZM21.2185 22.6667H14.4062V27.3333H21.2185V22.6667ZM31.8231 24.8133L27.7471 29.0017L25.9418 27.1467L24.6247 28.5L27.7471 32L33.1402 26.4583L31.8231 24.8133Z"
              fill="#009639"
            />
          </svg>
        </div>
      </div>
      <div className=" flex flex-col justify-center items-center space-y-10 xl:flex-row xl:space-y-0 w-9/12  mt-20 space-x-4">
        <div className=" w-3/5 space-y-10">
          <div
            className=" bg-[#009639] w-full flex justify-between px-16 py-5"
            style={{
              boxShadow:
                "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
            }}
          >
            <p className=" text-white text-sm inter">Product</p>
            <div className=" text-white text-sm inter flex space-x-20">
              <p>Price</p>

              <p>Quantity</p>
              <p>SubTotal</p>
            </div>
          </div>
          <div className="w-full flex flex-col space-y-4">
            <div
              className=" px-6 py-4 w-full flex justify-between"
              style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
            >
              <div className=" flex items-center justify-center space-x-4 ">
                <HiX className="text-[#009639] text-4xl" />
                <div>
                  <img src={Iphone} alt="" className=" w-16" />
                </div>
                <div className="space-y-1">
                  <p className=" font-bold">IPhone 16 Plus</p>
                  <p className="text-sm text-gray-500">Color Teal | 128GB</p>
                </div>
              </div>
              <div className=" flex space-x-16 items-center justify-center pr-12">
                <p className=" font-bold">$1300</p>
                <div
                  className=" text-[#009639] flex justify-center items-center space-x-3 h-7 px-2 rounded-md"
                  style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
                >
                  <HiMinusSm />
                  <p>1</p>
                  <FaPlus />
                </div>
                <p className=" font-bold">$1300</p>
              </div>
            </div>
            <div
              className=" px-6 py-4 w-full flex justify-between"
              style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
            >
              <div className=" flex items-center justify-center space-x-4 ">
                <HiX className="text-[#009639] text-4xl" />
                <div>
                  <img src={Iphone} alt="" className=" w-16" />
                </div>
                <div className="space-y-1">
                  <p className=" font-bold">IPhone 16 Plus</p>
                  <p className="text-sm text-gray-500">Color Teal | 128GB</p>
                </div>
              </div>
              <div className=" flex space-x-16 items-center justify-center pr-12">
                <p className=" font-bold">$1300</p>
                <div
                  className=" flex justify-center items-center space-x-3 h-7 px-2 rounded-md"
                  style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
                >
                  <HiMinusSm />
                  <p>1</p>
                  <FaPlus />
                </div>
                <p className=" font-bold">$1300</p>
              </div>
            </div>
            <div
              className=" px-6 py-4 w-full flex justify-between"
              style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
            >
              <div className=" flex items-center justify-center space-x-4 ">
                <HiX className="text-[#009639] text-4xl" />
                <div>
                  <img src={Iphone} alt="" className=" w-16" />
                </div>
                <div className="space-y-1">
                  <p className=" font-bold">IPhone 16 Plus</p>
                  <p className="text-sm text-gray-500">Color Teal | 128GB</p>
                </div>
              </div>
              <div className=" flex space-x-16 items-center justify-center pr-12">
                <p className=" font-bold">$1300</p>
                <div
                  className=" flex justify-center items-center space-x-3 h-7 px-2 rounded-md"
                  style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
                >
                  <HiMinusSm />
                  <p>1</p>
                  <FaPlus />
                </div>
                <p className=" font-bold">$1300</p>
              </div>
            </div>
            <div
              className=" px-6 py-4 w-full flex justify-between"
              style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
            >
              <div className=" flex items-center justify-center space-x-4 ">
                <HiX className="text-[#009639] text-4xl" />
                <div>
                  <img src={Iphone} alt="" className=" w-16" />
                </div>
                <div className="space-y-1">
                  <p className=" font-bold">IPhone 16 Plus</p>
                  <p className="text-sm text-gray-500">Color Teal | 128GB</p>
                </div>
              </div>
              <div className=" flex space-x-16 items-center justify-center pr-12">
                <p className=" font-bold">$1300</p>
                <div
                  className=" flex justify-center items-center space-x-3 h-7 px-2 rounded-md"
                  style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
                >
                  <HiMinusSm />
                  <p>1</p>
                  <FaPlus />
                </div>
                <p className=" font-bold">$1300</p>
              </div>
            </div>
          </div>
          <div className=" flex justify-between ">
            <div className=" space-x-4 ">
              <input
                type="text"
                placeholder="Promote code"
                className=" py-5 pl-6  placeholder:text-sm inter"
                style={{
                  boxShadow:
                    "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
                }}
              />
              <button
                style={{
                  boxShadow:
                    "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
                }}
                className=" bg-[#009639] py-5.5 px-7 text-white inter text-sm"
              >
                Apply Coupon
              </button>
            </div>
            <p className="text-[#009639] underline text-sm mt-11">
              Clear Shopping Cart
            </p>
          </div>
        </div>

        <div
          className=" w-2/5 rounded-lg h-fit py-9.5 space-y-6"
          style={{
            boxShadow:
              "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
          }}
        >
          <p className="text-[#009639] text-lg inter ml-5">Order Summary</p>
          <hr className="text-[#009639]" />
          <div className=" space-y-3">
            <div className=" flex justify-between px-5 text-sm text-gray-400 ">
              <p>Items</p>
              <p>4</p>
            </div>
            <div className=" flex justify-between px-5 text-sm text-gray-400">
              <p>Sub Total</p>
              <p>$5200.00</p>
            </div>
            <div className=" flex justify-between px-5 text-sm text-gray-400 ">
              <p>Shiiping</p>
              <p>$00.00</p>
            </div>
            <div className=" flex justify-between px-5 text-sm text-gray-400 ">
              <p>Taxes</p>
              <p>$00.00</p>
            </div>
            <div className=" flex justify-between px-5 text-sm text-gray-400">
              <p>Coupon Discount</p>
              <p>-$200.00</p>
            </div>
          </div>
          <hr className="text-[#009639]" />
          <div className=" flex justify-between px-5 text-sm text-gray-400 ">
            <p>Total</p>
            <p>$5000.00</p>
          </div>
          <div className=" w-full flex items-center justify-center mt-10">
            <button
              onClick={() => navigate("/checkout")}
              className="bg-[#009639] text-white px-10 rounded-md py-3"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
