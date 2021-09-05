import React from "react"

import "./utils"
import "./select.scss"
import {normalizeOptions} from "./utils";

export const Select = ({options, ...props}) => {
    const normOptions = normalizeOptions(options, 'city', 'city')
    const optionsSelect = normOptions.map(option => {
        return <option key={option.key} value={option.value}>{option.value}</option>
    })

    return (
        <select
            className="select"
            {...props}
        >
            {optionsSelect}
        </select>
    )
}
