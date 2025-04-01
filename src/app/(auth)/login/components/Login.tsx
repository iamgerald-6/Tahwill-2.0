/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Image from "next/image";
import { Button } from "@/app/components/Button";
import z from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import api from "@/app/utils/api";
import apiRoutes from "@/app/apiRoutes";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useAppDispatch } from "@/app/apps/hook";
import { setAccessToken } from "@/app/features/UserSlice";

import InputComponent from "@/app/components/Inputs";
const loginState = z.object({
  email: z.string().min(1, { message: "Email is required" }),
  password: z.string().min(1, { message: "Password is required" }),
});
const Login = () => {
  type loginType = z.infer<typeof loginState>;
  const {
    register,
    formState: { errors },
    handleSubmit,
    // watch,
    // setValue,
  } = useForm<loginType>({
    resolver: zodResolver(loginState),
    defaultValues: {},
  });
  const router = useRouter();
  const dispatch = useAppDispatch();
  const postLogin = async (data: loginType) => {
    const res = await api.post(apiRoutes.Auth.login, {
      email: data.email,
      password: data.password,
    });
    return res.data;
  };
  const { mutate, isPending } = useMutation({
    mutationFn: postLogin,
    onSuccess: (data) => {
      if (data) {
        toast("Successfully logged in");
        dispatch(setAccessToken(data.token));
        console.log("login data", data?.data);
        // navigate(redirectUrl || "/dashboard");
        router.replace("/dashboard");
      } else {
        toast.error("Something Went Wrong");
      }
    },
    onError: (error: any) => {
      const errorMessage =
        error?.response?.data?.message ||
        error?.message ||
        "An unexpected error occurred";

      toast.warning(errorMessage);
    },
  });
  const SubmitForm: SubmitHandler<loginType> = (data) => {
    mutate(data);
  };
  return (
    <div className="min-h-screen flex justify-center items-center ">
      <div className="flex flex-col justify-center items-center shadow-lg rounded-md py-5 px-12">
        <div className="">
          <div className="flex flex-col items-center">
            <Image
              src="/assets/icons/Tahwil 2.svg"
              width={70}
              height={200}
              alt="image icon"
            />
            <h4 className="text-center font-semibold">
              Sign in to your account
            </h4>
          </div>

         
          <form onSubmit={handleSubmit(SubmitForm)}>
            <div className="grid gap-6 w-[100%]">
              <InputComponent
                {...register("email")}
                type="email"
                className="py-2 px-3 placeholder:text-sm"
                placeholder="Email Address"
                errors={errors?.email?.message}
              />
              <InputComponent
                {...register("password")}
                type="password"
                className="py-2 px-3 placeholder:text-sm"
                placeholder="Password"
                errors={errors?.password?.message}
              />
            </div>
            <div className="flex justify-end w-[100%] mt-1 text-primary">
              <span className="underline text-xs cursor-pointer underline-offset-2">
                Forgot password
              </span>
            </div>
            <div className="w-[100%] mt-3">
              <Button
                type="submit"
                loading={isPending}
                className="w-full py-3 text-primary border border-primary hover:border-primary-200 "
              >
                Sign In
              </Button>
            </div>
          </form>
          
        </div>
      </div>
    </div>
  );
};

export default Login;
