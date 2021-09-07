import React from "react"

import "./item.scss"

export const Item = ({children, description, label, errorText}) => {
    const className = errorText ? "item error" : "item"

    return (
        <div className={className}>
            <p className="item__label">{label}</p>
            {children}
            <p className="item__description">{description}</p>
            {errorText && <p className="error--description">{errorText}</p>}
        </div>
    )
}

Item.defaultProps = {
    error: {},
}
