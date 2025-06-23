import {
  FaCcPaypal,
  FaCcVisa,
  FaCcMastercard,
  FaCcApplePay,
  FaGooglePay,
  FaCcAmex,
  FaCreditCard,
  FaLock,
} from "react-icons/fa";
import { useCartStore } from "../store/cartStore";
import { calculateRetailPrice, calculateEstimatedPrice } from "../utils/cart";

const CartSummary = () => {
  const { cartItem } = useCartStore();

  const greaterThan = 50;
  const promotions = 0.1;
  const retailPrice = calculateRetailPrice(cartItem);
  const discount = retailPrice > greaterThan ? retailPrice * promotions : 0;
  const estimatedPrice = calculateEstimatedPrice(retailPrice, discount);

  return (
    <div className="bg-white rounded-2xl p-6  h-fit text-gray-800">
      <h3 className="text-2xl font-bold mb-6 text-gray-900">
        🧾 Order Summary
      </h3>

      {retailPrice ? (
        <div className="flex justify-between text-base mb-3">
          <span>Subtotal:</span>
          <span>{retailPrice.toFixed(2)} €</span>
        </div>
      ) : null}

      {retailPrice > greaterThan && (
        <div className="flex justify-between text-base text-red-500 mb-3">
          <span>Discount:</span>
          <span>
            -{discount.toFixed(2)} € ({promotions * 100}%)
          </span>
        </div>
      )}

      <hr className="my-4 border-gray-300" />

      <div className="flex justify-between text-lg font-semibold mb-2">
        <span>Total:</span>
        <span>{estimatedPrice.toFixed(2)} €</span>
      </div>

      <p className="text-sm text-gray-500 mb-4">
        Final charges will be shown at checkout.
      </p>

      <button className="w-full bg-black text-white py-3 rounded-lg hover:opacity-90 transition-opacity">
        Checkout Now ({cartItem.length})
      </button>

      <p className="text-xs text-gray-500 mt-3">
        You will not be charged until you review this order on the next page.
      </p>

      {/* Payment Options */}
      <div className="mt-8">
        <h4 className="text-lg font-bold mb-2">💳 Payment Methods</h4>
        <p className="text-sm text-gray-600">
          We accept the following secure payment methods:
        </p>

        <div className="flex flex-wrap gap-4 text-4xl text-blue-600 mt-4">
          <FaCcPaypal />
          <FaCcVisa />
          <FaCcMastercard />
          <FaCcAmex />
          <FaCcApplePay />
          <FaGooglePay />
          <FaCreditCard />
        </div>
      </div>

      {/* Security Info */}
      <div className="mt-8 bg-gray-100 rounded-lg p-4 text-sm">
        <div className="flex items-center gap-2 font-semibold text-gray-800 mb-2">
          <FaLock className="text-green-600" />
          <span>Secure Checkout</span>
        </div>
        <p>
          We follow PCI DSS standards, encrypt your information, and regularly
          audit our systems to protect your data.
        </p>
      </div>

      {/* Purchase Protection */}
      <div className="mt-6">
        <h4 className="font-bold text-base mb-1">
          🛡️ Shavi Purchase Protection
        </h4>
        <p className="text-sm text-gray-600">
          Shop with confidence! If something goes wrong, we've got your back.
        </p>
      </div>

      {/* Privacy */}
      <div className="mt-6">
        <h4 className="font-bold text-base mb-1">🔒 Privacy Guaranteed</h4>
        <p className="text-sm text-gray-600">
          We will only use your information in accordance with our privacy
          policy to provide and improve our services.
        </p>
      </div>
    </div>
  );
};

export default CartSummary;
