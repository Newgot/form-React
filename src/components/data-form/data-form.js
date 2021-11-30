import React from "react"

import {Select} from "../bloks/select"
import {Item} from "../bloks/item"
import {useValidation} from "./useValidation"
import string from "./string.json"
import "./data-form.scss"

export const DataForm = ({cities, form, setForm, onSubmit}) => {

    const onSubmitFrom = (e) => {
        e.preventDefault()
        let validationFlag = true
        const validationArr = Object.values(validation)
        validationArr.forEach(valid => {
            if (valid) {
                validationFlag = false
            }
        })
        if (validationFlag) {
            const time = Date.now()
            setForm(prev => ({...prev, time}))
            onSubmit()
        }
    }

    const {validation, setValidation} = useValidation();

    const inputHandler = ({target: {name, value}}, text, password_first) => {
        setValidation(name, value, text, password_first)
        setForm(prev => ({...prev, [name]: value}))
    }

    return (
        <form className="data-form"
              onSubmit={onSubmitFrom}>
            <Item
                label={string.your_city}

            >
                <Select
                    name="city"
                    value={form.city}
                    options={cities}
                    onChange={inputHandler}
                />
            </Item>
            <Item
                label={string.password}
                description={string.password_desc}
                errorText={validation.password}
            >
                <input
                    type="password"
                    name="password"
                    value={form.password}
                    onChange={(e) => inputHandler(e, 'пароль')}
                />
            </Item>
            <Item
                label={string.password_again}
                description={string.password_again_desc}
                errorText={validation.password_double}
            >
                <input
                    type="password"
                    name="password_double"
                    value={form.password_double}
                    onChange={e => inputHandler(e, 'пароль', form.password)}
                />
            </Item>
            <Item
                label={string.email}
                description={string.email_desc}
                errorText={validation.email}
            >
                <input
                    name="email"
                    value={form.email}
                    onChange={e => inputHandler(e, 'E-mail')}
                />
            </Item>
            <Item
                label={string.i_agree}
            >
                <div className="data-form__container">
                    <input
                        className="data-form__checkbox"
                        type="checkbox"
                        name="email"
                        value={form.email}
                        onChange={e => setForm(prev => ({...prev, subscribe: e.target.checked}))}
                    />
                    <p>{string.subscribe}</p>
                </div>
            </Item>
            <button
                className="data-form__btn"
                type="submit"
            >
                {string.change}
            </button>
        </form>
    )
}
