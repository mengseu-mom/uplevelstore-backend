import { useState } from "react";
import IpBlack from "../assets/Iphone16/black.png";
import AsPowerbank from "../assets/accessories/powerbank.png";
import AsCase from "../assets/accessories/case.png";
import AsGeforce from "../assets/accessories/geforce.png";
import AsUsbc from "../assets/accessories/usbc.png";
import WatApple from "../assets/watches/appleWatches2.png";
import Ltmsi from "../assets/msiii.png";
import PhoneCard from "./PhoneCard";
import Iphone from "./Iphone";
import Samsung from "./Samsung";
import Infinix from "./Infinix";
import Vivo from "./Vivo";
import { useNavigate } from "react-router-dom";

function NavBarDropDown({ title,page }) {
  const [subMenu, setSubMenu] = useState("apple");
  const navigate = useNavigate();
  return (
    <div className=" flex  bg-white">
      <div className=" w-screen  ">
      <div className="    flex  justify-center  space-x-20">
        <div className="flex flex-col  space-y-4 inter mt-10 ">
          <h2 className="text-2xl text-[#009639]   text-center ">
            {title}
          </h2>
          {title === "Smartphone" && (
            <div className="flex flex-col  space-y-3">
              <span
                onClick={() => setSubMenu("apple")}
                className={`cursor-pointer hover:text-[#009639] ${
                  subMenu === "apple"
                    ? "text-[#009639] inter"
                    : "text-gray-700"
                }`}
              >
                Apple
              </span>
              <span
                onClick={() => setSubMenu("samsung")}
                className={`cursor-pointer hover:text-[#009639] ${
                  subMenu === "samsung"
                    ? "text-[#009639] inter"
                    : "text-gray-700"
                }`}
              >
                Samsung
              </span>
              <span
                onClick={() => setSubMenu("infinix")}
                className={`cursor-pointer hover:text-[#009639] ${
                  subMenu === "infinix"
                    ? "text-[#009639] inter"
                    : "text-gray-700"
                }`}
              >
                Infinix
              </span>
              <span
                onClick={() => setSubMenu("vivo")}
                className={`cursor-pointer hover:text-[#009639] ${
                  subMenu === "vivo"
                    ? "text-[#009639] inter"
                    : "text-gray-700"
                }`}
              >
                Vivo
              </span>
            </div>
          )}
          {title === "Watches" && (
            <div className="flex flex-col inter space-y-3">
              <span
                onClick={() => setSubMenu("apple")}
                className="cursor-pointer hover:text-[#009639]"
              >
                Apple
              </span>
              <span
                onClick={() => setSubMenu("samsung")}
                className="cursor-pointer hover:text-[#009639]"
              >
                Samsung
              </span>
              <span
                onClick={() => setSubMenu("infinix")}
                className="cursor-pointer hover:text-[#009639]"
              >
                Infinix
              </span>
              <span
                onClick={() => setSubMenu("vivo")}
                className="cursor-pointer hover:text-[#009639]"
              >
                Vivo
              </span>
            </div>
          )}
          {title === "Laptop" && (
            <div className="flex flex-col inter space-y-3">
              <span>Apple</span>
              <span>Samsung</span>
              <span>Vivo</span>
            </div>
          )}
          {title === "Accessories" && (
            <div className="flex flex-col inter space-y-3">
              <span>PowerBank</span>
              <span>Headphone</span>
              <span>Charging Cable</span>
              <span>Case</span>
              <span>VGA</span>
            </div>
          )}
        </div>

        <div className="hidden lg:block w-[1.5px] h-[410px] bg-green-500 mt-4" />

        <div className="   w-fit space-y-6 pb-5 mt-10  ">
          {title === "Smartphone" && (
            <div className="flex space-x-6 ">
              {subMenu === "apple" && (
                  <Iphone/>
              )}
              {subMenu === "samsung" && (
                  <Samsung/>
              )}
              {subMenu === "infinix" && (
                <Infinix/>
              )}
              {subMenu === "vivo" && (
                <Vivo/>
              )}
            </div>
          )}

          {title === "Watches" && (
            <div className="flex flex-wrap justify-center gap-6 mt-4">
              <PhoneCard
                image={
                  subMenu === "apple"
                    ? WatApple
                    : subMenu === "samsung"
                    ? IpBlack
                    : null
                }
                model="Apple Watch"
                color="Pink strap"
                btnBuy="Buy Now"
                imageStyle="w-[190px] h-[150px]"
              />

              <PhoneCard
                image={WatApple}
                model="Apple Watch"
                color="Silver strap"
                btnBuy="Buy Now"
              />
              <PhoneCard
                image={WatApple}
                model="Apple Watch"
                color="Black strap"
                btnBuy="Buy Now"
              />
              <PhoneCard
                image={WatApple}
                model="Apple Watch"
                color="Blue strap"
                btnBuy="Buy Now"
              />
            </div>
          )}
          {title === "Laptop" && (
            <div className="flex flex-wrap justify-center gap-6 mt-4">
              <PhoneCard
                image={Ltmsi}
                model="MSI"
                color="Pink strap"
                btnBuy="Buy Now"
              />
              <PhoneCard
                image={Ltmsi}
                model="MSI"
                color="Pink strap"
                btnBuy="Buy Now"
              />
              <PhoneCard
                image={Ltmsi}
                model="MSI"
                color="Pink strap"
                btnBuy="Buy Now"
              />
              <PhoneCard
                image={Ltmsi}
                model="MSI"
                color="Pink strap"
                btnBuy="Buy Now"
              />
            </div>
          )}
          {title === "Accessories" && (
            <div className="flex flex-wrap justify-center gap-6 mt-4">
              <PhoneCard
                image={AsPowerbank}
                model="Samsung Battery Pack"
                color="Pink strap"
                btnBuy="Buy Now"
              />
              <PhoneCard
                image={AsCase}
                model="Iphone 16 Pro Max Case"
                color="Silver strap"
                btnBuy="Buy Now"
              />
              <PhoneCard
                image={AsUsbc}
                model="USBC 2M"
                color="Black strap"
                btnBuy="Buy Now"
              />
              <PhoneCard
                image={AsGeforce}
                model="ROG GEFORCE RTX5090"
                color="Blue strap"
                btnBuy="Buy Now"
              />
            </div>
          )}
          <div className="flex justify-center items-center  gap-2" onClick={()=>navigate(`/${page}`)}>
            <span className="w-6 h-6 rounded-md border-2 border-[#009639] flex justify-center items-center font-bold text-[#009639]">
              ...
            </span>
            <label className="text-[#009639] text-sm">All Models</label>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}


export default NavBarDropDown;




























































