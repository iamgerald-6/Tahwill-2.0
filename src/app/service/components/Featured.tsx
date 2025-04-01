"use client";
import { Button } from "@/app/components/Button";
import Image from "next/image";
import { useState } from "react";
import TierOne from "./ModalTierOne";
import ModalTierTwo from "./ModalTierTwo";
import ModalThree from "./ModalThree";

const Featured = () => {
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
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
              <Button className="bg-white/80 text-primary px-5 transition ease-in-out duration-500 hover:text-white hover:bg-transparent">
                Join Community
              </Button>
            </div>
          </div>
          <div className="mt-14 ">
            <div className="md:flex md:justify-between md:items-center md:px-16 px-6 text-white py-20 border-t border-gray-100  gap-16 ">
              <div className="w-10 text-lg ">01</div>
              <div className=" md:col-span-2  px-5 py-3 bg-primary/15 rounded-lg">
                <h2 className="text-4xl mt-3">Basic Consultation</h2>
                <p className="text-sm md:w-[70%] mt-3">
                  Basic Consultation is ideal for small businesses or startups
                  seeking actionable advice and quick solutions to overcome
                  challenges or identify opportunities without a long-term
                  commitment.
                </p>
                <div className="mt-3">
                  <Button
                    onClick={() => setOpen(true)}
                    className="bg-white/80 text-primary px-5 transition ease-in-out duration-500 hover:text-white hover:bg-transparent"
                  >
                    Book now
                  </Button>
                </div>
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
                  Full-Scale Business Development
                </h2>
                <p className="text-sm md:w-[70%] mt-3">
                  This offers comprehensive support for businesses looking to
                  scale, refine operations, and expand their market with a
                  strategic, hands-on approach for long-term success.
                </p>
                <div className="mt-3">
                  <Button
                    onClick={() => setOpenModal(true)}
                    className="bg-white/80 text-primary px-5 transition ease-in-out duration-500 hover:text-white hover:bg-transparent"
                  >
                    Book now
                  </Button>
                </div>
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
                <h2 className="text-4xl mt-3">Long-Term Partnership</h2>
                <p className="text-sm md:w-[70%] mt-3">
                  Long-Term Partnership provides ongoing strategic collaboration
                  to drive sustained growth, innovation, and leadership.
                </p>
                <div className="mt-3">
                  <Button
                    onClick={() => setIsOpenModal(true)}
                    className="bg-white/80 text-primary px-5 transition ease-in-out duration-500 hover:text-white hover:bg-transparent"
                  >
                    Book now
                  </Button>
                </div>
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
        </div>
      </div>
      <TierOne open={open} setOpen={setOpen} />
      <ModalTierTwo open={openModal} setOpen={setOpenModal} />
      <ModalThree open={isOpenModal} setOpen={setIsOpenModal} />
    </div>
  );
};

export default Featured;
