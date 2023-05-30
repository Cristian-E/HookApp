import React, { useEffect, useState } from 'react'
import { Message } from './Message'
import "./effects.css"


export const SimpleForm = () => {


    const [formState, setFormState] = useState({
        name: "",
        email: ""
    })

    const { email, name } = formState






    const hanleInputChange = ({ target }) => {
        setFormState({
            ...formState,
            [target.name]: target.value
        })
    }
    return (
        <>
            <div>useEffect</div>
            <hr />

            <div className="from-grup">
                <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Ingrese su nombre"
                    autoComplete="off"
                    value={name}
                    onChange={hanleInputChange}
                />
            </div>
            <div className="from-grup">
                <input
                    type="text"
                    name="email"
                    className="form-control"
                    placeholder="Ingrese su correo"
                    autoComplete="off"
                    value={email}
                    onChange={hanleInputChange}
                />
            </div>
            {(name === "123") && <Message />}
        </>
    )
}






