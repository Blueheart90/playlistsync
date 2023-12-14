import express, { json } from 'express' // require -> commonJS
// import { corsMiddleware } from './middlewares/cors.js'
import 'dotenv/config'
import { pool } from './services/db.js'
import { v1 } from './routes/api/v1.js'
import { authValidate, authValidatePartial } from './schemas/authSchema.js'
import { errorHandler } from './middlewares/errorHandler.js'

const app = express()
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

const data = {
  name: '33fghghf',
  email: 'virke@xample.com',
  password: 'secret45454545454',
  password_confirmation: 'secret4545454545'
}

const validated = authValidate(data)
const validated2 = authValidatePartial(data)

// console.log(validated)
console.log('format error', validated.error?.issues)
