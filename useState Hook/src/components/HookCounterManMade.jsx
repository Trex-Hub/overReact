import React from 'react'
import { useState } from 'react'

function HookCounterManMade() {
    // Accepts 1st variable, 2nd a Method
    const [count, setCount] = useState(0);

    function incrementCount() {
        setCount(count + 1);
        console.log(count)
    }

    return (
        <div>
            <button onClick={incrementCount}>  Count {count} </button>
        </div>
    )
}

export default HookCounterManMade