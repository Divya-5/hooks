import React, { useEffect, useState } from 'react'

const HookMose = () => {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const handleMouseMove = e =>{
        console.log("mouse event said")
setX(e.clientX)
setY(e.clientY)
            }
 
            useEffect(() => {
                console.log("Hook useeffect called");
                window.addEventListener('mousemove', handleMouseMove)
                return()=>{
                    console.log('component unmounting code')
                    window.removeEventListener('mousemove', handleMouseMove)
                }
            }, [])
    
    return (
        <h2>
            Hook X:{x}
            <hr />
            Hook Y:{y}
        </h2>
    )
}

export default HookMose
