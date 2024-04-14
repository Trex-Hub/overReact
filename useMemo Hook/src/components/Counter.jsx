import React, {useState} from 'react'
import { useMemo } from 'react'

function Counter() {
    const [counterOne, setCounterOne] = useState(0)
    const [counterTwo, setCounterTwo] = useState(0)

    const incrementOne = () => {
        setCounterOne( counterOne  + 1)
    }

    const incrementTwo = () => {
        setCounterTwo( counterTwo + 1)
    }

    const isEven = useMemo(() => {
        let i = 0 
        while (i < 2000000000) i++
        return counterOne % 2 === 0
    } , [counterOne])

      return (
    <div>
        <div>
            <button onClick={incrementOne}> CounterOne :{ counterOne}</button> 
            <span> {isEven ? 'Even' : 'Odd' }  </span>
        </div>
        <div>
            <button onClick={incrementTwo}> CounterTwo :{ counterTwo}</button>
        </div>
    </div>
  )
}

export default Counter