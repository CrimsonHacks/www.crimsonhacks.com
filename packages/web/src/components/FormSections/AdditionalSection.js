import React from "react"
import questions from "questions"
// UIs
import FormSection from "./FormSection"
import FormField from "./FormField"
import { Button } from "ui"

function AdditionalSection({ isSubmitting }) {
  return (
    <FormSection
      name="Everything Else"
      description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis, officia deleniti, quos vitae."
    >
      {questions.additional.map(q => (
        <FormField key={q.name} question={q} />
      ))}

      <Button
        type="submit"
        disabled={isSubmitting}
        style={{ marginTop: "2rem" }}
      >
        Apply
      </Button>
    </FormSection>
  )
}

export default AdditionalSection
