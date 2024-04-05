import React, { useState } from 'react'

function HookCounterFour() {
    const [items, setItems] = useState([])
    const addItem = ( ) =>{
        setItems( [...items, {id: items.length , value: Math.floor(Math.random() * 10 + 1) }]  )
    }
  return (
    <div>
        <button onClick={addItem}> Add a Number</button>
        {
            items.map(item => (
                <li id={item.id}> {item.value} </li>
            ))}
    </div>
  )
}

export default HookCounterFour