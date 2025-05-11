"use client";
import apiRoutes from "@/app/apiRoutes";
import { Button } from "@/app/components/Button";
import InputComponent from "@/app/components/Inputs";
import { Modal } from "@/app/components/Modal";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/app/components/Select";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

import { useForm, type SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
const PaymentState = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Invalid email address" }),
  amount: z.string().min(1, { message: "Amount is Required" }),
  currency: z.string().min(1, { message: "Required" }),
});
interface ModalType {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  tierName: string;
}
const ModalPayment = ({ open, setOpen, tierName }: ModalType) => {
  type paymentType = z.infer<typeof PaymentState>;
  console.log(tierName, "testing tiername");
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    setValue,
  } = useForm<paymentType>({
    resolver: zodResolver(PaymentState),
    defaultValues: { email: "", currency: "NGN" },
  });

  const CurrencyArr = [{ id: 1, name: "NGN" }];
  const postMail = async (data: paymentType) => {
    const res = await axios.post(apiRoutes.payment.paymentApi, {
      email: data.email,
      amount: Number(data.amount),
      currency: data.currency || "NGN",

      tier_name: tierName,
    });
    return res.data;
  };

  const { mutate, isPending } = useMutation({
    mutationFn: postMail,
    onSuccess: (data) => {
      if (data && data.authorization_url) {
        toast.success("Payment initialized successfully!");
        window.location.href = data.authorization_url;
      } else {
        toast.error("Unable to initialize payment.");
      }
      reset();
    },
    onError: () => {
      toast.error("An error occurred during payment initialization.");
    },
  });

  const FormSubmit: SubmitHandler<paymentType> = (data) => {
    mutate(data);
  };
  return (
    <Modal
      size="xl"
      open={open}
      setOpen={setOpen}
      title="Payment Form"
      setter="state"
    >
      <div className="flex flex-col justify-center items-center">
        <form onSubmit={handleSubmit(FormSubmit)}>
          <div className="grid gap-3 text-sm">
            <InputComponent
              label="Email"
              type="email"
              placeholder="Enter Email"
              {...register("email")}
              className="rounded-sm"
              errors={errors.email?.message}
            />
            <InputComponent
              label="Amount"
              type="text"
              // read-only
              placeholder="Enter Amount"
              {...register("amount")}
              errors={errors.amount?.message}
            />
            <h3 className="font-bold text-primary">Currency</h3>
            <Select onValueChange={(val: string) => setValue("currency", val)}>
              <SelectTrigger className="w-[180px] text-sm">
                <SelectValue placeholder="NGN" />
              </SelectTrigger>
              <SelectContent className="bg-white">
                <SelectGroup>
                  <SelectLabel className="text-sm font-semibold uppercase text-primary">
                    Currency
                  </SelectLabel>
                  {CurrencyArr.map((item) => (
                    <SelectItem key={item.id} value={item.name}>
                      {item.name}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
            <div>
              <Button
                className="bg-primary text-sm flex gap-2 items-center"
                loading={isPending}
                type="submit"
              >
                Pay now
              </Button>
            </div>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default ModalPayment;
