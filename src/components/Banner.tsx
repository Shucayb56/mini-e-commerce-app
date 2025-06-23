import {
  FaShieldAlt,
  FaLock,
  FaCreditCard,
  FaTruck,
  FaBell,
  FaChevronRight,
  FaShoppingBag,
  FaStar,
} from "react-icons/fa";

const TemuBanner = () => {
  return (
    <div className="w-full text-sm mt-28 px-10">
      {/* Top Green Info Bar */}
      <div className="bg-red-600 text-white py-2 px-5 flex flex-wrap justify-between items-center gap-4 sm:gap-8 text-center rounded-t-lg hidden sm:block lg:flex">
        <div className="flex items-center gap-2">
          <FaShieldAlt className="text-white" />
          <span>Why choose Shavi</span>
        </div>
        <div className="flex justify-center items-center gap-15 pr-5">
          <div className="flex items-center gap-2">
            <FaLock className="text-white" />
            <span>Secure privacy</span>
          </div>
          <div className="flex items-center gap-2">
            <FaCreditCard className="text-white" />
            <span>Safe payments</span>
          </div>
          <div className="flex items-center gap-2">
            <FaTruck className="text-white" />
            <span>Delivery guarantee</span>
          </div>
        </div>
      </div>

      {/* Security Reminder */}
      <div className="bg-white text-green-700 py-2 px-5 flex flex-col sm:flex-row justify-between items-center border border-green-600 border-t-0 rounded-b-lg hidden sm:block">
        <div className="flex items-center gap-2">
          <FaBell className="text-green-700" />
          <p className="text-sm font-medium">
            Security reminder: Please be wary of scam messages and links. Shavi
            won't ask for extra fees via SMS or email.
          </p>
        </div>
        <button className="flex items-center gap-1 text-green-700 font-semibold mt-2 sm:mt-0">
          View <FaChevronRight />
        </button>
      </div>

      {/* Top Picks Banner */}
      <div className="relative w-full bg-gradient-to-r from-red-500 to-red-600 py-3 flex justify-center items-center text-white font-bold text-lg my-7 overflow-hidden">
        <FaShoppingBag className="absolute left-4 text-yellow-300" />
        <FaStar className="absolute left-10 text-yellow-100 animate-pulse" />
        <span className="z-10">Top picks</span>
        <FaShoppingBag className="absolute right-4 text-yellow-300" />
        <FaStar className="absolute right-10 text-yellow-100 animate-pulse" />
      </div>
    </div>
  );
};

export default TemuBanner;
