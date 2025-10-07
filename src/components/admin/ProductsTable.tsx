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
import { useEffect, useState } from "react";
import { DeleteProduct, GetProducts } from "../../api/store/Product";
import EditProductModal from "./editModals/EditProductModal";

interface Product {
  id: number;
  name: string;
  description: string;
  quantity: number;
  price: number;
  inStock: any;
}

const ProductsTable = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const getProduct = async () => {
    const res = await GetProducts();
    setProducts(res);
  };

  useEffect(() => {
    getProduct();
  }, []);

  const deleteProduct = async (id: number) => {
    setLoading(true);
    try {
      await DeleteProduct(id);
      await getProduct();
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  const handleEditClick = (product: Product) => {
    setSelectedProduct(product);
    setEditModalOpen(true);
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
                  Price
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Quantity
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
              {products?.map((product) => (
                <tr key={product?.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="font-medium text-gray-900">
                      {product?.name}
                    </div>
                    <div className="text-sm text-gray-500 line-clamp-1">
                      {product?.description}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    £{product?.price}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-center">
                    {product?.quantity}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {getStockStatus(product?.inStock)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex justify-end space-x-3">
                      <button
                        className="text-gray-400 hover:text-yellow-600 cursor-pointer"
                        onClick={() => handleEditClick(product)}
                      >
                        <Edit className="h-4 w-4" />
                      </button>
                      <button
                        className="text-gray-400 hover:text-red-600 cursor-pointer"
                        onClick={() => deleteProduct(product?.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {selectedProduct && (
          <EditProductModal
            open={editModalOpen}
            onOpenChange={setEditModalOpen}
            product={selectedProduct}
            refreshProducts={getProduct}
          />
        )}
      </div>
    </div>
  );
};

export default ProductsTable;
