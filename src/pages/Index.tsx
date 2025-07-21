
import Header from "@/components/Header";
import HeroCarousel from "@/components/HeroCarousel";
import CategorySection from "@/components/CategorySection";
import ProductGrid from "@/components/ProductGrid";
import FeatureAnnouncement from "@/components/FeatureAnnouncement";
import AISupport from "@/components/AISupport";
import Footer from "@/components/Footer";
import { Truck, Lock, Undo2, Star, TrendingUp, Zap } from "lucide-react";
import AnimatedSection from '@/components/AnimatedSection';
import { Section, SectionTitle } from '@/components/ui/Section';

// Sample product data for different sections
const bestSellers = [
  {
    id: "bs1",
    name: "Wireless Earbuds Pro",
    price: 149.99,
    originalPrice: 199.99,
    rating: 4.8,
    reviews: 3421,
    badge: "Best Seller"
  },
  {
    id: "bs2",
    name: "Smart Watch 4",
    price: 229.99,
    originalPrice: 299.99,
    rating: 4.7,
    reviews: 2890,
    isNew: true
  },
  {
    id: "bs3",
    name: "Bluetooth Speaker",
    price: 79.99,
    rating: 4.6,
    reviews: 1543,
    badge: "Popular"
  },
  {
    id: "bs4",
    name: "Gaming Mouse",
    price: 59.99,
    originalPrice: 79.99,
    rating: 4.9,
    reviews: 3210,
    badge: "Best Seller"
  }
];

const trendingProducts = [
  {
    id: "tp1",
    name: "4K Action Camera",
    price: 349.99,
    rating: 4.8,
    reviews: 1245,
    isNew: true,
    badge: "Trending"
  },
  {
    id: "tp2",
    name: "Noise Cancelling Headphones",
    price: 279.99,
    originalPrice: 349.99,
    rating: 4.7,
    reviews: 2890
  },
  {
    id: "tp3",
    name: "Smart Home Hub",
    price: 199.99,
    rating: 4.5,
    reviews: 876,
    badge: "New"
  },
  {
    id: "tp4",
    name: "Fitness Tracker",
    price: 99.99,
    rating: 4.4,
    reviews: 3421,
    badge: "Trending"
  }
];

const specialOffers = [
  {
    id: "so1",
    name: "Wireless Charging Pad",
    price: 29.99,
    originalPrice: 49.99,
    rating: 4.6,
    reviews: 1245,
    badge: "40% OFF"
  },
  {
    id: "so2",
    name: "Portable Power Bank",
    price: 34.99,
    originalPrice: 59.99,
    rating: 4.5,
    reviews: 2890,
    badge: "Limited Time"
  },
  {
    id: "so3",
    name: "Phone Stand",
    price: 14.99,
    originalPrice: 24.99,
    rating: 4.3,
    reviews: 876,
    badge: "Deal"
  },
  {
    id: "so4",
    name: "Wireless Earbuds",
    price: 39.99,
    originalPrice: 79.99,
    rating: 4.2,
    reviews: 3421,
    badge: "50% OFF"
  }
];

