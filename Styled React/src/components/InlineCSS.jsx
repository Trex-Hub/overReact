import React from 'react'

function InlineCSS() {
    const heading = {
        fontSize: '3rem',
        color: 'lightgreen',
        textAlign: 'center'
    }
    return (
        <div>
            <h1 style={heading}>InLine CSS and React</h1>
        </div>
    )
}

export default InlineCSS