import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Heart, Star, ShoppingCart, Plus, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/contexts/CartContext";
import { Product } from "@/types/product";

interface ProductCardProps extends Product {
  onAddToCart?: (product: Product, quantity: number) => void;
  onQuickView?: (product: Product) => void;
}

const ProductCard = ({
  id,
  name,
  price,
  originalPrice,
  image,
  rating,
  reviews,
  badge,
  isNew,
  onAddToCart,
  onQuickView
}: ProductCardProps) => {
  const { addToCart, isLoading } = useCart();
  const [quantity, setQuantity] = useState(1);
  const discount = originalPrice ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0;

  const product: Product = {
    id,
    name,
    price,
    originalPrice,
    image,
    rating,
    reviews,
    badge,
    isNew,
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (onAddToCart) {
      onAddToCart(product, quantity);
    } else {
      addToCart(product, quantity);
    }
  };



  const handleInteraction = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
  }

  return (
    <Link to={`/product/${id}`} className="relative group bg-card text-card-foreground rounded-lg overflow-hidden shadow-sm hover:shadow-product transition-all duration-300 ease-in-out hover:-translate-y-1 block">
      {/* Image Container */}
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          onError={(e) => {
            const img = e.target as HTMLImageElement;
            img.src = '/placeholder-product.jpg';
          }}
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {isNew && (
            <Badge className="text-xs font-semibold bg-success text-success-foreground">
              NEW
            </Badge>
          )}
          {discount > 0 && (
            <Badge className="text-xs font-semibold bg-secondary text-secondary-foreground">
              {discount}% OFF
            </Badge>
          )}
          {badge && (
            <Badge variant="outline" className="text-xs font-semibold bg-white/90 backdrop-blur-sm">
              {badge}
            </Badge>
          )}
        </div>

        {/* Wishlist Button */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-3 right-3 bg-white/80 backdrop-blur-sm hover:bg-white hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100"
          disabled={isLoading}
        >
          <Heart className="h-4 w-4" />
        </Button>

        {/* Add to Cart Button */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/40 to-transparent pt-16 pb-4 px-4 flex flex-col items-center gap-2 transform translate-y-full group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
          <div className="flex items-center justify-center bg-white/90 backdrop-blur-sm rounded-md p-1 shadow-md" onClick={handleInteraction}>
            <Button variant="ghost" size="icon" onClick={() => setQuantity(q => Math.max(1, q - 1))}>
              <Minus className="h-4 w-4" />
            </Button>
            <span className="font-bold text-foreground w-8 text-center">{quantity}</span>
            <Button variant="ghost" size="icon" onClick={() => setQuantity(q => q + 1)}>
              <Plus className="h-4 w-4" />
            </Button>
          </div>
          <Button
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/30"
            size="sm"
            onClick={handleAddToCart}
            disabled={isLoading}
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            {isLoading ? 'Adding...' : 'Add to Cart'}
          </Button>
          
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
          {name}
        </h3>
        
        {/* Rating */}
        <div className="flex items-center gap-1 mb-3">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < Math.floor(rating)
                    ? "text-yellow-400 fill-current"
                    : "text-gray-300"
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-muted-foreground ml-1">
            ({reviews} reviews)
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold text-primary">
            ${price.toFixed(2)}
          </span>
          {originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              ${originalPrice.toFixed(2)}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;