import express, { Request, Response } from 'express'
import Contact from '../../schemas/contact'

const router = express.Router()

router.post<{}>('/contact', async (req: Request, res: Response) => {
  console.log('Endpoint Hit ⚡⚡ [/contact]')
  try {
    const newContact = new Contact({
      ...req.body,
    })

    await newContact.save()
    res.status(200).json({ message: 'Contact received Successfully!' })
  } catch (err) {
    res.status(500).json({ message: 'Something Wrong Happened! Please Retry' })
  }
})

export default router
