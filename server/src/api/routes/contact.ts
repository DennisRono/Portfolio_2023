import express, { Request, Response } from 'express'
import Contact from '../../schemas/contact'
import Mailer from '../../utils/mail'
import { EmailOptions } from '../../interfaces/mail'
import * as fs from 'fs'
import * as path from 'path'

const router = express.Router()

router.post<{}>('/contact', async (req: Request, res: Response) => {
  console.log('Endpoint Hit ⚡⚡ [/contact]')
  const data = req.body
  try {
    const newContact = new Contact({
      ...data,
    })

    await newContact.save()
    //send email to Kibet
    const mailer = new Mailer()
    const htmlContent = fs.readFileSync(
      path.join(__dirname, '../../assets/html/contact.html'),
      'utf-8'
    )
    //send email to Kibet
    const emailOptions: EmailOptions = {
      to: data.email,
      subject: 'Thank You for Reaching Out - ' + data.name,
      html: htmlContent,
    }
    try {
      await mailer.sendMail(emailOptions)
      res.status(200).json({ message: 'Contact received Successfully!' })
    } catch (error) {
      console.error('Failed to send email:', error)
      res
        .status(200)
        .json({ message: 'Contact received Successfully!', stack: error })
    }
  } catch (err) {
    res.status(500).json({ message: 'Something Wrong Happened! Please Retry' })
  }
})

export default router
