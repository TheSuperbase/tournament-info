import clsx from 'clsx'
import { type ClassNameValue, twMerge } from 'tailwind-merge'

const cn = (...inputs: ClassNameValue[]) => {
  return twMerge(clsx(inputs))
}

export { cn }
