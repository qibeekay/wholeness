import React, { useEffect, useState } from "react";
import { Edit, Trash2 } from "lucide-react";
import { DeleteBlog, GetBlogs } from "../../api/blog/Blog";
import { formatDate } from "../../utils/formatDate";

interface Blog {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  created_at: string;
  image: string;
}

interface BlogManagerProps {
  refreshTrigger?: number;
  onBlogCreated?: () => void;
}

const BlogManager = ({
  refreshTrigger = 0,
  onBlogCreated,
}: BlogManagerProps) => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null);

  const getBlog = async () => {
    try {
      setLoading(true);
      const res = await GetBlogs();
      setBlogs(res || []);
    } catch (error) {
      setBlogs([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getBlog();
  }, [refreshTrigger]); // This will re-run when refreshTrigger changes

  const deleteBlog = async (id: number) => {
    setLoading(true);
    try {
      await DeleteBlog(id);
      await getBlog(); // Refresh the list after deletion
    } catch (error) {
      console.error("Error deleting blog:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleEditClick = (blog: Blog) => {
    setSelectedBlog(blog);
    setEditModalOpen(true);
  };

  if (loading && blogs.length === 0) {
    return (
      <div className="flex justify-center items-center py-8">
        <div className="text-gray-500">Loading blogs...</div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="p-6">
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800">
              Manage Blog Posts
            </h2>
            <p className="text-gray-500">View and manage all your blog posts</p>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Title
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Author
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Publish Date
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
                {blogs?.map((blog) => (
                  <tr key={blog?.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="font-medium text-gray-900">
                        {blog?.title}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {blog?.author}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {formatDate(blog?.created_at)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex justify-end space-x-3">
                        <button
                          className="text-gray-400 hover:text-yellow-600 cursor-pointer"
                          onClick={() => handleEditClick(blog)}
                        >
                          <Edit className="h-4 w-4" />
                        </button>
                        <button
                          className="text-gray-400 hover:text-red-600 cursor-pointer"
                          onClick={() => deleteBlog(blog?.id)}
                          disabled={loading}
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {blogs.length === 0 && !loading && (
              <div className="text-center py-8 text-gray-500">
                No blog posts found. Create your first blog post!
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogManager;
