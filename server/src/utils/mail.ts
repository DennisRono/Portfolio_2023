import nodemailer, { Transporter } from 'nodemailer'
import { EmailOptions } from '../interfaces/mail'
require('dotenv').config()

class Mailer {
  private transporter: Transporter

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.MAILER_EMAIL,
        pass: process.env.MAILER_PASSWORD,
      },
    })
  }

  async sendMail(options: EmailOptions): Promise<void> {
    try {
      const info = await this.transporter.sendMail({
        ...options,
        from: `"Dennis Kibet" dennisrkibet@gmail.com`,
      })
      console.log('Message sent: %s', info.messageId)
    } catch (error) {
      console.error('Error sending email:', error)
      throw error
    }
  }
}

export default Mailer
