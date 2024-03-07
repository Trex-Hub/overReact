import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }
    // SetState is Asyncronous meaning 
    increment() {
        this.setState({
            count: this.state.count + 1
        }, () => {
            console.log(`This is Callback Based Value. Value : ${this.state.count}`)
        })
        console.log(` This is Non Callback Value. Value : ${this.state.count}. `)
        //This is Gets Logged Before the setState.
        // To Configure something to run After the setState, We use Callback Function (Arrow Function)
        // setState can accept 2 Parameters. 1st the Action to be performed{Async}, 2nd the Call back function To be executed after the Desired Action is completed.
    }
    decrement() {
        this.setState({ count: this.state.count - 1 }, () => {
            console.log(`This is Callback Based Value. Value : ${this.state.count}`)
        })
        console.log(` This is Non Callback Value. Value : ${this.state.count}. `)
    }
    incrementFn() {
        this.setState((prevState) => ({
            count: prevState.count + 1
        }),
            // () => {
            //     console.log(`${this.state.count}`)
            // }
        )
        console.log(`${this.state.count}`)
    }
    incrementFive() {
        this.incrementFn()
        this.incrementFn()
        this.incrementFn()
        this.incrementFn()
        this.incrementFn()
    }
    render() {
        return (
            <div>
                <h4>Count - {this.state.count} </h4>
                <button onClick={() => this.increment()} > Increment  </button>
                <button onClick={() => this.decrement()} > Decrement  </button>
                <button onClick={() => this.incrementFive()} > Increment 5  </button>
            </div>
        )
    }
}

export default Counter