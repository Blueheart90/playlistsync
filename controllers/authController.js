import jwt from 'jsonwebtoken'
import 'dotenv/config'
import {
  authValidate,
  authValidatePartial,
  loginValidate
} from '../schemas/authSchema.js'
import { UserModel } from '../models/user.js'
import { successResponse } from '../utils/successResponse.js'
import { ValidationError } from '../exceptions/validationError.js'
import { checkUser } from '../utils/checkUser.js'
import { CredencialError } from '../exceptions/credencialError.js'

export class AuthController {
  static async protected(req, res) {
    const authorization = req.get('authorization')

    successResponse(res, 200, { message: 'protected', authorization })
  }
  static async login(req, res) {
    const result = loginValidate(req.body)

    if (!result.success) throw new ValidationError(result.error.issues)

    const { email, password } = req.body

    const user = await UserModel.getByEmail(email)
    const isAuth = await checkUser(user, password)
    if (isAuth) {
      const payload = {
        id: user.id,
        name: user.name,
        email: user.email
      }

      // firmamos el token
      const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, {
        expiresIn: 60 * 60
      })
      successResponse(res, 200, {
        name: user.name,
        email: user.email,
        accessToken
      })
    } else {
      throw new CredencialError()
    }
  }
  static async register(req, res) {
    const result = authValidate(req.body)
    if (!result.success) throw new ValidationError(result.error.issues)

    const newUser = await UserModel.create(req.body)
    successResponse(res, 201, newUser)
  }
}
