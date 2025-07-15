import { Link } from "react-router-dom";

const CategorySection = () => {
  const categories = [
    {
      id: 1,
      name: "Electronics",
      image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=400&h=300&fit=crop",
      itemCount: "10,000+ items",
      color: "from-blue-500 to-blue-600"
    },
    {
      id: 2,
      name: "Fashion",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop",
      itemCount: "25,000+ items",
      color: "from-pink-500 to-pink-600"
    },
    {
      id: 3,
      name: "Home & Kitchen",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop",
      itemCount: "15,000+ items",
      color: "from-green-500 to-green-600"
    },
    {
      id: 4,
      name: "Sports",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
      itemCount: "8,000+ items",
      color: "from-orange-500 to-orange-600"
    },
    {
      id: 5,
      name: "Books",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop",
      itemCount: "50,000+ items",
      color: "from-purple-500 to-purple-600"
    },
    {
      id: 6,
      name: "Beauty",
      image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=300&fit=crop",
      itemCount: "12,000+ items",
      color: "from-rose-500 to-rose-600"
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Shop by Category
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover amazing products across all categories with unbeatable prices
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6">
          {categories.map((category) => (
            <Link 
              to={`/shop?category=${category.name.toLowerCase().replace(' & ', '-')}`}
              key={category.id}
              className="group relative rounded-xl overflow-hidden shadow-card hover:shadow-product transition-all duration-300 hover:-translate-y-1 block"
            >
              <div className="aspect-square relative">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-opacity" />
                
                {/* Content */}
                <div className="absolute inset-0 p-4 flex flex-col justify-end text-white">
                  <h3 className="font-bold text-lg transition-transform duration-300 group-hover:translate-y-[-4px]">{category.name}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;