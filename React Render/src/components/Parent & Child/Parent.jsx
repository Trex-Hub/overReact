import React, { useState } from 'react'
import { Child1 } from './Child1'

function Parent() {
    const [count, useCount] = useState(0)
    
    console.log('Parent Render')

    return (
        <div>
            <h3> Count : {count} </h3>
            <button onClick={() => { useCount(count + 1) }}> Increment  </button>
            <button onClick={() => { useCount(0) }}> Reset to 0  </button>
            <button onClick={() => { useCount(5) }}> Set to 5 </button>
            <Child1/>
        </div>
    )
}

export default Parent