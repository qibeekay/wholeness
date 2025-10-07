import React, { useState, useEffect } from "react";
import { ShoppingBag } from "lucide-react";
import { EditProduct } from "../../../api/store/Product";
import ImageUpload from "../../shared/ImageUploadProps";

interface EditProductModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  product: {
    id: number;
    name: string;
    description: string;
    price: number;
    quantity: number;
    inStock: number;
  };
  refreshProducts: () => void;
}

const EditProductModal = ({
  open,
  onOpenChange,
  product,
  refreshProducts,
}: EditProductModalProps) => {
  const [profileImageFile, setProfileImageFile] = useState<File | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [productForm, setProductForm] = useState({
    name: "",
    description: "",
    price: 0,
    inStock: 1,
    quantity: 0,
  });

  useEffect(() => {
    if (product) {
      setProductForm({
        name: product.name,
        description: product.description,
        price: product.price,
        inStock: product.inStock,
        quantity: product.quantity,
      });
    }
  }, [product]);

  const handleImageChange = (file: File | null) => {
    setProfileImageFile(file);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const payload = { ...productForm, image: profileImageFile };
    try {
      await EditProduct(payload, product.id);
      refreshProducts();
      onOpenChange(false);
    } catch (error) {
      console.error("Error editing product:", error);
    } finally {
      setLoading(false);
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-primary/10 backdrop-blur-[3px] flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          {/* Modal Header */}
          <div className="flex items-start justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold flex items-center gap-2 text-gray-800">
                <ShoppingBag className="h-6 w-6 text-primary" />
                Edit Product
              </h2>
              <p className="text-gray-500 mt-1">Update product details</p>
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

          {/* Modal Form - Same as CreateProductModal but with existing values */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
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

            {/* Description Field */}
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

            {/* Price and Quantity Fields */}
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
                      setProductForm({
                        ...productForm,
                        price: Number(e.target.value),
                      })
                    }
                    placeholder="0.00"
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="product-quantity"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Total Stock Available
                </label>
                <div className="relative rounded-md shadow-sm">
                  <input
                    id="product-quantity"
                    type="number"
                    className="w-full pl-7 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-primary"
                    value={productForm.quantity}
                    onChange={(e) =>
                      setProductForm({
                        ...productForm,
                        quantity: Number(e.target.value),
                      })
                    }
                    placeholder="0"
                    min="0"
                    step="1"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Stock Status and Image Upload */}
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
                      checked={productForm.inStock === 1}
                      onChange={() =>
                        setProductForm({ ...productForm, inStock: 1 })
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
                      checked={productForm.inStock === 0}
                      onChange={() =>
                        setProductForm({ ...productForm, inStock: 0 })
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

              <div className="">
                <ImageUpload
                  onImageChange={handleImageChange}
                  label="Product Image"
                />
              </div>
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
                {loading ? "Saving..." : "Save Changes"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditProductModal;
