import React from "react"

import {Select} from "../bloks/select"
import {Item} from "../bloks/item"
import string from "./string.json"
import "./data-form.scss"

export const DataForm = ({cities, form, setForm}) => {

    const onSubmitFrom = () => {
        setForm({})
    }

    const inputHandler = ({target : {name, value}}) => setForm(prev => ({...prev, [name]: value}))

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
            >
                <input
                    name="password"
                    value={form.password}
                    onChange={inputHandler}
                />
            </Item>
            <Item
                label={string.password_again}
                description={string.password_again_desc}
            >
                <input
                    name="password_double"
                    value={form.password_double}
                    onChange={inputHandler}
                />
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
