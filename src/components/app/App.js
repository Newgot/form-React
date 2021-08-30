import React, {useState} from "react"

import Status from "../status"
import './app.scss'
import data from '../../data/cities.json'

const App = () => {

    const sortCities = (data) => {
        const cities = data.filter(city => city.population > 50000)
            .sort((cityA, cityB) => +cityA.population < +cityB.population ? 1 : -1)
        return [cities[0], ...cities.slice(1, cities.length)
            .sort((cityA, cityB) => cityA.city > cityB.city ? 1 : -1)]
    }

    const cities = sortCities(data)
    const username = 'Человек №3596941'

    const [status, setStatus] = useState('Прежде чем действовать, надо понять')


    return (
        <div className='app'>
            <Status
                username={username}
                status={status}
                onChangeStatus={(label) => setStatus(label)}/>
        </div>
    )
}

export default App;
