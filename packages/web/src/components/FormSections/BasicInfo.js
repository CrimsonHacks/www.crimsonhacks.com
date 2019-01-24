import React from "react"
import { css } from "styled-components"
import questions from "questions"
// UIs
import FormSection from "./FormSection"
import FormField from "./FormField"

function BasicInfo() {
  const [email, firstName, lastName, ...rest] = questions.basic

  return (
    <FormSection
      name="Basic Information"
      description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis, officia deleniti, quos vitae."
    >
      <FormField question={email} />

      <div
        css={css`
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
        `}
      >
        <FormField question={firstName} />
        <FormField question={lastName} />
      </div>

      {rest.map(q => (
        <FormField key={q.name} question={q} />
      ))}
    </FormSection>
  )
}

export default BasicInfo
