import { pool } from '../services/db.js'

export class UserController {
  static async getAll(req, res) {
    const query = 'SELECT * FROM users2'
    try {
      const [users] = await pool.query(query)
      res.json(users)
    } catch (error) {
      console.log(error)
      res.status(500).send('Ocurrio un error inesperado.')
    }
  }
}
