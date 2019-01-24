import React from "react"
import Private from "../components/Private"
import Application from "../components/Application"

export default props => (
  <Private {...props}>
    <Application />
  </Private>
)
