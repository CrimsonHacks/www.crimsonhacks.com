import React from "react"
import questions from "questions"
// UIs
import FormSection from "./FormSection"
import FormField from "./FormField"

function BasicInfo() {
  return (
    <FormSection name="Skills">
      {questions.skills.map(q => (
        <FormField key={q.name} question={q} />
      ))}
    </FormSection>
  )
}

export default BasicInfo
