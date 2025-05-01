"use client";
import { Button } from "@/app/components/Button";
import Image from "next/image";
import { useState } from "react";
// import TierOne from "./ModalTierOne";
// import ModalTierTwo from "./ModalTierTwo";
// import ModalThree from "./ModalThree";
import Community from "@/app/components/Community";
import BookAppointment from "../../sections/BookAppointment";

const Featured = () => {
  // const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  // const [isOpenModal, setIsOpenModal] = useState(false);
  const [modal, setModal] = useState(false);
  return (
    <div className="mt-24">
      <div className="bg-[#01051B]">
        <div className=" py-7 text-white">
          <div className="flex flex-col md:px-16 px-10 gap-4">
            <h3 className="text-4xl">
              Discover
              <br className="md:block hidden" /> Programs
            </h3>
            <h3 className=" md:w-[40%] text-sm text-white mt-3">
              We believe wellness is a collective journey. That’s why we’re
              building a robust, interconnected wellness ecosystem across
              Nigeria and Africa, providing the support you need to achieve
              sustainable, optimal health.
            </h3>
            <div>
              <Button
                onClick={() => setModal(true)}
                className="bg-white/80 text-primary px-5 transition ease-in-out duration-500 hover:text-white hover:bg-transparent"
              >
                Join Community
              </Button>
            </div>
          </div>
          <div className="mt-14 ">
            <div className="md:flex md:justify-between md:items-center md:px-16 px-6 text-white py-20 border-t border-gray-100  gap-16 ">
              <div className="w-10 text-lg ">01</div>
              <div className=" md:col-span-2  px-5 py-3 bg-primary/15 rounded-lg">
                <h2 className="text-4xl mt-3">
                  Wellness Education and Empowerment
                </h2>
                <p className="text-sm md:w-[70%] mt-3">
                  We deliver wellness education programs that empower
                  individuals and organizations to build balanced, sustainable
                  lives through workshops, webinars, and online resources
                </p>
                {/* <div className="mt-3">
                  <Button
                    onClick={() => setOpen(true)}
                    className="bg-white/80 text-primary px-5 transition ease-in-out duration-500 hover:text-white hover:bg-transparent"
                  >
                    Book now
                  </Button>
                </div> */}
              </div>
              <div>
                <Image
                  src={"/assets/featured.jpg"}
                  alt="featured image1"
                  width={350}
                  height={500}
                />
              </div>
            </div>
            <div className="md:flex md:justify-between md:items-center md:px-16 px-6 text-white py-20 border-t border-gray-100  gap-16 ">
              <div className="w-10 text-lg ">02</div>
              <div className=" md:col-span-2  px-5 py-3 bg-primary/15 rounded-lg">
                <h2 className="text-4xl mt-3">
                  Business Development Consulting for Wellness Entrepreneurs
                </h2>
                <p className="text-sm md:w-[70%] mt-3">
                  We help wellness entrepreneurs and businesses build
                  sustainable, high-impact ventures through strategic consulting
                  in branding, marketing, operations, and growth.
                </p>
                {/* <div className="mt-3">
                  <Button
                    onClick={() => setOpenModal(true)}
                    className="bg-white/80 text-primary px-5 transition ease-in-out duration-500 hover:text-white hover:bg-transparent"
                  >
                    Book now
                  </Button>
                </div> */}
              </div>
              <div>
                <Image
                  src={"/assets/sevciceImage.jpg"}
                  alt="featured image1"
                  width={260}
                  height={500}
                />
              </div>
            </div>
            <div className="md:flex md:justify-between md:items-center md:px-16 px-6 text-white py-20 border-t border-gray-100  gap-16 ">
              <div className="w-10 text-lg ">03</div>
              <div className=" md:col-span-2  px-5 py-3 bg-primary/15 rounded-lg">
                <h2 className="text-4xl mt-3">
                  Tailored Individual Wellness Programs
                </h2>
                <p className="text-sm md:w-[70%] mt-3">
                  Our personalized wellness plans use data-driven and culturally
                  relevant guidance to support holistic health across nutrition,
                  fitness, mental well-being, and lifestyle.
                </p>
                {/* <div className="mt-3">
                  <Button
                    onClick={() => setIsOpenModal(true)}
                    className="bg-white/80 text-primary px-5 transition ease-in-out duration-500 hover:text-white hover:bg-transparent"
                  >
                    Book now
                  </Button>
                </div> */}
              </div>
              <div>
                <Image
                  src={"/assets/about-home.png"}
                  alt="featured image1"
                  width={250}
                  height={500}
                />
              </div>
            </div>
            <div className="md:flex md:justify-between md:items-center md:px-16 px-6 text-white py-20 border-t border-gray-100  gap-16 ">
              <div className="w-10 text-lg ">04</div>
              <div className=" md:col-span-2  px-5 py-3 bg-primary/15 rounded-lg">
                <h2 className="text-4xl mt-3">Corporate Wellness Programs</h2>
                <p className="text-sm md:w-[70%] mt-3">
                  We work with organizations to develop custom workplace
                  wellness programs that improve employee health, engagement,
                  and performance.
                </p>
                {/* <div className="mt-3">
                  <Button
                    onClick={() => setIsOpenModal(true)}
                    className="bg-white/80 text-primary px-5 transition ease-in-out duration-500 hover:text-white hover:bg-transparent"
                  >
                    Book now
                  </Button>
                </div> */}
              </div>
              <div>
                <Image
                  src={"/assets/about-home.png"}
                  alt="featured image1"
                  width={250}
                  height={500}
                />
              </div>
            </div>
            <div className="md:flex md:justify-between md:items-center md:px-16 px-6 text-white py-20 border-t border-gray-100  gap-16 ">
              <div className="w-10 text-lg ">05</div>
              <div className=" md:col-span-2  px-5 py-3 bg-primary/15 rounded-lg">
                <h2 className="text-4xl mt-3">
                  Wellness Ecosystem Development
                </h2>
                <p className="text-sm md:w-[70%] mt-3">
                  We are building a vibrant, interconnected wellness ecosystem
                  that brings together a diverse network of vetted and licensed
                  wellness professionals, including nutritionists, therapists,
                  fitness coaches, health and life coaches, naturopaths, herbal
                  medicine practitioners, holistic health practitioners, and
                  organic farm-to-table supply chains.
                </p>
                {/* <div className="mt-3">
                  <Button
                    onClick={() => setIsOpenModal(true)}
                    className="bg-white/80 text-primary px-5 transition ease-in-out duration-500 hover:text-white hover:bg-transparent"
                  >
                    Book a Consultation
                  </Button>
                </div> */}
              </div>
              <div>
                <Image
                  src={"/assets/about-home.png"}
                  alt="featured image1"
                  width={250}
                  height={500}
                />
              </div>
            </div>
          </div>
          <div className="mt-3 flex justify-center">
            <Button
              onClick={() => setOpenModal(true)}
              className="bg-white/80 text-primary px-5 transition ease-in-out duration-500 hover:text-white hover:bg-transparent"
            >
              Book a Consultation
            </Button>
          </div>
        </div>
      </div>
      {/* <TierOne open={open} setOpen={setOpen} />
      <ModalTierTwo open={openModal} setOpen={setOpenModal} />
      <ModalThree open={isOpenModal} setOpen={setIsOpenModal} /> */}
      <BookAppointment open={openModal} setOpen={setOpenModal} />
      <Community open={modal} setOpen={setModal} />
    </div>
  );
};

export default Featured;
