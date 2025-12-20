import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

type Props = ComponentProps<"button">;

function MenuItem({ children, className, ...props }: Props) {
  return (
    <button
      className={cn(
        "py-[10px] w-full typography-body-2 text-start text-semantic-text-secondary",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export default MenuItem;
