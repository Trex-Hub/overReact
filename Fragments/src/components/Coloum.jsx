import React from 'react'

function Coloum() {
    const items = []
    return (
        <React.Fragment>
            {/* {
                items.map(items => {
                    // React.Fragments  can Only Accept 1 Attribute that is Id 
                    // Difference between React.Fragments and <></> is that `<></>` cannot accept Attribute
                    <React.Fragment id={items.id}>
                        <h1>Title</h1>
                        <h2>{items.title}</h2>
                    </React.Fragment>
                })
            } */}
            <td>Name</td>
            <td>Dev</td>
        </React.Fragment>
    )
}

export default Coloum