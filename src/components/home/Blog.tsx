import React, { useState } from "react";
import { getImageSrc } from "../../utils/imageUtils";
import { motion, animate } from "framer-motion";

const Blog = () => {
  const blogPosts = [
    { id: 1, image: "whole2.png", alt: "Blog 1" },
    { id: 2, image: "whole4.png", alt: "Blog 2" },
    { id: 3, image: "whole2.png", alt: "Blog 3" },
  ];

  return (
    <section className="bg-[#F9F5FF]">
      <div className="max-w-[1350px] mx-auto px-4 py-6 sm:py-8 md:py-20">
        {/* Head section */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6 sm:mb-8">
          <h1 className="text-base xs:text-[18px] md:text-[32px] font-jakarta font-bold text-primary max-w-[219px]">
            Read from our blog post
          </h1>
          <div>
            <button className="cursor-pointer bg-primary text-white py-2 sm:py-[10px] w-[180px] sm:w-[224px] h-[48px] sm:h-[60px] px-4 text-sm sm:text-[16px] font-bold rounded-full hover:bg-primary/90 transition-colors ease-in-out duration-300">
              See All
            </button>
          </div>
        </div>

        {/* Blog posts */}
        <div className="flex items-center justify-center gap-y-10 md:gap-5 flex-wrap">
          {blogPosts.map((post) => {
            // State to manage hover
            const [isHovered, setIsHovered] = useState(false);

            return (
              <div
                key={post.id}
                className="w-[90%] sm:w-[420px] max-w-[420px] min-w-[250px]"
              >
                <div className="relative flex-shrink-0">
                  {/* Blog image with SVG clip-path */}
                  <svg
                    width="100%"
                    height="auto"
                    viewBox="0 0 417 432"
                    preserveAspectRatio="xMidYMid meet"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="rounded-[20px] sm:rounded-[30px] overflow-hidden"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                  >
                    <clipPath id={`clipShape-${post.id}`}>
                      <path d="M0.5 37C0.5 16.5655 17.0655 0 37.5 0H379.5C399.935 0 416.5 16.5655 416.5 37V282.323C416.5 302.757 399.935 319.323 379.5 319.323H356.736C318.149 319.323 287.062 350.967 287.746 389.547L287.832 394.343C288.199 415.032 271.529 432 250.837 432H37.5C17.0655 432 0.5 415.435 0.5 395V37Z" />
                    </clipPath>

                    {/* Image with scaling animation */}
                    <motion.image
                      href={getImageSrc(post.image)}
                      width="100%"
                      height="100%"
                      preserveAspectRatio="xMidYMid slice"
                      clipPath={`url(#clipShape-${post.id})`}
                      initial={{ scale: 1 }}
                      animate={{ scale: isHovered ? 1.05 : 1 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    />

                    {/* Overlay with Framer Motion animation */}
                    <motion.rect
                      x="0"
                      y="0"
                      width="100%"
                      height="100%"
                      fill="rgba(123, 75, 183, 0.5)" // bg-primary/40
                      clipPath={`url(#clipShape-${post.id})`}
                      initial={{ opacity: 0, scale: 1 }}
                      animate={{
                        opacity: isHovered ? 1 : 0,
                        scale: isHovered ? 1.05 : 1,
                      }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    />
                  </svg>

                  {/* Blog icon */}
                  <div
                    className="absolute right-2 sm:right-3 -bottom-2 sm:-bottom-2"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                  >
                    <button className="cursor-pointer w-[80px] sm:w-[100px] bg-primary aspect-square flex items-center justify-center rounded-full hover:bg-primary/90 transition-colors ease-in-out duration-300">
                      <div className="w-8 sm:w-10">
                        <img
                          src={getImageSrc("arrow.png")}
                          alt="Arrow icon"
                          className="w-full h-full object-contain"
                        />
                      </div>
                    </button>
                  </div>
                </div>

                {/* Text */}
                <div className="p-4 sm:p-5 sm:pt-8">
                  <p className="text-[#7B4BB7] font-semibold text-sm sm:text-base mb-1">
                    Public Lecture: NBA Conference
                  </p>
                  <div className="flex items-center gap-2 mb-2">
                    <p className="text-[#344054] text-xs sm:text-sm flex items-center gap-1">
                      <img
                        src={getImageSrc("date.png")}
                        alt="Date icon"
                        className="w-4 sm:w-5 h-4 sm:h-5"
                      />
                      10 Nov, 2024
                    </p>
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-[24px] font-semibold text-[#344054] leading-tight sm:leading-normal py-3">
                    Introduction to Physical Training and Light Exercise
                  </h3>
                  <p className="text-[#667085] text-xs sm:text-sm mt-1 sm:mt-2">
                    Collaboration can make our teams stronger, and our
                    individual better better.
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Blog;
