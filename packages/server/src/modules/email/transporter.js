import nodemailer from "nodemailer"
import smtpTransport from "nodemailer-smtp-transport"

const EMAIL_HOST = process.env.EMAIL_HOST
const EMAIL_USER = process.env.EMAIL_USER
const EMAIL_PASS = process.env.EMAIL_PASS
const EMAIL_PORT = process.env.EMAIL_PORT

const options = {
  host: EMAIL_HOST,
  port: EMAIL_PORT,
  secure: true,
  auth: {
    user: EMAIL_USER,
    pass: EMAIL_PASS,
  },
}

const transporter = nodemailer.createTransport(smtpTransport(options))

export default transporter
