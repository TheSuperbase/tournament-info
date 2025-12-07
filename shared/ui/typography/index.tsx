import type { ComponentPropsWithoutRef, ElementType } from "react";

import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { TYPOGRAPHY_VARIANT } from "./variants";

export const typographyVariants = cva("", {
  variants: {
    variant: {
      [TYPOGRAPHY_VARIANT.HEADLINE_1]: "typography-headline-1", // 32px / 36px
      [TYPOGRAPHY_VARIANT.HEADLINE_2]: "typography-headline-2", // 28px / 30px
      [TYPOGRAPHY_VARIANT.HEADLINE_3]: "typography-headline-3", // 24px / 28px
      [TYPOGRAPHY_VARIANT.HEADLINE_4]: "typography-headline-4", // 22px / 30px
      [TYPOGRAPHY_VARIANT.HEADLINE_5]: "typography-headline-5", // 18px / 24px
      [TYPOGRAPHY_VARIANT.HEADLINE_6]: "typography-headline-6", // 14px / 24px
      [TYPOGRAPHY_VARIANT.SUB_HEAD_1]: "typography-subhead-1", // 14px / 20px
      [TYPOGRAPHY_VARIANT.SUB_HEAD_2]: "typography-subhead-2", // 14px / 20px
      [TYPOGRAPHY_VARIANT.SUB_HEAD_3]: "typography-subhead-3", // 14px / 20px
      [TYPOGRAPHY_VARIANT.BODY_1]: "typography-body-1", // 16px / 24px
      [TYPOGRAPHY_VARIANT.BODY_2]: "typography-body-2", // 16px / 24px
      [TYPOGRAPHY_VARIANT.BODY_3]: "typography-body-3", // 16px / 24px
      [TYPOGRAPHY_VARIANT.BODY_4]: "typography-body-4", // 14px / 24px
      [TYPOGRAPHY_VARIANT.CAPTION_1]: "typography-caption-1", // 14px / 16px
      [TYPOGRAPHY_VARIANT.CAPTION_2]: "typography-caption-2", // 12px / 16px
      [TYPOGRAPHY_VARIANT.CAPTION_3]: "typography-caption-3", // 12px / 16px
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
