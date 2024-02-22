import express from 'express'
import hire from './hire'
import blogs from './blogs'

const router = express.Router()

router.use('/', hire)
router.use('/', blogs)

export default router
