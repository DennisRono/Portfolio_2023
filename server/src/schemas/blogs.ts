import mongoose from 'mongoose'
const { Schema } = mongoose

const BlogsSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, 'Title is required'],
    },
    tags: {
      type: Array<String>,
      required: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
    content: {
      type: String,
      required: [true, 'Blog Content is required'],
    },
    views: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
)

export default mongoose.model('Blogs', BlogsSchema)
