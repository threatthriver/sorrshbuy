import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-8">About SorrshaBuy</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground mb-6">
              Welcome to SorrshaBuy, your trusted online marketplace for quality products at unbeatable prices. 
              We're committed to providing an exceptional shopping experience with a vast selection of products 
              across multiple categories.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 my-12">
              <div className="bg-card p-6 rounded-xl shadow-card">
                <h3 className="text-xl font-semibold mb-4 text-primary">Our Mission</h3>
                <p className="text-muted-foreground">
                  To make quality products accessible to everyone while providing excellent customer service 
                  and building lasting relationships with our customers.
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-xl shadow-card">
                <h3 className="text-xl font-semibold mb-4 text-primary">Our Vision</h3>
                <p className="text-muted-foreground">
                  To become the leading e-commerce platform known for trust, quality, and innovation 
                  in online shopping experiences.
                </p>
              </div>
            </div>
            
            <h2 className="text-2xl font-bold mb-4 text-foreground">Why Choose Us?</h2>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-center gap-3">
                <span className="text-primary">✓</span>
                Wide selection of quality products
              </li>
              <li className="flex items-center gap-3">
                <span className="text-primary">✓</span>
                Competitive prices and regular deals
              </li>
              <li className="flex items-center gap-3">
                <span className="text-primary">✓</span>
                Fast and reliable shipping
              </li>
              <li className="flex items-center gap-3">
                <span className="text-primary">✓</span>
                Secure payment processing
              </li>
              <li className="flex items-center gap-3">
                <span className="text-primary">✓</span>
                24/7 customer support
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default About;