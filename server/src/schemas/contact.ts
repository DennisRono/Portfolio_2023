import mongoose from 'mongoose'
const { Schema } = mongoose

const ContactSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: false,
    },
    phone: {
      type: String,
      required: false,
    },
    website: {
      type: String,
    },
    brief: {
      type: String,
      required: true,
    },
    assets: {
      type: [String],
    },
  },
  { timestamps: true }
)

export default mongoose.model('Contact', ContactSchema)
