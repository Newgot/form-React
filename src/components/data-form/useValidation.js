import {useState} from "react"

export const useValidation = () => {
    const [validation, setValid] = useState({
        password: null,
        password_double: null,
        email: null,
    })
    const setValidation = (name, value, text, password_first) => {
        switch (name) {
            case 'password': {
                if (!value.length) {
                    setValid(prev => ({...prev, password: `Укажите ${text}`}))
                    break;
                }
                if (value.length < 5) {
                    setValid(prev => ({...prev, password: "Используйте не менее 5 символов"}))
                    break;
                }
                setValid(prev => ({...prev, password: null}))
                break;
            }
            case "password_double" : {
                if (!value.length) {
                    setValid(prev => ({...prev, password_double: `Укажите ${text}`}))
                    break;
                }
                if (value !== password_first) {
                    setValid(prev => ({...prev, password_double: "Пароли не совпадают"}))
                    break;
                }

                setValid(prev => ({...prev, password_double: null}))
                break
            }
            case "email" : {
                if (!value.length) {
                    setValid(prev => ({...prev, email: `Укажите ${text}`}))
                    break;
                }
                const reg = /\S+@\S+\.\S+/
                if (!reg.test(value)) {
                    setValid(prev => ({...prev, email: "Неверный E-mail"}))
                    break
                    }

                setValid(prev => ({...prev, email: null}))
                break
            }

        }
    }

    return {
        validation,
        setValidation,
    }
}
