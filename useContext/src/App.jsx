import React from 'react'
import ComponentC from './component/ComponentC'

export const UserContext = React.createContext()
export const killCount = React.createContext()
export const ChannelContext = React.createContext()

function App() {
  return (
    <div className="App">
      <UserContext.Provider value={'Dev'}>
        <ChannelContext.Provider value={'ByteBard'}>
          <killCount.Provider value={100}>
            <ComponentC />
          </killCount.Provider>
        </ChannelContext.Provider>
      </UserContext.Provider>
    </div>
  )
}

export default App