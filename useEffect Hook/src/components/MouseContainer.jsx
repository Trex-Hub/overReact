import React, {useState} from 'react'
import HookMouseMoment from './HookMouseMoment'

function MouseContainer() {
    const [display, setDisplay] = useState(true)

  return (
    <div>
        <button onClick={()=> setDisplay(!display)}> Toogle MouseMoment </button>
        {display && <HookMouseMoment/> }
    </div>
  )
}

export default MouseContainer