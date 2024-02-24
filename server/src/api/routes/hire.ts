import express, { Request, Response } from 'express'
import mongoose from 'mongoose'
import Hire from '../../schemas/hire'
import Mailer from '../../utils/mail'
import { EmailOptions } from '../../interfaces/mail'
import * as fs from 'fs'
import * as path from 'path'

const router = express.Router()

router.post<{}>(
  '/hire-me',
  async (req: Request<{}, {}, { email: string }>, res: Response) => {
    console.log('Endpoint Hit ⚡⚡ [/hire-me]')

    const { email } = req.body

    try {
      const hire = await Hire.findOne({ email: email })
      if (hire) {
        hire.updatedAt = new Date()
        await hire.save()
      } else {
        const newHire = new Hire({ email })
        await newHire.save()
      }
      //send email to Kibet
      const mailer = new Mailer()
      const htmlContent = fs.readFileSync(
        path.join(__dirname, '../../assets/html/hire.html'),
        'utf-8'
      )
      const emailOptions: EmailOptions = {
        to: email,
        subject:
          "Thank You For The Opportunity - I'll reach out as quickly as possible",
        html: htmlContent,
      }
      try {
        await mailer.sendMail(emailOptions)
        res.status(200).json({
          message:
            "Request received successfully! I'll respond as quickly as possible.",
        })
      } catch (error) {
        console.error('Failed to send email:', error)
        res.status(200).json({
          message:
            "Request received successfully! I'll respond as quickly as possible.",
          stack: error,
        })
      }
    } catch (error: any) {
      if (error instanceof mongoose.Error.ValidationError) {
        // Handle validation errors
        const validationErrors: { [key: string]: string } = {}
        for (const field in error.errors) {
          validationErrors[field] = error.errors[field].message
        }

        res.status(400).json({
          message: 'Validation error',
          errors: validationErrors,
        })
      } else {
        // Handle other types of errors
        res.status(500).json({
          message: 'Something went wrong while processing the request!',
          error: error.message,
        })
      }
    }
  }
)

export default router
