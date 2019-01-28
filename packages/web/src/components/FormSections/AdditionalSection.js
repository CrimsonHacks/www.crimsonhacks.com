import React from "react"
import questions from "questions"
import styled from "styled-components"
// UIs
import FormSection from "./FormSection"
import FormField from "./FormField"
import { Field, ErrorMessage } from "formik"
import { Button, CheckBox } from "ui"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
`

const Label = styled.label`
  font-weight: 700;
  margin-bottom: 0.5rem;
`

const Error = styled.div`
  color: red;
  margin-bottom: 1rem;
`

const Notes = styled.div`
  margin-bottom: 1rem;

  *:not(:last-child) {
    margin-bottom: 1.2rem;
  }
`

function CustomCheckBox({ field, ...props }) {
  console.log(field)
  return <CheckBox checked={field.value} {...field} {...props} />
}

function AdditionalSection({ isSubmitting }) {
  return (
    <FormSection
      name="Everything Else"
      description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis, officia deleniti, quos vitae."
    >
      <Container>
        <Label>MLH Code of Conduct</Label>

        <Notes>
          <p>
            It is extremely important to us that attendees follow MLH's set of
            guidelines to make the event fun for everyone involved.
          </p>
          <p>
            Please read through and make sure you understand what we will be
            expecting of you.
          </p>
          <a
            href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            MLH Code of Conduct
          </a>
        </Notes>

        <Field
          component={CustomCheckBox}
          name="coc"
          label="I have read and agree to the MLH Code of Conduct."
        />
        <ErrorMessage name="coc" component={Error} />

        <Field
          component={CustomCheckBox}
          name="authorize"
          label="I authorize you to share my application/registration information for event administration, ranking, MLH administration, pre- and post-event informational e-mails, and occasional messages about hackathons in-line with the MLH Privacy Policy. I further I agree to the terms of both the MLH Contest Terms and Conditions and the MLH Privacy Policy."
        />
        <ErrorMessage name="authorize" component={Error} />
      </Container>

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
