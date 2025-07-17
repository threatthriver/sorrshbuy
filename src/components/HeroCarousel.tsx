import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBanner1 from "@/assets/hero-banner-1.jpg";
import heroBanner2 from "@/assets/hero-banner-2.jpg";
import heroBanner3 from "@/assets/hero-banner-3.jpg";

const HeroCarousel = () => {
  const [[currentSlide, direction], setCurrentSlide] = useState([0, 0]);

  const slides = [
    {
      id: 1,
      image: heroBanner1,
      title: "Latest Electronics",
      subtitle: "Up to 50% OFF",
      description: "Discover the newest smartphones, laptops, and gadgets",
      buttonText: "Shop Electronics",
    },
    {
      id: 2,
      image: heroBanner2,
      title: "Fashion Collection",
      subtitle: "New Arrivals",
      description: "Trendy clothing and accessories for every style",
      buttonText: "Shop Fashion",
    },
    {
      id: 3,
      image: heroBanner3,
      title: "Home Appliances",
      subtitle: "Smart Living",
      description: "Modern appliances to upgrade your home",
      buttonText: "Shop Home",
    },
  ];

  const slideVariants = {
    initial: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
    }),
    animate: {
      x: 0,
      opacity: 1,
      transition: { x: { type: 'spring' as const, stiffness: 300, damping: 30 }, opacity: { duration: 0.2 } },
    },
    exit: (direction: number) => ({
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
      transition: { x: { type: 'spring' as const, stiffness: 300, damping: 30 }, opacity: { duration: 0.2 } },
    }),
  };

  const contentVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' as const }
    },
  };

  const paginate = useCallback((newDirection: number) => {
    setCurrentSlide([currentSlide + newDirection, newDirection]);
  }, [currentSlide]);

  const activeSlideIndex = ((currentSlide % slides.length) + slides.length) % slides.length;

  useEffect(() => {
    const timer = setTimeout(() => paginate(1), 5000);
    return () => clearTimeout(timer);
  }, [currentSlide, paginate]);

  const slide = slides[activeSlideIndex];

  return (
    <div className="relative overflow-hidden rounded-xl shadow-product h-[40vh] sm:h-[50vh] md:h-auto md:aspect-[2/1] lg:aspect-[2.8/1]">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={slideVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="absolute inset-0 w-full h-full"
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="absolute left-4 md:left-8 lg:left-16 top-1/2 transform -translate-y-1/2 text-white max-w-md z-10">
        <motion.div key={activeSlideIndex} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.3 }}>
          <motion.p variants={contentVariants} initial="initial" animate="animate" className="text-lg lg:text-xl font-semibold text-secondary mb-2">
            {slide.subtitle}
          </motion.p>
          <motion.h2 variants={contentVariants} initial="initial" animate="animate" transition={{ delay: 0.1 }} className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {slide.title}
          </motion.h2>
          <motion.p variants={contentVariants} initial="initial" animate="animate" transition={{ delay: 0.2 }} className="text-lg lg:text-xl mb-6 text-gray-200">
            {slide.description}
          </motion.p>
          <motion.div variants={contentVariants} initial="initial" animate="animate" transition={{ delay: 0.3 }}>
            <Button size="lg" className="bg-gradient-to-r from-secondary to-amber hover:from-secondary/90 hover:to-amber/90 text-white font-semibold px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              {slide.buttonText}
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Navigation Buttons */}
      <Button
        variant="ghost"
        size="icon"
        onClick={() => paginate(-1)}
        className="absolute z-20 left-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm hover:bg-primary/20 text-white h-12 w-12 rounded-full transition-all duration-300 hover:scale-110 border border-white/20 hover:border-primary/30"
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => paginate(1)}
        className="absolute z-20 right-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm hover:bg-primary/20 text-white h-12 w-12 rounded-full transition-all duration-300 hover:scale-110 border border-white/20 hover:border-primary/30"
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      {/* Pagination & Progress */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3">
        <div className="flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide([index, index > activeSlideIndex ? 1 : -1])}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${activeSlideIndex === index ? 'bg-secondary scale-125 shadow-lg' : 'bg-white/50 hover:bg-white/80'}`}
            />
          ))}
        </div>
        <div className="w-32 h-1 bg-white/20 rounded-full overflow-hidden">
            <motion.div 
              key={activeSlideIndex}
              className="h-full bg-gradient-to-r from-secondary to-amber"
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 5, ease: 'linear' }}
            />
        </div>
      </div>
    </div>
  );
};

export default HeroCarousel;