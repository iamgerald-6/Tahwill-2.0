
import React from "react"
import InputComponent from "@/app/components/Inputs";

import { Button } from "@/app/components/Button";
const Contact = () => {
  return (
    <div className="flex flex-col items-center gap-2 px-8  py-24">
      <div className="w-full flex flex-col items-center">
        <h3 className="text-6xl text-center bg-gradient-to-r from-primary to-primary-100 bg-clip-text text-transparent inline-block">
          Stay Updated
        </h3>
        <p className="text-center text-sm mt-3">
          Receive regular updates and valuable insights to support your
          <br />
          ongoing wellness journey.
        </p>
      </div>
      <div className="mt-5">
        <form>
          <div className="grid">
            <InputComponent
              className="border-primary rounded-xl md:w-[30vw] w-[50vw] py-4"
              type="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="w-full mt-5 flex flex-col items-center">
            <Button className=" rounded-xl border border-primary text-primary px-10">
              Send
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;


//  <div className="lg:flex mt-20 gap-20 ">
//   <p className=" md:text-6xl text-5xl  text-primary-400 px-7 md:px-0">
//     Why
//     <br className="lg:block hidden" /> Choose
//     <br className="lg:block hidden" /> us ?
//   </p>
//   <div className="md:block hidden">
//     <div className="border-b border-b-primary-400 py-14 text-primary-400 flex justify-between">
//       <span className="text-4xl uppercase">Luxury Comfort</span>
//       <span className="text-2xl w-[50%]">
//         Exceptional design, premium
//         <br /> amenities, and unmatched Comfort, For your refined lifestyle.
//       </span>
//     </div>
//     <div className="border-b border-b-primary-400 py-14 text-primary-400 flex justify-between">
//       <span className="text-4xl uppercase">Personalised experience</span>
//       <span className="text-2xl w-[50%]">
//         We tailor our services to meet your unique needs, ensuring a property
//         journey that’s as individual as you are
//       </span>
//     </div>
//     <div className="border-b border-b-primary-400 py-14 text-primary-400 flex justify-between">
//       <span className="text-4xl uppercase">
//         Trustworthiness <br />
//         and reliability
//       </span>
//       <span className="text-2xl w-[50%]">
//         Count on us for honest advice, dependable service, and a seamless
//         experience.
//       </span>
//     </div>
//     <div className="border-b border-b-primary-400 py-14 text-primary-400 flex justify-between">
//       <span className="text-4xl uppercase">Expert Guidance</span>
//       <span className="text-2xl w-[50%]">
//         Benefit from our in-depth market knowledge and professional advice every
//         step of the way.
//       </span>
//     </div>
//   </div>
//   <div className="md:hidden block px-7 mt-10 ">
//     <Accordion type="single" collapsible className="w-full">
//       <AccordionItem value="item-1">
//         <AccordionTrigger>
//           <p className="sm:text-xl text-lg">Luxury Comfort</p>
//         </AccordionTrigger>
//         <AccordionContent>
//           <p className=" text-lg">
//             Exceptional design, premium amenities, and unmatched Comfort, For
//             your refined lifestyle.
//           </p>
//         </AccordionContent>
//       </AccordionItem>
//       <AccordionItem value="item-2">
//         <AccordionTrigger>
//           <p className="sm:text-xl text-lg">Personalised experience</p>
//         </AccordionTrigger>
//         <AccordionContent>
//           <p className=" text-lg">
//             We tailor our services to meet your unique needs, ensuring a
//             property journey that’s as individual as you are
//           </p>
//         </AccordionContent>
//       </AccordionItem>
//       <AccordionItem value="item-3">
//         <AccordionTrigger>
//           <p className="sm:text-xl text-lg">Trustworthiness and reliability</p>
//         </AccordionTrigger>
//         <AccordionContent>
//           <p className=" text-lg">
//             Count on us for honest advice, dependable service, and a seamless
//             experience.
//           </p>
//         </AccordionContent>
//       </AccordionItem>
//       <AccordionItem value="item-4">
//         <AccordionTrigger>
//           <p className="sm:text-xl text-lg">Expert Guidance</p>
//         </AccordionTrigger>
//         <AccordionContent>
//           <p className=" text-lg">
//             Benefit from our in-depth market knowledge and professional advice
//             every step of the way.
//           </p>
//         </AccordionContent>
//       </AccordionItem>
//     </Accordion>
//   </div>
//       </div>