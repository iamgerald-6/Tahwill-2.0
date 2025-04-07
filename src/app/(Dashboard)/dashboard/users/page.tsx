"use client";
import React from 'react'
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import {
 
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";
import {
  Table,
  TableBody,

  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/app/components/Table"
import apiRoutes from '@/app/apiRoutes';
import {  type UserData } from './types';
import moment from 'moment';

const Subscribers = () => {
    const getSubs = async () => {
        const res = await axios.get(apiRoutes.mail.sendMail);
         return res.data;
    }
     const { data } = useQuery<UserData>({
       queryKey: ["subscriberStats"],
       queryFn:getSubs
     });
     const chartData = data?.monthlyData?.map((item) => ({
       name: item.month,
       uv: item.count,
     }));
    return (
      <div>
        <div className="w-full h-96 p-4">
          <h2 className="text-xl font-semibold mb-4">
            Monthly Subscriber Growth
          </h2>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              width={500}
              height={400}
              data={chartData}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="uv"
                stroke="#8884d8"
                fill="#8884d8"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <div className='px-10 mt-10 '>
          <Table className=" shadow border rounded-lg mt-3 ">
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px] font-medium">User Id</TableHead>
                <TableHead className=" font-medium">Status</TableHead>
                <TableHead className=" font-medium">Email</TableHead>
                <TableHead className=" font-medium">Date Joined</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data?.subscribers?.map((sub) => (
                <TableRow key={sub.id}>
                  <TableCell className="font-medium">{sub.id}</TableCell>
                  <TableCell>
                    {sub.status === "active" ? "Subscribed" : "Unsubscribed"}
                  </TableCell>
                  <TableCell className="">{sub.email}</TableCell>
                  <TableCell>
                    {" "}
                    {moment(sub.created_at).format("DD MM YYYY")}
                  </TableCell>
                  <TableCell className="text-right"></TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TableCell colSpan={3}>Total</TableCell>
                <TableCell className="text-right font-semibold">
                  {data?.subscribers.length}
                </TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        </div>
      </div>
    );
}







 
 

  
    


export default Subscribers;