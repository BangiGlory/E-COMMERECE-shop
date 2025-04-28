
import React from 'react';
import { useCart } from '@/context/CartContext';
import CartItem from './CartItem';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ShoppingCart: React.FC = () => {
  const { cartItems, isCartOpen, toggleCart, cartTotal, clearCart } = useCart();

  if (!isCartOpen) return null;

  return (
    <>
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-40"
        onClick={toggleCart}
      />
      <div 
        className="fixed right-0 top-0 h-full w-full sm:max-w-md bg-white z-50 shadow-xl animate-cart-appear overflow-auto"
      >
        <div className="flex flex-col h-full p-4">
          {/* Header */}
          <div className="flex justify-between items-center pb-4 border-b">
            <h2 className="text-lg font-semibold">Shopping Cart</h2>
            <Button 
              variant="ghost" 
              size="icon"
              onClick={toggleCart}
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Cart Items */}
          <div className="flex-grow overflow-auto py-4">
            {cartItems.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <p className="text-lg mb-4">Your cart is empty</p>
                <Button 
                  onClick={toggleCart}
                  className="bg-shop-purple hover:bg-shop-purple-dark"
                >
                  Continue Shopping
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                {cartItems.map(item => (
                  <CartItem 
                    key={item.product.id} 
                    product={item.product} 
                    quantity={item.quantity} 
                  />
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {cartItems.length > 0 && (
            <div className="pt-4 border-t mt-auto">
              <div className="flex justify-between text-lg font-semibold mb-4">
                <span>Subtotal</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>
              <p className="text-sm text-gray-500 mb-4">
                Shipping and taxes calculated at checkout
              </p>
              <div className="space-y-2">
                <Button className="w-full bg-shop-purple hover:bg-shop-purple-dark">
                  Checkout
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={toggleCart}
                >
                  Continue Shopping
                </Button>
                <Button 
                  variant="ghost" 
                  className="w-full text-red-500 hover:text-red-700 hover:bg-red-50"
                  onClick={clearCart}
                >
                  Clear Cart
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ShoppingCart;
