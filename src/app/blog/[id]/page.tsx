"use client";
import Image from "next/image";
import React from "react";
import { CircleUserRound } from "lucide-react";

import SearchNav from "../components/SearchNav";
import MoreBlog from "../components/MoreBlog";
import { useQuery } from "@tanstack/react-query";
import api from "@/app/utils/api";
import apiRoutes from "@/app/apiRoutes";
import type { BlogDataType } from "../types";
import moment from "moment";
import { useParams } from "next/navigation";
import DOMPurify from "dompurify";
const InnerBlog = () => {
  const { id } = useParams();
  const getBlogData = async () => {
    const res = await fetch(`/api/blog/${id}`);

    if (!res.ok) {
      throw new Error("Failed to fetch blog");
    }

    return res.json();
  };

  const { data, isLoading } = useQuery<BlogDataType>({
    queryFn: getBlogData,
    queryKey: ["get_blog", id],
  });
  console.log(data, "data");
  if (isLoading) return <div>Loading...</div>;
  return (
    <div>
      <div className="bg-black/60 h-[40vh] w-full">
        <div className="flex   items-center justify-center xl:px-24 lg:px-16 px-7 h-[55vh] text-white text-xl    ">
          <div className="">
            <div className="flex items-center pt-5">
              <p className="text-2xl  cursor-pointer">Blog</p>
            </div>
          </div>
        </div>
      </div>
      <SearchNav />
      <div className=" flex justify-center">
        <Image
          src={(data?.blog?.cover_image as string) || "/placeholder-image.jpg"}
          alt="blog image1"
          width={1200}
          height={500}
        />
      </div>
      <div className="text-primary  md:px-28 px-6 mt-6 ">
        <h4 className="bg-gradient-to-r from-primary to-primary-100 bg-clip-text text-transparent inline-block">
          {data?.blog.category}
        </h4>
        <h2 className="text-3xl mt-3">{data?.blog.title}</h2>
        <div>
          <div className="flex justify-between items-center gap-2 md:w-[70%]">
            <div className="flex gap-3">
              <CircleUserRound />
              <div className="flex flex-col justify-center text-xs">
                <span>Written By</span>
                <span>{data?.blog.author}</span>
              </div>
            </div>
            <div className="flex flex-col text-xs">
              <span>
                {data?.blog?.created_at
                  ? moment(data.blog.created_at).format("MMMM DD, YYYY")
                  : "No date"}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div
        className=" mt-3 text-primary px-5"
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(data?.blog.content.slice(0, 150) + "..."),
        }}
      />

      <MoreBlog />
    </div>
  );
};

export default InnerBlog;
