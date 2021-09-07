import React, {useState, useMemo} from "react"

import {Status} from "../status"
import {DataForm} from "../data-form"
import {sortCities} from "./utils"
import cityJSON from "../../data/cities.json"
import "./app.scss"

export const App = () => {
    const cities = useMemo(() => {return sortCities(cityJSON)}, []);

    const username = "Человек №3596941"

    const [status, setStatus] = useState("Прежде чем действовать, надо понять")
    const [errors, setErrors] = useState([0, 0, 0])
    const [form, setForm] = useState({
        username,
        status,
        city: Array.isArray(cities) && cities[0]?.city,
        password: "",
        password_double : "",
        email: "",
        subscribe: false,
        time: null
    })
    const onSubmit = () => {
        console.log(form)
        console.log(errors)
    }
    return (
        <div className="app">
            <Status
                username={username}
                status={status}
                setStatus={setStatus}
            />
            <DataForm
                cities={cities}
                setError={setErrors}
                form={form}
                setForm={setForm}
                onSubmit={onSubmit}
            />
        </div>
    )
}
