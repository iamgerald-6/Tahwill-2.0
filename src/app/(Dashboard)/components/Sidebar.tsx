/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import {
  House,
  Wallet,
  CalendarDays,
  ChartPie,
  // Bell,
  Settings,
  // CircleUserRound,
  LogOut,
  SquarePen,
  MailCheck,
} from "lucide-react";
import { Group } from "@mantine/core";

import classes from "./NavbarSimple.module.css";
import Image from "next/image";
import api from "@/app/utils/api";
import apiRoutes from "@/app/apiRoutes";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { useAppDispatch } from "@/app/apps/hook";
import { logout } from "@/app/features/UserSlice";
import { useRouter } from "next/navigation";
import Link from "next/link";

const data = [
  { link: "/dashboard", label: "Home", icon: House },
  { link: "/dashboard/transaction", label: "Transactions", icon: Wallet },
  { link: "/dashboard/blog", label: "Blog", icon: SquarePen },
  { link: "/dashboard/users", label: "Subscribers", icon: MailCheck },
  { link: "", label: "Analytics", icon: ChartPie },
  { link: "", label: "Booking ", icon: CalendarDays },
  { link: "", label: "Settings", icon: Settings },
];

export function NavbarSimple() {
  const [active, setActive] = useState("Billing");
  const dispatch = useAppDispatch();
  const router = useRouter();
  const postLogout = async () => {
    const res = await api.post(apiRoutes.Auth.logout);
    console.log("Logout Response:", res.data);
    return res.data;
  };
  const { mutate } = useMutation({
    mutationFn: postLogout,
    onSuccess: (data) => {
      if (data) {
        toast("Successfully logged Out");
        dispatch(logout());
        router.replace("/login");
      } else {
        toast.error("Something Went Wrong");
      }
    },
    onError: (error: any) => {
      const errorMessage =
        error?.response?.data?.message ||
        error?.message ||
        "An unexpected error occurred";

      toast.warning(errorMessage);
    },
  });
  const links = data.map((item) => (
    <Link
      className={classes.link}
      data-active={item.label === active || undefined}
      href={item.link}
      key={item.label}
      onClick={() => {
        if (!item.link) return;
        setActive(item.label);
        router.push(item.link);
      }}
    >
      <item.icon className={classes.linkIcon} />
      <span>{item.label}</span>
    </Link>
  ));

  return (
    <nav className={classes.navbar}>
      <div className={classes.navbarMain}>
        <Group className={classes.header} justify="space-between">
          <Image
            width={70}
            height={30}
            src={"/assets/icons/Tahwil 2.svg"}
            alt="logo"
          />
        </Group>
        {links}
      </div>

      <div className={classes.footer}>
        <span className={classes.link} onClick={() => mutate()}>
          <LogOut className={classes.linkIcon} />
          <span>Logout</span>
        </span>
      </div>
    </nav>
  );
}
