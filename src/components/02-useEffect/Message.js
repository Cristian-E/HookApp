import React, { useEffect, useState } from 'react'

export const Message = () => {

    const [coords, setCoords] = useState({
        x: 0,
        y: 0
    })

    const { x, y } = coords
    window.addEventListener("mousemove", (ev) => {
        setCoords({

            x: ev.x,
            y: ev.y
        })
    })

    useEffect(() => {
        console.log("Componente Montado");

        return () => {
            console.log("Componente Desmontado");
        }
    }, [])


    return (
        <div>
            <h3>Amasing</h3>
            <h3> x:{x} y:{y}</h3>
        </div>
    )
}
