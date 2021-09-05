import React, {useState, useRef} from "react";

import {validateInput} from "./utils";
import "./input.scss"

export const Input = ({text, type="text", rules}) => {
    const [error, setError] = useState("")

    const textRef = useRef()
    const checkValidate = () => {
        const res = validateInput(
            textRef.current.value,
            rules
        )
            setError(res.erMessage)
    }
    const className = !error ? "input__field" : "input__field--error"

    const errorMessage =
         error ? <p className="input__error-message">{error}</p> : null


    return (
        <div className='input'>
            <input
                className={className}
                ref={textRef}
                type={type}
                value={text}
                onChange={checkValidate}
            />
            {errorMessage}
        </div>

    )
}
