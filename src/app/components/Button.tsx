/* eslint-disable react/display-name */
import { cn } from "@/app/lib/utils";
import { Loader } from "@mantine/core";
import { VariantProps, cva } from "class-variance-authority";
import { ButtonHTMLAttributes, forwardRef } from "react";

const buttonVariants = cva(
  "font-semibold text-sm rounded-[40px] disabled:cursor-not-allowed flex items-center justify-center  border-2 transition-colors duration-200",
  {
    variants: {
      variant: {
        primary:
          "border  border-white text-white font-semibold bg-transparent hover:border-primary",
        outline:
          "border-green-300 text-primary bg-white dark:bg-grey-400 dark:text-green-100 hover:border-primary-200",
        warning: "border-red-500 text-red-500 bg-white hover:border-red-400",
        filter:
          "border-gray-300 text-black bg-white border-dashed hover:border-primary-200",
        ghost:
          "border-0 bg-white text-black hover:bg-gray-100 shadow-none hover:border-transparent",
      },
      size: {
        primary: "px-4 py-2",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "primary",
    },
  }
);

interface Props
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  loading?: boolean;
  loadingText?: string;
}

const Button = forwardRef<HTMLButtonElement, Props>(
  (
    { className, size, variant, loading, loadingText, children, ...props },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ size, variant }), className)}
        {...props}
      >
        {loading ? (
          <>
            <Loader color={variant === "primary" ? "gray" : "blue"} size="sm" />
            {loadingText && <span className="ml-2">{loadingText}</span>}
          </>
        ) : (
          children
        )}
      </button>
    );
  }
);

export { Button, buttonVariants };
