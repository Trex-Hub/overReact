import React, { useState } from 'react'

const initalState = {
    firstName: 'Bruce',
    lastName: 'Wayne'
}

export const ObjectUseState = () => {
    const [person, setPerson] = useState(initalState)
    const changeName = () => {
        // person.firstName = "Clark"
        // person.lastName  = "Kent"
        // setPerson(person) 

        const  newPerson = { ...initalState} 
        newPerson.firstName = "Clark"
        newPerson.lastName  = "Kent"
        setPerson(newPerson)
    }
    
    console.log("Object UseState Render");

    return (
        <div>
            <button onClick={changeName} > {person.firstName} {person.lastName}  </button>
        </div>
    )
}
