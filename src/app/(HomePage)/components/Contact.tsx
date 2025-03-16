import React from "react"
import { Calendar } from "lucide-react";
import { MapPin } from "lucide-react";
import InputComponent from "@/app/components/Inputs";
import { Textarea } from "@/app/components/TextArea";
import { Button } from "@/app/components/Button";
const Contact = () => {
  return (
    <div className="grid grid-cols-2 gap-2 xl:px-24 lg:px-16 py-24">
      <div>
        <h3 className="text-3xl font-semibold bg-gradient-to-r from-primary to-primary-100 bg-clip-text text-transparent inline-block">
          Get In Touch With Us
        </h3>
        <p className="text-lg text-primary w-[75%]">
          Need expert wellness solutions? Contact us for guidance on corporate
          programs, nutrition, and business support. Let&apos;s create a
          healthier future together.
        </p>
        <div className="text-primary flex mt-3">
          <div className="border-r pe-3">
            <div className="flex gap-2 pb-1">
              <MapPin size={20} />
              <span className="uppercase text-sm">Location</span>
            </div>
            <p className="text-xs">34 Sani Zangon daura, estate Kado</p>
          </div>
          <div className="px-3">
            <div className="flex gap-2 pb-1">
              <Calendar size={20} />
              <span className="uppercase text-sm">Contacts</span>
            </div>
            <p className="text-xs">Phone: 08088370727</p>
            <p className="text-xs">Email: tahwilsolutions@gmail.com</p>
          </div>
        </div>
      </div>
      <div>
        <form>
          <div className="grid gap-5">
            <InputComponent
              className="border-primary"
              label="Name"
              type="text"
            />
            <InputComponent
              className="border-primary"
              label="Email"
              type="email"
            />
            <div className="grid gap-0.5">
              <label
                htmlFor="message"
                className="text-sm font-semibold text-primary uppercase"
              >
                Message
              </label>
              <Textarea className="border-primary" />
            </div>
          </div>
          <div className="w-full mt-5 ">
            <Button className=" rounded-none w-full border border-primary shadow-none hover:shadow-none hover:border-primary-200 text-primary hover:text-primary-200">
              Send
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact