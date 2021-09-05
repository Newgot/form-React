import React from "react"

import "./item.scss"

export const Item = ({children, description, label, errorText}) => {
    return (
        <div className={"item "}>
            <p className="item__label">{label}</p>
            {children}
            <p className="item__description">{description}</p>
            {errorText && <p>{errorText}</p>}
        </div>
    )
}

Item.defaultProps = {
    error: {},
}
