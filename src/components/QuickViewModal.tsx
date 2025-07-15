import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Product } from "@/types/product";
import { Button } from "@/components/ui/button";
import { ShoppingCart, X } from "lucide-react";

interface QuickViewModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (product: Product, quantity: number) => void;
}

const QuickViewModal = ({ product, isOpen, onClose, onAddToCart }: QuickViewModalProps) => {
  if (!product) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[825px]">
        <Button onClick={onClose} size="icon" variant="ghost" className="absolute top-4 right-4 text-muted-foreground" aria-label="Close">
          <X className="h-6 w-6" />
        </Button>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
          <div>
            <img src={product.image} alt={product.name} className="w-full h-auto rounded-lg" />
          </div>
          <div>
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold">{product.name}</DialogTitle>
              <DialogDescription className="text-sm text-muted-foreground">
                {product.reviews} reviews
              </DialogDescription>
            </DialogHeader>
            <div className="my-4">
              <p className="text-3xl font-bold text-primary">${product.price.toFixed(2)}</p>
              {product.originalPrice && (
                <p className="text-lg text-muted-foreground line-through">${product.originalPrice.toFixed(2)}</p>
              )}
            </div>
            <p className="text-muted-foreground mb-6">Product description goes here. We can add more details about the product later.</p>
            <Button size="lg" onClick={() => onAddToCart(product, 1)}>
              <ShoppingCart className="mr-2 h-5 w-5" /> Add to Cart
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default QuickViewModal;
