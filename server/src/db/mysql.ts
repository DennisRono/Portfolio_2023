import mysql from 'mysql'
import config from './config'

const params = {
  user: config.mysql.user,
  password: config.mysql.password,
  host: config.mysql.host,
  database: config.mysql.database,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
}

const Connect = async () =>
  new Promise<mysql.Connection>((resolve, reject) => {
    const connection = mysql.createConnection(params)

    connection.connect((error: any) => {
      if (error) {
        reject(error)
        return
      }

      resolve(connection)
    })
  })

const Query = async (
  connection: mysql.Connection,
  query: string,
  values: Array<any>
) =>
  new Promise((resolve, reject) => {
    connection.query(query, values, (error, result) => {
      if (error) {
        reject(error)
        return
      }

      resolve(result)
    })
  })

export { Connect, Query }
