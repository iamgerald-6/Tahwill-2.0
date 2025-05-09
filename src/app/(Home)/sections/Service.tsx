"use client";

import { Button } from "@/app/components/Button";
import Image from "next/image";
import { motion } from "framer-motion";
const Service = () => {
  const serviceArr = [
    {
      id: 1,
      title: "Basic Consultation",
      desc: "Ideal for startups and small businesses seeking short-term guidance, this option offers actionable solutions to specific challenges and helps identify growth opportunities without requiring a long-term commitment.",
    },
    {
      id: 2,
      title: "Full-Scale Business Development",
      desc: "Perfect for businesses aiming to scale and grow strategically, this option offers hands-on support to refine operations, optimize performance, and expand market reach for lasting success.",
    },
    {
      id: 3,
      title: "Long-Term Partnership",
      desc: "Ideal for businesses pursuing sustained growth and industry leadership, this premium option offers ongoing strategic collaboration and end-to-end support aligned with your long-term vision.",
    },
  ];
  return (
    <div className="mt-16 grid lg:grid-cols-2 ">
      <div className=" pt-12 xl:px-24 lg:px-16 px-5">
        <motion.h3
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-4xl font-semibold bg-gradient-to-r from-primary to-primary-100 bg-clip-text text-transparent inline-block"
        >
          The Best of our
          <br /> Services
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-primary text-lg md:w-[80%] mt-3"
        >
          Our business development consulting empowers wellness entrepreneurs to
          build impactful, sustainable ventures through strategy, execution, and
          digital innovation. We support brand growth, operational efficiency,
          and market expansion with tailored tech solutions and scalable
          systems.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="mt-6"
        >
          <Button className="text-primary border-primary px-10 hover:text-primary-200 hover:border-primary-200">
            Book now
          </Button>
        </motion.div>
      </div>
      <div className="md:flex">
        <div className="mr-[-100px] md:block hidden mt-10 z-20">
          <Image
            src={"/assets/services.png"}
            alt=""
            width={700}
            height={500}
            className="rounded-lg"
          />
        </div>
        <div className="px-5 mb-[-50px] block md:hidden mt-6 z-20">
          <Image
            src={"/assets/imageery.jpg"}
            alt=""
            width={600}
            height={500}
            // className="rounded-lg"
          />
        </div>
        <div className=" lg:me-16 bg-gradient-to-b from-primary/20  via-primary-100/20 to-primary-200/20 rounded-xl  ">
          <div className="md:ps-28 md:pe-10  px-5 pt-12 pb-4 flex flex-col justify-center items-center ">
            {serviceArr.map((serve, i) => (
              <div
                key={serve.id}
                className="border-t border-gray-400 w-[85%] py-4"
              >
                <div className="grid gap-1 py-2">
                  <span className="bg-gradient-to-b from-primary to-primary-100 bg-clip-text text-transparent inline-block">
                    0{i + 1}
                  </span>
                  <motion.h3
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="bg-gradient-to-r from-primary to-primary-100 bg-clip-text text-transparent inline-block"
                  >
                    {serve.title}
                  </motion.h3>
                </div>
                <div className="">
                  <motion.p
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="text-sm text-primary "
                  >
                    {serve.desc}
                  </motion.p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;

// // import { Button } from "@/app/components/Button";
// // import Image from "next/image";
// import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/app/components/Accordion";

// const Service = () => {
//   // const serviceArr = [
//   //   {
//   //     id: 1,
//   //     title: "Wellness Education and Empowerment",
//   //     desc: "We provide workshops, courses, and resources on wellness, mental health, nutrition, and personal growth, including corporate training for workplace well-being.",
//   //   },
//   //   {
//   //     id: 2,
//   //     title: "Wellness Consulting",
//   //     desc: "We provide personalized wellness consulting, corporate wellness programs, and business growth strategies, helping individuals and businesses thrive in the wellness industry.",
//   //   },
//   //   {
//   //     id: 3,
//   //     title: "Wellness Programs",
//   //     desc: "We offer personalized wellness programs, corporate wellness initiatives, and specialized health solutions, including nutrition, fitness, mental health support, and stress management.",
//   //   },
//   // ];
//   return (
//     <div className="lg:flex mt-20 gap-20 px-28">
//       <p className=" md:text-6xl text-5xl  text-primary px-7 md:px-0">
//         Why
//         <br className="lg:block hidden" /> Choose
//         <br className="lg:block hidden" /> us ?
//       </p>
//       <div className="md:block hidden">
//         <div className="border-b border-b-primary-400 py-14 text-primary flex justify-between">
//           <span className="text-3xl uppercase">
//             Wellness Education <br />
//             and Empowerment
//           </span>
//           <span className="text-xl w-[50%]">
//             At Tahwil, we provide workshops, webinars, corporate training,
//             <br /> and resources on wellness, mental health, nutrition, and
//             personal growth.
//           </span>
//         </div>
//         <div className="border-b border-b-primary-400 py-14 text-primary flex justify-between">
//           <span className="text-3xl uppercase">Wellness Consulting</span>
//           <span className="text-xl w-[50%]">
//             We offer personalized wellness consulting, corporate wellness
//             programs, business development for wellness brands,
//             <br /> and partnership facilitation to foster a thriving wellness
//             ecosystem.
//           </span>
//         </div>
//         <div className="border-b border-b-primary-400 py-14 text-primary flex justify-between">
//           <span className="text-3xl uppercase">Wellness Programs</span>
//           <span className="text-xl w-[50%]">
//             We provide personalized wellness programs, corporate wellness
//             initiatives, and specialized services, including nutrition and
//             fitness plans, mental health support, stress reduction retreats, and
//             chronic disease prevention.
//           </span>
//         </div>
//       </div>
//       <div className="md:hidden block px-7 mt-10 ">
//         <Accordion type="single" collapsible className="w-full">
//           <AccordionItem value="item-1">
//             <AccordionTrigger>
//               <p className="sm:text-xl text-lg">
//                 {" "}
//                 Wellness Education and Empowerment
//               </p>
//             </AccordionTrigger>
//             <AccordionContent>
//               <p className=" text-lg">
//                 At Tahwil, we provide workshops, webinars, corporate training,
//                 <br /> and resources on wellness, mental health, nutrition, and
//                 personal growth.
//               </p>
//             </AccordionContent>
//           </AccordionItem>
//           <AccordionItem value="item-2">
//             <AccordionTrigger>
//               <p className="sm:text-xl text-lg">Wellness Consulting</p>
//             </AccordionTrigger>
//             <AccordionContent>
//               <p className=" text-lg">
//                 We tailor our services to meet your unique needs, ensuring a
//                 property journey that’s as individual as you are
//               </p>
//             </AccordionContent>
//           </AccordionItem>
//           <AccordionItem value="item-3">
//             <AccordionTrigger>
//               <p className="sm:text-xl text-lg">Wellness Programs</p>
//             </AccordionTrigger>
//             <AccordionContent>
//               <p className=" text-lg">
//                 We provide personalized wellness programs, corporate wellness
//                 initiatives, and specialized services, including nutrition and
//                 fitness plans, mental health support, stress reduction retreats,
//                 and chronic disease prevention.
//               </p>
//             </AccordionContent>
//           </AccordionItem>
//         </Accordion>
//       </div>
//     </div>
//   );
// };

// export default Service;
