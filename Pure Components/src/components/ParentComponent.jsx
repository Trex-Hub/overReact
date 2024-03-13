import React, { Component, PureComponent } from 'react'
import RegularComponent from './RegularComponent'
import PureComponents from './PureComponent'
import MemoComponent from './MemoComponent'

class ParentComponent extends Component {
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
                {/* <RegularComponent name={this.state.name} > </RegularComponent>
                <PureComponents name={this.state.name}></PureComponents> */}
                <MemoComponent name={this.state.name}></MemoComponent>
            </div>
        )
    }
}

export default ParentComponent