"use client";

import {
  type ComponentProps,
  forwardRef,
  useCallback,
  useId,
  useState,
} from "react";

import { cva, type VariantProps } from "class-variance-authority";

import Typography from "../typography";
import { cn } from "@/lib/utils";

export const INPUT_SIZE = {
  MEDIUM: "medium",
} as const;

const inputVariants = cva(
  "flex flex-row items-center rounded-[8px] py-[0.625rem] pl-[0.75rem] pr-[0.625rem]",
  {
    variants: {
      variant: {
        default:
          "bg-semantic-color-fill-secondary border-[1.5px] border-solid border-transparent",
        outline: "bg-white border-[1.5px] border-solid border-[#EFEFEF]",
      },
      size: {
        [INPUT_SIZE.MEDIUM]:
          "h-[3.125rem] text-base font-medium leading-[1.375rem]",
      },
      isActive: {
        true: "border-[1.5px] border-solid border-semantic-border-success",
        false: "",
      },
      isError: {
        true: "border-[1.5px] border-solid border-semantic-border-danger",
        false: "",
      },
      isFocused: {
        true: "border-[1.5px] border-solid border-semantic-border-secondary",
        false: "",
      },
      fullWidth: {
        true: "w-full",
        false: "w-[20.938rem]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: INPUT_SIZE.MEDIUM,
      isActive: false,
      isFocused: false,
      isError: false,
      fullWidth: false,
    },
  }
);

type Props = Omit<VariantProps<typeof inputVariants>, "isFocused"> &
  Omit<ComponentProps<"input">, "size"> & {
    label?: string;
  };

const Input = forwardRef<HTMLInputElement, Props>(function TextField(
  {
    variant,
    size,
    isActive,
    isError,
    fullWidth,
    className,
    value,
    onChange,
    label,
    id,
    ...props
  },
  ref
) {
  const [isFocused, setIsFocused] = useState(false);
  const inputId = useId();
  const resolvedId = id || inputId;

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange?.(e);
    },
    [onChange]
  );

  return (
    <div className="flex flex-col gap-[0.375rem]">
      {label && (
        <Typography asChild variant="caption1" className="text-[#222]">
          <label htmlFor={resolvedId}>{label}</label>
        </Typography>
      )}
      <div
        className={cn(
          inputVariants({ variant, size, isActive, isError, isFocused, fullWidth }),
          className
        )}
      >
        <input
          ref={ref}
          id={resolvedId}
          className={
            "w-full bg-transparent focus:ring-0 focus:outline-none placeholder:text-[#DBDBDB]"
          }
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          value={value}
          onChange={handleChange}
          {...props}
        />
      </div>
    </div>
  );
});

export default Input;
