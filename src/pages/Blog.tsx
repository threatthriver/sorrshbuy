import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, Clock } from "lucide-react";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "10 Must-Have Tech Gadgets for 2024",
      excerpt: "Discover the latest and greatest tech innovations that are reshaping how we work and play in 2024.",
      author: "Tech Team",
      date: "Dec 15, 2024",
      readTime: "5 min read",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop"
    },
    {
      id: 2,
      title: "Fashion Trends to Watch This Season",
      excerpt: "From sustainable fashion to bold patterns, explore the trends that are defining this season's style.",
      author: "Fashion Team",
      date: "Dec 12, 2024",
      readTime: "4 min read",
      category: "Fashion",
      image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=600&h=400&fit=crop"
    },
    {
      id: 3,
      title: "Smart Home Setup Guide for Beginners",
      excerpt: "Transform your living space into a smart home with our comprehensive beginner's guide.",
      author: "Home Team",
      date: "Dec 10, 2024",
      readTime: "7 min read",
      category: "Home & Living",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop"
    },
    {
      id: 4,
      title: "Holiday Shopping Tips and Tricks",
      excerpt: "Make the most of your holiday shopping with these expert tips for finding the best deals.",
      author: "Shopping Team",
      date: "Dec 8, 2024",
      readTime: "6 min read",
      category: "Shopping",
      image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=600&h=400&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">SorrshaBuy Blog</h1>
            <p className="text-lg text-muted-foreground">
              Stay updated with the latest trends, tips, and insights from our experts
            </p>
          </div>
          
          <div className="grid gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-card rounded-xl shadow-card overflow-hidden hover:shadow-product transition-shadow duration-300">
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-2/3 p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="outline" className="text-primary border-primary">
                        {post.category}
                      </Badge>
                    </div>
                    
                    <h2 className="text-xl font-semibold text-foreground mb-3 hover:text-primary transition-colors cursor-pointer">
                      {post.title}
                    </h2>
                    
                    <p className="text-muted-foreground mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        {post.author}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {post.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {post.readTime}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-semibold transition-colors">
              Load More Posts
            </button>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Blog;