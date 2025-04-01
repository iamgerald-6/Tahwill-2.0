import { VariantProps, cva } from "class-variance-authority";
import { HTMLAttributes, forwardRef } from "react";
import { cn } from "@/app/lib/utils"; // Ensure you have a `cn` utility for merging classes

const textVariants = cva("tracking-normal", {
  variants: {
    variant: {
      header: "text-black",
      desc: "text-gray-600",
      link: "text-blue-600",
    },
    size: {
      xs: "text-xs",
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg",
      xl: "text-xl",
      xxl: "text-2xl",
      xxxl: "text-3xl",
      xxxxl: "text-4xl",
    },
    font: {
      light: "font-light",
      medium: "font-medium",
      normal: "font-normal",
      semibold: "font-semibold",
      bold: "font-bold",
    },
    spacing: {
      wide: "tracking-wider",
      wider: "tracking-widest",
    },
    case: {
      uppercase: "uppercase",
      lowercase: "lowercase",
      capitalize: "capitalize",
      normal: "normal-case",
    },
  },
  defaultVariants: {
    variant: "header",
    size: "md",
    font: "normal",
  },
});

interface Props
  extends HTMLAttributes<HTMLLabelElement>,
    VariantProps<typeof textVariants> {}

const Label = forwardRef<HTMLLabelElement, Props>(
  (
    {
      children,
      variant,
      size,
      font,
      spacing,
      case: textCase,
      className,
      ...props
    },
    ref
  ) => {
    return (
      <label
        ref={ref}
        {...props}
        className={cn(
          textVariants({ variant, size, font, spacing, case: textCase }),
          className
        )}
      >
        {children}
      </label>
    );
  }
);

Label.displayName = "Label";

export { textVariants, Label };
