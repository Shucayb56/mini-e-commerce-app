import { FaArrowLeft } from "react-icons/fa";
import { PiGreaterThan } from "react-icons/pi";
import { TfiMenuAlt } from "react-icons/tfi";


import CartItem from "../features/CartItem";
import { useNavigate } from "react-router-dom";
import { useCartStore } from "../store/cartStore";
import CartSummary from "./CartSummary";

const Cart = () => {
  const { cartItem } = useCartStore();
  const navigate = useNavigate();

  if (cartItem.length === 0) {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-3">
        <div className="lg:col-span-2 flex flex-col items-center justify-center min-h-[60vh] text-gray-600 text-center space-y-6">
          <p className="text-xl">You haven't ordered anything yet.</p>
          <button
            onClick={() => navigate("/")}
            className="inline-flex items-center gap-2 text-red-600 border border-red-600 px-6 py-2 rounded-lg text-lg font-semibold hover:bg-red-600 hover:text-white transition"
          >
            <FaArrowLeft />
            Go Back to Home & Add Items
          </button>
        </div>
        <div>
          <CartSummary />
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="max-w-7xl mx-auto my-12 px-6 py-12 grid grid-cols-1 lg:grid-cols-3 gap-10 min-h-screen">
        {/* LEFT: Cart Items */}
        <div className="lg:col-span-2">
          <div className="flex justify-start items-center gap-2 py-4">
            <p
              onClick={() => navigate("/")}
              className="text-gray-400 cursor-pointer text-[14px]"
            >
              Home
            </p>
            <PiGreaterThan className="h-3 w-3 " />

            <p
              onClick={() => navigate("/cart")}
              className="text-[14px] cursor-pointer"
            >
              Cart
            </p>
          </div>

          <div className="bg-green-100 py-3 px-4 rounded text-md mb-2 flex justify-between items-center px-4">
            <p className="font-semibold"> ✅ Free Shipping!</p>
            <p>Incrediple</p>
          </div>

          <div className="flex justify-between items-center gap-4 border-b border-gray-300">
            <div className="flex justify-center items-center gap-4 py-4">
              <input type="checkbox" />
              <h2 className="text-[16px] font-semibold">
                Select all ({cartItem.length})
              </h2>
            </div>

            <div>
              <TfiMenuAlt className="h-5 w-5 cursor-pointer" />
            </div>
          </div>

          <div className="space-y-4">
            {cartItem.map((item) => (
              <CartItem key={item.id} product={item} />
            ))}
          </div>
        </div>
        <CartSummary />
      </div>
    </>
  );
};

export default Cart;
