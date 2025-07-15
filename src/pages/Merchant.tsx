import { useState } from 'react';
import { motion } from 'framer-motion';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Store, TrendingUp, Users, Shield, DollarSign, Headphones, LayoutDashboard, Package, ShoppingCart, Settings, PlusCircle, MoreHorizontal, FileUp } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';

const initialProducts = [
  { id: 1, name: 'Wireless Headphones', category: 'Electronics', price: 99.99, stock: 120, status: 'Active' },
  { id: 2, name: 'Leather Backpack', category: 'Fashion', price: 149.99, stock: 75, status: 'Active' },
  { id: 3, name: 'Smart Home Hub', category: 'Home Goods', price: 199.99, stock: 50, status: 'Archived' },
  { id: 4, name: 'Organic Green Tea', category: 'Groceries', price: 19.99, stock: 200, status: 'Active' },
];

const Merchant = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Simulate merchant login
  const [products, setProducts] = useState(initialProducts);

  // This would be replaced with actual authentication logic
  if (!isLoggedIn) {
    return <MerchantOnboarding />; 
  }

  return (
    <div className="min-h-screen bg-muted/40">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Merchant Dashboard</h1>
        <Tabs defaultValue="dashboard">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 w-full md:w-auto">
            <TabsTrigger value="dashboard"><LayoutDashboard className="h-4 w-4 mr-2" />Dashboard</TabsTrigger>
            <TabsTrigger value="products"><Package className="h-4 w-4 mr-2" />Products</TabsTrigger>
            <TabsTrigger value="orders"><ShoppingCart className="h-4 w-4 mr-2" />Orders</TabsTrigger>
            <TabsTrigger value="settings"><Settings className="h-4 w-4 mr-2" />Settings</TabsTrigger>
          </TabsList>
          
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <TabsContent value="dashboard" className="mt-6">
              <DashboardTab />
            </TabsContent>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <TabsContent value="products" className="mt-6">
              <ProductsTab products={products} setProducts={setProducts} />
            </TabsContent>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <TabsContent value="orders" className="mt-6">
              <div className="max-w-xl mx-auto bg-card p-8 rounded-xl shadow-card text-center flex flex-col items-center">
                <ShoppingCart className="h-10 w-10 text-primary mb-4" />
                <h2 className="text-2xl font-bold mb-2">Orders Management Coming Soon</h2>
                <p className="text-muted-foreground">We're working hard to bring you a powerful order management experience. Stay tuned!</p>
              </div>
            </TabsContent>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <TabsContent value="settings" className="mt-6">
              <p>Settings page coming soon.</p>
            </TabsContent>
          </motion.div>
        </Tabs>
      </div>
      <Footer />
    </div>
  );
};

const DashboardTab = () => (
  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
        <DollarSign className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">$45,231.89</div>
        <p className="text-xs text-muted-foreground">+20.1% from last month</p>
      </CardContent>
    </Card>
    {/* Other dashboard cards... */}
  </div>
);

const ProductsTab = ({ products, setProducts }) => (
  <Card>
    <CardHeader className="flex flex-row items-center justify-between">
      <CardTitle>Your Products</CardTitle>
      <AddProductDialog setProducts={setProducts} />
    </CardHeader>
    <CardContent>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Stock</TableHead>
            <TableHead><span className="sr-only">Actions</span></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map(product => (
            <TableRow key={product.id}>
              <TableCell className="font-medium">{product.name}</TableCell>
              <TableCell><Badge variant={product.status === 'Active' ? 'success' : 'secondary'}>{product.status}</Badge></TableCell>
              <TableCell>${product.price.toFixed(2)}</TableCell>
              <TableCell>{product.stock}</TableCell>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w-8 p-0">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>Edit</DropdownMenuItem>
                    <DropdownMenuItem>Archive</DropdownMenuItem>
                    <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </CardContent>
  </Card>
);

const AddProductDialog = ({ setProducts }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [stock, setStock] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      id: Date.now(),
      name,
      category,
      price: parseFloat(price),
      stock: parseInt(stock),
      status: 'Active',
    };
    setProducts(prev => [newProduct, ...prev]);
    // Here you would typically close the dialog
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button><PlusCircle className="h-4 w-4 mr-2" />Add Product</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-2xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <DialogHeader>
            <DialogTitle>Add a New Product</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="grid gap-6 py-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Product Name</Label>
            <Input id="name" value={name} onChange={e => setName(e.target.value)} placeholder="e.g., Wireless Headphones" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="price">Price</Label>
              <Input id="price" value={price} onChange={e => setPrice(e.target.value)} placeholder="e.g., 99.99" type="number" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="stock">Stock</Label>
              <Input id="stock" value={stock} onChange={e => setStock(e.target.value)} placeholder="e.g., 100" type="number" />
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="category">Category</Label>
            <Select onValueChange={setCategory} defaultValue={category}>
              <SelectTrigger>
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="electronics">Electronics</SelectItem>
                <SelectItem value="fashion">Fashion</SelectItem>
                <SelectItem value="home-goods">Home Goods</SelectItem>
                <SelectItem value="groceries">Groceries</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="description">Description</Label>
            <Textarea id="description" value={description} onChange={e => setDescription(e.target.value)} placeholder="Describe your product..." />
          </div>
          <div className="grid gap-2">
            <Label>Product Image</Label>
            <div className="flex items-center justify-center w-full">
              <Label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer hover:bg-muted">
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <FileUp className="w-8 h-8 mb-2 text-muted-foreground" />
                  <p className="mb-2 text-sm text-muted-foreground"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                  <p className="text-xs text-muted-foreground">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                </div>
                <Input id="dropzone-file" type="file" className="hidden" />
              </Label>
            </div> 
          </div>
            <Button type="submit" className="w-full">Save Product</Button>
          </form>
        </motion.div>
      </DialogContent>
    </Dialog>
  );
};

// The original onboarding component for non-logged-in users
const MerchantOnboarding = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <section className="bg-gradient-hero py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">Start Selling on SorrshaBuy</h1>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">Join thousands of successful merchants and grow your business with our powerful e-commerce platform</p>
        <Button size="lg" className="bg-white text-primary hover:bg-gray-100 font-semibold px-8 py-4">Become a Merchant</Button>
      </div>
    </section>
    <div className="container mx-auto px-4 py-16">
      {/* Benefits and Application Form from original component... */}
    </div>
    <Footer />
  </div>
);

export default Merchant;