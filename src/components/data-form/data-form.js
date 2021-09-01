import React from "react"

import {Select} from "../bloks/select"
import './data-form.scss'

export const DataForm = ({cities}) => {
    return (
        <div className='data-form'>
            <div className="data-form__row">
                <p className="data-form__label">Ваш город</p>
                <Select
                    cities={cities}/>
            </div>
            <button
                className='data-form__btn'
                type="submit"
            >
                Изменить
            </button>
        </div>
    )
}