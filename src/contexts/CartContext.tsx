import React, { useState, useEffect, useContext, createContext } from 'react';
import { toast } from 'sonner';
import { Product } from '@/types/product';

export interface CartItem extends Product {
  quantity: number;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (product: Product, quantity?: number) => Promise<void>;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  isLoading: boolean;
  error: string | null;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

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
        updateQuantity(existingItem.id, existingItem.quantity + quantity);
      } else {
        const newCartItems = [...cartItems, { ...product, quantity }];
        setCartItems(newCartItems);
        toast.success(`${product.name} added to cart!`);
      }
    } catch (err) {
      setError('Failed to add item to cart');
    } finally {
      setIsLoading(false);
    }
  };

  const removeFromCart = (id: string) => {
    try {
      const itemToRemove = cartItems.find(item => item.id === id);
      setCartItems(cartItems.filter(item => item.id !== id));
      if (itemToRemove) {
        toast.error(`${itemToRemove.name} removed from cart.`);
      }
    } catch (err) {
      setError('Failed to remove item from cart');
      toast.error('Failed to remove item from cart.');
    }
  };

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity < 1) {
      removeFromCart(id);
      return;
    }
    try {
      setCartItems(cartItems.map(item => 
        item.id === id ? { ...item, quantity } : item
      ));
      // Optional: toast notification for quantity update can be noisy. 
      // Consider if this is truly needed or if visual feedback in the cart is enough.
      // toast.info(`Quantity updated.`); 
    } catch (err) {
      setError('Failed to update quantity');
      toast.error('Failed to update quantity.');
    }
  };

  const clearCart = () => {
    try {
      setCartItems([]);
      toast.success('Cart has been cleared.');
    } catch (err) { 
      setError('Failed to clear cart');
      toast.error('Failed to clear cart.');
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


