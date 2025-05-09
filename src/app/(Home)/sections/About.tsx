"use client";
import Image from "next/image";
import { Button } from "@/app/components/Button";
// import { ArrowUpRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const About = () => {
  const router = useRouter();
  const handleBrowseJobsClick = () => {
    router.push("/service");
  };
  return (
    <div className="pb-10 pt-20">
      <div className="grid md:grid-cols-2 gap-16 xl:px-24 lg:px-16 px-5   ">
        {/* <div>
          <Image
            src={"/assets/featured.jpg"}
            alt="about image"
            width={600}
            height={500}
          />
          <div className="mt-10 ">
          
            <p className=" text-primary  mt-3 font-medium">
              We design personalized wellness solutions, combining science,
              data, and culture to drive lasting health and well-being for
              individuals and businesses.
            </p>
          </div>
        </div> */}
        {/* <div className="md:mt-28  flex justify-center">
          <Image
            src={"/assets/icons/Tahwil 2.svg"}
            alt=""
            width={250}
            height={250}
          />
        </div> */}

        <motion.div
          className="mt-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* <div className="mt-5">
            <Button
              onClick={handleBrowseJobsClick}
              className="px-10 text-primary border-primary hover:border-primary-200 hover:text-primary-200"
            >
              {" "}
              Our Service <ArrowUpRight size={20} />
            </Button>
          </div> */}
          <Image
            src={"/assets/aboutHome.jpg"}
            alt="about image"
            width={600}
            height={500}
            className=""
          />
        </motion.div>
        <div className="md:mt-10 mt-4 ">
          <motion.h3
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-3xl   mt-3 font-bold bg-gradient-to-r from-primary via-primary-100 to-primary-200 bg-clip-text text-transparent"
          >
            Empowering Wellness,
            <br /> Transforming Lives
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className=" text-primary  mt-3 font-medium lg:w-[70%] w-[90%] text-lg"
          >
            At Tahwil, we provide holistic, science-backed, and culturally
            inspired wellness solutions tailored to individuals, businesses, and
            corporations. From transformative education and self-empowerment to
            strategic wellness consulting and personalized health programs, we
            create meaningful, lasting improvements in overall well-being.
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default About;
