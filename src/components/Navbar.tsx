import React, { useState } from 'react';
import { ShoppingCart, Menu } from 'lucide-react';
import { useCart } from '../store/CartContext';
import Cart from './Cart';

export default function Navbar() {
  const { state } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const cartItemsCount = state.items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-bold">LUXE</h1>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-700 hover:text-gray-900">Men</a>
              <a href="#" className="text-gray-700 hover:text-gray-900">Women</a>
              <a href="#" className="text-gray-700 hover:text-gray-900">Kids</a>
              <a href="#" className="text-gray-700 hover:text-gray-900">Accessories</a>
            </div>

            <div className="flex items-center">
              <button 
                className="relative p-2"
                onClick={() => setIsCartOpen(true)}
              >
                <ShoppingCart className="h-6 w-6" />
                {cartItemsCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cartItemsCount}
                  </span>
                )}
              </button>
              <button 
                className="md:hidden ml-4"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <a href="#" className="block px-3 py-2 text-gray-700 hover:text-gray-900">Men</a>
                <a href="#" className="block px-3 py-2 text-gray-700 hover:text-gray-900">Women</a>
                <a href="#" className="block px-3 py-2 text-gray-700 hover:text-gray-900">Kids</a>
                <a href="#" className="block px-3 py-2 text-gray-700 hover:text-gray-900">Accessories</a>
              </div>
            </div>
          )}
        </div>
      </nav>

      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
}