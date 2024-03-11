import React from 'react'
import './myStyleSheets.css'

function StyleSheet(props) {
    let className = props.primary ? 'primary' : 'secondary'
    return (
        <div>
            <h1 className={`${className} text-style`}>CSS + React</h1>
        </div>
    )
}

export default StyleSheet