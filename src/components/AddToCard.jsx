import { HiOutlinePlus } from "react-icons/hi2";
import { MdMinimize } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { PiLockKeyFill } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import Iphone from "../assets/Iphone16/blue.png";

const AddToCard = () => {
  const navigate = useNavigate();


  const cartItems = [
    {
      id: "1",
      brand_name: "iPhone 16 Pro",
      price: 999.99,
      quantity: 1,
      image: Iphone,
    },
    {
      id: "2",
      brand_name: "iPhone 16 Max",
      price: 1099.99,
      quantity: 2,
      image: Iphone,
    },
  ];

  // Static subtotal
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="flex flex-col justify-between h-full p-4">
      <div className="space-y-8 max-h-[70vh] overflow-auto pr-2">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-start gap-4"
          >
            <img
              src={item.image}
              alt={item.brand_name}
              className="w-16  h-20 object-cover "
            />

            <div className="flex flex-col space-y-3 flex-grow">
              <p className="font-bold">{item.brand_name}</p>
              <p>${item.price.toFixed(2)} each</p>
              <div className="flex space-x-6 items-center text-[#009639]">
                <div className="flex items-center space-x-3 border rounded shadow px-2 py-1">
                  <MdMinimize className="cursor-not-allowed text-gray-400" />
                  <p>{item.quantity}</p>
                  <HiOutlinePlus className="cursor-not-allowed text-gray-400" />
                </div>
                <p className="mt-2 font-semibold">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
            </div>

            <RiDeleteBin6Line className="size-6 text-red-500 cursor-not-allowed" />
          </div>
        ))}
      </div>

      <div className="pt-6 border-t mt-4">
        <div className="flex justify-between text-sm font-semibold mb-2">
          <span className="text-[#009639]">Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <p className="text-xs text-gray-500 mb-4">
          Taxes and shipping calculated at checkout.
        </p>

        <button
          className="w-full font-bold text-yellow-500 hover:text-yellow-700 py-2 bg-[#009639] rounded-full"
          onClick={() => navigate("/checkout")}
        >
          CHECKOUT
        </button>
        <button
          className="w-full font-bold  border border-[#009639] text-[#009639] py-2 mt-3 rounded-full"
          onClick={() => navigate("/cart")}
        >
          View Cart
        </button>

        <div className="flex items-center justify-center mt-3 text-sm text-gray-600 font-semibold space-x-2">
          <PiLockKeyFill className="size-4 text-[#009639]" />
          <p>Secure Checkout</p>
        </div>
      </div>
    </div>
  );
};

export default AddToCard;
