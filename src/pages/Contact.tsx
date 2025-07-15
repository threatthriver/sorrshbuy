import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">Contact Us</h1>
            <p className="text-lg text-muted-foreground">
              We're here to help! Get in touch with our customer support team
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-card p-8 rounded-xl shadow-card">
              <h2 className="text-2xl font-semibold text-foreground mb-6">Send us a message</h2>
              
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
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="john@example.com" />
                </div>
                
                <div>
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="How can we help you?" />
                </div>
                
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us more about your inquiry..."
                    rows={5}
                  />
                </div>
                
                <Button className="w-full bg-primary hover:bg-primary/90">
                  Send Message
                </Button>
              </form>
            </div>
            
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-card p-8 rounded-xl shadow-card">
                <h2 className="text-2xl font-semibold text-foreground mb-6">Get in touch</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Email</h3>
                      <p className="text-muted-foreground">support@sorrshbuy.com</p>
                      <p className="text-muted-foreground">sales@sorrshbuy.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                      <p className="text-muted-foreground">+1 (555) 123-4567</p>
                      <p className="text-muted-foreground">+1 (555) 123-4568</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Address</h3>
                      <p className="text-muted-foreground">
                        123 Commerce Street<br />
                        New York, NY 10001<br />
                        United States
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Business Hours</h3>
                      <p className="text-muted-foreground">
                        Monday - Friday: 9:00 AM - 6:00 PM<br />
                        Saturday: 10:00 AM - 4:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* FAQ Section */}
              <div className="bg-card p-8 rounded-xl shadow-card">
                <h3 className="text-xl font-semibold text-foreground mb-4">Frequently Asked Questions</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">How can I track my order?</h4>
                    <p className="text-muted-foreground text-sm">You can track your order using the tracking number sent to your email.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">What is your return policy?</h4>
                    <p className="text-muted-foreground text-sm">We offer 30-day returns for most items in original condition.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Do you offer international shipping?</h4>
                    <p className="text-muted-foreground text-sm">Yes, we ship to most countries worldwide with various shipping options.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Contact;