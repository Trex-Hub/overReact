import React, {useReducer} from 'react'
import ComponentA from './component/ComponentA'
import ComponentB from './component/ComponentB'
import ComponentC from './component/ComponentC'

export const CountContext = React.createContext()

let initialState = 0

const reducerFunction = (state, action) => {
  switch (action) {
    case 'increment':
      return state + 1
    case 'decrement':
      return state - 1
    case 'reset':
      return initialState
    default:
      return state
  }
}

function App() {
  const [count, dispatch] = useReducer(reducerFunction, initialState)

  return (
      <div>
    <CountContext.Provider value={{ countState: count , countDispatch: dispatch}}> 
      App Count: {count}
      <ComponentA/>
      <ComponentB/>
      <ComponentC/>      
    </CountContext.Provider>
    </div>
  )
}

export default App