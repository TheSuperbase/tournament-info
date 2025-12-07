'use client'

import type { ReactNode } from 'react'
import { useState } from 'react'

import { AlertContext } from '@/shared/context/alertContext'
import type { AlertProps } from '@/shared/ui/alert'
import Alert from '@/shared/ui/alert'
import Portal from '@/shared/ui/portal'

export const AlertProvider = ({ children }: { children: ReactNode }) => {
  const [alertProps, setAlertProps] = useState<AlertProps | null>(null)

  const showAlert = (props: AlertProps) => {
    setAlertProps(props)
  }
  const hideAlert = () => {
    setAlertProps(null)
  }
  return (
    <AlertContext.Provider value={{ showAlert, hideAlert }}>
      {children}
      {alertProps && (
        <Portal>
          <Alert
            mode={alertProps.mode}
            title={alertProps.title}
            description={alertProps.description}
            buttonLabel={alertProps.buttonLabel}
            submitButtonLabel={alertProps.submitButtonLabel}
            cancelButtonLabel={alertProps.cancelButtonLabel}
            onButtonPress={() => {
              alertProps.onButtonPress?.()
              hideAlert()
            }}
            onSubmitButtonPress={() => {
              alertProps.onSubmitButtonPress?.()
              hideAlert()
            }}
            onCancelButtonPress={() => {
              alertProps.onCancelButtonPress?.()
              hideAlert()
            }}
            isNegativeSubmit={alertProps.isNegativeSubmit}
          />
        </Portal>
      )}
    </AlertContext.Provider>
  )
}
