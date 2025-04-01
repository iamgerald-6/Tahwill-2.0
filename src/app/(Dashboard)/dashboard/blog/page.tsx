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
const Blog = () => {
    const router = useRouter();

    const handleNavigation = () => {
      router.push("/dashboard/blog/createBlog/");
    };
      const invoices = [
        {
          id: "Blog001",
          Status: "Published",
          Title: "To pimp a butterfly",
          Category: "Physical Health",
          Author: "Hadiza",
        },
        {
          id: "Blog002",
          Status: "Draft",
          Category: "Physical Health",
          Title: "Money Tress",
          Author: "Mica",
        },
        {
          id: "Blog003",
          Status: "Published",
          Category: "Mental Health",
          Title: "Take Care",
          Author: "Hadiza",
        },
      ];
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
            {invoices.map((invoice) => (
              <TableRow key={invoice.id}>
                <TableCell className="font-medium">{invoice.id}</TableCell>
                <TableCell>{invoice.Status}</TableCell>
                <TableCell className="">{invoice.Category}</TableCell>
                <TableCell>{invoice.Title}</TableCell>
                <TableCell className="text-right">{invoice.Author}</TableCell>
                <TableCell className="text-right">
                  <div className="flex gap-5 justify-end">
                    <span>
                      <SquarePen size={20} />
                    </span>
                    <span>
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
              <TableCell className="text-right font-semibold">3</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </div>
  );
}
export default Blog;