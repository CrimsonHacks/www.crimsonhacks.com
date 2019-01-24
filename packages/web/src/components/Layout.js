import React from "react"
import styled from "styled-components"
import BgContainer from "./BgContainer"
import Nav from "./Nav"

const Background = styled(BgContainer)`
  overflow-y: hidden;
`

const ScrollContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: scroll;
`

function Layout({ children }) {
  return (
    <Background>
      <ScrollContainer>
        <Nav />
        {children}
      </ScrollContainer>
    </Background>
  )
}

export default Layout
