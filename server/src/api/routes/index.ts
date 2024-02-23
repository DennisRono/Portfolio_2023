import express from 'express'
import hire from './hire'
import blogs from './blogs'
import contact from './contact'

const router = express.Router()

router.use('/', hire)
router.use('/', blogs)
router.use('/', contact)

export default router
