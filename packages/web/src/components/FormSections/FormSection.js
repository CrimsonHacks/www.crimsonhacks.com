import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

const StyledFormSection = styled.section`
  &:not(:first-of-type) {
    margin-top: 10rem;
  }

  h2 {
    font-size: 2.4rem;
    margin-bottom: 2rem;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 2px;
  }
`

const Divider = styled.div`
  width: 30%;
  margin: 0 auto;
  margin-bottom: 4rem;
  height: 2px;
  background: #7c1813;
`

function FormSection({ name, children }) {
  return (
    <StyledFormSection>
      <h2>{name}</h2>
      <Divider />
      <div>{children}</div>
    </StyledFormSection>
  )
}

FormSection.propTypes = {
  name: PropTypes.string.isRequired,
}

export default FormSection
