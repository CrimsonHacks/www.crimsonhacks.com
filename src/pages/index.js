import React from "react"
import styled, { css } from "styled-components"
import { StaticQuery, graphql } from "gatsby"
// UIs
import Image from "gatsby-image"
import SubscriptionForm from "../components/SubscriptionForm"
// Images
import background from "../assets/background.png"

const backgroundCss = css`
  background: url(${background});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
`

const Container = styled.div`
  width: 100%;
  height: 100%;
  font-family: "Source Sans Pro", sans-serif;
  padding-top: 10%;

  ${backgroundCss}

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
              fixed(width: 300) {
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
              style={{ maxWidth: 300, margin: "0 auto" }}
            />

            <h2>Returning March 23, 2019</h2>

            <SubscriptionForm />
            <a
              href="https://mlh.io/code-of-conduct"
              target="_blank"
              rel="noopener noreferrer"
            >
              Code of Conduct
            </a>
          </div>
        </Container>
      )}
    />
  )
}

export default IndexPage
