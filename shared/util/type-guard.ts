import { ReactNode, isValidElement } from 'react'

const checkNull = (input: unknown): input is null => input === null
const checkUndefined = (input: unknown): input is undefined => input === undefined
const checkBoolean = (input: unknown): input is boolean => typeof input === 'boolean'
const checkNumber = (input: unknown): input is number => typeof input === 'number'
const checkString = (input: unknown): input is string => typeof input === 'string'

const checkReactNode = (input: unknown): input is ReactNode => {
  if (Array.isArray(input)) {
    return input.every(checkReactNode)
  }
  return (
    typeof input === 'string' ||
    typeof input === 'number' ||
    typeof input === 'boolean' ||
    input === null ||
    input === undefined ||
    isValidElement(input)
  )
}

export { checkNull, checkUndefined, checkBoolean, checkNumber, checkString, checkReactNode }
