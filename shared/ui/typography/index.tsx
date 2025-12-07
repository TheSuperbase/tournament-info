import type { ComponentPropsWithoutRef, ElementType } from "react";

import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { TYPOGRAPHY_VARIANT } from "./variants";

export const typographyVariants = cva("", {
  variants: {
    variant: {
      [TYPOGRAPHY_VARIANT.HEADLINE_1]: "headline1",
      [TYPOGRAPHY_VARIANT.HEADLINE_2]: "headline2",
      [TYPOGRAPHY_VARIANT.HEADLINE_3]: "headline3",
      [TYPOGRAPHY_VARIANT.HEADLINE_4]: "headline4",
      [TYPOGRAPHY_VARIANT.HEADLINE_5]: "headline5",
      [TYPOGRAPHY_VARIANT.HEADLINE_6]: "headline6",
      [TYPOGRAPHY_VARIANT.SUB_HEAD_1]: "subHead1",
      [TYPOGRAPHY_VARIANT.SUB_HEAD_2]: "subHead2",
      [TYPOGRAPHY_VARIANT.SUB_HEAD_3]: "subHead3",
      [TYPOGRAPHY_VARIANT.BODY_1]: "body1",
      [TYPOGRAPHY_VARIANT.BODY_2]: "body2",
      [TYPOGRAPHY_VARIANT.BODY_3]: "body3",
      [TYPOGRAPHY_VARIANT.BODY_4]: "body4",
      [TYPOGRAPHY_VARIANT.CAPTION_1]: "caption1",
      [TYPOGRAPHY_VARIANT.CAPTION_2]: "caption2",
      [TYPOGRAPHY_VARIANT.CAPTION_3]: "caption3",
    },
  },
  defaultVariants: {
    variant: TYPOGRAPHY_VARIANT.BODY_1,
  },
});

type TypographyProps = ComponentPropsWithoutRef<"span"> & {
  component?: ElementType;
  asChild?: boolean;
} & VariantProps<typeof typographyVariants>;

function Typography({
  component = "span",
  variant,
  className = "",
  asChild,
  ...props
}: TypographyProps) {
  const Component = asChild ? Slot : component;

  return (
    <Component
      className={`${typographyVariants({ variant })} ${className}`}
      {...props}
    />
  );
}

export default Typography;
