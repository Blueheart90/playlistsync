import 'dotenv/config'

const { DB_HOST, DB_USERNAME, DB_PORT, DB_PASSWORD, DB_DATABASE } = process.env

export const config = {
  db: {
    host: DB_HOST,
    user: DB_USERNAME,
    port: DB_PORT,
    password: DB_PASSWORD,
    database: DB_DATABASE,
    connectTimeout: 60000
  },
  listPerPage: 10
}
