import React from "react"
import styled from "styled-components"
import axios from "axios"
import useInput from "../hooks/useInput"
import isValidEmail from "../utilities/isValidEmail"
// UIs
import { TextField, Button } from "ui"
import BgContainer from "../components/BgContainer"
import Error from "../components/Error"

const Container = styled(BgContainer)`
  display: flex;
  justify-content: center;
  padding-top: 15vh;

  h1 {
    text-align: center;
    font-size: 3.6rem;
    margin-bottom: 4rem;
  }

  & > div {
    width: 100%;
  }
`

const StyledForm = styled.div`
  margin: 0 auto;
  max-width: 60rem;
  width: 100%;
  padding: 5rem;
  border: 2px solid maroon;
  border-radius: 5px;

  h2 {
    font-size: 2.4rem;
    text-align: center;
  }

  label {
    display: block;
  }

  ${Button} {
    margin-top: 2rem;
  }
`

const Success = styled.div`
  color: green;
`

function ForgotPassword() {
  const { value: email, bindToInput: emailInput } = useInput("")
  const [note, setNote] = React.useState({ type: null, value: "" })

  const setError = value => setNote({ type: "error", value })
  const setSuccess = value => setNote({ type: "success", value })

  async function forgotPassword() {
    if (!email || !isValidEmail(email)) {
      setError("Please enter a valid email")
      return
    }

    setError("")

    try {
      await axios.post(`${process.env.GATSBY_API_URL}/forgot-password`, {
        email,
      })
      setSuccess(
        `We've sent a reset link to ${email}. Please check your inbox.`,
      )
    } catch (error) {
      if (
        error &&
        error.response &&
        error.response.data &&
        error.response.data.message
      )
        setError(error.response.data.message)
      else setError("Unknown error. Please try again.")
    }
  }

  return (
    <Container>
      <div>
        <h1>CrimsonHacks 2019</h1>
        <StyledForm>
          <h2>Forgot Password</h2>

          <label>
            Email:
            <br />
            <TextField
              type="email"
              placeholder="kedron@crimson.ua.edu"
              {...emailInput}
            />
          </label>

          {note.value && note.type === "error" && <Error>{note.value}</Error>}
          {note.value && note.type === "success" && (
            <Success>{note.value}</Success>
          )}

          <Button onClick={forgotPassword}>Reset</Button>
        </StyledForm>
      </div>
    </Container>
  )
}

export default ForgotPassword
