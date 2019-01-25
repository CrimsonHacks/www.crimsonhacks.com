import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const StyledCheckBox = styled.input`
  margin-right: 1rem;
`

function CheckBox({ label, ...props }) {
  return (
    <label>
      <StyledCheckBox type="checkbox" {...props} />
      {label}
    </label>
  )
}

CheckBox.propTypes = {
  label: PropTypes.string.isRequired,
}

export default CheckBox
