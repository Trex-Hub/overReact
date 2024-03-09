import React from 'react'

function Person({ person }) {

    return (
        <div>
            <h2>My Name is {person.name}. I am {person.age} years old. I have Proficiency in {person.skill}.</h2>
        </div>
    )
}

export default Person