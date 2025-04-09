"use client";

import { useEffect, useState } from "react";
import { Button } from "@/app/components/Button";
import { ArrowUpRight } from "lucide-react";
import { useRouter } from "next/navigation";

const Hero = () => {
  const images = [
    "/assets/bgImage2.jpg",
    "/assets/bgImage.jpg",
    "/assets/bgImage3.jpg",
  ];

  const [currentImage, setCurrentImage] = useState(0);
  const router = useRouter();
  const handleBrowseJobsClick = () => {
    router.push("/about");
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeout(() => {
        setCurrentImage((prev) => (prev + 1) % images.length);
      }, 1000);
    }, 10000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div
      className="transition-opacity duration-1000"
      style={{
        backgroundImage: `url(${images[currentImage]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
      }}
    >
      <div className="bg-black/60  min-h-[100vh] w-full">
        <div className="flex md:px-20 md:pt-42 pt-34 px-8 min-h-[100vh]  text-white">
          <div className="">
            <div className="text-white  lg:text-7xl md:text-5xl text-4xl ">
              <p>
                Transform Your <br />
                <span className="bg-gradient-to-r from-primary via-primary-100 to-primary-200 bg-clip-text text-transparent">
                  Wellness
                </span>{" "}
                Journey
              </p>
            </div>
            <div className="font-medium mt-5 ">
              <p>
                Personalized, data-driven, and culturally inspired wellness
                <br className="hidden md:block" />
                solutions for individuals, businesses, and corporations.
                <br className="hidden md:block" /> Be part of our interconnected
                ecosystem and achieve lasting,
                <br className="hidden md:block" /> optimal health.
              </p>
            </div>
            <div className="mt-5">
              <Button
                onClick={handleBrowseJobsClick}
                className="px-8 flex items-center gap-3 hover:text-primary-200"
              >
                Explore <ArrowUpRight size={20} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero