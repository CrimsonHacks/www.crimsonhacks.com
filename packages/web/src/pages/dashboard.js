import React from "react"
import styled from "styled-components"
import axios from "axios"
// UIs
import Private from "../components/Private"
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

const Status = styled.div`
  padding: 1.5rem;
  background: #7c1813;
  border-radius: 5px;
  color: #fff;
  text-align: center;
  letter-spacing: 1px;
  font-size: 2rem;
  font-weight: 700;
`

class DashboardPage extends React.Component {
  state = { loading: true, status: "" }

  async componentDidMount() {
    const res = await axios.get(
      `${process.env.GATSBY_API_URL}/application/status`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      },
    )

    if (res.data.status === "INCOMPLETE") {
      this.props.navigate("/apply")
    }

    this.setState({ loading: false, status: res.data.status })
  }

  renderNote() {
    switch (this.state.status) {
      case "INCOMPLETE":
        return null
      case "APPLIED":
        return (
          <p>
            Yay!{" "}
            <span role="img" aria-label="party popper">
              🎉
            </span>{" "}
            You're all set! We'll reach out to you with a final decision.
          </p>
        )
      default:
        return null
    }
  }

  render() {
    const { loading, status } = this.state

    if (loading) return <p>Loading</p>

    return (
      <Private>
        <Layout>
          <Container>
            <Title>Your Status:</Title>
            <Status>{status}</Status>

            <hr style={{ margin: "2rem 0" }} />

            {this.renderNote()}
          </Container>
        </Layout>
      </Private>
    )
  }
}

export default DashboardPage
