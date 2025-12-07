import type { ComponentPropsWithRef } from "react";

import { cva, type VariantProps } from "class-variance-authority";

import { BUTTON_SIZE, BUTTON_VARIANT } from "./variants";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "reset-button fixed right-[20px] bottom-[40px] flex aspect-square items-center justify-center overflow-hidden rounded-full shadow-[0_1px_3px_rgba(0,0,0,0.2)]",
  {
    variants: {
      variant: {
        [BUTTON_VARIANT.PRIMARY]: "bg-mint-700 active:bg-mint-700/40",
      },
      size: {
        [BUTTON_SIZE.MEDIUM]: "w-[3.375rem] h-[3.375rem]",
      },
      disabled: {
        true: "cursor-not-allowed opacity-40 bg-fill-disabled",
        false: "cursor-pointer",
      },
    },
    defaultVariants: {
      variant: BUTTON_VARIANT.PRIMARY,
      size: BUTTON_SIZE.MEDIUM,
      disabled: false,
    },
  }
);

type Props = ComponentPropsWithRef<"button"> &
  VariantProps<typeof buttonVariants>;

function FloatingButton({
  variant,
  size,
  disabled,
  children,
  className,
  ...props
}: Props) {
  return (
    <button
      className={cn(buttonVariants({ variant, size, disabled }), className)}
      {...props}
    >
      {children}
    </button>
  );
}

export default FloatingButton;
