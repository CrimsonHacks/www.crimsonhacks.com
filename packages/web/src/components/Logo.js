import React from "react"
import Image from "gatsby-image"
import { StaticQuery, graphql } from "gatsby"

function Logo() {
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
        <Image
          alt="CrimsonHacks logo"
          fixed={data.logo.childImageSharp.fixed}
          style={{
            maxWidth: 240,
            width: "100%",
            margin: "0 auto",
          }}
        />
      )}
    />
  )
}

export default Logo
