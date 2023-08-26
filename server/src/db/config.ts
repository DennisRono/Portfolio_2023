import dotenv from 'dotenv'

dotenv.config()

const MYSQL_HOST = process.env.MYSQL_HOST || 'localhost'
const MYSQL_USER = process.env.MYSQL_USER || 'root'
const MYSQL_DATABASE = process.env.MYSQL_DATABASE || 'npay'
const MYSQL_PASSWORD = process.env.MYSQL_PASSWORD || ''
const MYSQL_PORT = process.env.MYSQL_PORT || '3306'

const mysql = {
  host: MYSQL_HOST,
  user: MYSQL_USER,
  database: MYSQL_DATABASE,
  password: MYSQL_PASSWORD,
  port: MYSQL_PORT,
}

const config = {
  mysql: mysql,
}

export default config
