import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GetSingleBlog } from "../../api/blog/Blog";
import { decode } from "html-entities";
import DOMPurify from "dompurify";
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

const SingleBlogPage = () => {
  const [blog, setBlog] = useState<Blog | null>(null);
  const { excerpts } = useParams<{ excerpts: string }>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getBlogs = async () => {
    setIsLoading(true);
    try {
      const res = await GetSingleBlog(`${excerpts}`);
      setBlog(res);
    } catch {
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getBlogs();
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-primary border-solid"></div>
      </div>
    );
  }
  return (
    <div>
      <div className="font-poppins">
        <div className="relative ">
          <header className="w-full bg-primary text-white">
            <div>
              <div className=" max-w-6xl mx-auto px-4 pt-[5rem] ms:pt-[7rem] pb-[17rem] min-h-screen flex flex-col items-center justify-center">
                {/* header */}
                <h1 className="font-bold text-3xl sm:text-4xl md:text-6xl ms:w-[75%] leading-[2.5rem]">
                  {[blog?.title]}
                </h1>

                {/* details of author */}
                <div className="w-full flex flex-col sm:flex-row sm:items-center justify-between mt-7">
                  {/* author */}
                  <div className="">
                    {/* text */}
                    <div>
                      {/* name */}
                      <p className="sm:text-lg">
                        By <span className="font-semibold">{blog?.author}</span>
                      </p>
                      {/* date */}
                      <p className="sm:text-lg">
                        {formatDate(blog?.created_at ?? "")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>
          <div className="relative">
            <div>
              {/* image */}
              <div className="absolute -top-[14rem] left-[50%] -translate-x-[50%] z-1 w-[95%] ms:w-[80%]">
                <div className="w-full h-[35rem]">
                  <img
                    className="w-full h-full object-cover"
                    src={blog?.image}
                    alt={blog?.title || "Blog media"}
                  />
                </div>
              </div>

              {/* paragraph */}
              <div className="pt-[25rem] w-[95%] sm:w-[80%] md:w-[65%] mx-auto grid md:text-xl font-semibold text-left pb-[7rem]">
                <div className="prose prose-blue prose-xl prose-headings:underline prose-headings:text-[2rem] sm:prose-headings:text-[3rem]">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(decode(blog?.content || "")), // Decode HTML entities
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlogPage;
