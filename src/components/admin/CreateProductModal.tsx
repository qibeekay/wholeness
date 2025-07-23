import React, { useState } from "react";
import { ShoppingBag, BookOpen, Shirt, Coffee, Star } from "lucide-react";

interface CreateProductModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const CreateProductModal = ({
  open,
  onOpenChange,
}: CreateProductModalProps) => {
  const [productForm, setProductForm] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    inStock: "true",
    rating: "5",
    reviews: "0",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Product created:", productForm);
    setProductForm({
      name: "",
      description: "",
      price: "",
      category: "",
      inStock: "true",
      rating: "5",
      reviews: "0",
    });
    onOpenChange(false);
  };

  if (!open) return null;

  const getCategoryIcon = () => {
    switch (productForm.category) {
      case "books":
        return <BookOpen className="h-5 w-5 text-primary" />;
      case "apparel":
        return <Shirt className="h-5 w-5 text-primary" />;
      case "accessories":
        return <Coffee className="h-5 w-5 text-primary" />;
      case "resources":
        return <Star className="h-5 w-5 text-primary" />;
      default:
        return <ShoppingBag className="h-5 w-5 text-primary" />;
    }
  };

  return (
    <div className="fixed inset-0 bg-primary/10 backdrop-blur-[3px] flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          {/* Modal Header */}
          <div className="flex items-start justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold flex items-center gap-2 text-gray-800">
                <ShoppingBag className="h-6 w-6 text-primary" />
                Add New Product
              </h2>
              <p className="text-gray-500 mt-1">
                Add a new product to your store
              </p>
            </div>
            <button
              onClick={() => onOpenChange(false)}
              className="text-gray-400 hover:text-gray-500 cursor-pointer"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Modal Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="product-name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Product Name
              </label>
              <input
                id="product-name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-primary"
                value={productForm.name}
                onChange={(e) =>
                  setProductForm({ ...productForm, name: e.target.value })
                }
                placeholder="Enter product name"
                required
              />
            </div>

            <div>
              <label
                htmlFor="product-description"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Description
              </label>
              <textarea
                id="product-description"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-primary"
                value={productForm.description}
                onChange={(e) =>
                  setProductForm({
                    ...productForm,
                    description: e.target.value,
                  })
                }
                placeholder="Product description"
                rows={3}
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="product-price"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Price (£)
                </label>
                <div className="relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="text-gray-500 sm:text-sm">£</span>
                  </div>
                  <input
                    id="product-price"
                    type="number"
                    className="w-full pl-7 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-primary"
                    value={productForm.price}
                    onChange={(e) =>
                      setProductForm({ ...productForm, price: e.target.value })
                    }
                    placeholder="0.00"
                    min="0"
                    step="0.01"
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="product-category"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Category
                </label>
                <div className="relative">
                  <select
                    id="product-category"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-primary appearance-none"
                    value={productForm.category}
                    onChange={(e) =>
                      setProductForm({
                        ...productForm,
                        category: e.target.value,
                      })
                    }
                    required
                  >
                    <option value="">Select category</option>
                    <option value="books">Books & Guides</option>
                    <option value="apparel">Apparel</option>
                    <option value="accessories">Accessories</option>
                    <option value="resources">Care Resources</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    {getCategoryIcon()}
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Stock Status
                </label>
                <div className="flex space-x-4">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="inStock-true"
                      name="inStock"
                      value="true"
                      checked={productForm.inStock === "true"}
                      onChange={(e) =>
                        setProductForm({
                          ...productForm,
                          inStock: e.target.value,
                        })
                      }
                      className="h-4 w-4 text-primary focus:ring-primary"
                    />
                    <label
                      htmlFor="inStock-true"
                      className="ml-2 block text-sm text-gray-700"
                    >
                      In Stock
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="inStock-false"
                      name="inStock"
                      value="false"
                      checked={productForm.inStock === "false"}
                      onChange={(e) =>
                        setProductForm({
                          ...productForm,
                          inStock: e.target.value,
                        })
                      }
                      className="h-4 w-4 text-primary focus:ring-primary"
                    />
                    <label
                      htmlFor="inStock-false"
                      className="ml-2 block text-sm text-gray-700"
                    >
                      Out of Stock
                    </label>
                  </div>
                </div>
              </div>

              <div>
                <label
                  htmlFor="product-rating"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Initial Rating
                </label>
                <select
                  id="product-rating"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-primary"
                  value={productForm.rating}
                  onChange={(e) =>
                    setProductForm({ ...productForm, rating: e.target.value })
                  }
                >
                  {[5, 4, 3, 2, 1].map((num) => (
                    <option key={num} value={num}>
                      {num} Stars
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label
                htmlFor="product-reviews"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Initial Reviews Count
              </label>
              <input
                id="product-reviews"
                type="number"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-primary"
                value={productForm.reviews}
                onChange={(e) =>
                  setProductForm({ ...productForm, reviews: e.target.value })
                }
                placeholder="0"
                min="0"
              />
            </div>

            {/* Modal Footer */}
            <div className="flex justify-end space-x-3 pt-4 border-t border-gray-200">
              <button
                type="button"
                onClick={() => onOpenChange(false)}
                className="cursor-pointer px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="cursor-pointer px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Add Product
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateProductModal;
