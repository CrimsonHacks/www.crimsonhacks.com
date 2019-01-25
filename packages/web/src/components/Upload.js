import React from "react"
import { connect, getIn } from "formik"
import PropTypes from "prop-types"
import { Button } from "ui"

function Upload({ name, accept, formik, children }) {
  const fileInput = React.createRef()

  function onChange(e) {
    formik.setFieldValue("resume", e.target.files[0])
  }

  const value = getIn(formik.values, name)

  function renderValue() {
    console.log("hmm")
    if (typeof value === "string") {
      return (
        <a href={value} target="_blank" rel="noopener noreferrer">
          Check it out
        </a>
      )
    } else {
      return value.name
    }
  }

  return (
    <React.Fragment>
      <input
        type="file"
        ref={fileInput}
        accept={accept}
        onChange={onChange}
        style={{ display: "none" }}
      />
      <Button type="button" onClick={() => fileInput.current.click()}>
        {children}
      </Button>
      {value && (
        <span style={{ marginLeft: "1.5rem", color: "green" }}>
          {renderValue()}
        </span>
      )}
    </React.Fragment>
  )
}

Upload.propTypes = {
  accept: PropTypes.string,
}

export default connect(Upload)
