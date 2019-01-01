import styled from "styled-components"
import background from "../assets/background.png"

const BgContainer = styled.div`
  width: 100%;
  height: 100%;

  /* Background stuff */
  background: url(${background});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
`

export default BgContainer
