import React, { useState } from "react";
import { FileText } from "lucide-react";
import QuillToolbar, { formats, modules } from "../../utils/QuillToolBar";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";
import ImageUpload from "../shared/ImageUploadProps";
import { CreateNewBlog } from "../../api/blog/Blog";

interface CreateBlogModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onBlogCreated: () => void;
}

const CreateBlogModal = ({
  open,
  onOpenChange,
  onBlogCreated,
}: CreateBlogModalProps) => {
  const [excerpt, setExcerpt] = useState("");
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const [profileImageFile, setProfileImageFile] = useState<File | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [blogForm, setBlogForm] = useState({
    title: "",
    excerpt: "",
    content: "",
    author: "",
    image: File,
  });

  const handleImageChange = (file: File | null) => {
    setProfileImageFile(file);
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTitle = e.target.value;
    setTitle(newTitle);

    // Generate excerpt from the first 5 words of the title, replacing spaces with hyphens
    const titleWords = newTitle.split(" ");
    const firstFiveWords = titleWords.slice(0, 5).join("-");
    setExcerpt(firstFiveWords);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const payload = {
      ...blogForm,
      title,
      excerpt,
      content: value,
      image: profileImageFile,
    };
    try {
      await CreateNewBlog(payload);
      onOpenChange(false);
      onBlogCreated(); // Call the callback to refresh the blog list

      // Reset form
      setTitle("");
      setExcerpt("");
      setValue("");
      setBlogForm({
        title: "",
        excerpt: "",
        content: "",
        author: "",
        image: File,
      });
      setProfileImageFile(null);
    } catch (error) {
      console.error("Error creating blog:", error);
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
                value={title}
                onChange={handleTitleChange}
                placeholder="Enter blog title"
                required
              />
            </div>

            <div>
              <label htmlFor="">Blog Excerpts</label>
              <input
                type="text"
                className="w-full border border-[#D0D5DD] p-[16px] rounded-md outline-[#FA9874] mt-1"
                placeholder="Enter Excerpts"
                value={excerpt}
                onChange={(e) => setExcerpt(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="">Blog Content</label>
              <div className="">
                <QuillToolbar toolbarId={"t1"} />
                <ReactQuill
                  className="border border-[#D0D5DD] outline-[#FA9874] bg-white !h-[200px]"
                  theme="snow"
                  value={value}
                  onChange={setValue}
                  modules={modules("t1")}
                  formats={formats}
                  placeholder="Enter text here..."
                />
              </div>
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

            <div className="">
              <ImageUpload
                onImageChange={handleImageChange}
                label="Article Image"
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
                disabled={loading}
                className="cursor-pointer px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
              >
                {loading ? "Creating..." : "Create Blog Post"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateBlogModal;
