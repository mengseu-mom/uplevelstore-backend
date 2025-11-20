import PhoneCard from "./PhoneCard";
import SsPink from "../assets/Samsung/Galaxy S25/pink.png";
import SsMint from "../assets/Samsung/Galaxy S25/mint.png";
import SsBlack from "../assets/Samsung/Galaxy S25/black.png";
import SsWhite from "../assets/Samsung/Galaxy S25/white.png";
const iphoneList = [
  { image: SsPink, model: "Samsung Galaxy S25", color: "Pink color" },
  { image: SsMint, model: "Samsung Galaxy S25", color: "Mint color" },
  { image: SsBlack, model: "Samsung Galaxy S25", color: "Black color" },
  { image: SsWhite, model: "Samsung Galaxy S25", color: "White color" },
];

const Samsung = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6 mt-4">
      {iphoneList.map((item, index) => (
        <PhoneCard
          key={index}
          image={item.image}
          model={item.model}
          color={item.color}
          btnBuy="Buy Now"
          imageStyle="w-[190px] h-[150px]"
        />
      ))}
    </div>
  );
};

export default Samsung;
