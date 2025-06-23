import { useState } from "react";
import type { CartItemType } from "../types";
import { Trash2, Heart } from "lucide-react";
import { IoIosHeart } from "react-icons/io";
import { useCartStore } from "../store/cartStore";
import toast from "react-hot-toast";
import QuantitySelect from "../products/ProductQty";

type Props = {
  product: CartItemType;
};

const CartItem = ({ product }: Props) => {
  const [toggle, setToggle] = useState<boolean>(false);
  function handleToggle() {
    setToggle(!toggle);
  }

  const { onDelete, } = useCartStore();

  const handleDelete = () => {
    onDelete(product.id);
    toast.error("The product has been removed");
  };
  return (
    <div className="flex items-start justify-between border-b border-gray-300 py-4">
      {/* Checkbox + Image */}
      <div className="flex items-start gap-4 w-full">
        <input type="checkbox" className="mt-2" />
        <img
          src={product.img}
          alt={product.name}
          className="w-26 h-26 object-cover rounded"
        />
        {/* Info */}
        <div className="flex-1">
          <div className="flex justify-between items-center">
            <h3 className="text-md font-semibold">{product.name}</h3>
            <div className="flex justify-center items-center gap-3">
              <span className="">
                <Trash2
                  size={18}
                  onClick={handleDelete}
                  className="w-4 h-4 cursor-pointer text-gray-600  "
                />
              </span>
              {toggle ? (
                <IoIosHeart
                  onClick={handleToggle}
                  className="w-4 h-4 cursor-pointer text-gray-600"
                />
              ) : (
                <Heart
                  onClick={handleToggle}
                  className="w-4 h-4 cursor-pointer text-gray-600 "
                />
              )}
            </div>
          </div>
          <p className="text-sm text-gray-500 mt-1">Red / {product.size}</p>
          <p className="text-sm text-yellow-500 mt-1">500+ 5-star reviews</p>

          <div className="flex items-center justify-between mt-3">
            <div className="text-red-600 font-bold text-lg">
              {product.price.toFixed(2)}€
              <span className="line-through text-sm text-gray-400 ml-2">
                {product.originalPrice.toFixed(2)}€
              </span>
            </div>
            <div className="">
              <QuantitySelect item={product}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
