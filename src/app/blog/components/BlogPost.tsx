"use client";
import apiRoutes from "@/app/apiRoutes";
import api from "@/app/utils/api";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import type { Blogdata } from "../types";
// Ensure DOMPurify is imported if not globally available
import DOMPurify from "dompurify";

const BlogPost = () => {
  const getBlogData = async () => {
    const res = await fetch(`/api/blog/`);

    if (!res.ok) {
      throw new Error("Failed to fetch blog");
    }

    return res.json();
  };

  const { data } = useQuery<Blogdata>({
    queryFn: getBlogData,
    queryKey: ["get_blog"],
  });

  if (!data?.blogs || data.blogs.length === 0) {
    return <p className="text-center text-gray-500">No blogs available</p>;
  }

  const sortedBlogs = [...data.blogs].sort(
    (a, b) =>
      new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
  );

  const featuredBlog = sortedBlogs[0];
  const sanitizedContent = featuredBlog?.content
    ? DOMPurify.sanitize(featuredBlog.content.slice(0, 150) + "...")
    : "";

  return (
    <div>
      <div className="grid md:grid-cols-2 gap-2 pt-20 md:px-28 px-8">
        <div>
          <Image
            src={featuredBlog.cover_image}
            alt="blog image1"
            width={500}
            height={500}
          />
        </div>
        <div className="text-primary">
          <h4 className="bg-gradient-to-r from-primary to-primary-100 bg-clip-text text-transparent inline-block">
            {featuredBlog.category}
          </h4>
          <h2 className="text-2xl mt-3">{featuredBlog.title}</h2>
          <p
            className="text-lg md:w-[70%] mt-3"
            dangerouslySetInnerHTML={{ __html: sanitizedContent }}
          />
          <div className="mt-6 text-xs">
            <span>{new Date(featuredBlog.created_at).toDateString()}</span>
          </div>
          <div className="mt-3">
            <div className="flex gap-2">
              <Image
                src={"/assets/Ellipse 7.png"}
                alt="featured image1"
                width={60}
                height={60}
              />
              <div className="flex flex-col justify-center text-xs">
                <span>Written By</span>
                <span>{featuredBlog.author}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
