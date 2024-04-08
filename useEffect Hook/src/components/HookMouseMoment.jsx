import React, { useEffect, useState } from 'react'

function HookMouseMoment() {
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)

  const logMousePosition = (e) => {
    console.log('Mouse Event')
    setX(e.clientX)
    setY(e.clientY)
  }
  // to Mimick componentDidMount from Class Component and Run useEffect only Once we have to pass in an empty Dependancy Array to specify that this Effect does'nt depend on anything. 
  // This leads to useEffect being Called only at the initial Render and then React Forgets about that.

  // useEffect Structure. 
  // useEffect ( function( //codeLogic  return( function (Cleanup Code for Unmounting Component) )) , [dependancyArray] )

  useEffect(() => {
    console.log('useEffect Called')
    window.addEventListener('mousemove', logMousePosition)


    // useEffect for componentDidUnmount. 
    // the function passed to useEffect can return a function when the Component umMounts.
    // with this We can mimick the functionality of componentWillUnmount life cycle method.
    // this can be used to cancel subscribtion, removing eventListeners etc.
    return (() => {
      console.log('useEffect, Component Unmounted')
      window.removeEventListener('mousemove', logMousePosition)
    })
  }, [])

  return (

    <div>
      <h4> Position X = ${x}</h4>
      <h4> Position Y = ${y}</h4>
    </div>
  )
}

export default HookMouseMoment