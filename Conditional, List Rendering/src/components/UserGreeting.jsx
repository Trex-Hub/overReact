import React, { Component } from 'react'
import Person from './Person'

class UserGreeting extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: true
        }
    }
    render() {
        // Element Based Approch 
        // let message
        // if (this.state.isLoggedIn) {
        //     message = <div> Hello Devendra </div>
        // }
        // else {
        //     message = <div> Hello Guest </div>
        // }
        // return (<div> {message} </div>)

        // If Else Based Approch
        // if (this.state.isLoggedIn) { 
        //     return ( <div> Hello Devendra </div> ) 
        // } else { 
        //     return ( <div> Hello Guest </div> )
        // }
        // return (
        //     <div>

        //         <p2> Hello Devendra </p2>
        //         <p2> Hello Guest </p2>
        //     </div>
        // )

        return (
            // Conditional Ternanry Operator Based Approch
            // <div>
            //     {this.state.isLoggedIn ? <div> Welcome Devendra </div> : <div> Hello Guest </div>}
            // </div>

            // Short Circuit Based Approch 
            <div>
                {this.state.isLoggedIn && <div> Welcome Devendra </div>}
            </div>
        )
    }
}

export default UserGreeting