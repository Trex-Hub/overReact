import React from 'react'
import useCounter from '../hooks/useCounter'

function HookCounterOne() {

    const [count, increment, decrement, resetCount] = useCounter(10 , 4)

    return (
        <div>
            Count - {count}

            <button onClick={increment}> Increment </button>

            <button onClick={decrement}> Decrement </button>
            
            <button onClick={resetCount}> Reset </button>
        </div>
    )
}

export default HookCounterOne