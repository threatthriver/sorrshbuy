import { Link } from "react-router-dom";
import { motion } from "framer-motion";

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

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" as const },
    },
  };

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Shop by Category
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover amazing products across all categories with unbeatable prices
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {categories.map((category) => (
            <motion.div key={category.id} variants={itemVariants}>
              <Link 
                to={`/shop?category=${category.name.toLowerCase().replace(' & ', '-')}`}
                className="group relative rounded-lg overflow-hidden shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 block h-48"
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
                <div className="absolute inset-0 p-4 flex flex-col justify-end text-white">
                  <h3 className="text-xl font-bold">{category.name}</h3>
                  <p className="text-sm text-white/90">{category.itemCount}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CategorySection;