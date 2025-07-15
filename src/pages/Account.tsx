
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { 
  User, Mail, Phone, MapPin, CreditCard, Package, Heart, Bell, 
  Settings, Shield, Gift, Star, Calendar, Truck, RotateCcw, 
  Download, FileText, HelpCircle, MessageSquare, Award, 
  ShoppingBag, Bookmark, Eye, Clock, Filter, Search,
  Globe, Languages, Moon, Sun, Palette, Lock, Key,
  Coins, Trophy, Target, TrendingUp, BarChart3
} from "lucide-react";

const Account = () => {
  const recentOrders = [
    { id: "#12345", items: 2, total: "$299.98", status: "Delivered", date: "Dec 15, 2024", rating: 5 },
    { id: "#12344", items: 1, total: "$899.99", status: "Processing", date: "Dec 12, 2024", rating: null },
    { id: "#12343", items: 3, total: "$156.50", status: "Shipped", date: "Dec 10, 2024", rating: 4 },
  ];

  const savedItems = [
    { name: "Wireless Headphones", price: "$149.99", image: "/placeholder.svg", category: "Electronics" },
    { name: "Running Shoes", price: "$89.99", image: "/placeholder.svg", category: "Sports" },
    { name: "Coffee Maker", price: "$199.99", image: "/placeholder.svg", category: "Home" },
  ];

  const notifications = [
    { type: "Order", message: "Your order #12345 has been delivered", time: "2 hours ago", read: false },
    { type: "Deal", message: "50% off on Electronics - Limited time offer", time: "1 day ago", read: true },
    { type: "Account", message: "Profile updated successfully", time: "3 days ago", read: true },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Welcome Section */}
          <div className="mb-8">
            <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-2">My Account</h1>
            <p className="text-muted-foreground">Manage your account settings and preferences</p>
          </div>

          <Tabs defaultValue="dashboard" className="w-full">
            <TabsList className="grid w-full grid-cols-8 mb-8">
              <TabsTrigger value="dashboard" className="flex items-center gap-2">
                <BarChart3 className="h-4 w-4" />
                Dashboard
              </TabsTrigger>
              <TabsTrigger value="profile" className="flex items-center gap-2">
                <User className="h-4 w-4" />
                Profile
              </TabsTrigger>
              <TabsTrigger value="orders" className="flex items-center gap-2">
                <Package className="h-4 w-4" />
                Orders
              </TabsTrigger>
              <TabsTrigger value="wishlist" className="flex items-center gap-2">
                <Heart className="h-4 w-4" />
                Wishlist
              </TabsTrigger>
              <TabsTrigger value="addresses" className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                Addresses
              </TabsTrigger>
              <TabsTrigger value="payment" className="flex items-center gap-2">
                <CreditCard className="h-4 w-4" />
                Payment
              </TabsTrigger>
              <TabsTrigger value="notifications" className="flex items-center gap-2">
                <Bell className="h-4 w-4" />
                Alerts
              </TabsTrigger>
              <TabsTrigger value="settings" className="flex items-center gap-2">
                <Settings className="h-4 w-4" />
                Settings
              </TabsTrigger>
            </TabsList>
            
            {/* Dashboard */}
            <TabsContent value="dashboard" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total Orders</CardTitle>
                    <Package className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">24</div>
                    <p className="text-xs text-muted-foreground">+2 from last month</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total Spent</CardTitle>
                    <Coins className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">$2,847.50</div>
                    <p className="text-xs text-muted-foreground">+$340 from last month</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Reward Points</CardTitle>
                    <Star className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">1,247</div>
                    <p className="text-xs text-muted-foreground">≈ $12.47 value</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Member Level</CardTitle>
                    <Trophy className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">Gold</div>
                    <Progress value={75} className="mt-2" />
                    <p className="text-xs text-muted-foreground mt-1">75% to Platinum</p>
                  </CardContent>
                </Card>
              </div>

              {/* Recent Activity */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Orders</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {recentOrders.slice(0, 3).map((order) => (
                      <div key={order.id} className="flex items-center justify-between p-3 border rounded-lg">
                        <div>
                          <p className="font-medium">{order.id}</p>
                          <p className="text-sm text-muted-foreground">{order.items} items • {order.total}</p>
                        </div>
                        <Badge variant={order.status === 'Delivered' ? 'default' : order.status === 'Processing' ? 'secondary' : 'outline'}>
                          {order.status}
                        </Badge>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Quick Actions</CardTitle>
                  </CardHeader>
                  <CardContent className="grid grid-cols-2 gap-4">
                    <Button variant="outline" className="h-20 flex flex-col gap-2">
                      <Package className="h-5 w-5" />
                      Track Order
                    </Button>
                    <Button variant="outline" className="h-20 flex flex-col gap-2">
                      <RotateCcw className="h-5 w-5" />
                      Return Item
                    </Button>
                    <Button variant="outline" className="h-20 flex flex-col gap-2">
                      <Download className="h-5 w-5" />
                      Download Invoice
                    </Button>
                    <Button variant="outline" className="h-20 flex flex-col gap-2">
                      <HelpCircle className="h-5 w-5" />
                      Get Help
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            {/* Profile */}
            <TabsContent value="profile" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <Card className="lg:col-span-2">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <User className="h-5 w-5 text-primary" />
                      Personal Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
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
                      <div>
                        <Label htmlFor="dob">Date of Birth</Label>
                        <Input id="dob" type="date" />
                      </div>
                      <div>
                        <Label htmlFor="gender">Gender</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select gender" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="male">Male</SelectItem>
                            <SelectItem value="female">Female</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                            <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="bio">Bio</Label>
                      <Textarea id="bio" placeholder="Tell us about yourself..." rows={3} />
                    </div>
                    <Button className="bg-primary hover:bg-primary/90">
                      Update Profile
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Profile Stats</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Profile Completion</span>
                      <span className="text-sm font-medium">85%</span>
                    </div>
                    <Progress value={85} />
                    
                    <Separator />
                    
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm">Member Since</span>
                        <span className="text-sm">Jan 2023</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Last Login</span>
                        <span className="text-sm">Today</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Account Status</span>
                        <Badge variant="default">Verified</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            {/* Orders */}
            <TabsContent value="orders" className="space-y-6">
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Search orders..." className="pl-10 w-64" />
                  </div>
                  <Select>
                    <SelectTrigger className="w-32">
                      <SelectValue placeholder="Filter" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Orders</SelectItem>
                      <SelectItem value="delivered">Delivered</SelectItem>
                      <SelectItem value="processing">Processing</SelectItem>
                      <SelectItem value="shipped">Shipped</SelectItem>
                      <SelectItem value="cancelled">Cancelled</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button variant="outline">
                  <Download className="h-4 w-4 mr-2" />
                  Export Orders
                </Button>
              </div>

              <div className="space-y-4">
                {recentOrders.map((order) => (
                  <Card key={order.id}>
                    <CardContent className="p-6">
                      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                        <div className="space-y-2">
                          <div className="flex items-center gap-4">
                            <h3 className="font-semibold">Order {order.id}</h3>
                            <Badge variant={order.status === 'Delivered' ? 'default' : order.status === 'Processing' ? 'secondary' : 'outline'}>
                              {order.status}
                            </Badge>
                          </div>
                          <p className="text-muted-foreground">{order.items} items • {order.total}</p>
                          <p className="text-sm text-muted-foreground">Ordered on {order.date}</p>
                          {order.rating && (
                            <div className="flex items-center gap-1">
                              {[...Array(5)].map((_, i) => (
                                <Star key={i} className={`h-4 w-4 ${i < order.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} />
                              ))}
                            </div>
                          )}
                        </div>
                        <div className="flex flex-col sm:flex-row gap-2">
                          <Button variant="outline" size="sm">
                            <Eye className="h-4 w-4 mr-2" />
                            View Details
                          </Button>
                          <Button variant="outline" size="sm">
                            <Truck className="h-4 w-4 mr-2" />
                            Track Order
                          </Button>
                          {order.status === 'Delivered' && (
                            <Button variant="outline" size="sm">
                              <RotateCcw className="h-4 w-4 mr-2" />
                              Return
                            </Button>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            {/* Wishlist */}
            <TabsContent value="wishlist" className="space-y-6">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold">My Wishlist ({savedItems.length} items)</h3>
                <Button variant="outline">
                  <ShoppingBag className="h-4 w-4 mr-2" />
                  Add All to Cart
                </Button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {savedItems.map((item, index) => (
                  <Card key={index}>
                    <CardContent className="p-4">
                      <div className="aspect-square bg-muted rounded-lg mb-4"></div>
                      <h4 className="font-semibold mb-2">{item.name}</h4>
                      <p className="text-muted-foreground text-sm mb-2">{item.category}</p>
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-lg">{item.price}</span>
                        <div className="flex gap-2">
                          <Button size="sm">Add to Cart</Button>
                          <Button variant="outline" size="sm">
                            <Heart className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            {/* Addresses */}
            <TabsContent value="addresses" className="space-y-6">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold">Saved Addresses</h3>
                <Button>
                  <MapPin className="h-4 w-4 mr-2" />
                  Add New Address
                </Button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">Home Address</CardTitle>
                      <Badge>Default</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <address className="not-italic text-muted-foreground">
                      123 Main Street<br />
                      Apartment 4B<br />
                      New York, NY 10001<br />
                      United States
                    </address>
                    <div className="flex gap-2 mt-4">
                      <Button variant="outline" size="sm">Edit</Button>
                      <Button variant="outline" size="sm">Delete</Button>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Office Address</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <address className="not-italic text-muted-foreground">
                      456 Business Ave<br />
                      Suite 200<br />
                      New York, NY 10002<br />
                      United States
                    </address>
                    <div className="flex gap-2 mt-4">
                      <Button variant="outline" size="sm">Edit</Button>
                      <Button variant="outline" size="sm">Delete</Button>
                      <Button variant="outline" size="sm">Set as Default</Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            {/* Payment Methods */}
            <TabsContent value="payment" className="space-y-6">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold">Payment Methods</h3>
                <Button>
                  <CreditCard className="h-4 w-4 mr-2" />
                  Add Payment Method
                </Button>
              </div>
              
              <div className="space-y-4">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-8 bg-gradient-to-r from-blue-600 to-blue-400 rounded flex items-center justify-center text-white text-xs font-bold">
                          VISA
                        </div>
                        <div>
                          <p className="font-semibold">**** **** **** 1234</p>
                          <p className="text-muted-foreground text-sm">Expires 12/25</p>
                        </div>
                        <Badge>Default</Badge>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">Edit</Button>
                        <Button variant="outline" size="sm">Delete</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-8 bg-gradient-to-r from-red-600 to-red-400 rounded flex items-center justify-center text-white text-xs font-bold">
                          MC
                        </div>
                        <div>
                          <p className="font-semibold">**** **** **** 5678</p>
                          <p className="text-muted-foreground text-sm">Expires 08/26</p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">Edit</Button>
                        <Button variant="outline" size="sm">Delete</Button>
                        <Button variant="outline" size="sm">Set as Default</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Notifications */}
            <TabsContent value="notifications" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Notification Preferences</CardTitle>
                  <CardDescription>Choose what notifications you'd like to receive</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Order Updates</p>
                      <p className="text-sm text-muted-foreground">Get notified about order status changes</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Promotional Emails</p>
                      <p className="text-sm text-muted-foreground">Receive offers and deals via email</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">SMS Notifications</p>
                      <p className="text-sm text-muted-foreground">Important updates via SMS</p>
                    </div>
                    <Switch />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Push Notifications</p>
                      <p className="text-sm text-muted-foreground">Browser push notifications</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Recent Notifications</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {notifications.map((notification, index) => (
                    <div key={index} className={`flex items-start gap-4 p-3 rounded-lg border ${!notification.read ? 'bg-muted/50' : ''}`}>
                      <div className={`w-2 h-2 rounded-full mt-2 ${!notification.read ? 'bg-primary' : 'bg-muted-foreground'}`} />
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className="text-xs">{notification.type}</Badge>
                          <span className="text-xs text-muted-foreground">{notification.time}</span>
                        </div>
                        <p className="text-sm mt-1">{notification.message}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>

            {/* Settings */}
            <TabsContent value="settings" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Shield className="h-5 w-5" />
                      Security Settings
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Two-Factor Authentication</p>
                        <p className="text-sm text-muted-foreground">Add an extra layer of security</p>
                      </div>
                      <Switch />
                    </div>
                    <Button variant="outline" className="w-full">
                      <Key className="h-4 w-4 mr-2" />
                      Change Password
                    </Button>
                    <Button variant="outline" className="w-full">
                      <Lock className="h-4 w-4 mr-2" />
                      Manage Login Sessions
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Palette className="h-5 w-5" />
                      Appearance
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label>Theme</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select theme" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="light">Light</SelectItem>
                          <SelectItem value="dark">Dark</SelectItem>
                          <SelectItem value="system">System</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label>Language</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select language" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="en">English</SelectItem>
                          <SelectItem value="es">Spanish</SelectItem>
                          <SelectItem value="fr">French</SelectItem>
                          <SelectItem value="de">German</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Gift className="h-5 w-5" />
                      Rewards & Loyalty
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary">1,247</div>
                      <p className="text-sm text-muted-foreground">Points Available</p>
                    </div>
                    <Button className="w-full">Redeem Points</Button>
                    <Button variant="outline" className="w-full">View Rewards Catalog</Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <FileText className="h-5 w-5" />
                      Data & Privacy
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Button variant="outline" className="w-full">
                      <Download className="h-4 w-4 mr-2" />
                      Download My Data
                    </Button>
                    <Button variant="outline" className="w-full">
                      <FileText className="h-4 w-4 mr-2" />
                      Privacy Settings
                    </Button>
                    <Button variant="destructive" className="w-full">
                      Delete Account
                    </Button>
                  </CardContent>
                </Card>
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
