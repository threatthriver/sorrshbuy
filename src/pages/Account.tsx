import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { User, Mail, Phone, MapPin, CreditCard } from "lucide-react";

const Account = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-8">My Account</h1>
          
          <Tabs defaultValue="profile" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="profile">Profile</TabsTrigger>
              <TabsTrigger value="orders">Orders</TabsTrigger>
              <TabsTrigger value="addresses">Addresses</TabsTrigger>
              <TabsTrigger value="payment">Payment</TabsTrigger>
            </TabsList>
            
            <TabsContent value="profile" className="space-y-6">
              <div className="bg-card p-6 rounded-xl shadow-card">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <User className="h-5 w-5 text-primary" />
                  Profile Information
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="John" />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Doe" />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="john@example.com" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" placeholder="+1 (555) 123-4567" />
                  </div>
                </div>
                <Button className="mt-4 bg-primary hover:bg-primary/90">
                  Update Profile
                </Button>
              </div>
            </TabsContent>
            
            <TabsContent value="orders" className="space-y-6">
              <div className="bg-card p-6 rounded-xl shadow-card">
                <h3 className="text-xl font-semibold mb-4">Order History</h3>
                <div className="space-y-4">
                  <div className="border border-border rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold">Order #12345</h4>
                      <span className="text-sm text-success">Delivered</span>
                    </div>
                    <p className="text-muted-foreground text-sm">2 items • $299.98</p>
                    <p className="text-muted-foreground text-sm">Ordered on Dec 15, 2024</p>
                  </div>
                  <div className="border border-border rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold">Order #12344</h4>
                      <span className="text-sm text-warning">Processing</span>
                    </div>
                    <p className="text-muted-foreground text-sm">1 item • $899.99</p>
                    <p className="text-muted-foreground text-sm">Ordered on Dec 12, 2024</p>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="addresses" className="space-y-6">
              <div className="bg-card p-6 rounded-xl shadow-card">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  Saved Addresses
                </h3>
                <div className="space-y-4">
                  <div className="border border-border rounded-lg p-4">
                    <h4 className="font-semibold mb-2">Home Address</h4>
                    <p className="text-muted-foreground">
                      123 Main Street<br />
                      New York, NY 10001<br />
                      United States
                    </p>
                  </div>
                </div>
                <Button variant="outline" className="mt-4">
                  Add New Address
                </Button>
              </div>
            </TabsContent>
            
            <TabsContent value="payment" className="space-y-6">
              <div className="bg-card p-6 rounded-xl shadow-card">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <CreditCard className="h-5 w-5 text-primary" />
                  Payment Methods
                </h3>
                <div className="space-y-4">
                  <div className="border border-border rounded-lg p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-8 bg-primary rounded flex items-center justify-center text-white text-xs font-bold">
                        VISA
                      </div>
                      <div>
                        <p className="font-semibold">**** **** **** 1234</p>
                        <p className="text-muted-foreground text-sm">Expires 12/25</p>
                      </div>
                    </div>
                  </div>
                </div>
                <Button variant="outline" className="mt-4">
                  Add Payment Method
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Account;