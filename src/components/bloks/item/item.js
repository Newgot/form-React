import React from "react"

import "./item.scss"

export const Item = ({children, description, label}) => {
    return (
        <div className={"item "}>
            <p className="item__label">{label}</p>
            {children}
            <p className="item__description">{description}</p>
        </div>
    )
}
