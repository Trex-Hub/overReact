import React, { Component } from 'react'

class User extends Component {

    render() {
        return (
            <div>
                {this.props.render(true)}
            </div>
        )
    }
}

export default User