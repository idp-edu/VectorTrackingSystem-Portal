import { cva, type VariantProps } from "class-variance-authority";
import { ButtonOrLink, Props as ButtonOrLinkProps } from "./ButtonOrLink";
import { cn } from "@/app/lib/utils";

const buttonStyles = cva(
  "flex items-center justify-center px-4 py-2 rounded font-medium focus:outline-none focus:ring-2 focus:ring-offset-white dark:focus:ring-offset-black focus:ring-offset-1 disabled:opacity-60 disabled:pointer-events-none hover:bg-opacity-80",
  {
    variants: {
      intent: {
        primary: "bg-brand-500 text-white",
        secondary:
          "bg-gray-200 text-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-gray-100 focus:ring-gray-500",
        danger: "bg-red-500 text-wh ite focus:ring-red-500",
      },
      fullWidth: {
        true: "w-full",
      },
      size: {
        default: "h-10 py-2 px-4 ",
        sm: "h-9 px-2 rounded-md",
      },
    },
    defaultVariants: {
      intent: "primary",
      size: "default",
      fullWidth: false,
    },
  },
);

export interface Props
  extends ButtonOrLinkProps,
    VariantProps<typeof buttonStyles> {}

export function Button({ intent, fullWidth, size, ...props }: Props) {
  return (
    <ButtonOrLink
      className={cn(buttonStyles({ intent, fullWidth, size }))}
      {...props}
    />
  );
}
