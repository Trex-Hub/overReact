import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0,
        }
    }
    incrementCount = () => {
        this.setState(prevState => {
            return { count: prevState + 1 }
        })
    }
    render() {
        return (
            <div>
                {this.props.render(this.state.count, this.state.incrementCount)}
            </div>
        )
    }
}

export default Counter