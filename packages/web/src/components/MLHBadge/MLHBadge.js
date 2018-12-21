import React from "react"
import styled from "styled-components"
import SVG from "./SVG"

const StyledMLHBadge = styled.a`
  display: block;
  max-width: 100px;
  min-width: 60px;
  position: fixed;
  right: 50px;
  top: 0;
  width: 10%;
  z-index: 10000;

  img {
    width: 100%;
  }
`

function MLHBadge() {
  return (
    <StyledMLHBadge
      id="mlh-trust-badge"
      href="https://mlh.io/seasons/na-2019/events?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2019-season&utm_content=white"
      target="_blank"
    >
      <SVG />
    </StyledMLHBadge>
  )
}

export default MLHBadge
