
// import React, { useEffect, useState } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import { request } from "../util/request";

// const LaptopModel = () => {
//   useEffect(() => {
//     AOS.init({
//       duration: 1200,
//       easing: "ease-in-out",
//       once: true,
//     });
//   }, []);

//   const [state, setState] = useState([]);

//   useEffect(() => {
//     getList();
//   }, []);

//   const getList = async () => {
//     const res = await request("products", "get");
//     const filtered = res.filter((item) => item.category?.name === "Laptop");
//     setState(filtered);
//   };

//   const getImagePath = (imageStr) => {
//     try {
//       const parsed = JSON.parse(imageStr); 
//       const path = parsed[0]?.path; 
//       return path ? `http://localhost:8000/storage/${path}` : "";
//     } catch (err) {
//       console.error("Error parsing image:", err);
//       return "";
//     }
//   };

//   return (
//     <div className="flex items-center justify-center bg-white py-16">
//       <div className="w-9/12 space-y-10">
//         <p className="text-[#009639] text-4xl font-bold" data-aos="fade-down">
//           Laptop Model
//         </p>

//         {state.map(({ id, model, price, display, image }) => {
//           const imageUrl = getImagePath(image);

//           return (
//             <div
//               key={id}
//               className="group flex w-full relative bg-gradient-to-t from-green-200 via-green-200 to-white rounded-xl shadow inset-shadow-2xs hover:from-yellow-400 hover:via-yellow-400 hover:to-yellow-300 transition-all duration-500"
//               data-aos="fade-up"
//             >
//               <div
//                 className="flex-1 px-14 py-20"
//                 data-aos="fade-right"
//                 data-aos-delay="100"
//               >
//                 <p className="text-[#009639] text-5xl font-bold mb-4">
//                   {model}
//                 </p>
//                 <p className="text-gray-500 text-lg mb-2">{display}</p>
//                 <p className="text-[#009639] text-md mb-6">${price}</p>
//                 <button
//                   className="bg-[#009639] text-white rounded-lg px-6 py-2 text-lg shadow hover:bg-green-700 transition-colors"
//                   data-aos="fade-up"
//                   data-aos-delay="200"
//                 >
//                   View Detail
//                 </button>
//               </div>

//               <div
//                 className="absolute -right-10 bottom-14 -rotate-14"
//                 data-aos="zoom-in-left"
//                 data-aos-delay="300"
//               >
//                 <img
//                   src={imageUrl}
//                   alt={model}
//                   className="w-[580px] h-auto group-hover:scale-105 transition duration-500"
                  
//                 />
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default LaptopModel;









































import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { request } from "../util/request";
import { Link } from "react-router-dom";  // <-- import Link here

const LaptopModel = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const [state, setState] = useState([]);

  useEffect(() => {
    getList();
  }, []);

  const getList = async () => {
    const res = await request("products", "get");
    const filtered = res.filter((item) => item.category?.name === "Laptop");
    setState(filtered);
  };
console.log(state)
  const getImagePath = (imageStr) => {
    try {
      const parsed = JSON.parse(imageStr);
      const path = parsed[0]?.path;
      return path ? `http://localhost:8000/storage/${path}` : "";
    } catch (err) {
      console.error("Error parsing image:", err);
      return "";
    }
  };

  return (
    <div className="flex items-center justify-center bg-white py-16">
      <div className="w-9/12 space-y-10">
        <p className="text-[#009639] text-4xl font-bold" data-aos="fade-down">
          Laptop Model
        </p>

        {state.map(({ id, model, price, display, image }) => {
          const imageUrl = getImagePath(image);

          return (
            <div
              key={id}
              className="group flex w-full relative bg-gradient-to-t from-green-200 via-green-200 to-white rounded-xl shadow inset-shadow-2xs hover:from-yellow-400 hover:via-yellow-400 hover:to-yellow-300 transition-all duration-500"
              data-aos="fade-up"
            >
              <div
                className="flex-1 px-14 py-20"
                data-aos="fade-right"
                data-aos-delay="100"
              >
                <p className="text-[#009639] text-5xl font-bold mb-4">{model}</p>
                <p className="text-gray-500 text-lg mb-2">{display}</p>
                <p className="text-[#009639] text-md mb-6">${price}</p>
                <Link
                  to={`/viewdetails/${id}`}
                  className="bg-[#009639] text-white rounded-lg px-6 py-2 text-lg shadow hover:bg-green-700 transition-colors inline-block text-center"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  View Detail
                </Link>
              </div>

              <div
                className="absolute -right-10 bottom-14 -rotate-14"
                data-aos="zoom-in-left"
                data-aos-delay="300"
              >
                <img
                  src={imageUrl}
                  alt={model}
                  className="w-[580px] h-auto group-hover:scale-105 transition duration-500"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LaptopModel;
