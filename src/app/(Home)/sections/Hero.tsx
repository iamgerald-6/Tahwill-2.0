"use client";

import { useEffect, useState } from "react";
import { Button } from "@/app/components/Button";
import { ArrowUpRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
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
        minHeight: "90dvh",
      }}
    >
      <div className="bg-black/70  min-h-[90dvh] w-full">
        <div className="  flex flex-col items-center justify-center  px-8 min-h-[90dvh]  text-white">
          <motion.div
            className=" md:pt-10 pt-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.4 }}
          >
            <div className="font-medium mt-5  lg:flex justify-center  hidden ">
              <p className="lg:w-[45%] w-[70%]  uppercase font-medium ">
                <span className="bg-gradient-to-r from-primary via-primary-100 to-primary-200 bg-clip-text text-transparent">
                  Tahwil is a personalized
                </span>{" "}
                wellness platform that supports individuals on their well-being
                journey, empowers wellness entrepreneurs to launch or grow their
                ventures, and fosters collaboration among professionals within a
                culturally rooted and purpose-driven ecosystem.
              </p>
            </div>
            <div className="text-white  mt-3 xl:text-6xl lg:text-5xl md:text-5xl sm:text-4xl text-3xl lg:flex justify-center">
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
                <br className="hidden sm:block" />
                Build Impact. Thrive, Together
              </p>
            </div>
            <div className="font-medium mt-5  block  lg:hidden ">
              <p className=" sm:w-[80%]  uppercase font-medium sm:text-sm text-xs">
                <span className="bg-gradient-to-r from-primary via-primary-100 to-primary-200 bg-clip-text text-transparent">
                  Tahwil is a personalized
                </span>{" "}
                wellness platform that supports individuals on their well-being
                journey, empowers wellness entrepreneurs to launch or grow their
                ventures, and fosters collaboration among professionals within a
                culturally rooted and purpose-driven ecosystem.
              </p>
            </div>
            {/* <div className="font-medium mt-5  ">
              <p className="">
                Whether you’re on a personal journey to optimize your
                well-being, a wellness entrepreneur ready to launch, grow, or
                pivot, or a<br /> wellness professional looking to collaborate
                within a vibrant ecosystem, look no further. Tahwil is your home
                for
                <br /> purpose-driven, culturally rooted, highly personalized,
                and transformative wellness solutions.
              </p>
            </div> */}
            <div className="mt-5 lg:flex justify-center">
              <Button
                onClick={handleBrowseJobsClick}
                className="px-8 flex items-center gap-3 border-2 hover:border-primary hover:text-primary"
              >
                Learn More <ArrowUpRight size={20} />
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
