import { create } from "zustand";
import Black from "../assets/Iphone16/black.png";
import Blue from "../assets/Iphone16/blue.png";
import Pink from "../assets/Iphone16/pink.png";
import Silver from "../assets/Iphone16/silver.png";
import Teal from "../assets/Iphone16/teal.png";
import Sumsung from "../assets/samsungs25.png";
import Iphone from "../assets/iphon16prosilver.png";
import Infinix from "../assets/infinix.png";
import Samsung from "../assets/samsungs25.png";

import WatApple from "../assets/watches/appleWatches2.png";
// import SsPink from "../assets/Samsung/Galaxy S25/pink.png";
// import SsMint from "../assets/Samsung/Galaxy S25/mint.png";
// import SsBlack from "../assets/Samsung/Galaxy S25/black.png";
// import SsWhite from "../assets/Samsung/Galaxy S25/white.png";
import AsPowerbank from "../assets/accessories/powerbank.png";
import AsCase from "../assets/accessories/case.png";
import AsGeforce from "../assets/accessories/geforce.png";
import AsUsbc from "../assets/accessories/usbc.png";
import Msi from "../assets/msiii.png";
export const ProductStore = create((set) => ({
  // Product Data
  moreDevice: [
    {
      id: 1,
      name: "iPhone 16 Pro 512GB",
      color: "Desert Titanium color",
      price: "4,818,000 | $1200",
      image: Black,
    },
    {
      id: 2,
      name: "iPhone 16 Pro 512GB",
      color: "Desert Titanium color",
      price: "4,818,000 | $1200",
      image: Blue,
    },
    {
      id: 3,
      name: "iPhone 16 Pro 512GB",
      color: "Desert Titanium color",
      price: "4,818,000 | $1200",
      image: Silver,
    },
    {
      id: 4,
      name: "iPhone 16 Pro 512GB",
      color: "Desert Titanium color",
      price: "4,818,000 | $1200",
      image: Teal,
    },
    {
      id: 5,
      name: "iPhone 16 Pro 512GB",
      color: "Desert Titanium color",
      price: "4,818,000 | $1200",
      image: Teal,
    },
    {
      id: 6,
      name: "iPhone 16 Pro 512GB",
      color: "Desert Titanium color",
      price: "4,818,000 | $1200",
      image: Sumsung,
    },
  ],
  best_seller: {
    iphone: [
      {
        id: 1,
        image: Iphone,
        name: "IPhone 16 Pro 512GB",
        description: "Desert Titanium color",
        price: "4,818,000 | $1200",
      },
      { name: "", description: "", price: "" },
    ],
    infinix: [
      {
        id: 2,
        image: Infinix,
        name: "Infinix HOT 50Pro+",
        description: "Dreamy Purple color",
        price: "3,212,000 | $800",
      },
    ],
    samsung: [
      {
        id: 3,
        image: Samsung,
        name: "Samsung Galaxy S25",
        description: "Blue Black color",
        price: "3,212,000 | $800",
      },
    ],
  },
  watches: [
    {
      id: 1,
      name: "Apple Watches",
      color: "Black color",
      price: "4,818,000 | $1200",
      image: WatApple,
    },
    {
      id: 2,
      name: "Apple Watches",
      color: "Black color",
      price: "4,818,000 | $1200",
      image: WatApple,
    },
    {
      id: 3,
      name: "Apple Watches",
      color: "Black color",
      price: "4,818,000 | $1200",
      image: WatApple,
    },
    {
      id: 4,
      name: "Apple Watches",
      color: "Black color",
      price: "4,818,000 | $1200",
      image: WatApple,
    },
    {
      id: 5,
      name: "Apple Watches",
      color: "Black color",
      price: "4,818,000 | $1200",
      image: WatApple,
    },
    {
      id: 6,
      name: "Apple Watches",
      color: "Black color",
      price: "4,818,000 | $1200",
      image: WatApple,
    },
  ],
  computer: [
    {
      id: 1,
      name: "MSI",
      color: "Black color",
      price: "4,818,000 | $1200",
      image: Msi,
    },
    {
      id: 2,
      name: "MSI",
      color: "Black color",
      price: "4,818,000 | $1200",
      image: Msi,
    },
    {
      id: 3,
      name: "MSI",
      color: "Black color",
      price: "4,818,000 | $1200",
      image: Msi,
    },
    {
      id: 4,
      name: "MSI",
      color: "Black color",
      price: "4,818,000 | $1200",
      image: Msi,
    },
    {
      id: 5,
      name: "MSI",
      color: "Black color",
      price: "4,818,000 | $1200",
      image: Msi,
    },
    {
      id: 6,
      name: "MSI",
      color: "Black color",
      price: "4,818,000 | $1200",
      image: Msi,
    },
  ],
  accessories: [
    {
      id: 1,
      name: "Power Bank",
      color: "Black color",
      price: "4,818,000 | $1200",
      image: AsPowerbank,
    },
    {
      id: 2,
      name: "Case Iphone 15",
      color: "Black color",
      price: "4,818,000 | $1200",
      image: AsCase,
    },
    {
      id: 3,
      name: "USBC",
      color: "Black color",
      price: "4,818,000 | $1200",
      image: AsUsbc,
    },
    {
      id: 4,
      name: "Geforce",
      color: "Black color",
      price: "4,818,000 | $1200",
      image: AsGeforce,
    },
  ],
}));
