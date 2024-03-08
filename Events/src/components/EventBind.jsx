import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
        super(props)

        this.state = {
            message: "Hello"
        }
        this.clickHandler = this.clickHandler.bind(this)
    }

    clickHandler() {
        this.setState({
            message: "GoodBye"
        })
        // 'this' keyword is undefined in a Event Handler or this Callback
        // When clickHandler is Called  using `this.ClickHandler` 'this' keyword loses it context thus resulting to give ans undefined.
        // To solve this there are many method = 

        // 1st] onClick={this.clickHandler.bind(this)} bind 'this' keyword
        // Drawback Every update to state will cause the component to re render causing new event handlers for each instance 
        // Can cause performance issue in large scale applications
        console.log(this)
    }
    arrClickHandler = () => {
        this.setState({
            message: "GoodBye"
        })
    }

    render() {
        return (
            <div>
                <p> {this.state.message} </p>

                {/* 1st Approch  <button onClick={this.clickHandler.bind(this)} >Click Me</button> */}
                {/* 2nd Approch  <button onClick={() => { this.clickHandler() }} >Click Me</button> */}
                {/* Can Cause Performance issue in some Cases */}
                {/* 3rd and 4th  Approch Best/Official Approch = binding it in the constructor  */}
                <button onClick={this.clickHandler}> Click Me GoodBye</button>
                <button onClick={this.arrClickHandler}> Click Me GoodBye Experimental </button>
            </div>
        )
    }
}

export default EventBind