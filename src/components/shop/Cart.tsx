import React, { useState, useEffect } from "react";
import {
  ShoppingBag,
  Minus,
  Plus,
  Trash2,
  ArrowLeft,
  CreditCard,
} from "lucide-react";
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

interface CartItem extends Product {
  quantity: number;
}

const Cart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [promoCode, setPromoCode] = useState("");
  const [discount, setDiscount] = useState(0);

  // Mock products data (in a real app, this would come from a context or API)
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
  ];

  useEffect(() => {
    // Mock cart items (in a real app, this would come from localStorage or context)
    const mockCartItems: CartItem[] = [
      { ...products[0], quantity: 1 },
      { ...products[1], quantity: 2 },
    ];
    setCartItems(mockCartItems);
  }, []);

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity === 0) {
      removeItem(id);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const applyPromoCode = () => {
    if (promoCode.toLowerCase() === "welcome10") {
      setDiscount(0.1);
      console.log("Promo code applied: 10% discount");
    } else {
      setDiscount(0);
      console.log("Invalid promo code");
    }
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const discountAmount = subtotal * discount;
  const shipping = subtotal > 50 ? 0 : 4.99;
  const total = subtotal - discountAmount + shipping;

  const getCategoryColor = (category: string) => {
    const colors = {
      books: "bg-calming-blue",
      apparel: "bg-nature-green",
      accessories: "bg-warm-orange",
      resources: "bg-soft-purple",
    };
    return colors[category as keyof typeof colors] || "bg-gray-500";
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen mt-20 bg-gray-50 flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center py-16">
            <ShoppingBag className="h-24 w-24 text-gray-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Your cart is empty
            </h2>
            <p className="text-gray-600 mb-8">
              Looks like you haven't added anything to your cart yet.
            </p>
            <Link to="/marketplace">
              <button className="cursor-pointer bg-primary text-white py-[10px] w-full h-[60px] px-[14px] text-[16px] font-bold rounded-full hover:bg-primary/90 transition-colors ease-in-out duration-300 flex items-center justify-center gap-4">
                <ArrowLeft className="h-4 w-4" />
                <span>Continue Shopping</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-gray-50 mt-16">
      <div className="max-w-[1600px] mx-auto px-4 py-20">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Shopping Cart</h1>
            <p className="text-gray-600 mt-1">
              {cartItems.length} items in your cart
            </p>
          </div>
          <Link to="/shop">
            <button className="mb-6 bg-[#ECE1FA] text-primary text-sm sm:text-base rounded-[8px] cursor-pointer px-4 py-2 flex items-center">
              <ArrowLeft className="h-4 w-4" />
              <span>Continue Shopping</span>
            </button>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="overflow-hidden">
                <div className="p-6 bg-white rounded-2xl">
                  <div className="flex items-start space-x-4">
                    <div className="w-24 h-24 bg-gradient-to-br from-blue-500/10 to-green-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <ShoppingBag className="h-8 w-8 text-calming-blue/50" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-1">
                            {item.name}
                          </h3>
                          <p className="text-sm text-gray-600 mb-2">
                            {item.description}
                          </p>
                          <p
                            className={`${getCategoryColor(
                              item.category
                            )} text-white inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 bg-primary`}
                          >
                            {item.category.charAt(0).toUpperCase() +
                              item.category.slice(1)}
                          </p>
                        </div>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-red-500 hover:text-red-700 hover:bg-red-50"
                        >
                          <Trash2 className="h-6 w-6" />
                        </button>
                      </div>

                      <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center space-x-3">
                          <button
                            className="border cursor-pointer border-gray-500 rounded p-2"
                            onClick={() =>
                              updateQuantity(item.id, item.quantity - 1)
                            }
                            disabled={item.quantity <= 1}
                          >
                            <Minus className="h-5 w-5" />
                          </button>
                          <span className="font-medium text-lg px-3">
                            {item.quantity}
                          </span>
                          <button
                            className="border cursor-pointer border-gray-500 rounded p-2"
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                          >
                            <Plus className="h-5 w-5" />
                          </button>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold text-gray-900">
                            £{(item.price * item.quantity).toFixed(2)}
                          </div>
                          <div className="text-sm text-gray-600">
                            £{item.price.toFixed(2)} each
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1 bg-white p-6 rounded-2xl">
            <div className="sticky top-6">
              <div>
                <div className="flex items-center space-x-2">
                  <ShoppingBag className="h-5 w-5" />
                  <span className="text-lg">Order Summary</span>
                </div>
              </div>
              <div className="space-y-4 mt-5">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>£{subtotal.toFixed(2)}</span>
                </div>

                {discount > 0 && (
                  <div className="flex justify-between text-green-600">
                    <span>Discount (10%)</span>
                    <span>-£{discountAmount.toFixed(2)}</span>
                  </div>
                )}

                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>
                    {shipping === 0 ? "Free" : `£${shipping.toFixed(2)}`}
                  </span>
                </div>

                <div className="flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span>£{total.toFixed(2)}</span>
                </div>

                {shipping > 0 && (
                  <p className="text-sm text-gray-600">
                    Free shipping on orders over £50
                  </p>
                )}

                <div className="space-y-3 mt-10">
                  <button className="cursor-pointer bg-primary text-white py-[10px] w-full h-[60px] px-[14px] text-[16px] font-bold rounded-full hover:bg-primary/90 transition-colors ease-in-out duration-300 flex items-center justify-center gap-4">
                    <CreditCard className="h-7 w-7 mr-2" />
                    Proceed to Checkout
                  </button>
                </div>

                {/* <div className="text-xs text-gray-500 space-y-1">
                  <p>• Secure checkout with SSL encryption</p>
                  <p>• 30-day return policy</p>
                  <p>• Customer support available</p>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
