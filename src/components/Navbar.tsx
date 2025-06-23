// NavbarBanner.jsx
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

import { useCartStore } from "../store/cartStore";
import { useLocation, useNavigate } from "react-router-dom";
import { useSearchStore } from "../store/searchStore";

const Navbar = () => {
  const cart = useCartStore((state) => state.cartItem);
  const { searchTerm, setSearchTerm } = useSearchStore();
  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === "/";
  // const isCart = location.pathname === "/cart";
  return (
    <div>
      {/* Navbar */}
      <nav className="bg-[#ad0404] text-white px-10 py-3 flex items-center justify-between shadow-md fixed top-0 w-full z-50">
        {/* Left: Logo */}
        <div className="flex items-center space-x-5">
          <div
            onClick={() => navigate("/")}
            className="bg-orange-500 w-12 h-12 flex items-center justify-center rounded-xl font-bold text-xl cursor-pointer"
          >
            SH
          </div>
          <div className="flex justify-center items-center space-x-2 cursor-pointer hidden sm:block lg:flex">
            <p className="text-[14px] font-bold">Categories</p>
            <span>
              <IoIosArrowDown size={15} />
            </span>
          </div>
        </div>

        {/* Middle: Search Bar */}
        {isHome && (
          <div className="flex-1 mx-4 max-w-2xl">
            <div className="flex items-center bg-white rounded-full overflow-hidden">
              <input
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 text-black outline-none"
              />
              <button className="bg-white text-red-700 px-4 py-2">
                <FaSearch size={18} />
              </button>
            </div>
          </div>
        )}

        {/* Right: Cart & User Icons */}
        <div className="flex items-center space-x-4 relative">
          {/* Cart with item count badge */}
          <div
            onClick={() => navigate("/cart")}
            className="relative cursor-pointer"
          >
            <FaShoppingCart size={22} />
            {itemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-yellow-300 text-red-700 text-xs px-1 py-0.5 rounded-full font-bold">
                {itemCount}
              </span>
            )}
          </div>
          <FaUser size={22} className="cursor-pointer" />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
