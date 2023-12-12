import express, { json } from 'express' // require -> commonJS
// import { corsMiddleware } from './middlewares/cors.js'
import 'dotenv/config'
import { pool } from './services/db.js'
import { v1 } from './routes/api/v1.js'
import { authValidate, authValidatePartial } from './schemas/authSchema.js'

const app = express()
app.use(json())
app.disable('x-powered-by')

app.use('/api/v1/', v1)

const PORT = process.env.PORT ?? 1234

app.listen(PORT, () => {
  console.log(`server listening on port http://localhost:${PORT}`)
})

// const [rows] = await pool.query(' SELECT * FROM users')
// console.log(rows)

const data = {
  username: 33,
  email: 'virkexample.com',
  password: 'secret4545454545',
  password_confirmation: 'secret4545454545'
}

const validated = authValidate(data)
const validated2 = authValidatePartial(data)

console.log(validated.error.issues)
console.log(validated2.error.format())
