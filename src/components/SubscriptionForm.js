import React from "react"
import styled from "styled-components"
import addToMailchimp from "gatsby-plugin-mailchimp"
// UIs
import Button from "./Button"
import TextField from "./TextField"

const Message = styled.p`
  color: ${props => (props.status === "error" ? "red" : "green")};
  margin-bottom: 1rem;
  font-size: 1.8rem;
`

const Form = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > div {
    & > div {
      display: flex;
      flex-direction: row;

      & > *:not(:last-child) {
        margin-right: 1.5rem;
      }
    }
  }

  @media (max-width: 480px) {
    & > div {
      & > div {
        display: flex;
        flex-direction: column;

        & > *:not(:last-child) {
          margin-right: 0;
          margin-bottom: 2rem;
        }
      }
    }
  }
`

class SubscriptionForm extends React.Component {
  state = { status: "", message: "" }

  submit = async e => {
    e.preventDefault()

    const email = document.getElementById("email").value
    console.log(email)

    const data = await addToMailchimp(email)
    console.log("here")
    this.setState({ status: data.result, message: data.msg })
  }

  render() {
    const { status, message } = this.state
    console.log(status, message)
    return (
      <Form>
        <div>
          {status && <Message status={status}>{message}</Message>}
          <div>
            <TextField id="email" type="email" placeholder="Email" />
            <Button onClick={this.submit}>Pre-register</Button>
          </div>
        </div>
      </Form>
    )
  }
}

export default SubscriptionForm
