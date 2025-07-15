
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
    <section className="py-16 bg-gradient-to-r from-red-500/10 via-orange-500/10 to-yellow-500/10">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Zap className="h-8 w-8 text-orange-500 animate-pulse" />
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              Flash Sale
            </h2>
            <Zap className="h-8 w-8 text-orange-500 animate-pulse" />
          </div>
          
          {/* Countdown Timer */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <Clock className="h-5 w-5 text-muted-foreground" />
            <div className="flex items-center gap-2">
              {[
                { label: 'Hours', value: timeLeft.hours },
                { label: 'Minutes', value: timeLeft.minutes },
                { label: 'Seconds', value: timeLeft.seconds }
              ].map((item, index) => (
                <div key={item.label} className="flex items-center gap-2">
                  <div className="bg-primary text-primary-foreground px-3 py-2 rounded-lg font-bold min-w-[3rem] text-center">
                    {item.value.toString().padStart(2, '0')}
                  </div>
                  <span className="text-sm text-muted-foreground">{item.label}</span>
                  {index < 2 && <span className="text-muted-foreground">:</span>}
                </div>
              ))}
            </div>
          </div>

          <p className="text-lg text-muted-foreground">
            Limited time offers - Don't miss out on these amazing deals!
          </p>
        </div>

        {/* Flash Sale Products */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {flashProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold px-8">
            View All Flash Deals
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FlashSale;
