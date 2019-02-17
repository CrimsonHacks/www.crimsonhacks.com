import React from "react"
import createStory from "../../createStory"

import SelectREADME from "./Select.README.md"
import Select from "../Select"

var passOptions = [
  {
    value: "One",
    label: "One",
  },
  {
    value: "Two",
    label: "Two",
  },
]

createStory("Select", "normal", SelectREADME, () => (
  <Select
    placeholder="Select"
    options={[
      {
        value: "One",
        label: "One",
      },
      {
        value: "Two",
        label: "Two",
      },
    ]}
  />
))
