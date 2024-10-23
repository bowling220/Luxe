import React from 'react';
import { CheckCircle, Package } from 'lucide-react';
import { useCart } from '../store/CartContext';

interface OrderConfirmationProps {
  onContinueShopping: () => void;
}

export default function OrderConfirmation({ onContinueShopping }: OrderConfirmationProps) {
  const { dispatch } = useCart();

  React.useEffect(() => {
    dispatch({ type: 'CLEAR_CART' });
  }, [dispatch]);

  return (
    <div className="max-w-2xl mx-auto p-4">
      <div className="bg-white rounded-lg shadow-lg p-8 text-center">
        <div className="flex justify-center mb-6">
          <CheckCircle className="h-16 w-16 text-green-500" />
        </div>
        <h2 className="text-3xl font-bold mb-4">Thank You for Your Order!</h2>
        <p className="text-gray-600 mb-8">
          Your order has been successfully placed. We'll send you an email with your order details
          and tracking information once your package ships.
        </p>

        <div className="flex items-center justify-center space-x-2 text-gray-500 mb-8">
          <Package className="h-5 w-5" />
          <span>Estimated delivery: 3-5 business days</span>
        </div>

        <button
          onClick={onContinueShopping}
          className="bg-gray-900 text-white px-8 py-3 rounded-md hover:bg-gray-800 transition-colors duration-200"
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
}