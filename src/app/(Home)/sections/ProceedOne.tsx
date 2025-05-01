"use client";
import { ArrowRight } from "lucide-react";
import { Button } from "@/app/components/Button";
import ModalPayment from "./ModalPayment";
import { useState } from "react";

const ProceedOne = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="mt-5 flex flex-col items-center justify-center px-5 ">
      <div className="flex justify-between text-primary text-sm py-3 px-4 border-t border-gray-100 w-full">
        <span> Tier Name:</span>
        <span>Basic Consultation</span>
      </div>
      <div className="flex justify-between text-primary text-sm py-3 px-4 border-b border-t  border-gray-100 w-full">
        <span> Amount:</span>
        <span>N150,000</span>
      </div>
      <div className="mt-10">
        <Button
          onClick={() => setIsOpen(true)}
          className="bg-primary text-sm flex gap-2 items-center"
        >
          Proceed to Payment
          <ArrowRight size={20} className="animate-arrow-loop" />
        </Button>
      </div>
      <ModalPayment
        open={isOpen}
        setOpen={setIsOpen}
        tierName="Basic Consultation"
      />
    </div>
  );
};

export default ProceedOne;
