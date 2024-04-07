import React, { useState, useEffect } from 'react'

function HookCounter() {

    const [count, setCount] = useState(0)

    const [name, setName] = useState('')

    // useEffect Runs after each component Render, Re-Render.
    // The useEffect hook accepts a dependacy array so that it is Conditionally Updated with the Values mentioned 
    // For this Example useEffect won't be executed unless `count` is the Variable being Updated. IE it ignores the update of name.
    // useEffect (callback function, dependancy Array.)
    useEffect(() => {
        document.title = `You Clicked ${count} times`
        console.log('Updating Document Title')
    }, [count])

    const counterIncrement = () => {
        setCount(count + 1)
    }
    return (
        <div>
            <button onClick={counterIncrement} >  Counter : {count}  </button>
            <input type='text' value={name} onChange={() => setName( event.target.value)} />
        </div>
    )
}

export default HookCounter