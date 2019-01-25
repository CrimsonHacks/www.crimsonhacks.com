function throwError(res, error) {
  if (process.env.NODE_ENV === "development") {
    console.log(error)
    res.status(500).send(error)
  } else {
    res.status(500).send({ message: "Unknown error. Please retry." })
  }
}

export default throwError
