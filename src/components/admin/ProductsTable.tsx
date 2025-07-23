// ProductsTable.tsx
import {
  Edit,
  Trash2,
  Eye,
  Star,
  BookOpen,
  Shirt,
  Coffee,
  ShoppingBag,
} from "lucide-react";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: "books" | "apparel" | "accessories" | "resources";
  rating: number;
  reviews: number;
  inStock: boolean;
}

const ProductsTable = () => {
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
      inStock: false,
    },
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "books":
        return <BookOpen className="h-4 w-4" />;
      case "apparel":
        return <Shirt className="h-4 w-4" />;
      case "accessories":
        return <Coffee className="h-4 w-4" />;
      case "resources":
        return <Star className="h-4 w-4" />;
      default:
        return <ShoppingBag className="h-4 w-4" />;
    }
  };

  const getStockStatus = (inStock: boolean) => {
    return inStock ? (
      <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
        In Stock
      </span>
    ) : (
      <span className="px-2 py-1 text-xs font-medium rounded-full bg-red-100 text-red-800">
        Out of Stock
      </span>
    );
  };

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`h-3 w-3 ${
          i < Math.floor(rating)
            ? "text-yellow-400 fill-current"
            : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      <div className="p-6">
        <div className="flex items-center space-x-3 mb-6">
          <ShoppingBag className="h-6 w-6 text-primary" />
          <div>
            <h2 className="text-xl font-semibold text-gray-800">Products</h2>
            <p className="text-gray-500">Manage your store inventory</p>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Product
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Category
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Price
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Rating
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Status
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {products.map((product) => (
                <tr key={product.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="font-medium text-gray-900">
                      {product.name}
                    </div>
                    <div className="text-sm text-gray-500 line-clamp-1">
                      {product.description}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      {getCategoryIcon(product.category)}
                      <span className="ml-2 capitalize">
                        {product.category}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    £{product.price.toFixed(2)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex mr-2">
                        {renderStars(product.rating)}
                      </div>
                      <span className="text-xs text-gray-500">
                        ({product.reviews})
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {getStockStatus(product.inStock)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex justify-end space-x-3">
                      <button className="text-gray-400 hover:text-primary cursor-pointer">
                        <Eye className="h-4 w-4" />
                      </button>
                      <button className="text-gray-400 hover:text-yellow-600 cursor-pointer">
                        <Edit className="h-4 w-4" />
                      </button>
                      <button className="text-gray-400 hover:text-red-600 cursor-pointer">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductsTable;
