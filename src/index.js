import React from "react"
import SEO from "./components/SEO"
import BaseStyle from "./components/BaseStyle"

function App({ children }) {
  return (
    <React.Fragment>
      <SEO />
      <BaseStyle />

      {children}
    </React.Fragment>
  )
}

export default App
