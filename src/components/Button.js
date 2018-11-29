import styled from "styled-components"

export default styled.button`
  display: inline-block;
  padding: 1rem 2rem;
  font-family: "Source Sans Pro", sans-serif;
  font-size: 2rem;
  font-weight: 700;
  border-radius: 0.5rem;
  border: 0;
  box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.1);

  display: inline-block;
  text-align: center;

  color: #212529;
  background-color: #f8f9fa;

  transition: all 0.15s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: #e2e6ea;
  }

  &:active {
    transform: translateY(2px);
  }
`
