import React, { useReducer } from 'react'

// State and Action as Objects

let initialState = {
    firstCounter: 0,
    secondCounter: 10
}
const reducerFunction = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { ...state, firstCounter: state.firstCounter + action.value }
        case 'decrement':
            return { ...state, firstCounter: state.firstCounter - action.value }
        case 'incrementTwo':
            return { ...state, secondCounter: state.secondCounter + action.value }
        case 'decrementTwo':
            return { ...state, secondCounter: state.secondCounter - action.value }
        case 'reset':
            return initialState
        default:
            return state
    }
}

function CounterTwo() {
    const [count, dispatch] = useReducer(reducerFunction, initialState)
    return (
        <div>
            <h2>Count 1 : {count.firstCounter}</h2>
            <h2>Count 2 : {count.secondCounter}</h2>
            <button onClick={() => dispatch({ type: 'increment', value: 1 })}>Increment</button>
            <button onClick={() => dispatch({ type: 'decrement', value: 1 })}>Decrement</button>
            <button onClick={() => dispatch({ type: 'incrementTwo', value: 1 })}>Increment Counter 2</button>
            <button onClick={() => dispatch({ type: 'decrementTwo', value: 1 })}>Decrement Counter 2</button>
            <button onClick={() => dispatch({ type: 'increment', value: 5 })}>Increment 5</button>
            <button onClick={() => dispatch({ type: 'decrement', value: 5 })}>Decrement 5</button>
            <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
        </div>
    )
}

export default CounterTwo