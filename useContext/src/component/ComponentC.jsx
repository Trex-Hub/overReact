import React, { useContext } from 'react'
import ComponentE from './ComponentE'
import { killCount } from '../App'

function ComponentC() {
    const kills = useContext(killCount)
    return (
        <div>
            < ComponentE />
            <h2>kills from Component C {kills} </h2>
        </div>
    )

}

export default ComponentC