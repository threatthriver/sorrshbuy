import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";

interface ShopSidebarProps {
  categories: { id: string; name: string; count: number }[];
  selectedCategory: string;
  onCategoryChange: (categoryId: string) => void;
  priceRange: [number, number];
  onPriceChange: (value: [number, number]) => void;
  selectedRating: number;
  onRatingChange: (rating: number) => void;
  className?: string;
}

const ShopSidebar = ({
  categories,
  selectedCategory,
  onCategoryChange,
  priceRange,
  onPriceChange,
  selectedRating,
  onRatingChange,
  className,
}: ShopSidebarProps) => {
  return (
    <aside className={cn("lg:col-span-1", className)}>
      <Card>
        <CardContent className="p-4 space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-3 text-foreground">Categories</h3>
            <ul className="space-y-1">
              {categories.map(category => (
                <li key={category.id}>
                  <button
                    onClick={() => onCategoryChange(category.id)}
                    className={cn(
                      'w-full text-left flex justify-between items-center px-3 py-1.5 rounded-md transition-colors text-sm text-foreground',
                      selectedCategory === category.id
                        ? 'bg-primary text-primary-foreground font-semibold'
                        : 'hover:bg-accent'
                    )}>
                    <span>{category.name}</span>
                    <Badge variant={selectedCategory === category.id ? 'secondary' : 'outline'}>{category.count}</Badge>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3 text-foreground">Filter by</h3>
            <Accordion type="multiple" defaultValue={['price', 'rating']} className="w-full">
              <AccordionItem value="price">
                <AccordionTrigger>Price</AccordionTrigger>
                <AccordionContent>
                  <div className="px-1">
                     <Slider
                        min={0}
                        max={2000}
                        step={10}
                        value={priceRange}
                        onValueChange={onPriceChange}
                      />
                      <div className="flex justify-between text-sm text-muted-foreground mt-2">
                        <span>${priceRange[0]}</span>
                        <span>${priceRange[1]}</span>
                      </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="rating">
                <AccordionTrigger>Rating</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-2">
                    {[4, 3, 2, 1].map(rating => (
                      <div key={rating} className="flex items-center space-x-2">
                        <Checkbox 
                          id={`rating-${rating}`}
                          checked={selectedRating === rating}
                          onCheckedChange={() => onRatingChange(rating)}
                        />
                        <label htmlFor={`rating-${rating}`} className="flex items-center cursor-pointer">
                          {[...Array(5)].map((_, i) => (
                            <svg key={i} className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.959h4.162c.969 0 1.371 1.24.588 1.81l-3.368 2.446 1.286 3.959c.3.921-.755 1.688-1.54 1.18l-3.368-2.446-3.368 2.446c-.784.508-1.84-.259-1.54-1.18l1.286-3.959-3.368-2.446c-.783-.57-.38-1.81.588-1.81h4.162l1.286-3.959z"/>
                            </svg>
                          ))}
                          <span className="ml-2 text-sm text-muted-foreground">& up</span>
                        </label>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </CardContent>
      </Card>
    </aside>
  );
};

export default ShopSidebar;
