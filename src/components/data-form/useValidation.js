import { useState } from "react"

export const useValidation = () => {
  const [validation, setValid] = useState({
    password: null,
    password_double: null,
    email: null,
  })
  const setValidation = (name, value) => {
    switch (name) {
      case 'password': {
        if (value.length < 5) {
          setValid(prev => ({ ...prev, password: 'ты пидр' }))
          break;
        }
        if (value.length < 8) {
          setValid(prev => ({ ...prev, password: 'ты vonuchka' }))
          break;
        }

        setValid(prev => ({ ...prev, password: 'ты loj' }))
        break;
      }

      default: {
        return;
      }
    }
  }

  return {
    validation,
    setValidation,
  }
}
