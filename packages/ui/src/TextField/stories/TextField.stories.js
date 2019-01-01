import React from "react"
import createStory from "../../createStory"

import TextFieldREADME from "./TextField.README.md"
import TextField from "../TextField"

createStory("TextField", "normal", TextFieldREADME, () => (
  <TextField
    type="text"
    placeholder="Hello"
    onChange={e => console.log(e.target.value)}
  />
))
