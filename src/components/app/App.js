import React, {useState} from "react"

import {Status} from "../status"
import {DataForm} from "../data-form"
import {sortCities} from './utils'
import data from '../../data/cities.json'
import './app.scss'

export const App = () => {
    const cities = sortCities(data)
    const username = 'Человек №3596941'

    const [status, setStatus] = useState('Прежде чем действовать, надо понять')

    return (
        <div className='app'>
            <Status
                username={username}
                status={status}
                setStatus={setStatus}
            />
            <DataForm
                cities={cities}/>
        </div>
    )
}
