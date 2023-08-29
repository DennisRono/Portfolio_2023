import express from 'express'
import * as fs from 'fs'
import * as path from 'path'
import blglist from '../../data/blogs.json'

const router = express.Router()

router.post<{}, {}>('/', (req, res) => {
  function readMarkdownFile(filePath: string): string | null {
    try {
      const markdownContent = fs.readFileSync(filePath, 'utf-8')
      return markdownContent
    } catch (error) {
      console.error('Error reading the file:', error)
      return null
    }
  }
  const markdownFilePath = path.join(
    __dirname,
    '../../markdown/' + req.body.file
  )
  const blogmeta = blglist.blogs.find((item) => item.slug === req.body.slug)
  const markdownContent = readMarkdownFile(markdownFilePath)
  if (markdownContent && blogmeta) {
    res.status(200).json({ data: markdownContent, meta: blogmeta })
  } else {
    res.status(400).json({ data: markdownContent, meta: blogmeta })
  }
})

export default router
