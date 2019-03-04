import jwt from "jsonwebtoken"
import transporter from "./transporter"

const EMAIL_SECRET = process.env.EMAIL_SECRET
const SITE_URL = process.env.SITE_URL

export function sendVerificationEmail(email) {
  jwt.sign(
    { data: { email, isVerification: true } },
    EMAIL_SECRET,
    (err, emailToken) => {
      const url = `${SITE_URL}/verify?token=${emailToken}`

      transporter.sendMail({
        to: email,
        subject: "CrimsonHacks 2019 - Verify Email",
        html: `<p>Please click this link to confirm your email.</p><br /><a href="${url}">${url}</a>`,
      })
    },
  )
}

export function sendResetPasswordEmail(email) {
  jwt.sign(
    { data: { email, isReset: true } },
    EMAIL_SECRET,
    (err, emailToken) => {
      const url = `${SITE_URL}/reset-password?token=${emailToken}`

      transporter.sendMail({
        to: email,
        subject: "CrimsonHacks 2019 - Reset Password",
        html: `<p>Please click this link to reset your account's password.</p><br /><a href="${url}">${url}</a>`,
      })
    },
  )
}
