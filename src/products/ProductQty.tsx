import { useCartStore } from "../store/cartStore";
import type { CartItemType } from "../types";


const QuantitySelect = ({item}: { item: CartItemType }) => {
    const handleQuantityChange = useCartStore((state) => state.handleQuantityChange);
  return (
    <div className="relative inline-block">
      <select
        value={item.quantity}
        onChange={(e) => handleQuantityChange(item.id, Number(e.target.value))}
        className="appearance-none border border-gray-200 rounded px-10 py-1 pr-10 text-sm focus:outline-none hover:border-1 hover:border-gray-500"
      >
        {[...Array(11).keys()].map((num) => (
          <option key={num} value={num}>
            {num}
          </option>
        ))}
      </select>
      {/* Chevron Icon */}
      <div className="pointer-events-none absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600">
        ▼
      </div>
      {/* Optional left label inside box: */}
      <div className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm pointer-events-none">
        Qty
      </div>
    </div>
  );
};

export default QuantitySelect;
