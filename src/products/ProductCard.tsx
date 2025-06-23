import toast from "react-hot-toast";
import { useCartStore } from "../store/cartStore";
import type { Product } from "../types";
import { LiaCartPlusSolid } from "react-icons/lia";
import { motion } from "framer-motion";


type Props = {
  product: Product;
};

const ProductCard = ({ product }: Props) => {
  const onAddToCart = useCartStore((state) => state.addToCart);

  function handleAdd() {
    onAddToCart(product);
    toast.success("🛒 Item added to cart", {
      duration: 2000,
      icon: "✅",
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
      },
    });
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="bg-white hover:shadow-sm rounded-md overflow-hidden cursor-pointer text-sm transition"
    >
      {/* Image */}
      <div className="relative w-full aspect-square overflow-hidden">
        <img
          src={product.img}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>

      {/* Content */}
      <div className="p-2 flex flex-col gap-1">
        {/* Title */}
        <p className="font-medium text-gray-800 truncate">{product.name}</p>

        {/* Price + Sold */}
        <div className="flex items-center gap-2 justify-between">
          <div className="flex items-center gap-1">
            <span className="text-base font-bold text-gray-900">
              €{product.price.toFixed(2)}
            </span>
            <span className="text-gray-500 text-xs">
              {product.soldOut} sold
            </span>
          </div>

          <div className="flex">
            <button
              onClick={handleAdd}
              className="text-xl text-gray-700  transition border rounded-4xl px-3 py-1 hover:ring-1 hover:ring-gray-700 cursor-pointer"
              aria-label={`Add ${product.name} to cart`}
            >
              <LiaCartPlusSolid className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* RRP */}
        <div className="text-xs text-gray-500 line-through">
          RRP €{product.originalPrice.toFixed(2)}
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
