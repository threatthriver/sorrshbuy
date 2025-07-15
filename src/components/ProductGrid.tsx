import ProductCard from "./ProductCard";
import productPhone from "@/assets/product-phone.jpg";
import productHeadphones from "@/assets/product-headphones.jpg";
import productLaptop from "@/assets/product-laptop.jpg";
import productShoes from "@/assets/product-shoes.jpg";

const ProductGrid = () => {
  // Sample product data
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
      isNew: false
    },
    {
      id: 2,
      name: "Premium Wireless Headphones",
      price: 299.99,
      originalPrice: 399.99,
      image: productHeadphones,
      rating: 4.6,
      reviews: 1834,
      isNew: true
    },
    {
      id: 3,
      name: "Ultra-Thin Laptop 15 inch",
      price: 1299.99,
      image: productLaptop,
      rating: 4.9,
      reviews: 892,
      badge: "Editor's Choice"
    },
    {
      id: 4,
      name: "Sport Running Shoes",
      price: 129.99,
      originalPrice: 179.99,
      image: productShoes,
      rating: 4.5,
      reviews: 3421,
      isNew: true
    },
    {
      id: 5,
      name: "Smartphone Pro Max 256GB",
      price: 799.99,
      originalPrice: 999.99,
      image: productPhone,
      rating: 4.7,
      reviews: 1567,
      badge: "Hot Deal"
    },
    {
      id: 6,
      name: "Noise Cancelling Headphones",
      price: 249.99,
      image: productHeadphones,
      rating: 4.4,
      reviews: 967,
      isNew: false
    },
    {
      id: 7,
      name: "Gaming Laptop Pro",
      price: 1899.99,
      originalPrice: 2199.99,
      image: productLaptop,
      rating: 4.8,
      reviews: 654,
      badge: "Limited Edition"
    },
    {
      id: 8,
      name: "Casual Sneakers",
      price: 89.99,
      originalPrice: 119.99,
      image: productShoes,
      rating: 4.3,
      reviews: 2108,
      isNew: true
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Featured Products
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our handpicked selection of premium products with amazing deals
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-semibold shadow-glow transition-all duration-300 hover:shadow-xl">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;