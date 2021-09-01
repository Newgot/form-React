import React from "react"

import {Select} from "../bloks/select"
import {Input} from "../bloks/input/"
import {Row} from "../bloks/row"
import "./data-form.scss"

export const DataForm = ({cities}) => {
    return (
        <div className="data-form">
            <Row
                className="data-form__row"
                label="Ваш город"
                input={<Select cities={cities}/>}

            />
            <Row
                className="data-form__row"
                label="Пароль"
                input={
                    <Input
                        rules={{min: 5, require: true, requireName: "пароль"}}/>
                }
                description="Ваш новый пароль должен содержать не менее 5 символов."
            />
            <Row
                className="data-form__row"
                label="Пароль еще раз"
                input={
                    <Input
                        rules={{min: 5, require: true, requireName: "пароль"}}/>
                }
                description="Повторите пароль, пожалуйста, это обезопасит вас с нами на случай ошибки."
            />
            <button
                className="data-form__btn"
                type="submit"
                >
                Изменить
            </button>
        </div>
    )
}
