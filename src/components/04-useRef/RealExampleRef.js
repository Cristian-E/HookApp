import React, { useState } from 'react'
import { MultplesCustomHooks } from '../03-exaples/MultplesCustomHooks'

export const RealExampleRef = () => {

    const [show, setShow] = useState(false)

    return (
        <div>
            <h1>Real Example Ref</h1>
            <hr />
            {show && <MultplesCustomHooks />}

            <button
                onClick={() => {
                    setShow(!show)
                }}
            >
                Show/Hide
            </button>

        </div>
    )
}
