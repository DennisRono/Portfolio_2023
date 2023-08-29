import express from 'express'

import MessageResponse from '../interfaces/MessageResponse'
import blog from './routes/blog'
import bloglist from './routes/bloglist'
import newblog from './routes/newblog'

const router = express.Router()

router.get<{}, MessageResponse>('/', (req, res) => {
  res.json({
    message: 'API - 👋🌎🌍🌏',
  })
})

router.use('/blog', blog)
router.use('/bloglist', bloglist)
router.use('/newblog', newblog)

export default router
