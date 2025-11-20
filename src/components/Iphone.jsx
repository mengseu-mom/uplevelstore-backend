// import PhoneCard from "./PhoneCard";
// import IpPink from "../assets/Iphone16/pink.png";
// import IpBlack from "../assets/Iphone16/black.png";
// import IpBlue from "../assets/Iphone16/blue.png";
// import IpSilver from "../assets/Iphone16/silver.png";

// const iphoneList = [
//   { image: IpPink, model: "Iphone 16", color: "Pink strap" },
//   { image: IpSilver, model: "Iphone 16", color: "Silver strap" },
//   { image: IpBlack, model: "Iphone 16", color: "Black strap" },
//   { image: IpBlue, model: "Iphone 16", color: "Blue strap" },
// ];

// const Iphone = () => {
//   return (
//    <div className="flex   space-x-6 ">
//       {iphoneList.map((item, index) => (
//         <PhoneCard 
//           key={index}
//           image={item.image}
//           model={item.model}
//           color={item.color}
//           btnBuy="Buy Now"
          
//         />
//       ))}
//     </div>
//   );
// };

// export default Iphone;
























import PhoneCard from "./PhoneCard";
import IpPink from "../assets/Iphone16/pink.png";
import IpBlack from "../assets/Iphone16/black.png";
import IpBlue from "../assets/Iphone16/blue.png";
import IpSilver from "../assets/Iphone16/silver.png";

const iphoneList = [
  { image: IpPink, model: "iPhone 16", color: "Pink" },
  { image: IpSilver, model: "iPhone 16 Pro", color: "Silver" },
  { image: IpBlack, model: "iPhone 16 Pro Max", color: "Space Black" },
  { image: IpBlue, model: "iPhone 16 Plus", color: "Blue" },
];

const Iphone = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6">
      {iphoneList.map((item, index) => (
        <PhoneCard 
          key={index}
          image={item.image}
          model={item.model}
          color={item.color}
          btnBuy="Buy Now"
        />
      ))}
    </div>
  );
};

export default Iphone;