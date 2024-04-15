import { useState } from 'react'

function useCounter(initialCount = 0 , value = 1) {

    const [count, setCount] = useState(initialCount)

    const increment = () => {
        setCount(prevCount => prevCount + value)
    }

    const decrement = () => {
        setCount(prevCount => prevCount - value)
    }

    const resetCount = () => {
        setCount(initialCount)
    }
    return[count, increment, decrement, resetCount]
}

export default useCounter