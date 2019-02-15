import express from "express"
// Routes
import authenticationRouter from "./modules/authentication/routes"
import applicationRouter from "./modules/application/routes"
import uploadRouter from "./modules/upload/routes"

const router = express.Router()

router.use("/", authenticationRouter)
router.use("/", uploadRouter)
router.use("/application", applicationRouter)

router.get("/ping", (req, res) => res.sendStatus(200))

export default router
