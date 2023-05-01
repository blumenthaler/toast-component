import React from "react";
import useEscapeKey from "../../hooks/useEscapeKey";

export const ToastContext = React.createContext()

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([])

  const handleAddToast = (message, variant) => {
    const toastToAdd = {
      id: crypto.randomUUID(),
      message,
      variant
    }
    setToasts([...toasts, toastToAdd])
  }

  const handleDismissToast = (toastId) => {
    const foundIndex = toasts?.findIndex(t => t?.id === toastId)
    const toastsCopy = [...toasts]
    toastsCopy.splice(foundIndex, 1)
    setToasts(toastsCopy)
  }

  const handleEscapeKeyCallback = React.useCallback(() => {
    setToasts([])
  }, [])

  useEscapeKey(handleEscapeKeyCallback)

  return (
    <ToastContext.Provider 
      value={{
        toasts, 
        handleAddToast,
        handleDismissToast
      }}
    >
      {children}
    </ToastContext.Provider>
  )
}

export default ToastProvider;
