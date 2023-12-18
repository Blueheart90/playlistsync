import jwt from 'jsonwebtoken'
import 'dotenv/config'
import { CredencialError } from '../exceptions/credencialError.js'

//middleware to validate token (rutas protegidas)
export const verifyToken = async (req, res, next) => {
  try {
    let token = req.get('authorization')

    if (!token) {
      throw new CredencialError(null, 'No token provided')
    }

    if (token.startsWith('Bearer ')) {
      token = token.slice(7, token.length).trimLeft()
    }

    const verified = jwt.verify(token, process.env.JWT_ACCESS_SECRET)
    req.user = verified
    next()
  } catch (err) {
    res.status(401).json({
      status: 'error',
      name: err.name,
      message: err.message,
      code: err.code || null,
      errors: err.errors || null
    })
  }
}
