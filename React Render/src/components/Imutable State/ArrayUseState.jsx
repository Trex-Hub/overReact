import React, { useState } from 'react'

const initalState = ['Bruce ', 'Wayne']


export const ArrayUseState = () => {
    const [person, setPerson] = useState(initalState)

    const handleClick = ()=> { 
        // person.push('Clark')
        // person.push('Kent')
        // setPerson(person)
        const newArray = [ ...initalState ]
        newArray.push('Clark')
        newArray.push('Kent')
        setPerson(newArray)
    }

    console.log('ArrayUseState Render');
    return (
        <div>
            <button onClick={handleClick}> Click</button>
            {
                person.map(person => (
                    <div key={person}> {person} </div>
                ))
            }
        </div>
    )
}