const Index = () => {

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <AnimatedSection>
  <Section
    className="relative p-0 bg-gradient-to-br from-primary/80 via-primary/50 to-transparent min-h-[420px] flex items-center justify-center overflow-hidden"
    innerClassName="flex items-center justify-center w-full h-full p-0"
    curveBottom
  >
  {/* Animated gradient shapes for visual depth */}
      {/* Gradient Overlay for effect, sits behind HeroCarousel */}
    <div className="absolute inset-0 z-0 bg-gradient-to-br from-primary/80 via-primary/50 to-transparent opacity-80 pointer-events-none" />
    <div className="relative z-10 w-full">
      <HeroCarousel />
    </div>
</Section>
</AnimatedSection>

        <AnimatedSection>
          <Section variant="muted" curveTop curveBottom>
            <CategorySection />
          </Section>
        </AnimatedSection>

        {/* Featured Products */}
        <div id="featured-products">
          <AnimatedSection>
            <Section variant="gradient" curveTop curveBottom>
              <div className="mb-8">
                <ProductGrid />
              </div>
            </Section>
          </AnimatedSection>
        </div>

        {/* Best Sellers Section */}
        <AnimatedSection>
          <Section variant="muted" curveTop curveBottom>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-full bg-yellow-100 text-yellow-600">
                <Star className="w-6 h-6" />
              </div>
              <SectionTitle className="text-3xl font-bold text-gradient bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
                Best Sellers
              </SectionTitle>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {bestSellers.map((product) => (
                <div key={product.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="p-4">
                    <div className="h-40 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                      <span className="text-gray-400">Product Image</span>
                    </div>
                    <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
                    <div className="flex items-center mb-2">
                      <div className="flex text-yellow-400 mr-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-current' : ''}`} />
                        ))}
                      </div>
                      <span className="text-sm text-gray-500">({product.reviews})</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-lg font-bold">${product.price.toFixed(2)}</span>
                      {product.originalPrice && (
                        <span className="ml-2 text-sm text-gray-500 line-through">${product.originalPrice.toFixed(2)}</span>
                      )}
                      {product.badge && (
                        <span className="ml-auto px-2 py-1 text-xs font-semibold bg-yellow-100 text-yellow-800 rounded-full">
                          {product.badge}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Section>
        </AnimatedSection>

        {/* Trending Now Section */}
        <AnimatedSection>
          <Section variant="gradient" curveTop curveBottom>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-full bg-blue-100 text-blue-600">
                <TrendingUp className="w-6 h-6" />
              </div>
              <SectionTitle className="text-3xl font-bold text-gradient bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                Trending Now
              </SectionTitle>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {trendingProducts.map((product) => (
                <div key={product.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="p-4">
                    <div className="h-40 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                      <span className="text-gray-400">Product Image</span>
                    </div>
                    <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
                    <div className="flex items-center mb-2">
                      <div className="flex text-yellow-400 mr-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-current' : ''}`} />
                        ))}
                      </div>
                      <span className="text-sm text-gray-500">({product.reviews})</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-lg font-bold">${product.price.toFixed(2)}</span>
                      {product.originalPrice && (
                        <span className="ml-2 text-sm text-gray-500 line-through">${product.originalPrice.toFixed(2)}</span>
                      )}
                      {product.badge && (
                        <span className="ml-auto px-2 py-1 text-xs font-semibold bg-blue-100 text-blue-800 rounded-full">
                          {product.badge}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Section>
        </AnimatedSection>

        {/* Special Offers Section */}
        <AnimatedSection>
          <Section variant="muted" curveTop curveBottom>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-full bg-red-100 text-red-600">
                <Zap className="w-6 h-6" />
              </div>
              <SectionTitle className="text-3xl font-bold text-gradient bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">
                Special Offers
              </SectionTitle>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {specialOffers.map((product) => (
                <div key={product.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="p-4">
                    <div className="h-40 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                      <span className="text-gray-400">Product Image</span>
                    </div>
                    <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
                    <div className="flex items-center mb-2">
                      <div className="flex text-yellow-400 mr-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-current' : ''}`} />
                        ))}
                      </div>
                      <span className="text-sm text-gray-500">({product.reviews})</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-lg font-bold">${product.price.toFixed(2)}</span>
                      {product.originalPrice && (
                        <span className="ml-2 text-sm text-gray-500 line-through">${product.originalPrice.toFixed(2)}</span>
                      )}
                      {product.badge && (
                        <span className="ml-auto px-2 py-1 text-xs font-semibold bg-red-100 text-red-800 rounded-full">
                          {product.badge}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Section>
        </AnimatedSection>

        <AnimatedSection>
          <Section variant="muted" curveTop curveBottom>
            <FeatureAnnouncement />
          </Section>
        </AnimatedSection>

        <AnimatedSection className="!pt-0">
          <Section variant="muted" curveTop className="!py-0">
            <AISupport />
          </Section>
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
