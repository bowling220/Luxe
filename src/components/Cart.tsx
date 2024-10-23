import React, { useState } from 'react';
import { useCart } from '../store/CartContext';
import { products } from '../data/products';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import Checkout from './Checkout';
import OrderConfirmation from './OrderConfirmation';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
}

type CartStep = 'cart' | 'checkout' | 'confirmation';

export default function Cart({ isOpen, onClose }: CartProps) {
  const { state, dispatch } = useCart();
  const [step, setStep] = useState<CartStep>('cart');

  const getProduct = (productId: string) => {
    return products.find((p) => p.id === productId);
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity < 1) {
      dispatch({ type: 'REMOVE_ITEM', payload: productId });
    } else {
      dispatch({
        type: 'UPDATE_QUANTITY',
        payload: { productId, quantity },
      });
    }
  };

  const calculateTotal = () => {
    return state.items.reduce((total, item) => {
      const product = getProduct(item.productId);
      return total + (product?.price || 0) * item.quantity;
    }, 0);
  };

  const handleClose = () => {
    if (step === 'confirmation') {
      setStep('cart');
    }
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl">
        {step === 'cart' && (
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="text-lg font-semibold">Shopping Cart</h2>
              <button
                onClick={handleClose}
                className="p-2 hover:bg-gray-100 rounded-full"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-4">
              {state.items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-gray-500">
                  <ShoppingBag className="h-12 w-12 mb-4" />
                  <p>Your cart is empty</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {state.items.map((item) => {
                    const product = getProduct(item.productId);
                    if (!product) return null;

                    return (
                      <div
                        key={item.productId}
                        className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow-sm"
                      >
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-20 h-20 object-cover rounded-md"
                        />
                        <div className="flex-1">
                          <h3 className="font-medium">{product.name}</h3>
                          <p className="text-sm text-gray-500">
                            {item.size && `Size: ${item.size}`}
                            {item.color && ` • Color: ${item.color}`}
                          </p>
                          <p className="text-gray-900 font-medium mt-1">
                            ${product.price.toFixed(2)}
                          </p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() =>
                              updateQuantity(item.productId, item.quantity - 1)
                            }
                            className="p-1 hover:bg-gray-100 rounded"
                          >
                            <Minus className="h-4 w-4" />
                          </button>
                          <span className="w-8 text-center">{item.quantity}</span>
                          <button
                            onClick={() =>
                              updateQuantity(item.productId, item.quantity + 1)
                            }
                            className="p-1 hover:bg-gray-100 rounded"
                          >
                            <Plus className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="border-t p-4 space-y-4">
              <div className="flex justify-between items-center">
                <span className="font-medium">Total</span>
                <span className="font-bold text-lg">
                  ${calculateTotal().toFixed(2)}
                </span>
              </div>
              <button
                onClick={() => setStep('checkout')}
                disabled={state.items.length === 0}
                className="w-full bg-gray-900 text-white py-3 rounded-md hover:bg-gray-800 transition-colors duration-200 disabled:bg-gray-300 disabled:cursor-not-allowed"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}

        {step === 'checkout' && (
          <Checkout
            onBack={() => setStep('cart')}
            onComplete={() => setStep('confirmation')}
          />
        )}

        {step === 'confirmation' && (
          <OrderConfirmation
            onContinueShopping={handleClose}
          />
        )}
      </div>
    </div>
  );
}