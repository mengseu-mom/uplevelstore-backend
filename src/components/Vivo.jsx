import PhoneCard from "./PhoneCard";
import VvPink from "../assets/Vivo/pink.png";
import VvPuple from "../assets/Vivo/puple.png";
import VvBlue from "../assets/Vivo/blue.png";
import VvSilver from "../assets/Vivo/silver.png";

const vivoList = [
  { image: VvPink, model: "Vivo V50", color: "Pink strap" },
  { image: VvSilver, model: "Vivo V50", color: "Silver strap" },
  { image: VvPuple, model: "Vivo V50", color: "Purple strap" },
  { image: VvBlue, model: "Vivo V50", color: "Blue strap" },
];

const Vivo = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6 mt-4">
      {vivoList.map((item, index) => (
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

export default Vivo;
