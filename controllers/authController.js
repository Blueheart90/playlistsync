import { Prisma } from '@prisma/client'
import {
  authValidate,
  authValidatePartial,
  loginValidate
} from '../schemas/authSchema.js'
import { UserModel } from '../models/user.js'
import { successResponse } from '../utils/successResponse.js'
import { ValidationError } from '../exceptions/validationError.js'
import { comparePassword } from '../utils/hashPassword.js'

export class AuthController {
  static async login(req, res) {
    const result = loginValidate(req.body)

    if (!result.success) throw new ValidationError(result.error.issues)

    const { email, password } = req.body

    const user = await UserModel.getByEmail(email)
    const checkPassword = await comparePassword(password, user.password)
    console.log(checkPassword)
    successResponse(res, 201, user)
  }
  static async register(req, res) {
    const result = authValidate(req.body)
    if (!result.success) throw new ValidationError(result.error.issues)

    const newUser = await UserModel.create(req.body)
    successResponse(res, 201, newUser)
  }
}
