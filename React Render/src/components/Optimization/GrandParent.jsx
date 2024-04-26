import React, { useState } from 'react'
import Parent1 from './Parent1'
import { Child1 } from './Child1'

export const GrandParent = () => {
    const [newCount, setNewCount] = useState(0)

    return (
        <div>
            <h4> newCount : {newCount} </h4>
            <button onClick={() => { setNewCount(newCount + 1) }}> Increment  </button>
            <Parent1 newCount= {newCount}>
                <Child1/>
            </Parent1>
        </div>
    )
}
