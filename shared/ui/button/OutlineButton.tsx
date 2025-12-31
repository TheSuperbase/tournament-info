import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import Typography from "../typography";
import {
  BUTTON_SHAPE,
  BUTTON_SIZE,
  BUTTON_VARIANT,
  type CustomButtonProps,
  SizeMapping,
} from "./variants";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "reset-button flex items-center justify-center gap-[0.25rem]",
  {
    variants: {
      variant: {
        [BUTTON_VARIANT.PRIMARY]:
          "border border-neutral-500 text-text-primary active:bg-neutral-300",
      },
      size: {
        [BUTTON_SIZE.LARGE]: "w-fit h-[3.375rem] px-[0.8rem]",
        [BUTTON_SIZE.MEDIUM]: "w-fit h-[2.5rem] px-[0.8rem]",
        [BUTTON_SIZE.SMALL]: "w-fit h-[1.625rem] px-[0.8rem]",
      },
      shape: {
        [BUTTON_SHAPE.RECTANGLE]: "rounded-[0.5rem]",
        [BUTTON_SHAPE.CIRCLE]: "rounded-full",
      },
      disabled: {
        true: "cursor-not-allowed opacity-40",
        false: "cursor-pointer hover:opacity-100",
      },
      fullWidth: {
        true: "w-full",
        false: "",
      },
    },
    defaultVariants: {
      variant: BUTTON_VARIANT.PRIMARY,
      size: BUTTON_SIZE.LARGE,
      shape: BUTTON_SHAPE.RECTANGLE,
      disabled: false,
      fullWidth: false,
    },
  }
);

type Props = VariantProps<typeof buttonVariants> & CustomButtonProps;

function OutlineButton({
  variant,
  size = BUTTON_SIZE.LARGE,
  shape = BUTTON_SHAPE.RECTANGLE,
  asChild,
  children,
  disabled = false,
  className,
  rightIcon,
  leftIcon,
  fullWidth = false,
  ...props
}: Props) {
  const Component = asChild ? Slot : "button";

  if (!size) {
    throw new Error("size is required");
  }

  return (
    <Component
      className={cn(
        buttonVariants({ variant, size, shape, disabled, fullWidth }),
        className
      )}
      {...props}
    >
      {leftIcon}
      <Typography variant={SizeMapping[size].fontVariant} color="inherit">
        {children}
      </Typography>
      {rightIcon}
    </Component>
  );
}

export default OutlineButton;
