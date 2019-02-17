import React from "react"
import createStory from "../../createStory"

import TextAreaREADME from "./TextArea.README.md"
import TextArea from "../TextArea"

createStory("Text Area", "normal", TextAreaREADME, () => (
  <TextArea placeholder="Example" />
))
