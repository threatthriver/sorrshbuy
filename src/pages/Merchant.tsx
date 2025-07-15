import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Store, TrendingUp, Users, Shield, DollarSign, Headphones } from "lucide-react";

const Merchant = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Start Selling on SorrshaBuy
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of successful merchants and grow your business with our powerful e-commerce platform
          </p>
          <Button size="lg" className="bg-white text-primary hover:bg-gray-100 font-semibold px-8 py-4">
            Become a Merchant
          </Button>
        </div>
      </section>
      
      <div className="container mx-auto px-4 py-16">
        {/* Benefits Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Why Sell with Us?</h2>
            <p className="text-lg text-muted-foreground">
              Everything you need to build and grow your online business
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-card p-6 rounded-xl shadow-card text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Store className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Easy Setup</h3>
              <p className="text-muted-foreground">Get your store up and running in minutes with our intuitive setup process</p>
            </div>
            
            <div className="bg-card p-6 rounded-xl shadow-card text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Boost Sales</h3>
              <p className="text-muted-foreground">Reach millions of customers and increase your sales with our marketing tools</p>
            </div>
            
            <div className="bg-card p-6 rounded-xl shadow-card text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Large Audience</h3>
              <p className="text-muted-foreground">Access to millions of active shoppers looking for products like yours</p>
            </div>
            
            <div className="bg-card p-6 rounded-xl shadow-card text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Secure Platform</h3>
              <p className="text-muted-foreground">Enterprise-grade security to protect your business and customer data</p>
            </div>
            
            <div className="bg-card p-6 rounded-xl shadow-card text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Competitive Fees</h3>
              <p className="text-muted-foreground">Low transaction fees and no hidden costs to maximize your profits</p>
            </div>
            
            <div className="bg-card p-6 rounded-xl shadow-card text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Headphones className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">24/7 Support</h3>
              <p className="text-muted-foreground">Dedicated support team to help you succeed every step of the way</p>
            </div>
          </div>
        </section>
        
        {/* Application Form */}
        <section className="max-w-2xl mx-auto">
          <div className="bg-card p-8 rounded-xl shadow-card">
            <h2 className="text-2xl font-semibold text-foreground mb-6 text-center">
              Apply to Become a Merchant
            </h2>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" placeholder="John" />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" placeholder="Doe" />
                </div>
              </div>
              
              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" placeholder="john@example.com" />
              </div>
              
              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" placeholder="+1 (555) 123-4567" />
              </div>
              
              <div>
                <Label htmlFor="businessName">Business Name</Label>
                <Input id="businessName" placeholder="Your Business Name" />
              </div>
              
              <div>
                <Label htmlFor="businessType">Business Type</Label>
                <select className="w-full p-3 border border-border rounded-lg bg-background">
                  <option value="">Select business type</option>
                  <option value="individual">Individual</option>
                  <option value="small-business">Small Business</option>
                  <option value="corporation">Corporation</option>
                  <option value="non-profit">Non-Profit</option>
                </select>
              </div>
              
              <div>
                <Label htmlFor="website">Website (Optional)</Label>
                <Input id="website" placeholder="https://yourwebsite.com" />
              </div>
              
              <div>
                <Label htmlFor="products">What products do you plan to sell?</Label>
                <Textarea 
                  id="products" 
                  placeholder="Describe the types of products you want to sell..."
                  rows={4}
                />
              </div>
              
              <div>
                <Label htmlFor="experience">Previous selling experience</Label>
                <Textarea 
                  id="experience" 
                  placeholder="Tell us about your selling experience (optional)..."
                  rows={3}
                />
              </div>
              
              <div className="flex items-start space-x-2">
                <input type="checkbox" className="rounded mt-1" />
                <span className="text-sm text-muted-foreground">
                  I agree to the <a href="/terms" className="text-primary hover:underline">Merchant Terms of Service</a> and <a href="#" className="text-primary hover:underline">Privacy Policy</a>
                </span>
              </div>
              
              <Button className="w-full bg-primary hover:bg-primary/90">
                Submit Application
              </Button>
            </form>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  );
};

export default Merchant;