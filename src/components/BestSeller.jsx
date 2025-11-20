// import React, { useEffect, useState } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import { Link } from "react-router-dom";
// import { ProductStore } from "../store/store";
// import Apple from "../assets/apple.png";
// import Samsung from "../assets/samsung-logo-png_seeklogo-122019.png";
// import Infinix from "../assets/infin.png";
// import { request } from "../util/request";

// const BestSeller = () => {
//   const { best_seller } = ProductStore();

//   useEffect(() => {
//     AOS.init({ duration: 1000 });
//   }, []);

//   const iphone = best_seller?.iphone?.[0];
//   const infinix = best_seller?.infinix?.[0];
//   const samsung = best_seller?.samsung?.[0];

//   const [state, setState] = useState([]);
//   useEffect(() => {
//     getList();
//   }, []);
//   const getList = async () => {
//     const res = await request("products", "get");

//     const filtered = res.filter((item) =>
//       ["Iphone", "Infinix", "Samsung"].includes(item.brand)
//     );

//     setState(filtered);
//   };
//   console.log(state)
//   return (
//     <div className="w-full sm:px-4 md:px-8 xl:px-20 max-w-9/12 mx-auto py-10">
//       <h2
//         data-aos="zoom-in-up"
//         className="text-center text-3xl md:text-4xl font-bold text-[#009639] mb-12"
//       >
//         Best Seller
//       </h2>

//       <div className="flex flex-col lg:flex-row gap-8">
//         {/* iPhone Card */}
//         <div
//           data-aos="fade-right"
//           className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all flex flex-col md:justify-between p-6 w-full lg:w-2/5 bg-gradient-to-br from-green-100 to-white  hover:from-yellow-400 hover:via-yellow-400 hover:to-yellow-300  duration-500"
//         >
//           <div className="flex justify-center mb-6">
//             <img
//               src={iphone?.image}
//               alt="iPhone"
//               className="w-[260px] h-auto transition-transform duration-500 ease-in-out group-hover:scale-105"
//             />
//           </div>
//           <div className="space-y-3">
//             <h3 className="text-xl font-semibold text-[#009639]">
//               {iphone?.name}
//             </h3>
//             <p className="text-gray-600 text-sm">
//               {iphone?.description || "Desert Titanium color"}
//             </p>
//             <p className="text-[#009639] font-bold">{iphone?.price}</p>
//             <Link to={`/viewdetails/${iphone?.id}`}>
//               <button className="mt-2 bg-[#009639] text-white px-4 py-2 rounded-md text-sm hover:bg-[#007f2c] transition">
//                 View detail
//               </button>
//             </Link>
//             {/* <img src={Apple} alt="Apple" className="w-10 opacity-50 mt-6" /> */}
//           </div>
//         </div>

//         {/* Right Column: Infinix & Samsung */}
//         <div className="flex flex-col space-y-8 sm:pace-y-8 md:space-y-8 lg:space-y-0 justify-between w-full lg:w-2/3 relative">
//           {/* Infinix Card */}
//           <div
//             data-aos="fade-left"
//             className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all  flex flex-col sm:flex-row justify-between md:p-5 lg:p-5 xl:p-8 2xl:p-10 bg-gradient-to-br from-green-100 to-white  hover:from-yellow-400 hover:via-yellow-400 hover:to-yellow-300  duration-500"
//           >
//             <div className="flex flex-col mt-60 ml-5 mb-5 sm:mb-0 sm:ml-0 sm:mt-10 space-y-3 sm:pr-6">
//               <h3 className="text-xl font-semibold text-[#009639]">
//                 {infinix?.name}
//               </h3>
//               <p className="text-gray-600 text-sm">
//                 {infinix?.description || "Dreamy Purple color"}
//               </p>
//               <p className="text-[#009639] font-bold">{infinix?.price}</p>
//               <Link to={`/viewdetails/${infinix?.id}`}>
//                 <button className="mt-2 bg-[#009639] text-white px-4 py-2 rounded-md text-sm hover:bg-[#007f2c] transition">
//                   View detail
//                 </button>
//               </Link>
//               {/* <img src={Infinix} alt="Infinix" className="w-10 opacity-50 mt-4" /> */}
//             </div>
//             <div className="flex justify-center sm:mt-0">
//               <img
//                 src={infinix?.image}
//                 alt="Infinix"
//                 className="w-[180px] absolute top-4 sm:-top-4 sm:mt-0 sm:bottom-0 sm:right-0 md:h-[250px] md:w-[220px] lg:h-[240px] lg:w-[195px] xl:w-[200px] xl:h-[260px] 2xl:w-[220px] 2xl:h-[280px] transition-transform duration-500 ease-in-out group-hover:scale-105"
//               />
//             </div>
//           </div>

