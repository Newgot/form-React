import React from "react"

import "./select.scss"

export const Select = ({cities}) => {

    const options = cities.map(city => {
        return <option key={city.city} value={city.city}>{city.city}</option>
    })

    return (
        <select className="select">
            {options}
        </select>
    )
}
