import React from "react"
import axios from "axios"
import styled from "styled-components"
import { Link } from "gatsby"
import Layout from "../components/Layout"

const Container = styled.div`
  max-width: 60rem;
  margin: 0 auto;
  margin-top: 15vh;
  padding: 5rem;
  border: 2px solid maroon;
  border-radius: 5px;
`

const Title = styled.div`
  letter-spacing: 2px;
  text-align: center;
  margin-bottom: 2rem;
  font-size: 2.4rem;
  text-transform: uppercase;
`

class VerifyPage extends React.Component {
  state = { loading: true, success: false }

  async componentDidMount() {
    const token = this.props.location.search.replace("?token=", "")
    try {
      await axios.post(`${process.env.GATSBY_API_URL}/verify`, {
        token,
      })
      this.setState({ loading: false, success: true })
    } catch (error) {
      console.error(error)
      this.setState({ loading: false })
    }
  }

  renderResult() {
    const { success } = this.state

    if (success)
      return (
        <div>
          <p>
            Thank you for verifying your account. Please{" "}
            <Link to="/sign-in">click here</Link> to sign in.
          </p>
        </div>
      )
    else
      return (
        <div>
          <p>
            There is an error. Please contact the CrimsonHacks team at
            hello@crimsonhacks.com.
          </p>
          <br />
          <p>We apologize for any inconvenience.</p>
        </div>
      )
  }

  render() {
    const { loading } = this.state

    if (loading) return <p>Loading</p>

    return (
      <Layout>
        <Container>
          <Title>Email Verification</Title>
          {this.renderResult()}
        </Container>
      </Layout>
    )
  }
}
export default VerifyPage
