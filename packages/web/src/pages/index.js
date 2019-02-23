import React from "react"
import styled from "styled-components"
import axios from "axios"
import isValidEmail from "../utilities/isValidEmail"
import { Formik, Form, Field, ErrorMessage } from "formik"
// UIs
import { Button, CheckBox, TextField } from "ui"
import BgContainer from "../components/BgContainer"
import Error from "../components/Error"
import { Link } from "gatsby"

const Container = styled(BgContainer)`
  display: flex;
  justify-content: center;
  padding-top: 15vh;

  h1 {
    text-align: center;
    font-size: 3.6rem;
    margin-bottom: 4rem;
  }
  h2 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
  }
`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

const StyledForm = styled.form`
  max-width: 60rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 5rem;
  border: 2px solid maroon;
  border-radius: 5px;

  & > div {
    margin-bottom: 2rem;

    label {
      font-weight: 700;
      font-size: 1.8rem;
      margin-bottom: 0.5rem;
    }
    label + p {
      font-size: 1.4rem;
      margin-bottom: 0.8rem;
    }
  }

  ${TextField} {
    width: 100%;
  }
`

function getEmailError(email) {
  if (!email) {
    return "Required"
  } else if (!isValidEmail(email)) {
    return "Invalid email address"
  } else if (!email.includes(".edu")) {
    return "Please use your .edu email"
  }
}

function getPasswordError(password) {
  if (!password) {
    return "Required"
  } else if (password.length < 6) {
    return "Password must have at least 6 characters"
  }
}

class SignUpPage extends React.Component {
  state = { error: "", message: "" }

  render() {
    const { error, message } = this.state

    return (
      <Container>
        <div>
          <h1>CrimsonHacks 2019</h1>
          <h2>Sign Up</h2>

          <Formik
            initialValues={{ email: "", password: "", agreetos: [] }}
            validate={values => {
              const errors = {}

              const emailError = getEmailError(values.email)
              if (emailError) errors.email = emailError

              const passwordError = getPasswordError(values.password)
              if (passwordError) errors.password = passwordError

              if (!values.agreetos)
                errors.agreetos = "Please agree to the terms of service."

              return errors
            }}
            onSubmit={async (values, { setSubmitting }) => {
              if (typeof window !== "undefined") {
                try {
                  const res = await axios.post(
                    `${process.env.GATSBY_API_URL}/sign-in`,
                    values,
                  )

                  const { token, user, message } = res.data

                  if (token) {
                    localStorage.setItem("accessToken", token)
                    localStorage.setItem("user", JSON.stringify(user))
                    this.setState({ error: "" })
                    this.props.navigate("/dashboard")
                  } else {
                    this.setState({ error: "", message })
                  }
                } catch (e) {
                  const errorMessage =
                    e.response.data.message ||
                    "An unknown error has occured. Please try again."
                  this.setState({ error: errorMessage })
                }

                setSubmitting(false)
              }
            }}
          >
            {({ isSubmitting }) => (
              <StyledForm as={Form}>
                <div>
                  <label>Email</label>
                  <p>*Make sure to use your .edu email :)</p>
                  <TextField
                    as={Field}
                    type="email"
                    name="email"
                    placeholder="Email"
                  />
                  <ErrorMessage name="email" component={Error} />
                </div>

                <div>
                  <label>Password</label>
                  <TextField
                    as={Field}
                    type="password"
                    name="password"
                    placeholder="Password"
                  />
                  <ErrorMessage name="password" component={Error} />
                </div>

                <div>
                  <CheckBox
                    as={Field}
                    name="agreetos"
                    value="agree"
                    label="I agree to the MLH Terms of Service."
                  />
                  <ErrorMessage name="agreetos" component={Error} />
                </div>

                {error && <p style={{ color: "red" }}>{error}</p>}
                {message && <p style={{ color: "green" }}>{message}</p>}

                <ButtonContainer>
                  <Button type="submit" disabled={isSubmitting}>
                    Sign Up
                  </Button>
                </ButtonContainer>
                <p>
                  Already signed up? <Link to="/sign-in">Sign In</Link>
                </p>
              </StyledForm>
            )}
          </Formik>
        </div>
      </Container>
    )
  }
}

export default SignUpPage
