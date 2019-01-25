import React from "react"
import { storiesOf } from "@storybook/react"
import { withDocs } from "storybook-readme"
import BaseStyle from "./BaseStyle"

export default function createStory(componentName, storyName, readme, render) {
  storiesOf(componentName, module).add(
    storyName,
    withDocs(readme, () => (
      <React.Fragment>
        <BaseStyle />

        {render()}
      </React.Fragment>
    )),
  )
}
