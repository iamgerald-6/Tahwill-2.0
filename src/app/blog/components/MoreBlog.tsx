"use client";
import apiRoutes from "@/app/apiRoutes";
import { ArrowRight } from "lucide-react";
import api from "@/app/utils/api";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import type { Blogdata } from "../types";
import DOMPurify from "dompurify"; // Import DOMPurify for sanitization

const MoreBlog = () => {
  const getBlogData = async () => {
    const res = await api.get(apiRoutes.blog.getBlog);
    return res.data;
  };

  const { data } = useQuery<Blogdata>({
    queryFn: getBlogData,
    queryKey: ["get_blog"],
  });

  return (
    <div className="mt-16 pb-10">
      <div className=" flex justify-center text-xl py-4  bg-gray-300">
        <h3>More Blogs</h3>
      </div>
      <div className="mt-7">
        <div className="grid md:grid-cols-4 gap-4 ">
          {data?.blogs.map((blog) => (
            <div key={blog.id} className=" bg-white shadow-sm rounded-sm py-4">
              <div className="text-primary px-5">
                <h3 className="bg-gradient-to-r from-primary to-primary-100 bg-clip-text text-transparent inline-block">
                  {blog.category}
                </h3>
                <div>
                  <Image
                    src={blog.cover_image}
                    alt="blog image1"
                    width={350}
                    height={500}
                  />
                </div>
                <h3 className=" text-2xl mt-3">{blog.title}</h3>
                <div
                  className=" mt-3"
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(
                      blog.content.slice(0, 150) + "..."
                    ),
                  }}
                />
                <div className="mt-5">
                  <Link
                    href={`/blog/${blog.id}`}
                    className="hover:text-primary-200 flex items-center gap-2 "
                  >
                    Read more{" "}
                    <ArrowRight size={20} className="hover:text-primary-200" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MoreBlog;