//           {/* Samsung Card */}
//           <div
//             data-aos="zoom-in-up"
//             className="group bg-white relative rounded-2xl shadow-md hover:shadow-xl flex flex-col-reverse sm:flex-row justify-between md:p-5 lg:p-5   xl:p-8 2xl:p-10 bg-gradient-to-br from-green-100 to-white hover:from-yellow-400 hover:via-yellow-400 hover:to-yellow-300 transition-all duration-500 "
//           >
//             <div className="flex justify-center mt-6 sm:mt-0">
//               <img
//                 src={samsung?.image}
//                 alt="Samsung"
//                 className=" absolute top-4 sm:-top-2  sm:left-0  w-[180px] lg:h-[230px] lg:w-[195px] xl:w-[200px] xl:h-[255px] 2xl:w-[220px] 2xl:h-[265px] transition-transform duration-500 ease-in-out group-hover:scale-105"
//               />
//             </div>
//             <div className="flex flex-col mt-60  ml-5 mb-5 sm:ml-0 sm:mb-0 sm:mt-6 space-y-3 sm:pl-6">
//               <h3 className="text-xl font-semibold text-[#009639]">
//                 {samsung?.name}
//               </h3>
//               <p className="text-gray-600 text-sm">
//                 {samsung?.description || "Blue Black color"}
//               </p>
//               <p className="text-[#009639] font-bold">{samsung?.price}</p>
//               <Link to={`/viewdetails/${samsung?.id}`}>
//                 <button className="mt-2 bg-[#009639] text-white px-4 py-2 rounded-md text-sm hover:bg-[#007f2c] transition">
//                   View detail
//                 </button>
//               </Link>
//               {/* <img src={Samsung} alt="Samsung" className="w-12 opacity-50 mt-4" /> */}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BestSeller;














import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import { request } from "../util/request";

