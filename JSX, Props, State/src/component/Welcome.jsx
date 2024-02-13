import React, { Component } from "react"

class Welcome extends Component {
    constructor() {
        super()
        this.state = {
            message: "Welcome Visitor",
        }
    }
    changeMessage() {
        this.setState({
            message: `You're now marked present`
        })
    }
    render() {
        return (
            <div>
                <h1>
                    {this.state.message}
                </h1>

                <button onClick={() =>
                    this.changeMessage()
                }>
                    Click to Mark presences
                </button>
            </div>
        )
    }
}

export default Welcome
