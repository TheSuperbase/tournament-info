import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import Typography from "../typography";
import {
  BUTTON_SIZE,
  BUTTON_VARIANT,
  type CustomButtonProps,
  TextButtonSizeMapping,
} from "./variants";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "reset-button flex items-center justify-center rounded-[0.5rem] gap-[0.25rem]",
  {
    variants: {
      variant: {
        [BUTTON_VARIANT.PRIMARY]: "text-text-tertiary active:bg-neutral-300",
      },
      size: {
        [BUTTON_SIZE.MEDIUM]:
          "min-w-[5rem] h-[2.5rem] py-[0.375rem] px-[0.25rem]",
      },
      disabled: {
        true: "cursor-not-allowed opacity-40 bg-fill-disabled",
        false: "cursor-pointer hover:opacity-100",
      },
    },
    defaultVariants: {
      variant: BUTTON_VARIANT.PRIMARY,
      size: BUTTON_SIZE.MEDIUM,
      disabled: false,
    },
  }
);

type Props = VariantProps<typeof buttonVariants> & CustomButtonProps;

function TextButton({
  variant,
  size = BUTTON_SIZE.MEDIUM,
  asChild,
  children,
  disabled = false,
  className,
  rightIcon,
  leftIcon,
  ...props
}: Props) {
  const Component = asChild ? Slot : "button";

  if (!size) {
    throw new Error("size is required");
  }

  return (
    <Component
      className={cn(buttonVariants({ variant, size, disabled }), className)}
      {...props}
    >
      {leftIcon}
      <Typography variant={TextButtonSizeMapping[size]} color="inherit">
        {children}
      </Typography>
      {rightIcon}
    </Component>
  );
}

export default TextButton;
