
import { useState } from "react";
import { X, Plus, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviews: number;
}

interface ProductCompareProps {
  products: Product[];
}

const ProductCompare = ({ products }: ProductCompareProps) => {
  const [compareList, setCompareList] = useState<Product[]>([]);

  const addToCompare = (product: Product) => {
    if (compareList.length < 3 && !compareList.find(p => p.id === product.id)) {
      setCompareList([...compareList, product]);
    }
  };

  const removeFromCompare = (productId: number) => {
    setCompareList(compareList.filter(p => p.id !== productId));
  };

  const CompareTable = () => (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <td className="p-4 font-semibold border-b">Products</td>
            {compareList.map(product => (
              <td key={product.id} className="p-4 border-b">
                <div className="relative">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute -top-2 -right-2 h-6 w-6"
                    onClick={() => removeFromCompare(product.id)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-20 h-20 object-cover rounded-lg mx-auto"
                  />
                  <h3 className="text-sm font-medium mt-2 text-center">{product.name}</h3>
                </div>
              </td>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-4 font-medium border-b">Price</td>
            {compareList.map(product => (
              <td key={product.id} className="p-4 border-b text-center">
                <div className="space-y-1">
                  <div className="text-lg font-bold">${product.price}</div>
                  {product.originalPrice && (
                    <div className="text-sm text-muted-foreground line-through">
                      ${product.originalPrice}
                    </div>
                  )}
                </div>
              </td>
            ))}
          </tr>
          <tr>
            <td className="p-4 font-medium border-b">Rating</td>
            {compareList.map(product => (
              <td key={product.id} className="p-4 border-b text-center">
                <div className="flex items-center justify-center gap-1">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span>{product.rating}</span>
                  <span className="text-sm text-muted-foreground">
                    ({product.reviews})
                  </span>
                </div>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );

  return (
    <div className="space-y-4">
      {compareList.length > 0 && (
        <div className="fixed bottom-4 right-4 z-50">
          <Dialog>
            <DialogTrigger asChild>
              <Button className="relative">
                <span>Compare ({compareList.length})</span>
                <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center">
                  {compareList.length}
                </Badge>
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl">
              <DialogHeader>
                <DialogTitle>Product Comparison</DialogTitle>
              </DialogHeader>
              <CompareTable />
            </DialogContent>
          </Dialog>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {products.map(product => (
          <div key={product.id} className="relative group">
            <Button
              variant="outline"
              size="sm"
              className="absolute top-2 left-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity"
              onClick={() => addToCompare(product)}
              disabled={compareList.length >= 3 || compareList.find(p => p.id === product.id) !== undefined}
            >
              <Plus className="h-4 w-4 mr-1" />
              Compare
            </Button>
            {/* Product card content would go here */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCompare;
