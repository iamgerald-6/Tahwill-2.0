"use client"
import Image from 'next/image';
import React from 'react'
import { CircleUserRound, Clock3 } from "lucide-react";
import Link from "next/link";
import SearchNav from "../components/SearchNav";
import MoreBlog from "../components/MoreBlog";
import { useQuery } from "@tanstack/react-query";
import api from "@/app/utils/api";
import apiRoutes from "@/app/apiRoutes";
import type { BlogDataType } from "../types";
import moment from "moment";
import { useParams } from "next/navigation";

const InnerBlog = () => {
  const { id } = useParams();
  const getBlogData = async () => {
    const res = await api.get(`${apiRoutes.blog.getBlog}${id}/`);
    return res.data;
  };

  const { data } = useQuery<BlogDataType>({
    queryFn: getBlogData,
    queryKey: ["get_blog"],
  });
  console.log(data,"data")
  return (
    <div>
      <div className="bg-black/60 h-[40vh] w-full">
        <div className="flex   items-center justify-center xl:px-24 lg:px-16 px-7 h-[55vh] text-white text-xl    ">
          <div className="">
            <div className="flex items-center">
              <Link href={"/"}>Home </Link>
              <span>&gt;</span>

              <p className="text-2xl underline cursor-pointer">Blog</p>
            </div>
          </div>
        </div>
      </div>
      <SearchNav />
      <div className=" flex justify-center">
        <Image
          src={data?.blog.cover_image && data?.blog?.cover_image}
          alt="blog image1"
          width={1200}
          height={500}
        />
      </div>
      <div className="text-primary  px-28 mt-6 ">
        <h4 className="bg-gradient-to-r from-primary to-primary-100 bg-clip-text text-transparent inline-block">
          {data?.blog.category}
        </h4>
        <h2 className="text-3xl mt-3">{data?.blog.title}</h2>
        <div>
          <div className="flex justify-between items-center gap-2 w-[70%]">
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
              <span className="flex gap-3 items-center">
                <Clock3 />5 min read
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="px-28 mt-8 text-primary text-lg">
        <p>{data?.blog.content}</p>
      </div>
      <div className="bg-primary-400 mx-28 py-5 px-6">
        <h3>More Blogs</h3>
      </div>
      <MoreBlog />
    </div>
  );
};

export default InnerBlog;