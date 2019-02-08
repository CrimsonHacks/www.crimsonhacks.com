import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

function IconSelection(props) {
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path
        fillRule="evenodd"
        d="M8.7 9.7a1 1 0 1 1-1.4-1.4l4-4a1 1 0 0 1 1.4 0l4 4a1 1 0 1 1-1.4 1.4L12 6.42l-3.3 3.3zm6.6 4.6a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z"
      />
    </svg>
  )
}

const StyledSelect = styled.div`
  position: relative;

  & > select {
    width: 100%;
    display: inline-block;
    padding: 1rem 2rem;
    background: #fff;
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
