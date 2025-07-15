
import { useState, useEffect } from 'react';
import useLocalStorage from './useLocalStorage';

interface WishlistItem {
  id: number;
  name: string;
  price: number;
  image: string;
  addedAt: string;
}

export const useWishlist = () => {
  const [wishlist, setWishlist] = useLocalStorage<WishlistItem[]>('wishlist', []);
  const [isLoading, setIsLoading] = useState(false);

  const addToWishlist = (item: Omit<WishlistItem, 'addedAt'>) => {
    setIsLoading(true);
    const wishlistItem: WishlistItem = {
      ...item,
      addedAt: new Date().toISOString()
    };
    
    setWishlist(prev => {
      if (prev.find(w => w.id === item.id)) {
        return prev;
      }
      return [...prev, wishlistItem];
    });
    
    setTimeout(() => setIsLoading(false), 300);
  };

  const removeFromWishlist = (id: number) => {
    setIsLoading(true);
    setWishlist(prev => prev.filter(item => item.id !== id));
    setTimeout(() => setIsLoading(false), 300);
  };

  const isInWishlist = (id: number) => {
    return wishlist.some(item => item.id === id);
  };

  const clearWishlist = () => {
    setWishlist([]);
  };

  return {
    wishlist,
    addToWishlist,
    removeFromWishlist,
    isInWishlist,
    clearWishlist,
    wishlistCount: wishlist.length,
    isLoading
  };
};
