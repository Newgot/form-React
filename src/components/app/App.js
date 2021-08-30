import React, { useState } from "react"

import Status from "../status"
import data from '../../data/cities.json'
import { sortCities } from './utils'
import './app.scss'

const App = () => {
    const cities = sortCities(data)
    const username = 'Человек №3596941'

    const [status, setStatus] = useState('Прежде чем действовать, надо понять')

    return (
        <div className='app'>
            <Status
                username={username}
                status={status}
                onChangeStatus={(label) => setStatus(label)}
            />
        </div>
    )
}

export default App;
