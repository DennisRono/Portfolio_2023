import express, { Request, Response } from 'express'

const router = express.Router()

router.post<{}>('/hire-me', (req: Request, res: Response) => {
  const email = req.body.email
  res.status(200).json({})
})

export default router
