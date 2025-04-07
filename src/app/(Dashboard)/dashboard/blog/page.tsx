"use client";

import React from 'react'
import { useRouter } from "next/navigation";
import {
  Table,
  TableBody,

  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/app/components/Table"
import { Search, SquarePen, Trash2, Plus } from "lucide-react";
import { Input } from '@/app/components/Input';
import { Button } from '@/app/components/Button';
import api from "@/app/utils/api";
import apiRoutes from "@/app/apiRoutes";
import { useMutation, useQuery } from "@tanstack/react-query";
import type { Blogdata } from "./types";
import { toast } from "sonner";
const Blog = () => {
  const router = useRouter();

  const handleNavigation = () => {
    router.replace("/dashboard/blog/createBlog/");
  };

  const getBlogArr = async () => {
    const res = await api.get(apiRoutes.blog.getBlogAdmin);
    return res.data;
  };

  const { data, refetch } = useQuery<Blogdata>({
    queryFn: getBlogArr,
    queryKey: ["get_blog"],
  });

  const deleteBlog = async (id: number) => {
    const res = await api.delete(`${apiRoutes.blog.getBlogAdmin}${id}/`);
    return res.data;
  };

  const { mutate } = useMutation({
    mutationFn: deleteBlog,
    onSuccess: (data) => {
      if (data) {
        refetch();
        toast.success(data.message);
      } else {
        toast.error(data.message);
      }
    },
  });

  return (
    <div>
      <div>
        <h3 className="mt-10 px-10">Blog</h3>
      </div>
      <div className="mt-6 px-10">
        <div className="flex justify-between">
          <div className="flex justify-between items-center border  px-6">
            <Input
              type="search"
              placeholder="Search"
              className=" md:w-74 shadow-none  border-none outline-none focus:outline-none "
            />
            <Search className="" />
          </div>
          <div className="">
            <Button
              onClick={handleNavigation}
              className="bg-primary/80 border-none hover:bg-primary/60 hover:border-none hover:shadow-none flex gap-2"
            >
              <Plus />
              Create Blog
            </Button>
          </div>
        </div>
        <Table className=" shadow border rounded-lg mt-3 ">
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px] font-medium">Blog Id</TableHead>
              <TableHead className=" font-medium">Status</TableHead>
              <TableHead className=" font-medium">Category</TableHead>
              <TableHead className=" font-medium">Title</TableHead>
              <TableHead className="text-right font-medium">Author</TableHead>
              <TableHead className="text-right font-medium">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data?.blogs?.map((blogging) => (
              <TableRow key={blogging.id}>
                <TableCell className="font-medium">
                  Blog00{blogging.id}
                </TableCell>
                <TableCell>Status</TableCell>
                <TableCell className="">{blogging.category}</TableCell>
                <TableCell>{blogging.title}</TableCell>
                <TableCell className="text-right">{blogging.author}</TableCell>
                <TableCell className="text-right">
                  <div className="flex gap-5 justify-end">
                    <span>
                      <SquarePen size={20} />
                    </span>
                    <span onClick={() => mutate(blogging.id)}>
                      <Trash2 size={20} />
                    </span>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={3}>Total</TableCell>
              <TableCell className="text-right font-semibold">
                {data?.blogs.length}
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </div>
  );
};
export default Blog;