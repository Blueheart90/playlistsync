import { Router } from 'express'
import { UserController } from '../../controllers/userController.js'
import { AuthController } from '../../controllers/authController.js'

export const v1 = Router()

v1.get('/users', UserController.getAll)

v1.post('/register', AuthController.register)
v1.post('/login', AuthController.login)
