import React from "react"
import questions from "questions"
// UIs
import FormSection from "./FormSection"
import FormField from "./FormField"

function DetailsSection() {
  return (
    <FormSection
      name="Details"
      description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis, officia deleniti, quos vitae."
    >
      {questions.details.map(q => (
        <FormField key={q.name} question={q} />
      ))}
    </FormSection>
  )
}

export default DetailsSection
