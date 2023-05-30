import React from 'react'
import "./effects.css"
import { useForm } from '../hooks/useForm'


export const FormWithCustomHook = () => {

    const [formValue, handleInputChange] = useForm({
        name: "",
        email: "",
        password: ""
    })

    const { email, name, password } = formValue

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formValue);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>FormWithCustomHook</div>
            <hr />

            <div className="from-grup">
                <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Ingrese su nombre"
                    autoComplete="off"
                    value={name}
                    onChange={handleInputChange}
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
                    onChange={handleInputChange}
                />
            </div>
            <div className="from-grup">
                <input
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="*****"
                    value={password}
                    onChange={handleInputChange}
                />
            </div>

            <button type="submit" >
                Guardar
            </button>

        </form>
    )
}






