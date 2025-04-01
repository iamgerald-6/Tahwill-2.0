// import { Button } from "@/app/components/Button";
// import Image from "next/image";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/Accordion";

const Service = () => {
  // const serviceArr = [
  //   {
  //     id: 1,
  //     title: "Wellness Education and Empowerment",
  //     desc: "We provide workshops, courses, and resources on wellness, mental health, nutrition, and personal growth, including corporate training for workplace well-being.",
  //   },
  //   {
  //     id: 2,
  //     title: "Wellness Consulting",
  //     desc: "We provide personalized wellness consulting, corporate wellness programs, and business growth strategies, helping individuals and businesses thrive in the wellness industry.",
  //   },
  //   {
  //     id: 3,
  //     title: "Wellness Programs",
  //     desc: "We offer personalized wellness programs, corporate wellness initiatives, and specialized health solutions, including nutrition, fitness, mental health support, and stress management.",
  //   },
  // ];
  return (
    <div className="lg:flex mt-20 gap-20 ">
      <p className=" md:text-6xl text-5xl  text-primary px-7 md:px-0">
        Why
        <br className="lg:block hidden" /> Choose
        <br className="lg:block hidden" /> us ?
      </p>
      <div className="md:block hidden">
        <div className="border-b border-b-primary-400 py-14 text-primary flex justify-between">
          <span className="text-4xl uppercase">
            Wellness Education and
            <br /> Empowerment
          </span>
          <span className="text-2xl w-[50%]">
            At Tahwil, we provide workshops, webinars, corporate training,
            <br /> and resources on wellness, mental health, nutrition, and
            personal growth.
          </span>
        </div>
        <div className="border-b border-b-primary-400 py-14 text-primary flex justify-between">
          <span className="text-4xl uppercase">Wellness Consulting</span>
          <span className="text-2xl w-[50%]">
            We offer personalized wellness consulting, corporate wellness
            programs, business development for wellness brands,
            <br /> and partnership facilitation to foster a thriving wellness
            ecosystem.
          </span>
        </div>
        <div className="border-b border-b-primary-400 py-14 text-primary flex justify-between">
          <span className="text-4xl uppercase">Wellness Programs</span>
          <span className="text-2xl w-[50%]">
            We provide personalized wellness programs, corporate wellness
            initiatives, and specialized services, including nutrition and
            fitness plans, mental health support, stress reduction retreats, and
            chronic disease prevention.
          </span>
        </div>
      </div>
      <div className="md:hidden block px-7 mt-10 ">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>
              <p className="sm:text-xl text-lg">
                {" "}
                Wellness Education and Empowerment
              </p>
            </AccordionTrigger>
            <AccordionContent>
              <p className=" text-lg">
                At Tahwil, we provide workshops, webinars, corporate training,
                <br /> and resources on wellness, mental health, nutrition, and
                personal growth.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              <p className="sm:text-xl text-lg">Wellness Consulting</p>
            </AccordionTrigger>
            <AccordionContent>
              <p className=" text-lg">
                We tailor our services to meet your unique needs, ensuring a
                property journey that’s as individual as you are
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              <p className="sm:text-xl text-lg">Wellness Programs</p>
            </AccordionTrigger>
            <AccordionContent>
              <p className=" text-lg">
                We provide personalized wellness programs, corporate wellness
                initiatives, and specialized services, including nutrition and
                fitness plans, mental health support, stress reduction retreats,
                and chronic disease prevention.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default Service;



