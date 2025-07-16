import { useState } from 'react';
import { cn } from '@/lib/utils';
import { useParams } from 'react-router-dom';
import { Star, ShieldCheck, Truck, Undo2, Plus, Minus, ShoppingCart } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useCart } from '@/contexts/CartContext';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';

// Mock data - in a real app, you'd fetch this based on the ID
import productPhone from "@/assets/product-phone.jpg";
import productHeadphones from "@/assets/product-headphones.jpg";
import productLaptop from "@/assets/product-laptop.jpg";
import productShoes from "@/assets/product-shoes.jpg";

const mockReviews = [
  { id: 1, author: 'Jane Doe', rating: 5, date: '2023-05-15', comment: 'Absolutely love this phone! The camera is incredible and the battery lasts all day. Highly recommended!', avatar: 'https://randomuser.me/api/portraits/women/4.jpg' },
  { id: 2, author: 'John Smith', rating: 4, date: '2023-05-12', comment: 'Great value for the price. It is fast, has a beautiful screen, and feels premium. The only downside is the lack of a headphone jack.', avatar: 'https://randomuser.me/api/portraits/men/2.jpg' },
  { id: 3, author: 'Emily White', rating: 5, date: '2023-05-10', comment: 'I was hesitant to switch brands, but I am so glad I did. This is the best smartphone I have ever owned. It is just perfect.', avatar: 'https://randomuser.me/api/portraits/women/6.jpg' },
];

