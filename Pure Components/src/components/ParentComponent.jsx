import React, { Component, PureComponent} from 'react'
import RegularComponent from './RegularComponent'
import PureComponents from './PureComponent'

class ParentComponent extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            name: 'Dev'
        }
    }
    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: 'Dev'
            })
        }, 2000)
    }
    render() {
        console.log('Parent Component Render')
        return (
            <div>
                Parent Component
                <RegularComponent name={this.state.name} > </RegularComponent>
                <PureComponents name={this.state.name}></PureComponents>
            </div>
        )
    }
}

export default ParentComponent