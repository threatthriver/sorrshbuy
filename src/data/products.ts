import { Product } from '@/types/product';
import productPhone from "@/assets/product-phone.jpg";
import productHeadphones from "@/assets/product-headphones.jpg";
import productLaptop from "@/assets/product-laptop.jpg";
import productShoes from "@/assets/product-shoes.jpg";

export const categories = [
    { id: "all", name: "All Products", count: 150 },
    { id: "electronics", name: "Electronics", count: 45 },
    { id: "fashion", name: "Fashion", count: 67 },
    { id: "home", name: "Home & Kitchen", count: 23 },
    { id: "sports", name: "Sports", count: 15 }
];

export const products: Product[] = [
    {
      id: "1",
      name: "Latest Smartphone Pro Max",
      price: 899.99,
      originalPrice: 1099.99,
      image: productPhone,
      rating: 4.8,
      reviews: 2456,
      badge: "Best Seller",
      isNew: false,
      category: "electronics"
    },
    {
      id: "2",
      name: "Premium Wireless Headphones",
      price: 299.99,
      originalPrice: 399.99,
      image: productHeadphones,
      rating: 4.6,
      reviews: 1834,
      isNew: true,
      category: "electronics"
    },
    {
      id: "3",
      name: "Ultra-Thin Laptop 15 inch",
      price: 1299.99,
      image: productLaptop,
      rating: 4.9,
      reviews: 892,
      badge: "Editor's Choice",
      category: "electronics"
    },
    {
      id: "4",
      name: "Sport Running Shoes",
      price: 129.99,
      originalPrice: 179.99,
      image: productShoes,
      rating: 4.5,
      reviews: 3421,
      isNew: true,
      category: "fashion"
    },
    {
      id: "5",
      name: "Wireless Bluetooth Earbuds",
      price: 159.99,
      originalPrice: 199.99,
      image: productHeadphones,
      rating: 4.4,
      reviews: 1567,
      badge: "Hot Deal",
      category: "electronics"
    },
    {
      id: "6",
      name: "Professional Gaming Laptop",
      price: 1899.99,
      image: productLaptop,
      rating: 4.7,
      reviews: 743,
      isNew: true,
      category: "electronics"
    },
    {
      id: "7",
      name: "Casual Sneakers",
      price: 89.99,
      originalPrice: 119.99,
      image: productShoes,
      rating: 4.3,
      reviews: 2108,
      category: "fashion"
    },
    {
      id: "8",
      name: "Smartphone Pro 128GB",
      price: 699.99,
      originalPrice: 799.99,
      image: productPhone,
      rating: 4.6,
      reviews: 1892,
      badge: "Popular",
      category: "electronics"
    }
];
