import React, { useState } from 'react'
import { Child } from './Child'

function Parent1() {
    const [count, useCount] = useState(0)
    
    console.log('Parent Render')

    return (
        <div>
            <h3> Count : {count} </h3>
            <button onClick={() => { useCount(count + 1) }}> Increment  </button>
            <Child/>
        </div>
    )
}

export default Parent1