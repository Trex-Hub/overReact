import React, { Component } from 'react'

class FunctionClickCls extends Component {
    clickHandler() {
        console.log("Class Component Button Clicked")
    }
    render() {
        return (
            // When assigning function to Event Handler in Class Components we have to use 'this' keyword to access the Class method.
            <div>

                <button onClick={this.clickHandler}>Class Based Component</button>
            </div>
        )
    }
}

export default FunctionClickCls