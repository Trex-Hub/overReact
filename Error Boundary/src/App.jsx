import React from 'react'
import Hero from './components/Hero'
import ErrorBoundary from './components/ErrorBoundary'
function App() {
  return (
    <div>
      <ErrorBoundary>
        <Hero heroName='Batman' />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName='Superman' />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName='joker' />
      </ErrorBoundary>
    </div>
  )
}

export default App