"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import apiRoutes from "@/app/apiRoutes";

import moment from "moment";
import api from "@/app/utils/api";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/app/components/Table";
import type { BookingType } from "./types";
const Booking = () => {
    const getSubs = async () => {
        const res = await api.get(apiRoutes.booking.getBook);
        return res.data;
      };
      const { data } = useQuery<BookingType>({
        queryKey: ["subscriberStats"],
        queryFn: getSubs,
      });
  return (
      <div className="px-10 mt-10 ">
          <h3 className="font-bold  text-lg">Booking table</h3>
      <Table className=" shadow border rounded-lg mt-3 ">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px] font-medium">
              Transaction Id
            </TableHead>
            <TableHead className=" font-medium">Tier Name</TableHead>
            <TableHead className=" font-medium">Email</TableHead>
            <TableHead className=" font-medium">Amount</TableHead>
           
            <TableHead className=" font-medium">Reference</TableHead>
            <TableHead className=" font-medium">Date Joined</TableHead>
          
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.bookings?.map((sub) => (
            <TableRow key={sub.id}>
              <TableCell className="font-medium">
                {sub.transaction_id}
              </TableCell>
              <TableCell
               
              >
                {sub.tier_name}
              </TableCell>
              <TableCell className="">{sub.email}</TableCell>

              <TableCell className="">{sub.amount}</TableCell>
             
              <TableCell className="">{sub.reference}</TableCell>
              <TableCell>
                {" "}
                {moment(sub.created_at).format("DD MM YYYY")}
              </TableCell>
              
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right font-semibold">
              {data?.bookings?.length}
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
}

export default Booking