const BestSeller = () => {
  const [state, setState] = useState([]);

  useEffect(() => {
    AOS.init({ duration: 1000 });
    getList();
  }, []);

  const getList = async () => {
    const res = await request("products", "get");
    const filtered = res.filter((item) =>
      ["Iphone", "Infinix", "Samsung"].includes(item.brand)
    );
    setState(filtered);
  };
  console.log(state)
  const iphone = state.find((item) => item.brand === "Iphone");
  const infinix = state.find((item) => item.brand === "Infinix");
  const samsung = state.find((item) => item.brand === "Samsung");

  const getImagePath = (imageStr) => {
    try {
      const parsed = JSON.parse(imageStr);
      const path = parsed[0]?.path;
      return path ? `http://localhost:8000/storage/${path}` : "";
    } catch {
      return "";
    }
  };

  return (
    <div className="w-full sm:px-4 md:px-8 xl:px-20 max-w-9/12 mx-auto py-10">
      <h2
        data-aos="zoom-in-up"
        className="text-center text-3xl md:text-4xl font-bold text-[#009639] mb-12"
      >
        Best Seller
      </h2>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* iPhone Card */}
        <div
          data-aos="fade-right"
          className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all flex flex-col md:justify-between p-6 w-full lg:w-2/5 bg-gradient-to-br from-green-100 to-white  hover:from-yellow-400 hover:via-yellow-400 hover:to-yellow-300  duration-500"
        >
          <div className="flex justify-center mb-6">
            <img
              src={getImagePath(iphone?.image)}
              alt="iPhone"
              className="w-[260px] h-auto transition-transform duration-500 ease-in-out group-hover:scale-105"
            />
          </div>
          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-[#009639]">
              {iphone?.model}
            </h3>
            <p className="text-gray-600 text-sm">
              {iphone?.display || "Desert Titanium color"}
            </p>
            <p className="text-[#009639] font-bold">${iphone?.price}</p>
            <Link to={`/viewdetails/${iphone?.id}`}>
              <button className="mt-2 bg-[#009639] text-white px-4 py-2 rounded-md text-sm hover:bg-[#007f2c] transition">
                View detail
              </button>
            </Link>
          </div>
        </div>

        {/* Infinix and Samsung Cards */}
        <div className="flex flex-col space-y-8 lg:space-y-0 justify-between w-full lg:w-2/3 relative">
          {/* Infinix Card */}
          <div
            data-aos="fade-left"
            className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all flex flex-col sm:flex-row justify-between md:p-5 lg:p-5 xl:p-8 2xl:p-10 bg-gradient-to-br from-green-100 to-white hover:from-yellow-400 hover:via-yellow-400 hover:to-yellow-300 duration-500"
          >
            <div className="flex flex-col mt-60 ml-5 mb-5 sm:mb-0 sm:ml-0 sm:mt-10 space-y-3 sm:pr-6">
              <h3 className="text-xl font-semibold text-[#009639]">
                {infinix?.model}
              </h3>
              <p className="text-gray-600 text-sm">
                {infinix?.display || "Dreamy Purple color"}
              </p>
              <p className="text-[#009639] font-bold">${infinix?.price}</p>
              <Link to={`/viewdetails/${infinix?.id}`}>
                <button className="mt-2 bg-[#009639] text-white px-4 py-2 rounded-md text-sm hover:bg-[#007f2c] transition">
                  View detail
                </button>
              </Link>
            </div>
            <div className="flex justify-center sm:mt-0">
              <img
                src={getImagePath(infinix?.image)}
                alt="Infinix"
                className="w-[180px] absolute top-4 sm:-top-4 sm:mt-0 sm:bottom-0 sm:right-0 md:h-[250px] md:w-[220px] lg:h-[240px] lg:w-[195px] xl:w-[200px] xl:h-[260px] 2xl:w-[220px] 2xl:h-[280px] transition-transform duration-500 ease-in-out group-hover:scale-105"
              />
            </div>
          </div>

          {/* Samsung Card */}
          <div
            data-aos="zoom-in-up"
            className="group bg-white relative rounded-2xl shadow-md hover:shadow-xl flex flex-col-reverse sm:flex-row justify-between md:p-5 lg:p-5 xl:p-8 2xl:p-10 bg-gradient-to-br from-green-100 to-white hover:from-yellow-400 hover:via-yellow-400 hover:to-yellow-300 transition-all duration-500"
          >
            <div className="flex justify-center mt-6 sm:mt-0">
              <img
                src={getImagePath(samsung?.image)}
                alt="Samsung"
                className="absolute top-4 sm:-top-2 sm:left-0 w-[180px] lg:h-[230px] lg:w-[195px] xl:w-[200px] xl:h-[255px] 2xl:w-[220px] 2xl:h-[265px] transition-transform duration-500 ease-in-out group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col mt-60 ml-5 mb-5 sm:ml-0 sm:mb-0 sm:mt-6 space-y-3 sm:pl-6">
              <h3 className="text-xl font-semibold text-[#009639]">
                {samsung?.model}
              </h3>
              <p className="text-gray-600 text-sm">
                {samsung?.display || "Blue Black color"}
              </p>
              <p className="text-[#009639] font-bold">${samsung?.price}</p>
              <Link to={`/viewdetails/${samsung?.id}`}>
                <button className="mt-2 bg-[#009639] text-white px-4 py-2 rounded-md text-sm hover:bg-[#007f2c] transition">
                  View detail
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestSeller;
