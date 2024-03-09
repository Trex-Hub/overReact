import React from 'react'
import Person from './Person'
function NameList() {
    let names = ["Bruce", "Clark", "Henry"]

    const persons = [
        {
            id: 1,
            name: 'Bruce',
            age: 30,
            skill: 'React'
        },
        {
            id: 2,
            name: 'Clark',
            age: 25,
            skill: 'Angular'
        },
        {
            id: 3,
            name: 'Diana',
            age: 28,
            skill: 'Vue'
        }
    ]

    const namesList = names.map(name => <h2>{name}</h2>)

    const personList = persons.map(person => <Person key={person.id} person={person} />)

    return (
        <div>
            {/* {namesList} */}
            {personList}
        </div>
    )
}

export default NameList