import { ComponentProps, ComponentPropsWithoutRef } from 'react'

import Typography from '../typography'

export type CustomButtonProps = ComponentPropsWithoutRef<'button'> & {
  asChild?: boolean
  rightIcon?: React.ReactNode
  leftIcon?: React.ReactNode
}

export const BUTTON_VARIANT = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  DANGER: 'danger',
} as const

export const BUTTON_SIZE = {
  LARGE: 'large',
  MEDIUM: 'medium',
  SMALL: 'small',
} as const

export const BUTTON_SHAPE = {
  RECTANGLE: 'rectangle',
  CIRCLE: 'circle',
} as const

export const SizeMapping: Record<
  (typeof BUTTON_SIZE)[keyof typeof BUTTON_SIZE],
  {
    fontVariant: ComponentProps<typeof Typography>['variant']
  }
> = {
  [BUTTON_SIZE.LARGE]: {
    fontVariant: 'body1',
  },
  [BUTTON_SIZE.MEDIUM]: {
    fontVariant: 'body1',
  },
  [BUTTON_SIZE.SMALL]: {
    fontVariant: 'caption2',
  },
}

export const TextButtonSizeMapping = {
  [BUTTON_SIZE.MEDIUM]: 'caption2',
} as const
