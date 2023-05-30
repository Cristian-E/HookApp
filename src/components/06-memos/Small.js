import React from 'react'

export const Small = React.memo(({ value }) => {
    console.log("me estan llamando D:  ");
    return (
        <small> {value} </small>
    )
})
