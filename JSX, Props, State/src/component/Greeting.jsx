import React from 'react'

function Greeting(props) {

  let User = props.name !== undefined && props.name !== null ? props.name : 'Guest';

  return (
    <div>
      <h1>
        Greeting {User}
      </h1>
    </div>
  )
}

export default Greeting