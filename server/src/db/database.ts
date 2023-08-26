import { Connect, Query } from './mysql'

// get all values of a table
const execute = async (query: string, values: Array<any>) => {
  try {
    const connection = await Connect()
    const results = await Query(connection, query, values)
    connection.end()
    return results
  } catch (err: any) {
    return {
      message: err.message,
      err,
    }
  }
}

const db = {
  execute,
}

export default db
