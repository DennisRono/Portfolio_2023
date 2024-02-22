import mongoose from 'mongoose'
import app from './app'
require('dotenv').config()

const port = process.env.PORT || 5000

mongoose.set('strictQuery', true)

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL as string)
    console.log('Database Connection online')
    app.listen(port, () => {
      /* eslint-disable no-console */
      console.log(`Listening: http://localhost:${port}`)
      /* eslint-enable no-console */
    })
  } catch (error) {
    console.log({ message: 'Error connecting to database', stack: error })
  }
}

connect()
