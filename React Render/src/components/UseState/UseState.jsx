import React, { useState } from 'react'


function UseState() {
    const [count, useCount] = useState(0)
    
    console.log('Component Render')

    return (
        <div>
            <h3> Count : {count} </h3>
            <button onClick={() => { useCount(count + 1) }}> Increment  </button>
            <button onClick={() => { useCount(0) }}> Reset to 0  </button>
            <button onClick={() => { useCount(5) }}> Set to 5 </button>

        </div>
    )
}

export default UseState