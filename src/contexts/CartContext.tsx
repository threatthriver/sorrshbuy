import { useState, useEffect } from 'react';
import { Product } from '@/types/product';
import { CartContext, type CartItem } from './cart-context-definition';

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = async (product: Product, quantity = 1) => {
    try {
      setIsLoading(true);
      const existingItem = cartItems.find(item => item.id === product.id);
      
      if (existingItem) {
        updateQuantity(product.id, existingItem.quantity + quantity);
      } else {
        setCartItems([...cartItems, { ...product, quantity }]);
      }
    } catch (err) {
      setError('Failed to add item to cart');
    } finally {
      setIsLoading(false);
    }
  };

  const removeFromCart = (id: number) => {
    try {
      setCartItems(cartItems.filter(item => item.id !== id));
    } catch (err) {
      setError('Failed to remove item from cart');
    }
  };

  const updateQuantity = (id: number, quantity: number) => {
    if (quantity < 1) return;
    try {
      setCartItems(cartItems.map(item => 
        item.id === id ? { ...item, quantity } : item
      ));
    } catch (err) {
      setError('Failed to update quantity');
    }
  };

  const clearCart = () => {
    try {
      setCartItems([]);
    } catch (err) {
      setError('Failed to clear cart');
    }
  };

  return (
    <CartContext.Provider 
      value={{ 
        cartItems, 
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        isLoading,
        error 
      }}
    >
      {children}
    </CartContext.Provider>
  );
};


