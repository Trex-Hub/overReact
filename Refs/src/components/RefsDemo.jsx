import React, { Component } from 'react'

class RefsDemo extends Component {
    constructor(props) {
        super(props)
        // createRef() Method
        this.inputRef = React.createRef()
        // Callback Ref Method
        this.cbRef = null
        this.setCBRef = (element) => {
            this.cbRef = element
        }
    }
    componentDidMount() {
        // createRef Method
        // this.inputRef.current.focus()
        // console.log(this.inputRef)
        if (this.cbRef) {
            this.cbRef.focus()
        }
    }
    clickHandler = () => {
        // Method 1 createRef()
        // alert(this.inputRef.current.value)
        
        // Method 2 callback Ref  
        alert(this.cbRef.value)

    }

    render() {
        return (
            <div>
                <input type="text" ref={this.inputRef} />
                <input type="text" ref={this.setCBRef} />
                <button onClick={this.clickHandler}> Submit</button>
            </div>
        )
    }
}

export default RefsDemo