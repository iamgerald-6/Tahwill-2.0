"use client";
import apiRoutes from "@/app/apiRoutes";
import { buttonVariants } from "@/app/components/Button";
import { cn } from "@/app/lib/utils";
import api from "@/app/utils/api";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import type { Blogdata } from "../types";

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
      <div className="mt-7">
        <div className="grid grid-cols-2 gap-4 px-28">
          {data?.blogs.map((blog) => (
            <div key={blog.id} className="text-primary">
              <h3 className="bg-gradient-to-r from-primary to-primary-100 bg-clip-text text-transparent inline-block">
                {blog.category}
              </h3>
              <div>
                <Image
                  src={blog.cover_image}
                  alt="blog image1"
                  width={300}
                  height={500}
                />
              </div>
              <h3 className=" w-[60%] text-2xl mt-3">{blog.title}</h3>
              <p className="w-[60%] mt-3">{blog.content}</p>
              <div className="mt-5 w-[30%] ">
                {/* <Button> */}

                <Link
                  href={`/blog/${blog.id}`}
                  className={cn(
                    buttonVariants(),
                    "text-primary border-primary hover:text-primary-200 hover:border-primary-200"
                  )}
                >
                  Read more
                </Link>

                {/* </Button> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MoreBlog;
