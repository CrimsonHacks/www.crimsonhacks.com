import React from "react"
import styled from "styled-components"
// UIs
import Logo from "../components/Logo"
import BgContainer from "../components/BgContainer"
import SubscriptionForm from "../components/SubscriptionForm"

const Container = styled(BgContainer)`
  font-family: "Source Sans Pro", sans-serif;
  padding-top: 10%;

  & > div {
    text-align: center;

    h2 {
      font-size: 5rem;
      font-weight: 300;
      margin-bottom: 3rem;
    }
  }
`

function IndexPage({ navigate }) {
  return (
    <Container>
      <div>
        <Logo />
        <h2>Returning March 23, 2019</h2>

        <SubscriptionForm />
      </div>
    </Container>
  )
}

export default IndexPage
