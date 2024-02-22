import mongoose from 'mongoose'
const { Schema } = mongoose

const HireSchema = new Schema(
  {
    email: {
      type: String,
      required: [true, 'Email is required'],
    },
  },
  { timestamps: true }
)

export default mongoose.model('Hire', HireSchema)
