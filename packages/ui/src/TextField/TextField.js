import styled from "styled-components"

// Props passed down to the HTML input.

const TextField = styled.input`
  display: inline-block;
  padding: 1rem 2rem;
  background: #fff;
  font-family: "Source Sans Pro", sans-serif;
  font-size: 2rem;
  font-weight: 700;
  border-radius: 0.5rem;
  border: 0;
  box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.1);

  &:disabled {
    opacity: 0.7;
  }
`

TextField.defaultProps = {
  type: 'text'
}

export default TextField
