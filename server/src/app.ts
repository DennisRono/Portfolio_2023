import express from 'express'
import helmet from 'helmet'
import cors from 'cors'
import rateLimit from 'express-rate-limit'
import cookieParser from 'cookie-parser'
import logger from 'morgan'
import moment from 'moment-timezone'
import fs from 'fs'
import bodyparser from 'body-parser'

import * as middlewares from './middlewares'
import api from './api'
import MessageResponse from './interfaces/MessageResponse'
import path from 'path'

require('dotenv').config()

const app = express()

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
})
app.use(express.static(path.join(__dirname, '../public')))
app.use(limiter)
app.use(cookieParser())
app.use(helmet())
app.use(bodyparser.json())
app.use(express.json())
app.use(
  cors({
    origin: '*',
  })
)

app.set('trust proxy', 'loopback')
// app.enable('trust proxy')
logger.token('date', (req, res, tz) => {
  return moment().tz('Africa/Nairobi').format('YYYY-MM-DD HH:mm:ss')
})
logger.token('Client IP', function (req, res): any {
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress
  return ip
})

app.use(
  logger('combined', {
    skip: function (req, res) {
      return req.url.indexOf('/socket.io') !== -1
    },
    stream: fs.createWriteStream('./access.log', { flags: 'a' }),
  })
)

app.get<{}, MessageResponse>('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'))
})

app.use('/api/v1', api)

app.use(middlewares.notFound)
app.use(middlewares.errorHandler)

export default app
