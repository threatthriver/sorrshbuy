import { useState, useEffect, useRef } from 'react';
import { Clock, Zap, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ProductCard from './ProductCard';
import { motion } from 'framer-motion';
import productPhone from "@/assets/product-phone.jpg";
import productHeadphones from "@/assets/product-headphones.jpg";
import productLaptop from "@/assets/product-laptop.jpg";

const CountdownUnit = ({ value, label }: { value: number, label: string }) => (
  <div className="flex flex-col items-center">
    <div className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center text-3xl font-bold text-white">{String(value).padStart(2, '0')}</div>
    <span className="text-xs text-white/70 mt-2 uppercase tracking-widest">{label}</span>
  </div>
);

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

  const [slide, setSlide] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  const nextSlide = () => {
    if (ref.current) {
      const maxSlide = flashProducts.length - Math.floor(ref.current.offsetWidth / 320); // Approximate card width
      setSlide(s => Math.min(s + 1, maxSlide));
    }
  };

  const prevSlide = () => {
    setSlide(s => Math.max(s - 1, 0));
  };

  const flashProducts = [
    {
      id: "101",
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
      id: "102",
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
      id: "103",
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
    <section className="py-16 bg-gray-900 text-white overflow-visible">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-3 mb-4">
              <Zap className="h-8 w-8 text-orange-400 animate-pulse" />
              <h2 className="text-3xl lg:text-4xl font-bold tracking-tight">
                Flash Sale
              </h2>
            </div>
            <p className="text-lg text-white/70 max-w-md mb-8">
              Limited time offers! Don't miss out on these amazing deals before the clock runs out.
            </p>
            <div className="flex items-center gap-4 mb-8">
              <CountdownUnit value={timeLeft.hours} label="Hours" />
              <span className="text-3xl font-bold text-orange-400">:</span>
              <CountdownUnit value={timeLeft.minutes} label="Mins" />
              <span className="text-3xl font-bold text-orange-400">:</span>
              <CountdownUnit value={timeLeft.seconds} label="Secs" />
            </div>
            <Button
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold px-8 py-6 rounded-full shadow-lg hover:shadow-orange-500/30 transition-all duration-300">
              View All Deals
            </Button>
          </div>

          {/* Right Content - Carousel */}
          <div className="relative">
            <motion.div ref={ref} className="overflow-hidden">
              <motion.div
                className="flex gap-6"
                animate={{ x: `-${slide * 320}px` }} // 320px is approx card width + gap
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              >
                {flashProducts.map((product) => (
                  <div key={product.id} className="min-w-[300px]">
                    <ProductCard {...product} />
                  </div>
                ))}
              </motion.div>
            </motion.div>
            <Button variant="outline" size="icon" className="absolute top-1/2 -translate-y-1/2 -left-4 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white text-gray-900 disabled:opacity-50" onClick={prevSlide} disabled={slide === 0}>
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button variant="outline" size="icon" className="absolute top-1/2 -translate-y-1/2 -right-4 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white text-gray-900 disabled:opacity-50" onClick={nextSlide} disabled={slide >= flashProducts.length - (ref.current ? Math.floor(ref.current.offsetWidth / 320) : 1)}>
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FlashSale;
