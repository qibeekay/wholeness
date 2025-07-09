import React, { useState } from "react";
import { ShoppingBag, Star, BookOpen, Shirt, Coffee } from "lucide-react";
import { Link } from "react-router-dom";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: "books" | "apparel" | "accessories" | "resources";
  rating: number;
  reviews: number;
  image: string;
  inStock: boolean;
}

const Allshops = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [cartItems, setCartItems] = useState<number[]>([]);

  const products: Product[] = [
    {
      id: 1,
      name: "The Complete Guide to Dementia Care",
      description:
        "Comprehensive handbook for families navigating dementia care journey.",
      price: 24.99,
      category: "books",
      rating: 4.8,
      reviews: 156,
      image: "/placeholder.svg",
      inStock: true,
    },
    {
      id: 2,
      name: "Memory Activities Workbook",
      description:
        "Engaging activities and exercises designed to stimulate memory and cognition.",
      price: 18.5,
      category: "books",
      rating: 4.6,
      reviews: 89,
      image: "/placeholder.svg",
      inStock: true,
    },
    {
      id: 3,
      name: "Wholeness Haven T-Shirt",
      description: "Comfortable cotton t-shirt supporting dementia awareness.",
      price: 19.99,
      category: "apparel",
      rating: 4.5,
      reviews: 34,
      image: "/placeholder.svg",
      inStock: true,
    },
    {
      id: 4,
      name: "Mindful Moments Mug",
      description: "Inspirational ceramic mug with dementia awareness message.",
      price: 12.99,
      category: "accessories",
      rating: 4.7,
      reviews: 67,
      image: "/placeholder.svg",
      inStock: true,
    },
    {
      id: 5,
      name: "Communication Cards Set",
      description: "Visual communication aids for individuals with dementia.",
      price: 29.99,
      category: "resources",
      rating: 4.9,
      reviews: 123,
      image: "/placeholder.svg",
      inStock: false,
    },
    {
      id: 6,
      name: "Caregiver Self-Care Journal",
      description:
        "Guided journal for caregiver reflection and self-care tracking.",
      price: 16.75,
      category: "books",
      rating: 4.4,
      reviews: 78,
      image: "/placeholder.svg",
      inStock: true,
    },
  ];

  const categories = [
    { value: "all", label: "All Products", icon: ShoppingBag },
    { value: "books", label: "Books & Guides", icon: BookOpen },
    { value: "apparel", label: "Apparel", icon: Shirt },
    { value: "accessories", label: "Accessories", icon: Coffee },
    { value: "resources", label: "Care Resources", icon: Star },
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      books: "bg-calming-blue",
      apparel: "bg-nature-green",
      accessories: "bg-warm-orange",
      resources: "bg-soft-purple",
    };
    return colors[category as keyof typeof colors] || "bg-gray-500";
  };

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  const addToCart = (productId: number) => {
    setCartItems((prev) => [...prev, productId]);
    console.log(`Added product ${productId} to cart`);
  };

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < Math.floor(rating)
            ? "text-yellow-400 fill-current"
            : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <div className="w-full bg-gray-50">
      <div className="max-w-[1600px] mx-auto px-4 py-20">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-center font-bold xs:text-[24px] sm:text-[40px]">
            Resource Shop
          </h1>
          <p className="text-center max-w-2xl mx-auto text-sm sm:text-base">
            Browse our carefully curated collection of books, resources, and
            merchandise to support your dementia care journey.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map((category) => (
            <button
              key={category.value}
              //   variant={
              //     selectedCategory === category.value ? "default" : "outline"
              //   }
              onClick={() => setSelectedCategory(category.value)}
              className={`transition-all duration-200 text-sm sm:text-base rounded-[8px] cursor-pointer px-4 py-2 flex items-center gap-4 ${
                selectedCategory === category.value
                  ? "bg-primary text-white"
                  : "bg-[#ECE1FA] text-primary"
              }`}
            >
              <category.icon className="h-4 w-4" />
              <span>{category.label}</span>
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-20">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="card-hover overflow-hidden cursor-pointer rounded-[16px] bg-white"
            >
              <div className="h-48 bg-gradient-to-br from-calming-blue/10 to-nature-green/10 flex items-center justify-center">
                <ShoppingBag className="h-16 w-16 text-calming-blue/50" />
              </div>

              <div className="p-5">
                <div className="flex items-start justify-between mb-2">
                  <p
                    className={`${getCategoryColor(
                      product.category
                    )} text-white inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 bg-primary`}
                  >
                    {product.category.charAt(0).toUpperCase() +
                      product.category.slice(1)}
                  </p>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-gray-900">
                      £{product.price}
                    </div>
                    {!product.inStock && (
                      <p className="border-transparent bg-red-500 text-white hover:bg-red-500/80 inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
                        Out of Stock
                      </p>
                    )}
                  </div>
                </div>
                <h1 className="text-lg">{product.name}</h1>
                <p className="text-sm">{product.description}</p>
              </div>

              <div className="space-y-4 p-5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    {renderStars(product.rating)}
                    <span className="text-sm text-gray-600 ml-2">
                      {product.rating} ({product.reviews} reviews)
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => addToCart(product.id)}
                  disabled={cartItems.includes(product.id) || !product.inStock}
                  className="cursor-pointer bg-primary text-white py-[10px] w-full h-[60px] px-[14px] text-[16px] font-bold rounded-full hover:bg-primary/90 transition-colors ease-in-out duration-300"
                >
                  {cartItems.includes(product.id)
                    ? "Added to Cart!"
                    : !product.inStock
                    ? "Out of Stock"
                    : "Add to Cart"}
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <ShoppingBag className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No products found
            </h3>
            <p className="text-gray-600">Try selecting a different category.</p>
          </div>
        )}

        {/* Cart Summary */}
        {cartItems.length > 0 && (
          <div className="fixed bottom-6 right-6 bg-white rounded-lg shadow-lg p-4 border">
            <div className="flex items-center space-x-3">
              <ShoppingBag className="h-6 w-6 text-calming-blue" />
              <div>
                <div className="font-semibold">
                  {cartItems.length} items in cart
                </div>
                <div className="text-sm text-gray-600">Ready to checkout</div>
              </div>
              <Link to="/cart">
                <button className="bg-primary py-1.5 px-4 rounded text-white">
                  View Cart
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Allshops;
