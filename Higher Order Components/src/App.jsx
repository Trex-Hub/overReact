import React from 'react'
import ClickCounter from './components/ClickCounter'
import HoverCounter from './components/HoverCounter'

function App() {
  return (
    <div>
      <ClickCounter name={'Devendra'} />
      <HoverCounter />
    </div>
  )
}

export default App