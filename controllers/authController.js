import bcrypt from 'bcrypt'
import { authValidate, authValidatePartial } from '../schemas/authSchema.js'
import { UserModel } from '../models/user.js'

export class AuthController {
  static async login(req, res) {
    res.json('desde login')
  }
  static async register(req, res) {
    const result = authValidate(req.body)
    if (!result.success) return res.status(400).json(result.error.issues)

    const newUser = await UserModel.create(req.body)

    res.status(201).json(newUser)
  }
}
