import express from "express"
import { apps, users } from "../../db"
import throwError from "../../error"
import requireAuth from "../../middlewares/auth"

const router = express.Router()

// GET /application/status
router.get("/status", requireAuth, async (req, res) => {
  try {
    const email = res.locals.email

    const appP = apps.findOne({ email })
    const userP = users.findOne({ email })
    const [app, user] = await Promise.all([appP, userP])

    let status
    if (app) {
      if (user.isWithdrawn) {
        status = "WITHDRAWN"
      } else {
        status = "ACCEPTED"
      }
    } else {
      status = "INCOMPLETE"
    }
    res.status(200).send({ status })
  } catch (error) {
    throwError(res, error)
  }
})

// POST /application/
router.post("/", requireAuth, async (req, res) => {
  try {
    const email = res.locals.email
    const app = req.body
    const now = new Date().getTime()
    const existingApp = await apps.findOne({ email })
    if (existingApp) {
      app.createdAt = existingApp.createdAt
      await apps.deleteOne({ email })
    } else {
      app.createdAt = now
    }
    app.updatedAt = now
    await apps.insertOne(app)
    res.sendStatus(200)
  } catch (error) {
    throwError(res, error)
  }
})

// GET /application/
router.get("/", requireAuth, async (req, res) => {
  try {
    const email = res.locals.email
    const app = await apps.findOne({ email })
    if (app) delete app._id

    res.status(200).send({ application: app })
  } catch (error) {
    throwError(res, error)
  }
})

// POST /application/going/
router.post("/going", requireAuth, async (req, res) => {
  try {
    const email = res.locals.email
    await users.updateOne(
      { email },
      { $set: { isWithdrawn: !req.body.isGoing } },
    )
    res.sendStatus(200)
  } catch (error) {
    throwError(res, error)
  }
})

export default router
