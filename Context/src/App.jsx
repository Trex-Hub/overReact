import React, { Component } from 'react'
import ComponentC from './components/ComponentC'
import { UserProvider } from './components/userContext'


class App extends Component {
  render() {
    return (
      <div>
        <UserProvider value="Devendra">
          <ComponentC />
        </UserProvider>
      </div>
    )
  }
}

export default App