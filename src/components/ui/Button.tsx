import cn from "@/app/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import React, { ButtonHTMLAttributes } from "react";

export interface buttonProps
  extends VariantProps<typeof ButtonVariants>,
    ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}
<button></button>;
const Button = ({ children, className, intent, ...props }: buttonProps) => {
  return (
    <button {...props} className={cn(ButtonVariants({ intent, className }))}>
      {children}
    </button>
  );
};

const ButtonVariants = cva("flex items-center justify-center px-4 py-2 rounded-lg font-medium focus:outline-none focus:ring-2 focus:ring-offset-white dark:focus:ring-offset-black focus:ring-offset-1 disabled:opacity-60 disabled:pointer-events-none hover:bg-opacity-80", {
  variants: {
    intent: {
      primary:
        "bg-gradient-to-r from-vtsBrand-blue_medium to-vtsBrand-blue_light text-white",
      secondary: "border border-white text-blue-900 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-gray-100 focus:bg-gradient-to-r",
      danger: "bg-red-500 text-white focus:ring-red-500"
    },
  },
  defaultVariants: {
    intent: "primary",
  },
});

export default Button;
