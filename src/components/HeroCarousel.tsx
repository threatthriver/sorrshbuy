import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBanner1 from "@/assets/hero-banner-1.jpg";
import heroBanner2 from "@/assets/hero-banner-2.jpg";
import heroBanner3 from "@/assets/hero-banner-3.jpg";

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

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

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative h-[400px] lg:h-[600px] overflow-hidden rounded-xl shadow-product">
      {/* Slides */}
      <div 
        className="flex transition-transform duration-500 ease-in-out h-full"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className="min-w-full relative">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />
            
            {/* Content */}
            <div className="absolute left-8 lg:left-16 top-1/2 transform -translate-y-1/2 text-white max-w-md">
              <p className="text-lg lg:text-xl font-semibold text-secondary mb-2 animate-fade-in-up">
                {slide.subtitle}
              </p>
              <h2 className="text-3xl lg:text-5xl font-bold mb-4 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                {slide.title}
              </h2>
              <p className="text-lg lg:text-xl mb-6 text-gray-200 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                {slide.description}
              </p>
              <Button 
                size="lg" 
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold px-8 py-3 animate-fade-in-up shadow-glow"
                style={{ animationDelay: "0.3s" }}
              >
                {slide.buttonText}
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <Button
        variant="ghost"
        size="icon"
        onClick={prevSlide}
        className="absolute z-10 left-4 top-1/2 transform -translate-y-1/2 bg-black/30 backdrop-blur-sm hover:bg-black/50 text-white h-10 w-10 rounded-full transition-all duration-300"
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      
      <Button
        variant="ghost"
        size="icon"
        onClick={nextSlide}
        className="absolute z-10 right-4 top-1/2 transform -translate-y-1/2 bg-black/30 backdrop-blur-sm hover:bg-black/50 text-white h-10 w-10 rounded-full transition-all duration-300"
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      {/* Dots */}
      <div className="absolute z-10 bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <Button
            key={index}
            onClick={() => setCurrentSlide(index)}
            size="icon"
            variant="ghost"
            aria-label={`Go to slide ${index + 1}`}
            className={`w-3 h-3 rounded-full transition-all duration-300 p-0 ${
              currentSlide === index 
                ? "bg-white shadow-glow" 
                : "bg-white/50 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;