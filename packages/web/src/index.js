import React from "react"
import SEO from "./components/SEO"
import BaseStyle from "./components/BaseStyle"
import MLHBadge from "./components/MLHBadge/MLHBadge"

function App({ children }) {
  return (
    <React.Fragment>
      <SEO />
      <BaseStyle />
      <MLHBadge />

      {children}
    </React.Fragment>
  )
}

export default App
