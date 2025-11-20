import React, { useEffect, useRef } from "react";
import Apple from "../assets/applelogo.jpg";
import Sumsung from "../assets/sumsunglogo.jpg";
import Vivo from "../assets/vivologo.jpg";
import Infinix from "../assets/infinixlogo.jpg";
import Rog from "../assets/rog.png";
import Msi from "../assets/msilogo.jpg";

const brands = [
  { src: Apple, name: "Apple" },
  { src: Sumsung, name: "Samsung" },
  { src: Vivo, name: "Vivo" },
  { src: Infinix, name: "Infinix" },
  { src: Rog, name: "ROG" },
  { src: Msi, name: "MSI" },
];

const RunningBrand = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    let animationFrameId;
    let scrollPos = 0;

    const speed = 2; // pixels per frame

    // Duplicate the content for infinite scroll effect
    const scrollWidth = container.scrollWidth / 2;

    const step = () => {
      scrollPos += speed;
      if (scrollPos >= scrollWidth) {
        scrollPos = 0;
      }
      container.scrollLeft = scrollPos;
      animationFrameId = requestAnimationFrame(step);
    };

    animationFrameId = requestAnimationFrame(step);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  // Duplicate brands array for seamless scrolling
  const doubledBrands = [...brands, ...brands];

  return (
    <div
      ref={containerRef}
      style={{
        overflowX: "hidden",
        whiteSpace: "nowrap",
        width: "100%",
        background: "#fff",
      }}
    >
      {doubledBrands.map((brand, index) => (
        <img
          key={index}
          src={brand.src}
          alt={`${brand.name} logo`}
          style={{
            width: "176px", // roughly Tailwind w-44 (11rem)
            height: "96px", // roughly Tailwind h-24 (6rem)
            objectFit: "contain",
            display: "inline-block",
            marginRight: "48px", // roughly Tailwind gap-12
          }}
        />
      ))}
    </div>
  );
};

export default RunningBrand;
