import React, { Component } from 'react'
import withCounter from './WithCounter'

class HoverCounter extends Component {
    render() {
        const { count, incrementCount } = this.props
        return (
            <div>
                <h2 onMouseOver={incrementCount}>Hovered {count} Times</h2>
            </div>
        )
    }
}

export default withCounter(HoverCounter, 2)