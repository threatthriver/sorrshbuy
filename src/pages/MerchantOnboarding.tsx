import { motion } from 'framer-motion';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Store, TrendingUp, Users, Shield } from "lucide-react";
import { Link } from 'react-router-dom';

const MerchantOnboarding = () => {
  const features = [
    {
      icon: Store,
      title: "Your Own Storefront",
      description: "Create a beautiful, branded storefront to showcase your products.",
    },
    {
      icon: TrendingUp,
      title: "Powerful Analytics",
      description: "Make data-driven decisions with our easy-to-understand analytics dashboard.",
    },
    {
      icon: Users,
      title: "Reach More Customers",
      description: "Tap into our large and growing customer base to expand your reach.",
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "We handle payments and security, so you can focus on your business.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <motion.section 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="py-20 lg:py-32 bg-gradient-to-br from-primary/5 via-background to-background"
        >
          <div className="container mx-auto px-4 text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl lg:text-6xl font-extrabold text-foreground mb-4"
            >
              Start Selling on SorrshaBuy
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto mb-8"
            >
              Join a thriving marketplace, reach millions of customers, and grow your business with our powerful tools and support.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Button asChild size="lg" className="text-lg px-8 py-6">
                <Link to="/merchant/app/dashboard">Get Started</Link>
              </Button>
            </motion.div>
          </div>
        </motion.section>

        {/* Features Section */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-center text-foreground mb-12">Why Sell With Us?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  <FeatureCard {...feature} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-16 lg:py-24 bg-muted/40">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Ready to Grow Your Business?</h2>
            <p className="text-lg text-muted-foreground mb-8">Sign up today and start your journey with SorrshaBuy.</p>
            <Button asChild size="lg">
              <Link to="/merchant/app/dashboard">Sign Up Now</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

interface FeatureCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

const FeatureCard = ({ icon: Icon, title, description }: FeatureCardProps) => (
  <div className="bg-card p-6 rounded-xl shadow-sm text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
    <div className="bg-primary/10 text-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
      <Icon className="w-8 h-8" />
    </div>
    <h3 className="text-xl font-semibold mb-2 text-foreground">{title}</h3>
    <p className="text-muted-foreground">{description}</p>
  </div>
);

export default MerchantOnboarding;