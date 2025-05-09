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
        minHeight: "90vh",
      }}
    >
      <div className="bg-black/70  min-h-[90vh] w-full">
        <div className="  md:flex md:flex-col md:items-center md:justify-center  px-8 min-h-[90vh]  text-white">
          <div className=" ">
            <div className="text-white lg:text-5xl md:text-5xl text-4xl ">
              <p className="uppercase">
                Transform Your.
                <span
                  style={{
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                  className="bg-gradient-to-r from-primary via-primary-100 to-primary-200 bg-clip-text text-transparent"
                >
                  {" "}
                  Health.
                </span>{" "}
                <br />
                Build Impact. Thrive, Together
              </p>
            </div>
            <div className="font-medium mt-5  ">
              <p className="">
                Whether you’re on a personal journey to optimize your
                well-being, a wellness entrepreneur ready to launch, grow, or
                pivot, or a<br /> wellness professional looking to collaborate
                within a vibrant ecosystem, look no further. Tahwil is your home
                for
                <br /> purpose-driven, culturally rooted, highly personalized,
                and transformative wellness solutions.
              </p>
            </div>
            <div className="mt-5">
              <Button
                onClick={handleBrowseJobsClick}
                className="px-8 flex items-center gap-3 border-2 hover:border-primary hover:text-primary"
              >
                Learn More <ArrowUpRight size={20} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero