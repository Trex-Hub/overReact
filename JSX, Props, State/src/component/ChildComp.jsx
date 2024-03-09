import React from 'react'

function ChildComp(props) {
    let { greetHandler } = props
    return (
        <div>
            <button onClick={greetHandler}>Greet Parent</button>
            <button onClick={() => greetHandler('Child')}>Greet Parent</button>
        </div>
    )
}

export default ChildComp