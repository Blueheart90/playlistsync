import { Prisma } from '@prisma/client'
import { authValidate, authValidatePartial } from '../schemas/authSchema.js'
import { UserModel } from '../models/user.js'
import { successResponse } from '../utils/successResponse.js'
import { ValidationError } from '../exceptions/validationError.js'

export class AuthController {
  static async login(req, res) {
    res.json('desde login')
  }
  static async register(req, res) {
    const result = authValidate(req.body)
    if (!result.success) throw new ValidationError(result.error.issues)
    // if (!result.success) return res.status(400).json(result.error.issues)

    const newUser = await UserModel.create(req.body)
    successResponse(res, 201, newUser)
  }
}
