import React from "react"
import styled from "styled-components"
import { Formik, Form, Field, ErrorMessage } from "formik"
// UIs
import { Button, TextField } from "ui"
import BgContainer from "../components/BgContainer"

const Container = styled(BgContainer)`
  display: flex;
  justify-content: center;
  align-items: center;
`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

const StyledForm = styled.form`
  max-width: 40rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  ${TextField} {
    width: 100%;
  }
`

function getEmailError(email) {
  if (!email) {
    return "Required"
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
    return "Invalid email address"
  }
}

function getPasswordError(password) {
  if (!password) {
    return "Required"
  } else if (password.length < 6) {
    return "Password must have at least 6 characters"
  }
}

function RegisterPage() {
  return (
    <Container>
      <Formik
        initialValues={{ email: "", password: "" }}
        validate={values => {
          const errors = {}

          const emailError = getEmailError(values.email)
          if (emailError) errors.email = emailError

          const passwordError = getPasswordError(values.password)
          if (passwordError) errors.password = passwordError

          return errors
        }}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values)
          setSubmitting(false)
        }}
      >
        {({ isSubmitting }) => (
          <StyledForm as={Form}>
            <div>
              <TextField
                as={Field}
                type="email"
                name="email"
                placeholder="Email"
              />
              <ErrorMessage name="email" component="div" />
            </div>

            <div>
              <TextField
                as={Field}
                type="password"
                name="password"
                placeholder="Password"
              />
              <ErrorMessage name="password" component="div" />
            </div>

            <ButtonContainer>
              <Button type="submit" disabled={isSubmitting}>
                Sign In
              </Button>
              {/* <Button type="submit" disabled={isSubmitting}>
                Create an account
              </Button> */}
            </ButtonContainer>
          </StyledForm>
        )}
      </Formik>
    </Container>
  )
}

export default RegisterPage
