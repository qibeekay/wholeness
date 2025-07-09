import React, { useState } from "react";
import { Edit, Trash2, Eye } from "lucide-react";

interface Blog {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  status: "published" | "draft";
  author: string;
  publishDate: string;
  readTime: string;
  image: string;
}

const BlogManager = () => {
  const [existingBlogs] = useState<Blog[]>([
    {
      id: 1,
      title: "Understanding Dementia: A Comprehensive Guide",
      excerpt:
        "Learn about the different types of dementia and how to provide better care.",
      content: "Full blog content here...",
      category: "education",
      status: "published",
      author: "Dr. Sarah Williams",
      publishDate: "2024-01-15",
      readTime: "5 min read",
      image: "/placeholder.svg",
    },
    {
      id: 2,
      title: "Supporting Families Through Difficult Times",
      excerpt: "Practical advice for families dealing with dementia diagnosis.",
      content: "Full blog content here...",
      category: "support",
      status: "draft",
      author: "Emma Thompson",
      publishDate: "2024-01-20",
      readTime: "7 min read",
      image: "/placeholder.svg",
    },
  ]);

  const getStatusColor = (status: string) => {
    return status === "published"
      ? "bg-green-100 text-green-800"
      : "bg-yellow-100 text-yellow-800";
  };

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "short",
      day: "numeric",
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="space-y-8">
      {/* Blog Stats */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800">
            Blog Statistics
          </h2>
          <p className="text-gray-500">Overview of your blog content</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center p-4 bg-gray-50 rounded-lg border border-gray-100">
            <div className="text-2xl font-bold text-gray-800">12</div>
            <div className="text-sm text-gray-500">Total Posts</div>
          </div>
          <div className="text-center p-4 bg-gray-50 rounded-lg border border-gray-100">
            <div className="text-2xl font-bold text-green-600">8</div>
            <div className="text-sm text-gray-500">Published</div>
          </div>
          <div className="text-center p-4 bg-gray-50 rounded-lg border border-gray-100">
            <div className="text-2xl font-bold text-yellow-600">4</div>
            <div className="text-sm text-gray-500">Drafts</div>
          </div>
          <div className="text-center p-4 bg-gray-50 rounded-lg border border-gray-100">
            <div className="text-2xl font-bold text-primary">1.2k</div>
            <div className="text-sm text-gray-500">Total Views</div>
          </div>
        </div>
      </div>

      {/* Existing Blogs Table */}
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
                    Category
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Publish Date
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Read Time
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
                {existingBlogs.map((blog) => (
                  <tr key={blog.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="font-medium text-gray-900">
                        {blog.title}
                      </div>
                      <div className="text-sm text-gray-500 mt-1 line-clamp-1">
                        {blog.excerpt}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {blog.author}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 capitalize">
                      {blog.category}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(
                          blog.status
                        )}`}
                      >
                        {blog.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {formatDate(blog.publishDate)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {blog.readTime}
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
    </div>
  );
};

export default BlogManager;
