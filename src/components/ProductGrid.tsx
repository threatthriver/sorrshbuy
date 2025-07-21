import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from "./ProductCard";
import { Product } from "@/types/product";
import productPhone from "@/assets/product-phone.jpg";
import productHeadphones from "@/assets/product-headphones.jpg";
import productLaptop from "@/assets/product-laptop.jpg";
import productShoes from "@/assets/product-shoes.jpg";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';


const ProductGrid = () => {
  const [activeTab, setActiveTab] = useState('New Arrivals');
  // Sample product data
  const products: Product[] = useMemo(() => [
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
  ], []);

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
  }, [activeTab, products]);

  const tabs = ['New Arrivals', 'Best Sellers', 'Top Rated'];

  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">Featured Products</h2>
          <p className="text-muted-foreground mt-1">Discover our curated selection of premium products</p>
        </div>
        <div className="flex items-center space-x-4 mt-4 md:mt-0">
          <div className="flex space-x-1 p-1 bg-muted/50 rounded-full">
            {tabs.map((tab) => (
              <Button
                key={tab}
                variant={activeTab === tab ? 'default' : 'ghost'}
                className={cn(
                  'rounded-full whitespace-nowrap text-sm md:text-base transition-all',
                  activeTab === tab 
                    ? 'shadow-md bg-background text-foreground' 
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted/80'
                )}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </Button>
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.3 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <ProductCard {...product} />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      <div className="mt-12 text-center">
        <Button 
          asChild 
          variant="outline" 
          className="group px-6 py-6 rounded-full text-base font-medium transition-all hover:bg-primary hover:text-primary-foreground"
        >
          <Link to="/shop" className="flex items-center gap-2">
            View All Products
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default ProductGrid;