"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import type { RootState } from "../apps/store";
export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const user = useSelector((state: RootState) => state.users.token);
  useEffect(() => {
    if (!user) {
      router.replace("/login");
    }
  }, [user, router]);

  if (!user) return null; 

  return <>{children}</>;
}
