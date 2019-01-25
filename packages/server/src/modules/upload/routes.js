import express from "express"
import uuid from "uuid/v1"
import AWS from "aws-sdk"
import requireAuth from "../../middlewares/auth"

const S3_BUCKET_NAME = process.env.S3_BUCKET_NAME
const S3_ACCESS_KEY_ID = process.env.S3_ACCESS_KEY_ID
const S3_SECRET_ACCESS_KEY = process.env.S3_SECRET_ACCESS_KEY

const s3 = new AWS.S3({
  accessKeyId: S3_ACCESS_KEY_ID,
  secretAccessKey: S3_SECRET_ACCESS_KEY,
  signatureVersion: "v4",
  region: "us-east-2",
})

const router = express.Router()

router.get("/upload", requireAuth, (req, res) => {
  const key = `${res.locals.email}/${uuid()}.pdf`

  s3.getSignedUrl(
    "putObject",
    {
      Bucket: S3_BUCKET_NAME,
      ContentType: "application/pdf",
      Key: key,
    },
    (error, url) => res.status(200).send({ key, url }),
  )
})

export default router
