import IconsMap, { IconName } from "@/shared/assets/icons";
import type { ComponentPropsWithoutRef, ElementType } from "react";

type Props = {
  name: IconName;
  width?: number; // Make optional
  height?: number; // Make optional
  className?: string;
  ariaLabel?: string;
} & ComponentPropsWithoutRef<"span">; // Change to span or generic to avoid specific SVG props conflation

function Icon({ name, width, height, className, ariaLabel, ...props }: Props) {
  const IconComponent = IconsMap[name] as ElementType;

  // Ant Design Icons use style={{ fontSize }} for sizing usually, or className.
  // SVGs use width/height.
  // We can pass width/height to both, but standard HTML/SVG attributes might complain on Ant Icons if strict.
  // However, Ant Icons often pass through unknown props to the underlying `span` or `svg`.

  return (
    <IconComponent
      width={width}
      height={height}
      className={className}
      aria-label={ariaLabel}
      role="img"
      style={{
        fontSize: width ? `${width}px` : undefined,
        ...props.style,
      }}
      {...props}
    />
  );
}

export default Icon;
