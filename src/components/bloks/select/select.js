import React from "react"

export const Select = ({cities}) => {
    const options = (cities) => {
        return cities.map(city => {
            return <option key={city.city} value={city.city}>{city.city}</option>
        })
    }

    return (
        <div className="select">
            <select>
                {options}
            </select>
        </div>
    )
}