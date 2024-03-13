import React from 'react'

function MemoComponent({ name }) {
    console.log("Memo Component Render")
    return (
        <div> Memo Component {name}</div>
    )
}

export default React.memo(MemoComponent)