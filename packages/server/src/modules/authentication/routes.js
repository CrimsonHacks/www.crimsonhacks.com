import express from "express"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import { users } from "../../db"
import throwError from "../../error"
import { sendVerificationEmail } from "../email/verification"

const router = express.Router()

function createAuthPayload(user) {
  return {
    token: jwt.sign(
      {
        exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 7,
        data: { email: user.email },
      },
      process.env.JWT_SECRET,
    ),
    user,
  }
}

router.post("/sign-in", async (req, res) => {
  try {
    let { email, password } = req.body
    email = email.toLowerCase()

    const foundUser = await users.findOne({ email })
    if (foundUser) {
      // Compare password
      const isCorrectPassword = await bcrypt.compare(
        password,
        foundUser.password,
      )

      if (isCorrectPassword) {
        if (foundUser.isVerified) {
          delete foundUser.password
          delete foundUser._id
          res.status(200).send(createAuthPayload(foundUser))
          return
        } else {
          res
            .status(403)
            .send({ message: "Please confirm your email to sign in." })
        }
      } else {
        res.status(403).send({ message: "Incorrect email or password." })
        return
      }
    } else {
      const hashedPw = await bcrypt.hash(password, 10)
      await users.insertOne({ email, password: hashedPw })

      sendVerificationEmail(email)

      res.status(200).send({
        token: null,
        user: null,
        message: "Please confirm your email.",
      })
    }
  } catch (error) {
    throwError(res, error)
  }
})

router.post("/verify", async (req, res) => {
  try {
    let { token } = req.body

    const {
      data: { email },
    } = jwt.verify(token, process.env.EMAIL_SECRET)

    const foundUser = await users.findOne({ email })
    if (!foundUser || foundUser.isVerified) {
      res.sendStatus(500)
    } else {
      await users.updateOne({ email }, { $set: { isVerified: true } })
      res.sendStatus(200)
    }
  } catch (error) {
    throwError(res, error)
  }
})

router.post("/resend", async (req, res) => {
  try {
    let { email } = req.body
    email = email.toLowerCase()

    const foundUser = await users.findOne({ email })

    if (foundUser) {
      if (!foundUser.isVerified) {
        sendVerificationEmail(email)
        res.sendStatus(200)
      } else {
        res.status(403).send({
          message: "User already verified.",
        })
      }
    } else {
      res.status(403).send({
        message:
          "Cannot find a user with this email. Please create a new account.",
      })
    }
  } catch (error) {
    throwError(res, error)
  }
})

export default router
