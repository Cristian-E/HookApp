import React, { useState } from 'react'
import { useCounter } from "../hooks/useCounter"
import { Small } from './Small'

export const Memorize = () => {

    const { increment, counter } = useCounter(10)

    const [show, setShow] = useState(true)



    return (
        <div>
            <h1>Counter: <Small value={counter} /> </h1>
            <hr />

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
