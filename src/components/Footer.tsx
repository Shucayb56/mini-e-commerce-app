import { Link } from "react-router-dom";
import SocialIcons from "./SocialIcons";
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-gray-900 py-15 px-10 space-y-10 text-yellow-400 mt-10">
      <h1 className="text-xl font-bold">Subscribe to our newsletter</h1>

      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <input
          className="py-3 px-6 w-full md:w-96 border border-yellow-400 text-yellow-400 bg-transparent outline-none focus:border-2"
          type="text"
          placeholder="Email"
        />
        <SocialIcons />
      </div>

      <nav className="flex flex-wrap justify-start gap-4 text-sm mt-15">
        <p>© {year}, Shoplovaya Powered by Shafici</p>
        <Link to="/">Privacy policy</Link>
        <Link to="/">Refund policy</Link>
        <Link to="/">Terms of service</Link>
        <Link to="/">Shipping policy</Link>
        <Link to="/">Cookie preferences</Link>
      </nav>
    </footer>
  );
};

export default Footer;



