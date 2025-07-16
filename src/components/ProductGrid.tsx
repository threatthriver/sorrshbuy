import { useState, useMemo } from 'react';
import ProductCard from "./ProductCard";
import { Product } from "@/types/product";
import productPhone from "@/assets/product-phone.jpg";
import productHeadphones from "@/assets/product-headphones.jpg";
import productLaptop from "@/assets/product-laptop.jpg";
import productShoes from "@/assets/product-shoes.jpg";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';


const ProductGrid = () => {
  const [activeTab, setActiveTab] = useState('New Arrivals');
  // Sample product data
  const products: Product[] = [
    {
      id: "1",
      name: "Latest Smartphone Pro Max",
      price: 899.99,
      originalPrice: 1099.99,
      image: productPhone,
      rating: 4.8,
      reviews: 2456,
      badge: "Best Seller",
      isNew: false
    },
    {
      id: "2",
      name: "Premium Wireless Headphones",
      price: 299.99,
      originalPrice: 399.99,
      image: productHeadphones,
      rating: 4.6,
      reviews: 1834,
      isNew: true
    },
    {
      id: "3",
      name: "Ultra-Thin Laptop 15 inch",
      price: 1299.99,
      image: productLaptop,
      rating: 4.9,
      reviews: 892,
      badge: "Editor's Choice"
    },
    {
      id: "4",
      name: "Sport Running Shoes",
      price: 129.99,
      originalPrice: 179.99,
      image: productShoes,
      rating: 4.5,
      reviews: 3421,
      isNew: true
    },
    {
      id: "5",
      name: "Smartphone Pro Max 256GB",
      price: 799.99,
      originalPrice: 999.99,
      image: productPhone,
      rating: 4.7,
      reviews: 1567,
      badge: "Hot Deal"
    },
    {
      id: "6",
      name: "Noise Cancelling Headphones",
      price: 249.99,
      image: productHeadphones,
      rating: 4.4,
      reviews: 967,
      isNew: false
    },
    {
      id: "7",
      name: "Gaming Laptop Pro",
      price: 1899.99,
      originalPrice: 2199.99,
      image: productLaptop,
      rating: 4.8,
      reviews: 654,
      badge: "Limited Edition"
    },
    {
      id: "8",
      name: "Casual Sneakers",
      price: 89.99,
      originalPrice: 119.99,
      image: productShoes,
      rating: 4.3,
      reviews: 2108,
      isNew: true
    }
  ];

  const filteredProducts = useMemo(() => {
    const allProducts = [...products, ...products].map((p, i) => ({ ...p, id: `${p.id}-${i}` })); // Double the products for better filtering demo

    switch (activeTab) {
      case 'Best Sellers':
        return allProducts.filter(p => p.badge === 'Best Seller' || p.badge === 'Hot Deal').slice(0, 4);
      case 'Top Rated':
        return [...allProducts].sort((a, b) => b.rating - a.rating).slice(0, 4);
      case 'New Arrivals':
      default:
        return allProducts.filter(p => p.isNew).slice(0, 4);
    }
  }, [activeTab]);

  const tabs = ['New Arrivals', 'Best Sellers', 'Top Rated'];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-2">
              Featured Products
            </h2>
            <p className="text-lg text-muted-foreground">
              Check out our hand-picked selection.
            </p>
          </div>
          <div className="flex items-center gap-2 bg-muted p-1.5 rounded-full">
            {tabs.map(tab => (
              <Button
                key={tab}
                variant="ghost"
                onClick={() => setActiveTab(tab)}
                className={cn(
                  'rounded-full px-6 py-2 text-sm font-semibold transition-colors',
                  activeTab === tab 
                    ? 'bg-background text-foreground shadow-sm'
                    : 'text-muted-foreground hover:bg-background/50'
                )}
              >
                {tab}
              </Button>
            ))}
          </div>
        </div>

        <motion.div 
          layout 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product: Product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -20 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
              >
                <ProductCard {...product} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="text-center mt-16">
          <Button size="lg" variant="outline">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;