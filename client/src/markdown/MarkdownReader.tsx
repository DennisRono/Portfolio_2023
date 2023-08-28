import React, { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'
import api from '../api/axios'

interface MarkdownReaderProps {
  filePath: string
}

const MarkdownReader: React.FC<MarkdownReaderProps> = ({ filePath }) => {
  const [markdownContent, setMarkdownContent] = useState<string>('')

  useEffect(() => {
    const fetchMarkdownContent = async () => {
      try {
        const res = await api(
          'POST',
          'blog',
          { file: 'starter.md' },
          {
            'Content-Type': 'application/json',
          }
        )
        const markdownText = res.data.data
        setMarkdownContent(markdownText)
      } catch (error) {
        console.error('Error fetching Markdown content:', error)
      }
    }

    fetchMarkdownContent()
  }, [filePath])

  return (
    <div>
      <ReactMarkdown rehypePlugins={[rehypeRaw]} remarkPlugins={[remarkGfm]}>
        {markdownContent}
      </ReactMarkdown>
    </div>
  )
}

export default MarkdownReader
