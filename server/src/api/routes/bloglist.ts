import express from 'express'
import blglist from '../../data/blogs'

const router = express.Router()

type MdResponse = {
  data: Array<{}>
}
interface RBlogs {
  datePosted: string
  views: number
  title: string
  tags: Array<string>
  preview: string
  slug: string
}

router.post<{}, MdResponse>('/', (req, res) => {
  const getRandomBlogs = (arr: RBlogs[], count: number) =>
    arr.sort(() => Math.random() - 0.5).slice(0, count)
  const rblogs: RBlogs[] = getRandomBlogs(blglist, parseInt(req.body.no))
  res.status(200).json({ data: rblogs })
})

export default router
