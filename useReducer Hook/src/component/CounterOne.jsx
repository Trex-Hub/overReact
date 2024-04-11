import React, { useReducer } from 'react'

let initialState = 0

const reducerFunction = (state, action) => {
    switch (action) {
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        case 'reset':
            return initialState
        default:
            return state
    }
}

function CounterOne() {
    const [count, dispatch] = useReducer(reducerFunction, initialState)
    return (
        <div>
            <h2>{count}</h2>
            <button onClick={() => dispatch('increment')}>Increment</button>
            <button onClick={() => dispatch('decrement')}>Decrement</button>
            <button onClick={() => dispatch('reset')}>Reset</button>
        </div>
    )
}

export default CounterOne