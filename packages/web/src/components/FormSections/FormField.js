import React from "react"
import styled from "styled-components"
import { Field, ErrorMessage } from "formik"
import { CheckBox, Select, TextField, TextArea } from "ui"
import Upload from "../Upload"

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
`

const Notes = styled.div`
  margin-bottom: 1rem;

  *:not(:last-child) {
    margin-bottom: 1.2rem;
  }
`

const CheckBoxList = styled.div`
  display: flex;

  & > *:not(:last-child) {
    margin-right: 3rem;
  }
`

function CustomTextField({ field, ...props }) {
  return <TextField {...field} {...props} />
}

function CustomTextArea({ field, ...props }) {
  return <TextArea {...field} {...props} />
}

function CustomSelect({ field, ...props }) {
  return <Select {...field} {...props} />
}

function CustomCheckBox({ field, ...props }) {
  return <CheckBox checked={field.value} {...field} {...props} />
}

function FormField({ formik, question }) {
  function renderField() {
    switch (question.type) {
      case "custom":
        return (
          <div>
            <Upload name="resume" accept="application/pdf">
              Upload
            </Upload>
          </div>
        )
      case "checkbox":
        return (
          <CheckBoxList>
            {question.options.map(choice => (
              <Field
                key={choice.value}
                component={CustomCheckBox}
                name={`${question.name}.${choice.value}`}
                label={choice.label}
              />
            ))}
          </CheckBoxList>
        )
      case "select":
        return (
          <Field
            component={CustomSelect}
            type={question.type}
            name={question.name}
            placeholder={question.placeholder}
            validate={question.validate}
            disabled={question.disabled || question.name === "email"}
            options={question.options}
          />
        )
      case "textarea":
        return (
          <Field
            rows={6}
            component={CustomTextArea}
            type={question.type}
            name={question.name}
            placeholder={question.placeholder}
            validate={question.validate}
            disabled={question.disabled || question.name === "email"}
          />
        )
      case "text":
      case "email":
      default:
        return (
          <Field
            component={CustomTextField}
            type={question.type}
            name={question.name}
            placeholder={question.placeholder}
            validate={question.validate}
            disabled={question.disabled || question.name === "email"}
          />
        )
    }
  }

  return (
    <Container>
      <Label>{question.label}</Label>

      {question.notes && (
        <Notes dangerouslySetInnerHTML={{ __html: question.notes }} />
      )}

      {renderField()}

      <ErrorMessage name={question.name} component={Error} />
    </Container>
  )
}

export default FormField
