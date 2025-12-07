import IconsMap, { IconName } from "@/shared/assets/icons";
import type { ComponentPropsWithoutRef } from "react";

type Props = {
  name: IconName;
  width: number;
  height: number;
  className?: string;
  ariaLabel?: string;
} & ComponentPropsWithoutRef<"svg">;

function Icon({ name, width, height, className, ariaLabel, ...props }: Props) {
  const IconComponent = IconsMap[name];

  return (
    <IconComponent
      width={width}
      height={height}
      className={className}
      aria-label={ariaLabel}
      role="img"
      {...props}
    />
  );
}

export default Icon;
