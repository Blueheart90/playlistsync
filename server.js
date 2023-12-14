import express, { json } from 'express' // require -> commonJS
import morgan from 'morgan'
// import { corsMiddleware } from './middlewares/cors.js'
import 'dotenv/config'
import { pool } from './services/db.js'
import { v1 } from './routes/api/v1.js'
import {
  authValidate,
  authValidatePartial,
  loginValidate
} from './schemas/authSchema.js'
import { errorHandler } from './middlewares/errorHandler.js'

const app = express()
app.use(morgan('dev'))
app.use(json())
app.disable('x-powered-by')

app.use('/api/v1/', v1)

app.use(errorHandler)

const PORT = process.env.PORT ?? 1234

app.listen(PORT, () => {
  console.log(`server listening on port http://localhost:${PORT}`)
})

// const [rows] = await pool.query(' SELECT * FROM users')
// console.log(rows)
