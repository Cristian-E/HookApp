import React, { useState } from 'react'
import { procesoPesado } from "../helpers/prosesoPesado"
import { useCounter } from "../hooks/useCounter"
import { useMemo } from 'react'

export const MemoHook = () => {

    const { increment, counter } = useCounter(300)

    const [show, setShow] = useState(true)

    const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter])

    return (
        <div>
            <h1>MemoHook</h1>
            <h3>Counter: <small >{counter}</small>  </h3>
            <hr />

            <p>{memoProcesoPesado}</p>

            <button onClick={increment}>
                +1
            </button>

            <button
                onClick={() => {
                    setShow(!show)
                }}
            >
                show/hide {JSON.stringify(show)}
            </button>

        </div >
    )
}
