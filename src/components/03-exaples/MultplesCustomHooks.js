import React from 'react'
import { useFetch } from '../hooks/useFetch'

import "./customHooks.css"
import { useCounter } from '../hooks/useCounter'

export const MultplesCustomHooks = () => {

    const { counter, increment } = useCounter(1)

    const { loading, data } = useFetch(`https://pokeapi.co/api/v2/pokemon/${counter}`)





    return (
        <>
            <h1> Custom Hook !!!</h1>

            <hr />

            {
                loading
                    ?
                    (
                        <div className="loadingOff">
                            Loading...
                        </div>
                    )
                    :
                    (
                        <div className="loadingOn">
                            <p>{data.name}</p>
                            <p>{data.types[0].type.name}</p>
                        </div>
                    )
            }

            <button onClick={increment}>
                Siguiente puchamon
            </button>


        </>
    )
}
