import React from "react"
import styled from "styled-components"
import axios from "axios"
import useInput from "../hooks/useInput"
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

function useAxios(url, body) {
  const [state, setState] = React.useState({
    error: "",
    loading: true,
    data: null,
  })

  React.useEffect(() => {
    axios
      .post(url, body)
      .then(res => {
        console.log(res)
        setState({ error: "", loading: false, data: res.data })
      })
      .catch(error => {
        setState({ error, loading: false, data: null })
      })
  }, [])

  return state
}

function ResetPassword({ location }) {
  const token = location.search.replace("?token=", "")
  console.log(token)
  const {
    error,
    loading,
    data,
  } = useAxios(`${process.env.GATSBY_API_URL}/reset-password`, { token })

  const { value: password, bindToInput: passwordInput } = useInput("")
  const {
    value: confirmPassword,
    bindToInput: confirmPasswordInput,
  } = useInput("")
  const [note, setNote] = React.useState({ type: null, value: "" })

  const setError = value => setNote({ type: "error", value })
  const setSuccess = value => setNote({ type: "success", value })

  async function resetPassword() {
    if (password !== confirmPassword) {
      setError("Confirm password doesn't match with password.")
      return
    }

    try {
      await axios.put(`${process.env.GATSBY_API_URL}/reset-password`, {
        token,
        password,
      })
      setSuccess(`Your password is reset.`)
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

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.response.data.message}</p>

  return (
    <Container>
      <div>
        <h1>CrimsonHacks 2020</h1>
        <StyledForm>
          <h2>Reset Password</h2>

          <label>
            Email:
            <br />
            <TextField type="email" value={data.email} disabled />
          </label>

          <label>
            Password:
            <br />
            <TextField
              type="password"
              placeholder="password"
              {...passwordInput}
            />
          </label>

          <label>
            Confirm Password:
            <br />
            <TextField
              type="password"
              placeholder="password"
              {...confirmPasswordInput}
            />
          </label>

          {note.value && note.type === "error" && <Error>{note.value}</Error>}
          {note.value && note.type === "success" && (
            <Success>{note.value}</Success>
          )}

          <Button onClick={resetPassword}>Reset</Button>
        </StyledForm>
      </div>
    </Container>
  )
}

export default ResetPassword
