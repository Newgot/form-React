import React from "react"

import "./row.scss"

export const Row = ({label, input, description, className=''}) => {
    return (
        <div className={"row " + className}>
            <p className="row__label">{label}</p>
            {input}
            <p className="row__description">{description}</p>
        </div>
    )
}
