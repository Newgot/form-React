export const validateInput = (
    text = "",
    {
        min = 0,
        max = 0,
        email = false,
        require = false,
        requireName = "",
        }
) => {
    if (require && text.length === 0) {
        return {
            erMessage: `Укажите ${requireName}`
        }
    } else if (min > 0 && text.length <= min) {
        return {
            erMessage: `Используйте не менее ${min} символов`
        }
    } else if (max > 0 && text.length >= max) {
        return {
            erMessage: `Используйте не более ${max} символов`
        }
    } else if (email) {
        const reg = /^([A-Za-z0-9_])+([A-Za-z0-9_])+\.([A-Za-z]{2,4})$/
        if (!reg.test(text)) {
            return {
                erMessage: `Неверный E-mail`
            }
        }
    }

    return {
        erMessage: "",
    }
}
