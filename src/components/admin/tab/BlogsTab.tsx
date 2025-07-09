import React from "react";
import BlogManager from "../BlogManager";
import { Plus } from "lucide-react";

interface Props {
  setCreateBlogOpen: (open: boolean) => void;
}

const BlogsTab = ({ setCreateBlogOpen }: Props) => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Blog Management</h2>
          <p className="text-gray-500">Manage all your blog posts</p>
        </div>
        <button
          className="cursor-pointer flex items-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
          onClick={() => setCreateBlogOpen(true)}
        >
          <Plus className="h-4 w-4 mr-2" />
          Write Blog Post
        </button>
      </div>
      <BlogManager />
    </div>
  );
};

export default BlogsTab;
