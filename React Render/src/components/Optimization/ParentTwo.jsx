import React, { useState } from 'react'
import { MemoizedChildTwo } from './ChildTwo'

export const  ParentTwo = () => {
    const [count, useCount] = useState(0)
    const [name, setName] = useState('Devendra')

    console.log('ParentTwo Render')

    return (
        <div>
            <h3> Count : {count} </h3>
            <button onClick={() => { useCount(count + 1) }}> Increment  </button>
            <button onClick={()=> setName('ByteBard')}>  Change Name </button>
            <MemoizedChildTwo  name= { name}/>
            
        </div>
    )
}
