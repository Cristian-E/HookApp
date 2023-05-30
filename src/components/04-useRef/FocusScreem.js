import React, { useRef } from 'react'

export const FocusScreem = () => {


    const inputRef = useRef()

    const handleClick = () => {
        inputRef.current.select()
    }

    return (
        <div>
            <h1>Focus Screem</h1>
            <hr />

            <input type="text"
                ref={inputRef}
                placeholder="Su nombre"
            />

            <button onClick={handleClick}>

                Focus
            </button>

        </div>
    )
}
