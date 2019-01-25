import "./env"

import express from "express"
import bodyParser from "body-parser"
import morgan from "morgan"
import cors from "cors"

import routes from "./routes"

const app = express()
app.use(morgan("combined"))
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json({ type: "*/*", limit: "200mb" }))
app.use("/", routes)

// Server Setup
const port = process.env.PORT
app.listen(port, () => {
  console.log("Server listening on port: " + port)
})
