import React, { Component } from 'react'
import withCounter from './WithCounter'

class ClickCounter extends Component {
    render() {
        const { count, incrementCount } = this.props
        return (
            <div>
                <button onClick={incrementCount} > {this.props.name} Click {count} Times</button>
            </div>
        )
    }
}

export default withCounter(ClickCounter, 10)