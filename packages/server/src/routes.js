import express from "express"
// Routes
import authenticationRouter from "./modules/authentication/routes"
import applicationRouter from "./modules/application/routes"
import uploadRouter from "./modules/upload/routes"

const router = express.Router()

router.use("/", authenticationRouter)
router.use("/", uploadRouter)
router.use("/application", applicationRouter)

export default router
