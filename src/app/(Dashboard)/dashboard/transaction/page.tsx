"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";

import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Legend,
  Bar,
} from "recharts";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/app/components/Table";
import apiRoutes from "@/app/apiRoutes";
import { type TransactionType } from "./types";
import moment from "moment";
import api from "@/app/utils/api";

const Transaction = () => {
  const getSubs = async () => {
    const res = await api.get(apiRoutes.payment.getPayment);
    return res.data;
  };
  const { data } = useQuery<TransactionType>({
    queryKey: ["subscriberStats"],
    queryFn: getSubs,
  });
  interface PaymentItem {
    month: string | Date;
    amount: number;
  }

  interface ChartDataItem {
    name: string;
    uv: number;
  }
  const chartData: ChartDataItem[] =
    data?.monthlyPayment?.reduce((acc: ChartDataItem[], item: PaymentItem) => {
      const monthName = moment(item.month).format("MMMM");
      const existingMonth = acc.find((entry) => entry.name === monthName);

      if (existingMonth) {
        existingMonth.uv += item.amount;
      } else {
        acc.push({ name: monthName, uv: item.amount });
      }

      return acc;
    }, []) || [];
  return (
    <div>
      <div className="w-full h-96 p-4">
        <h2 className="text-xl font-semibold mb-4">Transaction Table</h2>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={200}
            height={300}
            data={chartData}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />

            <Bar dataKey="uv" stackId="a" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="px-10 mt-10 ">
        <Table className=" shadow border rounded-lg mt-3 ">
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px] font-medium">
                Transaction Id
              </TableHead>
              <TableHead className=" font-medium">Status</TableHead>
              <TableHead className=" font-medium">Email</TableHead>
              <TableHead className=" font-medium">Amount</TableHead>
              <TableHead className=" font-medium">Currency</TableHead>
              <TableHead className=" font-medium">Reference</TableHead>
              <TableHead className=" font-medium">Date Joined</TableHead>
              <TableHead className=" font-medium">Paid at</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data?.transactions?.map((sub) => (
              <TableRow key={sub.id}>
                <TableCell className="font-medium">
                  {sub.transaction_id}
                </TableCell>
                <TableCell
                  className={`${
                    sub.status === "success"
                      ? "text-green-400 px-5 rounded-2xl py-1"
                      : "text-red-600 px-5 rounded-2xl py-1"
                  }`}
                >
                  {sub.status}
                </TableCell>
                <TableCell className="">{sub.email}</TableCell>

                <TableCell className="">{sub.amount}</TableCell>
                <TableCell className="">{sub.currency}</TableCell>
                <TableCell className="">{sub.reference}</TableCell>
                <TableCell>
                  {" "}
                  {moment(sub.created_at).format("DD MM YYYY")}
                </TableCell>
                <TableCell>
                  {" "}
                  {moment(sub.paid_at).format("DD MM YYYY")}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={3}>Total</TableCell>
              <TableCell className="text-right font-semibold">
                {data?.transactions?.length}
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </div>
  );
};

export default Transaction;
