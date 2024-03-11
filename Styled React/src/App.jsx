import React from 'react'
import StyleSheet from './components/StyleSheet'
import InlineCSS from './components/InlineCSS'
import StyleSheetModule from './components/StyleSheetModule'
function App() {
  return (
    <div>
      <StyleSheet primary={false} />
      <InlineCSS />
      <StyleSheetModule />

    </div>
  )
}

export default App