import { InputHTMLAttributes, forwardRef } from "react";
import { cn } from "@/app/lib/utils";
import { Input } from "./Input";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  errors?: string;
}

const InputComponent = forwardRef<HTMLInputElement, Props>(
  ({ label, errors, className, ...props }, ref) => {
    return (
      <div className="grid w-full gap-1">
        {label && (
          <label className="text-sm uppercase font-semibold text-primary">{label}</label>
        )}
        <Input
          ref={ref}
          {...props}
          className={cn(
            "bg-white focus:ring-2 focus:ring-indigo-400 focus:outline-none",
            className
          )}
        />
        {errors && (
          <span className="text-xs font-medium text-red-500">{errors}</span>
        )}
      </div>
    );
  }
);


InputComponent.displayName = "InputComponent";

export default InputComponent;

