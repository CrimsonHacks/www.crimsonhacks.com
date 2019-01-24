import React from "react"
import styled from "styled-components"
import { Link, StaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import { Button } from "ui"
import Private from "./Private"

const StyledNav = styled.header`
  padding: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > div > * {
    display: inline-block;
  }
`

const Links = styled.nav`
  & > *:not(:last-child) {
    margin-right: 3rem;
  }

  & > * {
    font-size: 1.8rem;
    text-decoration: none;
    /* color: blue; */
    cursor: pointer;

    &:visited {
      color: #666;
    }

    &:hover {
      color: #7c1813;
      border-bottom: 1px solid currentColor;
    }
  }
`

function Nav() {
  return (
    <StyledNav>
      <StaticQuery
        query={graphql`
          {
            logo: file(relativePath: { regex: "/logo.png/" }) {
              childImageSharp {
                fixed(width: 80) {
                  ...GatsbyImageSharpFixed_tracedSVG
                }
              }
            }
          }
        `}
        render={data => (
          <Image
            alt="CrimsonHacks logo"
            fixed={data.logo.childImageSharp.fixed}
            style={{
              maxWidth: 80,
              width: "100%",
              cursor: "pointer",
            }}
          />
        )}
      />

      <Private willRedirect={false}>
        <Links>
          <Button as={Link} to="/dashboard">
            Dashboard
          </Button>
          <Button as={Link} to="/register">
            Application
          </Button>
          <Button as={Link} to="/" onClick={() => localStorage.clear()}>
            Logout
          </Button>
        </Links>
      </Private>
    </StyledNav>
  )
}

export default Nav
