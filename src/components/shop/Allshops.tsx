import React, { useEffect, useState } from "react";
import { ShoppingBag, Star, BookOpen, Shirt, Coffee } from "lucide-react";
import { Link } from "react-router-dom";
import { GetProducts } from "../../api/store/Product";
import { useCart } from "../../components/context/CartContext";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  inStock: boolean;
}

const Allshops = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const { items, addItem, totalItems } = useCart();

  const getProduct = async () => {
    const res = await GetProducts();
    setProducts(res);
  };

  useEffect(() => {
    getProduct();
  }, []);

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

  const isInCart = (id: number) => {
    return items.some((item) => item.id === id);
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

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-20">
          {products.map((product) => (
            <div
              key={product.id}
              className="card-hover overflow-hidden cursor-pointer rounded-[16px] bg-white py-10 "
            >
              <div className="h-48 overflow-hidden bg-gradient-to-br from-calming-blue/10 to-nature-green/10 flex items-center justify-center px-5 rounded-md">
                <img
                  className="w-full h-full object-cover object-center"
                  src={product.image}
                  alt=""
                />
              </div>

              <div className="p-5">
                <div className="flex items-start justify-end mb-2">
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

              <div className="space-y-4 px-5">
                <button
                  onClick={() => addItem(product.id)}
                  disabled={isInCart(product.id) || !product.inStock}
                  className="cursor-pointer bg-primary text-white py-[10px] w-full h-[60px] px-[14px] text-[16px] font-bold rounded-full hover:bg-primary/90 transition-colors ease-in-out duration-300 mt-5"
                >
                  {isInCart(product.id)
                    ? "Added to Cart!"
                    : !product.inStock
                    ? "Out of Stock"
                    : "Add to Cart"}
                </button>
              </div>
            </div>
          ))}
        </div>

        {products.length === 0 && (
          <div className="text-center py-12">
            <ShoppingBag className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No products found
            </h3>
            <p className="text-gray-600">Try selecting a different category.</p>
          </div>
        )}

        {/* Cart Summary */}
        {totalItems > 0 && (
          <div className="fixed bottom-6 right-6 bg-white rounded-lg shadow-lg p-4 border">
            <div className="flex items-center space-x-3">
              <ShoppingBag className="h-6 w-6 text-calming-blue" />
              <div>
                <div className="font-semibold">
                  {totalItems} {totalItems === 1 ? "item" : "items"} in cart
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
