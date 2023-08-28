import express from 'express'
import * as fs from 'fs'
import * as path from 'path'

const router = express.Router()

type MdResponse = {
  data: string | null
}

router.post<{}, MdResponse>('/', (req, res) => {
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
  const markdownContent = readMarkdownFile(markdownFilePath)
  if (markdownContent) {
    res.status(200).json({ data: markdownContent })
  } else {
    res.status(400).json({ data: markdownContent })
  }
})

export default router
