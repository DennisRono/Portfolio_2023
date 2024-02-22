import express, { Request, Response } from 'express'
import mongoose from 'mongoose'
import Blogs from '../../schemas/blogs'

const router = express.Router()

router.post<{}>('/newblog', async (req: Request, res: Response) => {
  try {
    const { data } = req.body
    const slug = data.title
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .trim()
    const newHire = new Blogs({
      ...data,
      slug: slug,
      views: 0,
    })
    await newHire.save()
  } catch (err: any) {
    console.log(err)
  }
})

router.get('/bloglist', async (req: Request, res: Response) => {
  const { no } = req.body
  try {
    const randomBlogs = await Blogs.aggregate([
      { $sample: { size: parseInt(no as string, 10) || 5 } },
    ])
    res.status(200).json({
      message: 'Random blogs retrieved successfully',
      blogs: randomBlogs,
    })
  } catch (err: any) {
    res.status(500).json({
      message: 'Something went wrong while fetching random blogs',
      error: err.message,
    })
  }
})

export default router
