import React, { useState } from 'react'
import HookMose from './HookMose'

const MouseContainer = () => {
    const [display, setDisplay]=useState(true)
    return (
        <div>
            <button onClick={()=> setDisplay(!display)}>Toggle Display</button>
            {display && <HookMose />}
        </div>
    )
}

export default MouseContainer
