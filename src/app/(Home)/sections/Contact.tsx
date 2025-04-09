
"use client"
import React from "react"
import InputComponent from "@/app/components/Inputs";

import { Button } from "@/app/components/Button";
import { z } from "zod";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import apiRoutes from "@/app/apiRoutes";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

   const EmailState = z.object({
     email: z
       .string()
       .min(1, { message: "Email is required" })
       .email({ message: "Invalid email address" }),
   });
 
  const Contact = () => {
  type emailType = z.infer<typeof EmailState>;
 const {
   register,
   formState: { errors },
   handleSubmit,
   reset,
 } = useForm<emailType>({
   resolver: zodResolver(EmailState),
   defaultValues: { email: "" },
 });
    
    const postMail = async (data:emailType) => {
      const res = await axios.post(apiRoutes.mail.sendMail, { email: data.email })
      return res.data
    }

    const { mutate,isPending } = useMutation({
      mutationFn: postMail,
      onSuccess: (data) => {
        if (data) {
          toast.success("Subscribed Successfully")
          reset();
        }
        else {
          toast.error("Unable to subscribe")
        }
      }
    })

    const FormSubmit: SubmitHandler<emailType> = (data) => {
      mutate(data)
    }
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
        <form onSubmit={handleSubmit(FormSubmit)}>
          <div className="grid">
            <InputComponent
              {...register("email")}
              className="border-primary rounded-xl md:w-[30vw] w-[50vw] py-4"
              type="email"
              placeholder="Enter your email"
              errors={errors?.email?.message}
            />
          </div>
          <div className="w-full mt-5 flex flex-col items-center">
            <Button loading={isPending} className=" rounded-xl border border-primary text-primary px-10">
              Send
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;


