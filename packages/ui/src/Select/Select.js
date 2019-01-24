import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { IconSelection } from "../Icon"

const StyledSelect = styled.div`
  position: relative;

  & > select {
    width: 100%;
    display: inline-block;
    padding: 1rem 2rem;
    font-family: "Source Sans Pro", sans-serif;
    font-size: 2rem;
    font-weight: 700;
    border-radius: 0.5rem;
    border: 0;
    box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.1);
    appearance: none;
  }

  & > svg {
    position: absolute;
    top: 50%;
    right: 5px;
    transform: translateY(-50%);
  }
`

function Select({ placeholder, options, ...props }) {
  return (
    <StyledSelect>
      <select {...props}>
        <option value="">{placeholder}</option>
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      <IconSelection height={20} width={20} />
    </StyledSelect>
  )
}

Select.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
      label: PropTypes.string.isRequired,
    }),
  ).isRequired,
}

export default Select
