import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Image from "gatsby-image"
// UIs
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

function IndexPage() {
  return (
    <StaticQuery
      query={graphql`
        {
          logo: file(relativePath: { regex: "/logo.png/" }) {
            childImageSharp {
              fixed(width: 240) {
                ...GatsbyImageSharpFixed_tracedSVG
              }
            }
          }
        }
      `}
      render={data => (
        <Container>
          <div>
            <Image
              alt="CrimsonHacks logo"
              fixed={data.logo.childImageSharp.fixed}
              style={{ maxWidth: 240, width: "100%", margin: "0 auto" }}
            />

            <h2>Returning March 23, 2019</h2>

            <SubscriptionForm />
          </div>
        </Container>
      )}
    />
  )
}

export default IndexPage
