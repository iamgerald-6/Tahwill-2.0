"use client";
import { Button } from "@/app/components/Button";
import { useState } from "react";
import Community from "@/app/components/Community";
import { motion } from "framer-motion";
const Communities = () => {
  const [open, setOpen] = useState(false);
  const commArr = [
    {
      id: 1,
      title: "About the Community",
      desc: "e believe in the power of healing through community and we are committed to providing the best environment supported by experts to enable you become the best version of yourself.",
    },
    {
      id: 2,
      title: "Community Initiatives (What Members Gain)",
      desc: "Access to workshops, webinars, and online courses on mental health, nutrition, and holistic wellness.",
    },
    {
      id: 3,
      title: "Networking & Collaboration",
      desc: "Building a network of like-minded businesses to foster a wellness ecosystem.",
    },
    {
      id: 4,
      title: "Expert Guidance & Support",
      desc: "Access to a network of wellness professionals (nutritionists, therapists, fitness coaches, wellness practitioners).",
    },
  ];
  return (
    <div className="bg-[url(/assets/community.jpg)] bg-cover bg-center  bg-no-repeat min-h-[100vh] ">
      <div className="bg-black/50 min-h-[100vh] backdrop-blur-[4px] w-full ]">
        <div className=" md:flex md:flex-col md:py-0 py-7 items-center md:justify-center  md:min-h-[100vh]">
          <div className="">
            <motion.h3
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
              className="px-8 text-center text-primary-200 font-semibold text-2xl"
            >
              Join Our Exclusive Wellness Community
            </motion.h3>
            <motion.h5
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
              className="text-center text-white font-medium px-8 text-lg mt-3"
            >
              We provide a safe space where wellness enthusiasts can heal, grow,
              <br />
              learn and connect with one another.
            </motion.h5>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="grid md:grid-cols-2 md:px-28 px-8 mt-10 ">
                {" "}
                {commArr.map((community, i) => (
                  <div key={community.id} className="border border-white  py-7">
                    <div className="grid gap-1 py-2 px-5">
                      <span className="text-primary-200">0{i + 1}</span>
                      <h3 className="text-white">{community.title}</h3>
                    </div>
                    <div className="text-white px-5 md:w-[75%]">
                      <p className="text-sm ">{community.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
              className="flex justify-center mt-5"
            >
              <Button
                onClick={() => setOpen(true)}
                className="px-5 text-white border-white  hover:text-primary-200 hover:border-primary-200"
              >
                Explore our Community
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
      <Community open={open} setOpen={setOpen} />
    </div>
  );
};

export default Communities;
