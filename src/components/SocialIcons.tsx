import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";


const SocialIcons = () => {
  const iconStyle =
    "w-6 h-6 text-yellow-400 hover:scale-110 transition duration-300";

  return (
    <div className="flex gap-6 justify-center bg-gray-900 p-4 rounded-lg">
      <a
        href="https://www.instagram.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram className={iconStyle} />
      </a>
      <a
        href="https://www.tiktok.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaTiktok className={iconStyle} />
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <FaTwitter className={iconStyle} />
      </a>
      <a
        href="https://www.pinterest.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaPinterest className={iconStyle} />
      </a>
    </div>
  );
};

export default SocialIcons;
