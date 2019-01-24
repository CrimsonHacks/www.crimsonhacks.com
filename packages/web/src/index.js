import React from "react"
import SEO from "./components/SEO"
import BaseStyle from "./components/BaseStyle"
import MLHBadge from "./components/MLHBadge/MLHBadge"

class App extends React.Component {
  render() {
    const { location, children } = this.props

    return (
      <React.Fragment>
        <SEO />
        <BaseStyle />
        <MLHBadge location={location} />

        {children}
      </React.Fragment>
    )
  }
}

export default App
