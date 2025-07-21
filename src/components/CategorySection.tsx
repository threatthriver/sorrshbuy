import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { SectionTitle } from "./ui/Section";

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
        <div className="w-full">
          <SectionTitle>Shop by Category</SectionTitle>
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 max-w-7xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <AnimatePresence>
            {categories.map((category) => (
              <motion.div
                key={category.id}
                variants={itemVariants}
                className="group relative overflow-hidden rounded-2xl aspect-square shadow-md hover:shadow-xl transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <Link to={`/shop?category=${category.name.toLowerCase()}`} className="block h-full w-full">
                  <div className={`absolute inset-0 bg-gradient-to-br from-black/20 via-black/10 to-transparent opacity-90 transition-opacity group-hover:opacity-100 z-10`} />
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 flex flex-col justify-end p-4 z-20">
                    <h3 className="text-white font-bold text-lg md:text-xl drop-shadow-lg">{category.name}</h3>
                    <p className="text-white/90 text-sm md:text-base drop-shadow-md">{category.itemCount}</p>
                  </div>
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300 z-10`} />
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;