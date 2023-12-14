import { Router } from 'express'
import { UserController } from '../../controllers/userController.js'
import { AuthController } from '../../controllers/authController.js'
import { tryCatch } from '../../utils/tryCatch.js'

export const v1 = Router()

v1.get('/users', UserController.getAll)

v1.post('/register', tryCatch(AuthController.register))
v1.post('/login', tryCatch(AuthController.login))
