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
  "bg-white flex flex-row w-[20.938rem] items-center rounded-[8px] py-[0.625rem] pl-[0.75rem] pr-[0.625rem] border-[1.5px] border-solid border-[#EFEFEF]",
  {
    variants: {
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
    },
    defaultVariants: {
      size: INPUT_SIZE.MEDIUM,
      isActive: false,
      isFocused: false,
      isError: false,
    },
  }
);

type Props = Omit<VariantProps<typeof inputVariants>, "isFocused"> &
  Omit<ComponentProps<"input">, "size"> & {
    label?: string;
  };

const Input = forwardRef<HTMLInputElement, Props>(function TextField(
  { size, isActive, isError, className, value, onChange, label, id, ...props },
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
          inputVariants({ size, isActive, isError, isFocused }),
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
