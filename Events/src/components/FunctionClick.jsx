import React from 'react'

function FunctionClick() {
    function clickHandler() {
        console.log('Function Component Button Clicked.')
    }
    return (

        // We have to assign a function to the a EventHandle (ie: onClick, onDoubleClick etc) rather than a Function call
        // onClick = {clickHandler()} is a Function Call
        // onClick = {clickHandler} is Fucntion assignment. 
        // Avoid Using `()`
        <div>    
            <button onClick={clickHandler}>Function Based Button</button>
        </div>
    )
}

export default FunctionClick