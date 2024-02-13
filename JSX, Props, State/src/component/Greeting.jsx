import React from 'react'

function Greeting(props) {

  let User = props.name !== undefined && props.name !== null ? props.name : 'Guest';
  let heroName = props.heroName !== undefined && props.heroName !== null ? props.heroName : 'Unknown';

  return (
    <div>
      <h1>
        Greeting {User} AKA {heroName}
        {props.children}
      </h1>
    </div>
  )
}

export default Greeting