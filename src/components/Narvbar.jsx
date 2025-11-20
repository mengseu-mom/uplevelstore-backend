import { useState } from "react";
import { Link } from "react-router-dom";
import { FiShoppingBag } from "react-icons/fi";
import { LuUserRound } from "react-icons/lu";
import { HiMenu, HiX } from "react-icons/hi";
import {
  FaMobileAlt,
  FaLaptop,
  FaClock,
  FaHeadphones,
  FaHome,
} from "react-icons/fa";
import { Drawer } from "antd";
import Logo from "../assets/logonarv.png";
import NavBarDropDown from "../components/NarBarDropDown";
import AddToCard from "./AddToCard";
import { useNavigate } from "react-router-dom";
function Navbar() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [addToCartOpen, setAddToCartOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/", icon: <FaHome /> },
    { name: "Smart Phone", path: "/smartphone", icon: <FaMobileAlt /> },
    { name: "Watch", path: "/watch", icon: <FaClock /> },
    { name: "Laptop", path: "/laptop", icon: <FaLaptop /> },
    { name: "Accessories", path: "/accessories", icon: <FaHeadphones /> },
  ];

  return (
    <div className="bg-[#009639] text-white z-50 relative flex items-center justify-center">
      <div className="flex items-center justify-between py-4 w-10/12 2xl:w-9/12">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src={Logo} alt="Logo" className="w-12" />
        </div>

        <div className="hidden lg:flex items-center text-md inter py-2 space-x-6">
          <Link to="/">HOME</Link>

          <div className="relative group">
            <Link to="/smartphone">SMART PHONE</Link>
            <div
              className="absolute   w-screen bg-white text-black mt-6 rounded shadow-xl z-50
              invisible opacity-0 scale-y-0 group-hover:visible group-hover:opacity-100 group-hover:scale-y-100
              origin-top transition-all duration-700 ease-in-out left-1/2 lg:-translate-x-[34%] xl:-translate-x-[37%] 2xl:-translate-x-[39.2%]"
            >
              <NavBarDropDown title="Smartphone" page="smartphone" />
            </div>
          </div>

          <div className="relative group">
            <Link to="/watches">WATCHES</Link>
            <div
              className="absolute w-screen bg-white text-black mt-6 rounded shadow-xl z-50
              invisible opacity-0 scale-y-0 group-hover:visible group-hover:opacity-100 group-hover:scale-y-100
              origin-top transition-all duration-700 ease-in-out left-1/2 lg:-translate-x-[46%] xl:-translate-x-[46.6%] 2xl:-translate-x-[47.2%]"
            >
              <NavBarDropDown title="Watches" page="watches" />
            </div>
          </div>

          <div className="relative group">
            <Link to="/laptop">LAPTOP</Link>
            <div
              className="absolute w-screen bg-white text-black mt-6 rounded shadow-xl z-50
              invisible opacity-0 scale-y-0 group-hover:visible group-hover:opacity-100 group-hover:scale-y-100
              origin-top transition-all duration-700 ease-in-out left-1/2 lg:-translate-x-[55.2%] xl:-translate-x-[54%] 2xl:-translate-x-[53.4%]"
            >
              <NavBarDropDown title="Laptop" />
            </div>
          </div>

          <div className="relative group">
            <Link to="/accessories">ACCESSORIES</Link>
            <div
              className="absolute w-screen bg-white text-black mt-6 rounded shadow-xl z-50
              invisible opacity-0 scale-y-0 group-hover:visible group-hover:opacity-100 group-hover:scale-y-100
              origin-top transition-all duration-700 ease-in-out left-1/2 lg:-translate-x-[66.5%] xl:-translate-x-[63%] 2xl:-translate-x-[60.9%]"
            >
              <NavBarDropDown title="Accessories" />
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <div className="p-2.5 hover:ring overflow-hidden w-[40px] h-[40px] hover:w-[270px] rounded-full flex group items-center hover:duration-300 duration-300">
            <div className="flex items-center justify-center fill-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="22"
                height="22"
              >
                <path d="M18.9,16.776A10.539,10.539,0,1,0,16.776,18.9l5.1,5.1L24,21.88ZM10.5,18A7.5,7.5,0,1,1,18,10.5,7.507,7.507,0,0,1,10.5,18Z" />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search..."
              className="outline-none text-[20px] bg-transparent w-full text-white font-normal px-4"
            />
          </div>
          <button onClick={() => setAddToCartOpen(true)} className="relative">
            <FiShoppingBag
              size={22}
              className="text-white hover:text-yellow-300"
            />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-semibold px-1.5 py-0.5 rounded-full">
              2
            </span>
          </button>

          <Drawer
            title="Your Cart"
            placement="right"
            onClose={() => setAddToCartOpen(false)}
            open={addToCartOpen}
            destroyOnClose
          >
            <AddToCard />
          </Drawer>

          {/* User Icon */}
          <button className="text-white">
            <LuUserRound size={22} onClick={() => navigate("/login")}/>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-white"
            onClick={() => setOpen(!open)}
          >
            {open ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden block bg-white mt-18 text-[#009639] fixed top-0 right-0 h-full w-72 px-6 py-8 space-y-6 font-medium text-lg z-40 shadow-lg">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setOpen(false)}
              className="flex items-center space-x-3"
            >
              <span>{item.icon}</span>
              <span>{item.name}</span>
            </Link>
          ))}
          <div className="flex space-x-4 text-xl pt-4 border-t">
            <FiShoppingBag />
            <LuUserRound />
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
