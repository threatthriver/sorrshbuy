export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating?: number;
  reviews?: number;
  badge?: string;
  isNew?: boolean;
  description?: string;
  category?: string;
  stock?: number;
  brand?: string;
}
