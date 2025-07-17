import { useState } from "react";
import { Link } from "react-router-dom";
import { File, ListFilter, MoreHorizontal, PlusCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// Define a specific type for merchant products
type ProductStatus = "active" | "draft" | "archived";

interface MerchantProduct {
  id: string;
  name: string;
  status: ProductStatus;
  price: number;
  stock: number;
  createdAt: string;
  image: string;
}

// Mock data for products
const products: MerchantProduct[] = [
  {
    id: "PROD-001",
    name: "Glimmering Gold Ring",
    status: "active",
    price: 1299.99,
    stock: 25,
    createdAt: "2023-10-25",
    image: "https://source.unsplash.com/random/400x400?ring"
  },
  {
    id: "PROD-002",
    name: "Sapphire Dream Necklace",
    status: "active",
    price: 2499.50,
    stock: 15,
    createdAt: "2023-10-22",
    image: "https://source.unsplash.com/random/400x400?necklace"
  },
  {
    id: "PROD-003",
    name: "Elegant Diamond Earrings",
    status: "archived",
    price: 3150.00,
    stock: 0,
    createdAt: "2023-09-15",
    image: "https://source.unsplash.com/random/400x400?earrings"
  },
  {
    id: "PROD-004",
    name: "Vintage Leather Watch",
    status: "active",
    price: 450.00,
    stock: 50,
    createdAt: "2023-11-01",
    image: "https://source.unsplash.com/random/400x400?watch"
  },
  {
    id: "PROD-005",
    name: "Handcrafted Silver Bracelet",
    status: "draft",
    price: 320.00,
    stock: 10,
    createdAt: "2023-11-05",
    image: "https://source.unsplash.com/random/400x400?bracelet"
  },
];

interface ProductTableProps {
  products: MerchantProduct[];
}

const ProductTable = ({ products }: ProductTableProps) => {
  const getStatusBadgeVariant = (status: ProductStatus) => {
    switch (status) {
      case 'active': return 'default';
      case 'draft': return 'secondary';
      case 'archived': return 'outline';
      default: return 'outline';
    }
  };

  return (
    <Card>
      <CardContent className="pt-6">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="hidden w-[100px] sm:table-cell">
                <span className="sr-only">Image</span>
              </TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="hidden md:table-cell">Price</TableHead>
              <TableHead className="hidden md:table-cell">Stock</TableHead>
              <TableHead className="hidden md:table-cell">Created at</TableHead>
              <TableHead>
                <span className="sr-only">Actions</span>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.id}>
                <TableCell className="hidden sm:table-cell">
                  <Avatar className="h-12 w-12 rounded-md">
                    <AvatarImage src={product.image} alt={product.name} />
                    <AvatarFallback>{product.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                </TableCell>
                <TableCell className="font-medium">{product.name}</TableCell>
                <TableCell>
                  <Badge variant={getStatusBadgeVariant(product.status)}>
                    {product.status.charAt(0).toUpperCase() + product.status.slice(1)}
                  </Badge>
                </TableCell>
                <TableCell className="hidden md:table-cell">${product.price.toFixed(2)}</TableCell>
                <TableCell className="hidden md:table-cell">{product.stock}</TableCell>
                <TableCell className="hidden md:table-cell">{product.createdAt}</TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button aria-haspopup="true" size="icon" variant="ghost">
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">Toggle menu</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuItem asChild>
                        <Link to={`/merchant/app/products/${product.id}`}>Edit</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>Duplicate</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
      <CardFooter>
        <div className="text-xs text-muted-foreground">
          Showing <strong>{products.length}</strong> of <strong>{products.length}</strong> products
        </div>
      </CardFooter>
    </Card>
  );
};

const Products = () => {
  const [activeTab, setActiveTab] = useState<ProductStatus | 'all'>('all');

  const filteredProducts = products.filter(p => {
    if (activeTab === 'all') return true;
    return p.status === activeTab;
  });

  return (
    <div className="space-y-6">
       <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Products</h1>
          <p className="text-muted-foreground">Manage your products and view their status.</p>
        </div>
        <div className="flex items-center gap-2">
          <Button size="sm" variant="outline" className="h-8 gap-1">
            <File className="h-3.5 w-3.5" />
            <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">Export</span>
          </Button>
          <Button asChild size="sm" className="h-8 gap-1">
            <Link to="/merchant/app/products/new">
              <PlusCircle className="h-3.5 w-3.5" />
              <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">Add Product</span>
            </Link>
          </Button>
        </div>
      </div>
      <Tabs defaultValue="all" onValueChange={(value) => setActiveTab(value as ProductStatus | 'all')}>
        <TabsList>
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="active">Active</TabsTrigger>
          <TabsTrigger value="draft">Draft</TabsTrigger>
          <TabsTrigger value="archived">Archived</TabsTrigger>
        </TabsList>
        <TabsContent value={activeTab} className="mt-4">
          <ProductTable products={filteredProducts} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Products;
