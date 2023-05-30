import React, { useLayoutEffect } from 'react'
import { useFetch } from '../hooks/useFetch'
import { useCounter } from '../hooks/useCounter'

import "./layout.css"

export const UseLayout = () => {

    const { counter, increment } = useCounter(1)

    const { data } = useFetch(`https://pokeapi.co/api/v2/pokemon/${counter}`)
    const { type } = !!data && data[0]

    useLayoutEffect(() => {
        console.log("hey");
    }, [])

    return (
        <>
            <h1> Custom Hook !!!</h1>

            <hr />

            <blockquote className="loadingOn blockquote">
                <p>{type}</p>
            </blockquote>


            <button onClick={increment}>
                Siguiente puchamon
            </button>


        </>
    )
}
