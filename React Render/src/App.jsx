import React from 'react'
import UseState from './components/UseState/UseState'
import { UseReducer }  from './components/UseReducer/UseReducer'
import { ObjectUseState } from './components/Imutable State/ObjectUseState'
import { ArrayUseState } from './components/Imutable State/ArrayUseState'
import Parent from './components/Parent & Child/Parent'
import Parent1 from './components/Optimization/Parent1'

function App() {
  return (
    <div>
      <Parent1/>
    </div>
  )
}

export default App