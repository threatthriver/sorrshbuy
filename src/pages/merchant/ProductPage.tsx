import { useParams } from "react-router-dom";
import { ProductForm } from "@/components/merchant/ProductForm";

// Define a type for our product data to ensure type safety
type Product = {
  id: string;
  name: string;
  description?: string;
  status: "active" | "draft" | "archived";
  price: number;
  stock: number;
  createdAt: string;
  image: string;
};

// This is a temporary solution for the prototype. In a real app, this data would come from a shared store or API.
const products: Product[] = [
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

const ProductPage = () => {
  const { productId } = useParams();
  const isEditMode = Boolean(productId);

  const product = isEditMode
    ? products.find((p) => p.id === productId)
    : undefined;

  const handleSaveProduct = (data) => {
    if (isEditMode) {
      console.log("Updating product:", productId, data);
    } else {
      console.log("Creating new product:", data);
    }
    // Here you would typically handle the API call to save the product
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">
          {isEditMode ? "Edit Product" : "Create Product"}
        </h1>
      </div>
      <ProductForm initialData={product} onSubmit={handleSaveProduct} />
    </div>
  );
};

export default ProductPage;
