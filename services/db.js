import mysql from 'mysql2/promise'
import { config } from '../config/mysql.js'

export const pool = mysql.createPool(config.db)
