import React from 'react'

export const Hijo = React.memo(({ numero, incrementar }) => {

    console.log("me volvi a generar >:v");

    return (
        <button onClick={() => incrementar(numero)}>
            {numero}
        </button>
    )
})
