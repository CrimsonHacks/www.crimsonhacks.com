import React from "react"
import questions from "questions"
import styled from "styled-components"
import axios from "axios"
import { navigate } from "gatsby"
import { Formik, Form } from "formik"
// UIs
import Layout from "./Layout"
import {
  BasicInfo,
  DetailsSection,
  SkillsSection,
  AdditionalSection,
} from "./FormSections"

const Container = styled.div`
  max-width: 80rem;
  margin: 0 auto;
  padding: 5rem 0 20rem 0;
`

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 3rem;
`

const Title = styled.h1`
  text-align: center;
  font-size: 4rem;
  margin-bottom: 5rem;
  color: #7c1813;
`

function checkRequired(question, values, errors) {
  if (question.required) {
    if (!values[question.name]) {
      errors[question.name] = "Required"
    }
  }
}

class Application extends React.Component {
  state = { loading: true, application: null, error: "" }

  async componentDidMount() {
    const res = await axios.get(`${process.env.GATSBY_API_URL}/application`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })

    const application = res.data.application
    this.setState({ loading: false, application })
  }

  render() {
    const { loading, application, error } = this.state

    if (loading) return <p>Loading</p>

    const URL = process.env.GATSBY_API_URL
    const TOKEN = `Bearer ${localStorage.getItem("accessToken")}`

    let initialValues = {}

    Object.values(questions).forEach(section => {
      section.forEach(q => (initialValues[q.name] = q.defaultValue || ""))
    })

    const user = JSON.parse(localStorage.getItem("user"))
    initialValues.email = user.email

    if (application) {
      initialValues = application
    }

    return (
      <Layout>
        <Container>
          <Title>CrimsonHacks 2019 Application</Title>

          <Formik
            initialValues={initialValues}
            validate={values => {
              const errors = {}

              Object.values(questions).forEach(section => {
                section.forEach(question => {
                  checkRequired(question, values, errors)
                })
              })

              return errors
            }}
            onSubmit={async (values, { setSubmitting }) => {
              try {
                // Handle resume
                if (typeof values.resume !== "string") {
                  const {
                    data: { url },
                  } = await axios.get(`${URL}/upload`, {
                    headers: { Authorization: TOKEN },
                  })

                  await axios.put(url, values.resume, {
                    headers: {
                      "Content-Type": values.resume.type,
                    },
                  })

                  values.resume = url.substring(0, url.indexOf(".pdf") + 4)
                }

                // Submit the data
                await axios.post(`${URL}/application`, values, {
                  headers: { Authorization: TOKEN },
                })
                navigate("/dashboard")
              } catch (error) {
                console.error(error)
                console.error(error.response)

                let errorMessage =
                  "An unknown error has occurred. Please try again."
                if (
                  error.response &&
                  error.response.data &&
                  error.response.data.message
                )
                  errorMessage = error.response.data.message

                this.setState({ error: errorMessage })
              }
              setSubmitting(false)
            }}
          >
            {({ isSubmitting }) => (
              <StyledForm as={Form}>
                <BasicInfo />
                <DetailsSection />
                <SkillsSection />
                <AdditionalSection isSubmitting={isSubmitting} />

                {error && <p style={{ color: "red", fontSize: 30 }}>{error}</p>}
              </StyledForm>
            )}
          </Formik>
        </Container>
      </Layout>
    )
  }
}

export default Application
