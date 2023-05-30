import React, { useState } from 'react'

export const Testeos = () => {

    const [coords, setCoords] = useState({
        x: "",
        y: ""
    })

    const { x, y } = coords

    window.addEventListener("mousemove", ({ x, y }) => {
        setCoords({ x: x, y: y })
    })


    return (
        <div>
            <div>Testeos</div>
            <hr />

            x: {x}, y: {y}

        </div>
    )
}
