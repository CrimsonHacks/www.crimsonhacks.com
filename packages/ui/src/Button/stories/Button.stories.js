import React from "react"
import createStory from "../../createStory"

import ButtonREADME from "./Button.README.md"
import Button from "../Button"

createStory("Button", "normal", ButtonREADME, () => (
  <Button onClick={() => console.log("clicked")}>Click Me</Button>
))
