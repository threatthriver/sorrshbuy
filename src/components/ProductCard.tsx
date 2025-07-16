import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Heart, Star, ShoppingCart } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/contexts/CartContext";
import { Product } from "@/types/product";

interface ProductCardProps extends Product {
  onAddToCart?: (product: Product, quantity: number) => void;
  onQuickView?: (product: Product) => void;
}

const ProductCard = (product: ProductCardProps) => {
  const { id, name, price, originalPrice, image, rating, reviews, badge, isNew, onAddToCart, onQuickView } = product;
  const { addToCart, isLoading } = useCart();
  const [isFavorite, setIsFavorite] = useState(false);

  const discount = originalPrice
    ? Math.round(((originalPrice - price) / originalPrice) * 100)
    : 0;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const productData: Product = { id, name, price, originalPrice, image, rating, reviews, badge, isNew };
    if (onAddToCart) {
      onAddToCart(productData, 1);
    } else {
      addToCart(productData, 1);
    }
  };
  
  const handleWishlistClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsFavorite(!isFavorite);
    // Add wishlist logic here
  };

  const handleQuickViewClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (onQuickView) {
      const productData: Product = { id, name, price, originalPrice, image, rating, reviews, badge, isNew };
      onQuickView(productData);
    }
  };

  return (
    <div className="relative group text-sm flex flex-col h-full">
      <div className="relative overflow-hidden aspect-[4/5] rounded-lg">
        <Link to={`/product/${id}`} className="cursor-pointer">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out"
            onError={(e) => {
              const img = e.target as HTMLImageElement;
              img.src = "/placeholder-product.jpg";
            }}
          />
        </Link>
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {isNew && (
            <Badge className="text-xs font-semibold bg-primary text-primary-foreground">NEW</Badge>
          )}
          {discount > 0 && (
            <Badge variant="destructive">-{discount}%</Badge>
          )}
        </div>

        {/* Wishlist Button */}
        <Button
          variant="ghost"
          size="icon"
          onClick={handleWishlistClick}
          className="absolute top-2 right-2 bg-background/60 backdrop-blur-sm hover:bg-background rounded-full h-9 w-9 text-foreground transition-colors"
          aria-label="Add to wishlist"
        >
          <Heart className={cn("h-5 w-5", isFavorite && "fill-red-500 text-red-500")} />
        </Button>
      </div>

      <div className="flex flex-col flex-grow mt-4">
        <h3 className="font-semibold text-base truncate">
          <Link to={`/product/${id}`} className="hover:underline">
            {name}
          </Link>
        </h3>
        
        <div className="flex items-center gap-1.5 mt-1 text-xs text-muted-foreground">
          <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
          <span className="font-semibold">{rating}</span>
          <span>({reviews} reviews)</span>
        </div>

        <div className="flex items-baseline gap-2 mt-2">
          <p className="font-bold text-lg">${price.toFixed(2)}</p>
          {originalPrice && (
            <p className="text-sm text-gray-300 line-through">
              ${originalPrice.toFixed(2)}
            </p>
          )}
        </div>

        <div className="mt-auto pt-4">
          <Button onClick={handleAddToCart} className="w-full" disabled={isLoading} aria-label="Add to cart">
            <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;