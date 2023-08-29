import express from 'express'
import * as fs from 'fs'
import * as path from 'path'

const router = express.Router()

interface Blog {
  title: string
  datePosted: string
  views: number
  tags: string[]
  slug: string
  preview: string
}

router.post<{}, {}>('/', (req, res) => {
  // slugify title
  function slugify(text: string): string {
    return text
      .toLowerCase()
      .replace(/[\s]+/g, '-')
      .replace(/[^\w\-]+/g, '')
      .replace(/\-\-+/g, '-')
      .replace(/^-+/, '')
      .replace(/-+$/, '')
  }
  try {
    // generate views and date
    const views = 0
    const date = new Date()
    const slug = slugify(req.body.data.title)
    const filePath = path.join(__dirname, `../../markdown/${slug}.md`)
    // write meta data
    const rawData = fs.readFileSync(
      path.join(__dirname, '../../data/blogs.json'),
      'utf-8'
    )
    const jsonData: { blogs: Blog[] } = JSON.parse(rawData)
    jsonData.blogs.push({
      views: views,
      datePosted: date.toDateString(),
      title: req.body.data.title,
      tags: req.body.data.tags,
      slug: slug,
      preview: 'string',
    })
    const updatedData = JSON.stringify(jsonData, null, 2)
    fs.writeFileSync(
      path.join(__dirname, '../../data/blogs.json'),
      updatedData,
      'utf-8'
    )
    const mdcont = req.body.data.content
    if (!fs.existsSync(filePath)) {
      // Create the file if it doesn't exist
      fs.writeFileSync(filePath, mdcont)
    } else {
      // Append to the existing file
      fs.appendFileSync(filePath, mdcont)
    }
    res.status(200).json({ message: 'Successfully created the new blog' })
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something wrong happened' })
  }
})

export default router
