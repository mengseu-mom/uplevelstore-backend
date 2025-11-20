import PhoneCard from "./PhoneCard";
import InSilver from "../assets/infinix.png";

const infinixList = [
  { image: InSilver, model: "Infinix", color: "Pink color" },
  { image: InSilver, model: "Infinix", color: "Mint color" },
  { image: InSilver, model: "Infinix", color: "Black color" },
  { image: InSilver, model: "Infinix", color: "White color" },
];

const Infinix = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6 mt-4">
      {infinixList.map((item, index) => (
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

export default Infinix;
