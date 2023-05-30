import React, { useCallback, useState } from 'react'
import { Hijo } from './Hijo'


export const Padre = () => {


    const [valor, setValor] = useState(10)

    const numero = [2, 4, 6, 8, 10]

    // const incrementar = (num) => {
    //     setValor(valor + num)
    // }

    const incrementar = useCallback((num) => {
        setValor(v => v + num)
    }, [setValor])


    return (
        <div>
            <h1>Padre</h1>
            <p>Total: {valor}</p>

            <hr />

            {
                numero.map(n => (
                    <Hijo
                        key={n}
                        numero={n}
                        incrementar={incrementar}
                    />
                ))
            }

            {/* <Hijo /> */}
        </div>
    )

}









