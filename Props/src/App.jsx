import React from 'react'
import User from './components/User'

function App() {
  return (
    <div>
      <User render={(isLoggedIN) => isLoggedIN ? "Dev" : "Guest"} />
    </div>
  )
}

export default App