import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, ShoppingCart, Filter, Search } from "lucide-react";
import headphones from "@/assets/product-headphones.jpg";
import shoes from "@/assets/product-shoes.jpg";
import laptop from "@/assets/product-laptop.jpg";
import phone from "@/assets/product-phone.jpg";

// Mock data for saved items
const savedItems = [
    { name: "Wireless Headphones", price: "$149.99", image: headphones, category: "Electronics" },
    { name: "Running Shoes", price: "$89.99", image: shoes, category: "Sports" },
    { name: "Coffee Maker", price: "$199.99", image: laptop, category: "Home" },
    { name: "Smartwatch", price: "$249.99", image: phone, category: "Electronics" },
];

const Wishlist = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
            <div className="mb-8">
                <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-2 flex items-center gap-3">
                    <Heart className="h-8 w-8 text-primary"/>
                    My Wishlist
                </h1>
                <p className="text-muted-foreground">Your curated list of favorite products.</p>
            </div>

            <Card>
                <CardHeader>
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <div className="flex gap-2 w-full md:w-auto">
                            <div className="relative w-full md:w-64">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                <Input placeholder="Search wishlist..." className="pl-10" />
                            </div>
                            <Button variant="outline" className="md:hidden"><Filter className="h-4 w-4" /></Button>
                        </div>
                        <div className="flex gap-2 w-full md:w-auto">
                            <Select defaultValue="date-desc">
                                <SelectTrigger className="w-full md:w-[180px]">
                                    <SelectValue placeholder="Sort by" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="date-desc">Date Added (Newest)</SelectItem>
                                    <SelectItem value="date-asc">Date Added (Oldest)</SelectItem>
                                    <SelectItem value="price-asc">Price (Low to High)</SelectItem>
                                    <SelectItem value="price-desc">Price (High to Low)</SelectItem>
                                </SelectContent>
                            </Select>
                            <Select defaultValue="all">
                                <SelectTrigger className="w-full md:w-[180px]">
                                    <SelectValue placeholder="Category" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">All Categories</SelectItem>
                                    <SelectItem value="electronics">Electronics</SelectItem>
                                    <SelectItem value="sports">Sports</SelectItem>
                                    <SelectItem value="home">Home</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                </CardHeader>
                <CardContent>
                    {savedItems.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {savedItems.map((item, index) => (
                                <Card key={index} className="overflow-hidden group">
                                    <div className="relative">
                                        <img src={item.image} alt={item.name} className="h-48 w-full object-cover" />
                                        <div className="absolute top-2 right-2">
                                            <Button variant="destructive" size="icon" className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity">
                                                <Heart className="h-4 w-4" />
                                            </Button>
                                        </div>
                                    </div>
                                    <div className="p-4">
                                        <h3 className="font-semibold text-foreground mb-2 truncate">{item.name}</h3>
                                        <p className="text-sm text-muted-foreground mb-3">{item.category}</p>
                                        <div className="flex justify-between items-center">
                                            <p className="font-bold text-primary text-lg">{item.price}</p>
                                            <Button size="sm">
                                                <ShoppingCart className="h-4 w-4 mr-2" />
                                                Add to Cart
                                            </Button>
                                        </div>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-16">
                            <Heart className="h-24 w-24 text-muted-foreground mx-auto mb-4" />
                            <h3 className="text-xl font-semibold">Your wishlist is empty</h3>
                            <p className="text-muted-foreground mt-2">Add items you want to save for later.</p>
                        </div>
                    )}
                </CardContent>
            </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Wishlist;
