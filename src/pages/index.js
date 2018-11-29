import React from "react"
import styled, { css } from "styled-components"
import { StaticQuery, graphql } from "gatsby"
// UIs
import Image from "gatsby-image"
import Button from "../components/Button"
import TextField from "../components/TextField"
// Images
import background from "../assets/background.png"
import logo from "../assets/logo.png"

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

const Form = styled.form`
  & > *:not(:last-child) {
    margin-right: 1.5rem;
  }
`

function IndexPage() {
  function submit(e) {
    e.preventDefault()

    console.log("subscribe")
  }

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
      render={data =>
        console.log(data) || (
          <Container>
            <div>
              {/* <img src={logo} alt="CrimsonHacks logo" /> */}
              <Image
                alt="CrimsonHacks logo"
                fixed={data.logo.childImageSharp.fixed}
                style={{ maxWidth: 300, margin: "0 auto" }}
              />

              <h2>Returning March 23, 2019</h2>

              <Form method="post" onSubmit={submit}>
                <TextField id="email" type="email" placeholder="Email" />
                <Button type="submit">Pre-register</Button>
              </Form>
            </div>
          </Container>
        )
      }
    />
  )
}

export default IndexPage