const mockProducts = [
    { 
      id: "1", 
      name: 'Latest Smartphone Pro Max', 
      price: 899.99, 
      originalPrice: 1099.99, 
      images: [productPhone, productHeadphones, productLaptop, productShoes], 
      rating: 4.8, 
      reviews: 2456, 
      description: 'Experience the future with the most powerful smartphone on the market. Stunning display, pro-grade cameras, and all-day battery life.', 
      category: 'Electronics', 
      stock: 15,
      colors: ['#000000', '#FFFFFF', '#FFD700', '#6F7D8C'],
      sizes: ['128GB', '256GB', '512GB', '1TB']
    },
    { 
      id: "2", 
      name: 'Premium Wireless Headphones', 
      price: 299.99, 
      originalPrice: 399.99, 
      images: [productHeadphones, productPhone, productLaptop, productShoes], 
      rating: 4.6, 
      reviews: 1834, 
      description: 'Immerse yourself in pure audio bliss. These headphones offer industry-leading noise cancellation and high-fidelity sound.', 
      category: 'Electronics', 
      stock: 30,
      colors: ['#333333', '#F5F5F5', '#87CEEB'],
    },
    { 
      id: "4", 
      name: 'Sport Running Shoes', 
      price: 129.99, 
      originalPrice: 179.99, 
      images: [productShoes, productPhone, productLaptop, productHeadphones], 
      rating: 4.5, 
      reviews: 3421, 
      description: 'Achieve your personal best with these lightweight and responsive running shoes. Engineered for comfort and performance.', 
      category: 'Fashion', 
      stock: 50,
      sizes: ['8', '9', '10', '11', '12']
    },
    // Add more products as needed, ensuring they have an `images` array
];

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');

  const product = mockProducts.find(p => p.id === id);

  useState(() => {
    if (product) {
      setSelectedImage(product.images[0]);
      if (product.colors) setSelectedColor(product.colors[0]);
      if (product.sizes) setSelectedSize(product.sizes[0]);
    }
  });

  if (!product) {
    return <div>Product not found</div>; // Or a proper 404 page
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  return (
    <div className="bg-background">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Product Image Gallery */}
          <div className="flex flex-col gap-4">
            <div className="w-full h-[400px] lg:h-[500px] bg-card rounded-xl shadow-lg flex items-center justify-center overflow-hidden">
              <img src={selectedImage} alt={product.name} className="w-full h-full object-contain transition-transform duration-300 ease-in-out hover:scale-105" />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(image)}
                  className={cn(
                    'w-full h-24 bg-card rounded-lg flex items-center justify-center overflow-hidden transition-all duration-200',
                    selectedImage === image ? 'ring-2 ring-primary ring-offset-2 ring-offset-background' : 'hover:ring-1 hover:ring-primary/50'
                  )}
                >
                  <img src={image} alt={`${product.name} thumbnail ${index + 1}`} className="h-full w-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col gap-4">
            <h1 className="text-3xl lg:text-4xl font-bold text-foreground">{product.name}</h1>
            <div className="flex items-center gap-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`h-5 w-5 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                ))}
              </div>
              <span className="text-muted-foreground">({product.reviews} reviews)</span>
            </div>
            <div className="text-3xl font-bold text-primary">
              ${product.price.toFixed(2)}
              {product.originalPrice && (
                <span className="text-lg text-muted-foreground line-through ml-2">${product.originalPrice.toFixed(2)}</span>
              )}
            </div>

            {/* Color Options */}
            {product.colors && (
              <div className="mt-4">
                <h3 className="text-sm font-medium text-foreground mb-2">Color</h3>
                <div className="flex items-center gap-2">
                  {product.colors.map(color => (
                    <button 
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={cn(
                        'h-8 w-8 rounded-full border-2 transition-all',
                        selectedColor === color ? 'ring-2 ring-offset-2 ring-offset-background ring-primary' : 'border-border'
                      )}
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Size Options */}
            {product.sizes && (
              <div className="mt-4">
                <h3 className="text-sm font-medium text-foreground mb-2">Size</h3>
                <div className="flex flex-wrap items-center gap-2">
                  {product.sizes.map(size => (
                    <Button 
                      key={size}
                      variant={selectedSize === size ? 'default' : 'outline'}
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </Button>
                  ))}
                </div>
              </div>
            )}

            
            {/* Quantity and Add to Cart */}
            <div className="mt-6 bg-muted/50 p-4 rounded-lg">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center justify-center border rounded-lg">
                  <Button variant="ghost" size="icon" onClick={() => setQuantity(q => Math.max(1, q - 1))}><Minus className="h-4 w-4" /></Button>
                  <span className="w-12 text-center font-bold text-lg">{quantity}</span>
                  <Button variant="ghost" size="icon" onClick={() => setQuantity(q => q + 1)}><Plus className="h-4 w-4" /></Button>
                </div>
                <Button size="lg" className="w-full shadow-lg" onClick={handleAddToCart}>
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Add to Cart
                </Button>
              </div>
              <Button size="lg" variant="outline" className="w-full mt-4">Buy Now</Button>
            </div>

            {/* Assurances */}
            <div className="mt-6 space-y-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-2"><ShieldCheck className="h-5 w-5 text-green-500" /><span>Secure checkout</span></div>
              <div className="flex items-center gap-2"><Truck className="h-5 w-5 text-blue-500" /><span>Fast, free shipping</span></div>
              <div className="flex items-center gap-2"><Undo2 className="h-5 w-5 text-orange-500" /><span>30-day return policy</span></div>
            </div>
          </div>
        </div>

        {/* Description and Reviews Tabs */}
        <div className="mt-16">
          <Tabs defaultValue="description">
            <TabsList className="grid w-full grid-cols-2 md:w-[400px]">
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="reviews">Reviews ({mockReviews.length})</TabsTrigger>
            </TabsList>
            <TabsContent value="description" className="mt-6 text-muted-foreground leading-relaxed border p-6 rounded-lg">
              {product.description}
            </TabsContent>
            <TabsContent value="reviews" className="mt-6">
              <div className="grid md:grid-cols-2 gap-12">
                {/* Reviews List */}
                <div className="space-y-8">
                  <h3 className="text-2xl font-bold">Customer Reviews</h3>
                  {mockReviews.map(review => (
                    <div key={review.id} className="flex gap-4 border-b pb-6">
                      <Avatar>
                        <AvatarImage src={review.avatar} alt={review.author} />
                        <AvatarFallback>{review.author.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-semibold">{review.author}</h4>
                          <span className="text-xs text-muted-foreground">{review.date}</span>
                        </div>
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className={`h-4 w-4 ${i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                          ))}
                        </div>
                        <p className="text-muted-foreground mt-2">{review.comment}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Write a Review */}
                <div>
                  <h3 className="text-2xl font-bold mb-4">Write a Review</h3>
                  <form className="space-y-4">
                    <div>
                      <label htmlFor="name" className="font-medium">Name</label>
                      <Input id="name" placeholder="Your name" className="mt-2" />
                    </div>
                    <div>
                      <label htmlFor="rating" className="font-medium">Rating</label>
                      <div className="flex items-center gap-1 mt-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-6 w-6 text-gray-300 cursor-pointer hover:text-yellow-400 transition-colors" />
                        ))}
                      </div>
                    </div>
                    <div>
                      <label htmlFor="comment" className="font-medium">Comment</label>
                      <Textarea id="comment" placeholder="Share your thoughts..." className="mt-2" rows={5} />
                    </div>
                    <Button type="submit" size="lg">Submit Review</Button>
                  </form>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;
