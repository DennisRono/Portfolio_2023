import express, { Request, Response } from 'express'
import mongoose from 'mongoose'
import Hire from '../../schemas/hire'

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
      res.status(200).json({
        message:
          "Request received successfully! I'll respond as quickly as possible.",
      })
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
