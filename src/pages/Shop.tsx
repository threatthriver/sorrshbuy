import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Filter, Search, SlidersHorizontal } from "lucide-react";
import { useState } from "react";
import productPhone from "@/assets/product-phone.jpg";
import productHeadphones from "@/assets/product-headphones.jpg";
import productLaptop from "@/assets/product-laptop.jpg";
import productShoes from "@/assets/product-shoes.jpg";

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("featured");

  const categories = [
    { id: "all", name: "All Products", count: 150 },
    { id: "electronics", name: "Electronics", count: 45 },
    { id: "fashion", name: "Fashion", count: 67 },
    { id: "home", name: "Home & Kitchen", count: 23 },
    { id: "sports", name: "Sports", count: 15 }
  ];

  const products = [
    {
      id: 1,
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
      id: 2,
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
      id: 3,
      name: "Ultra-Thin Laptop 15 inch",
      price: 1299.99,
      image: productLaptop,
      rating: 4.9,
      reviews: 892,
      badge: "Editor's Choice",
      category: "electronics"
    },
    {
      id: 4,
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
      id: 5,
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
      id: 6,
      name: "Professional Gaming Laptop",
      price: 1899.99,
      image: productLaptop,
      rating: 4.7,
      reviews: 743,
      isNew: true,
      category: "electronics"
    },
    {
      id: 7,
      name: "Casual Sneakers",
      price: 89.99,
      originalPrice: 119.99,
      image: productShoes,
      rating: 4.3,
      reviews: 2108,
      category: "fashion"
    },
    {
      id: 8,
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

  const filteredProducts = selectedCategory === "all" 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Shop All Products</h1>
          <p className="text-lg text-muted-foreground">
            Discover amazing products across all categories
          </p>
        </div>
        
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-card p-6 rounded-xl shadow-card sticky top-8">
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <Filter className="h-5 w-5" />
                Filters
              </h3>
              
              {/* Search */}
              <div className="mb-6">
                <label className="text-sm font-medium text-foreground mb-2 block">Search</label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search products..."
                    className="pl-10"
                  />
                </div>
              </div>
              
              {/* Categories */}
              <div className="mb-6">
                <label className="text-sm font-medium text-foreground mb-3 block">Categories</label>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full text-left p-3 rounded-lg transition-colors ${
                        selectedCategory === category.id
                          ? "bg-primary text-primary-foreground"
                          : "hover:bg-muted"
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <span>{category.name}</span>
                        <Badge variant="outline" className="text-xs">
                          {category.count}
                        </Badge>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Price Range */}
              <div className="mb-6">
                <label className="text-sm font-medium text-foreground mb-3 block">Price Range</label>
                <div className="space-y-3">
                  <div className="flex gap-2">
                    <Input placeholder="Min" type="number" />
                    <Input placeholder="Max" type="number" />
                  </div>
                  <Button variant="outline" className="w-full">
                    Apply
                  </Button>
                </div>
              </div>
              
              {/* Rating Filter */}
              <div className="mb-6">
                <label className="text-sm font-medium text-foreground mb-3 block">Rating</label>
                <div className="space-y-2">
                  {[4, 3, 2, 1].map((rating) => (
                    <label key={rating} className="flex items-center space-x-2 cursor-pointer">
                      <input type="checkbox" className="rounded" />
                      <span className="text-sm">{rating}+ Stars</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Products Grid */}
          <div className="lg:col-span-3">
            {/* Sort and View Options */}
            <div className="flex justify-between items-center mb-6 p-4 bg-card rounded-xl shadow-card">
              <div className="flex items-center gap-4">
                <span className="text-muted-foreground">
                  Showing {filteredProducts.length} products
                </span>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <SlidersHorizontal className="h-4 w-4 text-muted-foreground" />
                  <select 
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="bg-background border border-border rounded-lg px-3 py-2 text-sm"
                  >
                    <option value="featured">Featured</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="rating">Customer Rating</option>
                    <option value="newest">Newest First</option>
                  </select>
                </div>
              </div>
            </div>
            
            {/* Products Grid */}
            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
            
            {/* Load More */}
            <div className="text-center mt-12">
              <Button variant="outline" size="lg" className="px-8">
                Load More Products
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Shop;