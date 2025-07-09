import React, { useState } from "react";
import { FileText } from "lucide-react";

interface CreateBlogModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const CreateBlogModal = ({ open, onOpenChange }: CreateBlogModalProps) => {
  const [blogForm, setBlogForm] = useState({
    title: "",
    excerpt: "",
    content: "",
    category: "",
    status: "draft" as "published" | "draft",
    author: "",
    readTime: "",
    image: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Blog created:", blogForm);
    setBlogForm({
      title: "",
      excerpt: "",
      content: "",
      category: "",
      status: "draft",
      author: "",
      readTime: "",
      image: "",
    });
    onOpenChange(false);
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
                <FileText className="h-6 w-6 text-primary" />
                Create New Blog Post
              </h2>
              <p className="text-gray-500 mt-1">
                Write and publish new blog content
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
                htmlFor="blog-title"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Blog Title
              </label>
              <input
                id="blog-title"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-primary"
                value={blogForm.title}
                onChange={(e) =>
                  setBlogForm({ ...blogForm, title: e.target.value })
                }
                placeholder="Enter blog title"
                required
              />
            </div>

            <div>
              <label
                htmlFor="blog-excerpt"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Excerpt
              </label>
              <textarea
                id="blog-excerpt"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-primary"
                value={blogForm.excerpt}
                onChange={(e) =>
                  setBlogForm({ ...blogForm, excerpt: e.target.value })
                }
                placeholder="Brief description of the blog post"
                rows={2}
                required
              />
            </div>

            <div>
              <label
                htmlFor="blog-content"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Content
              </label>
              <textarea
                id="blog-content"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-primary"
                value={blogForm.content}
                onChange={(e) =>
                  setBlogForm({ ...blogForm, content: e.target.value })
                }
                placeholder="Full blog content"
                rows={6}
                required
              />
            </div>

            <div>
              <label
                htmlFor="blog-author"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Author
              </label>
              <input
                id="blog-author"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-primary"
                value={blogForm.author}
                onChange={(e) =>
                  setBlogForm({ ...blogForm, author: e.target.value })
                }
                placeholder="Author name"
                required
              />
            </div>

            <div>
              <label
                htmlFor="blog-image"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Featured Image URL
              </label>
              <input
                id="blog-image"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-primary"
                value={blogForm.image}
                onChange={(e) =>
                  setBlogForm({ ...blogForm, image: e.target.value })
                }
                placeholder="https://example.com/image.jpg"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="blog-category"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Category
                </label>
                <select
                  id="blog-category"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-primary"
                  value={blogForm.category}
                  onChange={(e) =>
                    setBlogForm({ ...blogForm, category: e.target.value })
                  }
                >
                  <option value="">Select category</option>
                  <option value="education">Education</option>
                  <option value="support">Support</option>
                  <option value="news">News</option>
                  <option value="resources">Resources</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="blog-read-time"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Read Time
                </label>
                <input
                  id="blog-read-time"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-primary"
                  value={blogForm.readTime}
                  onChange={(e) =>
                    setBlogForm({ ...blogForm, readTime: e.target.value })
                  }
                  placeholder="5 min read"
                  required
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="blog-status"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Status
              </label>
              <select
                id="blog-status"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-primary"
                value={blogForm.status}
                onChange={(e) =>
                  setBlogForm({
                    ...blogForm,
                    status: e.target.value as "published" | "draft",
                  })
                }
              >
                <option value="draft">Draft</option>
                <option value="published">Published</option>
              </select>
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
                Create Blog Post
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateBlogModal;
