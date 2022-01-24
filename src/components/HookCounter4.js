import React, { useState } from 'react'

const HookCounter4 = () => {
    const [items, setItems]=useState([])
    const addItem = () =>{
        setItems([...items, {id: items.length, value:Math.floor(Math.random()*10) + 1 }])
    }
    return (
        <>
            <button onClick={addItem}>Add a number</button>
            <ul>
                {items.map(items => <li key={items.id}>{items.value}</li>)}
            </ul>
        </>
    )
}

export default HookCounter4
