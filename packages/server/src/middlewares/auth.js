import jwt from "jsonwebtoken"

function requireAuth(req, res, next) {
  let token = req.get("Authorization")
  if (token) {
    token = token.replace("Bearer ", "")
    const {
      data: { email },
    } = jwt.verify(token, process.env.JWT_SECRET)

    res.locals.email = email

    next()
    return
  }
  res.status(401).send({ message: "Unauthorized." })
  return
}

export default requireAuth
