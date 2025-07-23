// StoreTab.tsx
import { Plus, ShoppingBag } from "lucide-react";
import React from "react";
import ProductsTable from "../ProductsTable";

interface Props {
  setCreateProductOpen: (open: boolean) => void;
}

const StoreTab = ({ setCreateProductOpen }: Props) => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Store Management</h2>
          <p className="text-gray-500">
            Manage all your products and inventory
          </p>
        </div>
        <button
          className="cursor-pointer flex items-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
          onClick={() => setCreateProductOpen(true)}
        >
          <Plus className="h-4 w-4 mr-2" />
          Add Product
        </button>
      </div>
      <ProductsTable />
    </div>
  );
};

export default StoreTab;
