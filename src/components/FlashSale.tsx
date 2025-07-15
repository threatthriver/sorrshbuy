import { useState, useEffect } from 'react';
import { Clock, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ProductCard from './ProductCard';
import productPhone from "@/assets/product-phone.jpg";
import productHeadphones from "@/assets/product-headphones.jpg";
import productLaptop from "@/assets/product-laptop.jpg";

const FlashSale = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 45,
    seconds: 30
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const flashProducts = [
    {
      id: 101,
      name: "Smartphone Pro Max Flash Deal",
      price: 599.99,
      originalPrice: 899.99,
      image: productPhone,
      rating: 4.8,
      reviews: 2456,
      badge: "Flash Sale",
      isNew: false
    },
    {
      id: 102,
      name: "Premium Headphones Special",
      price: 149.99,
      originalPrice: 299.99,
      image: productHeadphones,
      rating: 4.6,
      reviews: 1834,
      badge: "50% OFF",
      isNew: false
    },
    {
      id: 103,
      name: "Gaming Laptop Flash Deal",
      price: 999.99,
      originalPrice: 1599.99,
      image: productLaptop,
      rating: 4.9,
      reviews: 892,
      badge: "Limited Time",
      isNew: false
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-primary/10 via-orange-500/10 to-yellow-500/10">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Zap className="h-8 w-8 text-orange-500 animate-pulse" />
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              Flash Sale
            </h2>
          </div>
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span>Ends in {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s</span>
          </div>
        </div>

        <p className="text-lg text-muted-foreground">
          Limited time offers - Don't miss out on these amazing deals!
        </p>

        {/* Flash Sale Products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {flashProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        <Button
          size="lg"
          className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold px-8">
          View All Flash Deals
        </Button>
      </div>
    </section>
  );
};

export default FlashSale;
