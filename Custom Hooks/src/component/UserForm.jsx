import React from 'react'
import { useState } from 'react'
import useInput from '../hooks/useInput'

function UserForm() {
    const [firstName, bindFirstName, resetFirstName] = useInput('')

    const [lastName, bindLastName, resetLastName] = useInput('')

    const submitHandler = (e) => {
        e.preventDefault();
        alert(`Hello ${firstName} ${lastName}`)
        resetFirstName()
        resetLastName()
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <div>
                    <label htmlFor="">FirstName</label>
                    <input type="text" {...bindFirstName} />
                </div>
                <div>
                    <label htmlFor="">LastName</label>
                    <input type="text" {...bindLastName} />
                </div>
                <button type="submit" > Submit </button>
            </form>
        </div>
    )
}

export default UserForm