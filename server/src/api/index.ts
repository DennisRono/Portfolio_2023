import express from 'express'

import MessageResponse from '../interfaces/MessageResponse'
import hire from './routes/hire'

const router = express.Router()

router.get<{}, MessageResponse>('/', (req, res) => {
  res.json({
    message: 'API - 👋🌎🌍🌏',
  })
})

router.use('/', hire)

export default router
