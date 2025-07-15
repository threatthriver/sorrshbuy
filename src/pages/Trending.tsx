import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { TrendingUp, Flame, Star, Clock } from "lucide-react";
import productPhone from "@/assets/product-phone.jpg";
import productHeadphones from "@/assets/product-headphones.jpg";
import productLaptop from "@/assets/product-laptop.jpg";
import productShoes from "@/assets/product-shoes.jpg";

const Trending = () => {
  const navigate = useNavigate();
  const trendingProducts = [
    {
      id: 1,
      name: "Latest iPhone Pro Max",
      price: 899.99,
      originalPrice: 1099.99,
      image: productPhone,
      rating: 4.9,
      reviews: 3456,
      badge: "🔥 Trending #1",
      isNew: false,
    },
    {
      id: 2,
      name: "AirPods Pro 2nd Gen",
      price: 229.99,
      originalPrice: 279.99,
      image: productHeadphones,
      rating: 4.8,
      reviews: 2134,
      badge: "🔥 Hot Deal",
      isNew: true,
    },
    {
      id: 3,
      name: "MacBook Air M3",
      price: 1099.99,
      originalPrice: 1299.99,
      image: productLaptop,
      rating: 4.9,
      reviews: 1892,
      badge: "⭐ Most Loved",
      isNew: true,
    },
    {
      id: 4,
      name: "Nike Air Jordan Retro",
      price: 189.99,
      originalPrice: 229.99,
      image: productShoes,
      rating: 4.7,
      reviews: 4521,
      badge: "🔥 Trending #2",
      isNew: false,
    },
    {
      id: 5,
      name: "Samsung Galaxy S24 Ultra",
      price: 999.99,
      originalPrice: 1199.99,
      image: productPhone,
      rating: 4.8,
      reviews: 2876,
      badge: "📈 Rising Fast",
      isNew: true,
    },
    {
      id: 6,
      name: "Sony WH-1000XM5",
      price: 349.99,
      originalPrice: 399.99,
      image: productHeadphones,
      rating: 4.9,
      reviews: 1634,
      badge: "⭐ Top Rated",
      isNew: false,
    },
  ];

    const handleCategoryClick = (categoryName: string) => {
    let categoryId = categoryName.toLowerCase();
    if (categoryName === "Home & Kitchen") {
      categoryId = "home";
    }
    navigate(`/shop?category=${categoryId}`);
  };

  const trendingCategories = [
    { name: "Electronics", trend: "+45%", icon: "📱", color: "text-blue-500" },
    { name: "Fashion", trend: "+32%", icon: "👕", color: "text-pink-500" },
    { name: "Home & Kitchen", trend: "+28%", icon: "🏠", color: "text-green-500" },
    { name: "Sports", trend: "+25%", icon: "⚽", color: "text-orange-500" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-hero py-12 lg:py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <TrendingUp className="h-8 w-8 lg:h-12 lg:w-12 text-white" />
            <Flame className="h-8 w-8 lg:h-12 lg:w-12 text-orange-300 animate-bounce-gentle" />
          </div>
          <h1 className="text-3xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 lg:mb-6">
            Trending Now
          </h1>
          <p className="text-lg lg:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Discover the hottest products everyone's talking about. Don't miss out on what's trending!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge className="bg-white/20 backdrop-blur-sm text-white border-white/30 px-4 py-2 text-sm lg:text-base">
              🔥 Updated Hourly
            </Badge>
            <Badge className="bg-white/20 backdrop-blur-sm text-white border-white/30 px-4 py-2 text-sm lg:text-base">
              📈 Real-time Data
            </Badge>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8 lg:py-16">
        {/* Trending Categories */}
        <section className="mb-12 lg:mb-16">
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-6 lg:mb-8 text-center">
            Trending Categories
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {trendingCategories.map((category, index) => (
              <div key={index} onClick={() => handleCategoryClick(category.name)} className="bg-card p-4 lg:p-6 rounded-xl shadow-card hover:shadow-product transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl mb-3">{category.icon}</div>
                  <h3 className="font-semibold text-foreground mb-2 text-sm lg:text-base">{category.name}</h3>
                  <div className={`flex items-center justify-center gap-1 ${category.color}`}>
                    <TrendingUp className="h-3 w-3 lg:h-4 lg:w-4" />
                    <span className="font-bold text-xs lg:text-sm">{category.trend}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Trending Products */}
        <section className="mb-12 lg:mb-16">
          <div className="flex items-center justify-between mb-6 lg:mb-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground">
              🔥 Hot Products
            </h2>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Clock className="h-4 w-4" />
              <span className="text-xs lg:text-sm">Updated 5 min ago</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {trendingProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </section>

        {/* Trending Stats */}
        <section className="bg-gradient-primary text-primary-foreground rounded-xl p-6 lg:p-12">
          <div className="text-center mb-8 lg:mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4">Trending Statistics</h2>
            <p className="text-primary-foreground/80 text-sm lg:text-base">
              Real-time insights into what's hot on SorrshaBuy
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <div className="text-center">
              <div className="text-2xl lg:text-4xl font-bold mb-2">2.5M+</div>
              <div className="text-primary-foreground/80 text-xs lg:text-sm">Views Today</div>
            </div>
            <div className="text-center">
              <div className="text-2xl lg:text-4xl font-bold mb-2">156K+</div>
              <div className="text-primary-foreground/80 text-xs lg:text-sm">Orders This Week</div>
            </div>
            <div className="text-center">
              <div className="text-2xl lg:text-4xl font-bold mb-2">89%</div>
              <div className="text-primary-foreground/80 text-xs lg:text-sm">Customer Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-2xl lg:text-4xl font-bold mb-2">24/7</div>
              <div className="text-primary-foreground/80 text-xs lg:text-sm">Live Tracking</div>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  );
};

export default Trending;