"use client";
import { useState, useEffect } from "react";
import Preloader from "../Prealoder";

const PreloaderWrapper = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return loading ? <Preloader /> : children;
};

export default PreloaderWrapper;
