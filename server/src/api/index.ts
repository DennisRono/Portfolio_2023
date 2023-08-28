import express from 'express'

import MessageResponse from '../interfaces/MessageResponse'
import blog from './routes/blog'

const router = express.Router()

router.get<{}, MessageResponse>('/', (req, res) => {
  res.json({
    message: 'API - 👋🌎🌍🌏',
  })
})

router.use('/blog', blog)

export default router
