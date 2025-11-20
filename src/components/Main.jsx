import React from "react";
import M1 from "../assets/m1.jpg"
import M2 from "../assets/m2.jpg"

import M3 from "../assets/m3.jpg"
import M4 from "../assets/m4.jpg"
import { useState,useEffect } from "react";
const Home = () => {
  const img = [M1, M2,M3,M4];
  const [index, setIndex] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      if (index >= img.length - 1) {
        setIndex(0);
      } else {
        setIndex(index + 1);
      }
    }, 2000);
  });
  return (
    <div>
      
        <div className="w-full ">
          <img
            className=" object-cover w-full"
            src={img[index]}
            alt=""
          />
        </div>
      
    </div>
  );
};

export default Home;
