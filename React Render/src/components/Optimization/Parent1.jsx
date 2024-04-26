import React, { useState } from 'react'


function Parent1({ children }) {
    const [count, useCount] = useState(0)

    console.log('Parent1 Render')

    return (
        <div>
            <h3> Count : {count} </h3>
            <button onClick={() => { useCount(count + 1) }}> Increment  </button>
            {children}
        </div>
    )
}

export default Parent1