import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB'

class LifeCycleA extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'Devendra'
        }
        console.log("LifeCycleA constructor")
    }
    static getDerivedStateFromProps(props, state) {
        console.log("LifeCycleA getDerivedStateFromProps")
        return null
    }
    componentDidMount() {
        console.log('LifeCycleA componentDidMount ')
    }
    render() {
        console.log('LifeCycleA render')
        return (
            <div>
                LifeCycleA
                <LifeCycleB />
            </div>

        )
    }
}

export default LifeCycleA