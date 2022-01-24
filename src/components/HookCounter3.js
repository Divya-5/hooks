import React, { useState } from 'react'

const HookCounter3 = () => {
    const [name, setName]=useState({firstName:'',lastName:''})
    return (
        <form>
            <input type="text" value={name.firstName} onChange={e => setName({...name, firstName:e.target.value})}/>
            <input type="text" value={name.lastName} onChange={e => setName({...name, lastName:e.target.value})}/>
            <h2>firstName-{name.firstName}</h2>
            <h2>lastName-{name.lastName}</h2>
            <h3>{JSON.stringify(name)}</h3>
        </form>
    )
}

export default HookCounter3
