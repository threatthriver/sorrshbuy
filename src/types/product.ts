export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image?: string; // Keep for components like ProductCard
  images?: string[]; // For product detail gallery
  rating?: number;
  reviews?: number;
  badge?: string;
  isNew?: boolean;
  description?: string;
  category?: string;
  stock?: number;
  brand?: string;
  colors?: string[];
  sizes?: string[];
}
