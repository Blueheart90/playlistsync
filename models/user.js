// import { pool } from '../services/db.js'  <---- mysql vanilla
import { prisma } from '../services/prisma.js'
import { encrypPassword, comparePassword } from '../utils/hashPassword.js'

export class UserModel {
  static async create(data) {
    const { name, email, photo, password } = data

    // Encriptar pass
    const hashedPassword = await encrypPassword(password)
    const result = await prisma.user.create({
      data: {
        name,
        email,
        photo,
        password: hashedPassword
      }
    })
    return result
  }

  static async getByEmail(email) {
    const result = await prisma.user.findUnique({
      where: { email }
    })
    return result
  }

  // static async createVanillaMysql(data) {
  //   const { username, password, email } = data
  //   // Encriptar pass
  //   const salt = await bcrypt.genSalt(10)
  //   const hashedPassword = await bcrypt.hash(password, salt)

  //   const sql = `INSERT INTO users (username, email, password) VALUES (?, ?, ?)`
  //   const values = [username, email, hashedPassword]
  //   const result = await pool.query(sql, values)
  //   return result
  // }
}
