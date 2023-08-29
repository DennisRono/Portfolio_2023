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
          { file: filePath },
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

  const spinner = `<?xml version="1.0" encoding="utf-8"?>
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin: auto; background: none; display: block; shape-rendering: auto; animation-play-state: running; animation-delay: 0s;" width="200px" height="200px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
<g transform="rotate(0 50 50)" style="animation-play-state: running; animation-delay: 0s;">
  <rect x="47" y="24" rx="0" ry="0" width="6" height="12" fill="#0055a5" style="animation-play-state: running; animation-delay: 0s;">
    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.9166666666666666s" repeatCount="indefinite" style="animation-play-state: running; animation-delay: 0s;"></animate>
  </rect>
</g><g transform="rotate(30 50 50)" style="animation-play-state: running; animation-delay: 0s;">
  <rect x="47" y="24" rx="0" ry="0" width="6" height="12" fill="#45aee7" style="animation-play-state: running; animation-delay: 0s;">
    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.8333333333333334s" repeatCount="indefinite" style="animation-play-state: running; animation-delay: 0s;"></animate>
  </rect>
</g><g transform="rotate(60 50 50)" style="animation-play-state: running; animation-delay: 0s;">
  <rect x="47" y="24" rx="0" ry="0" width="6" height="12" fill="#bda0b2" style="animation-play-state: running; animation-delay: 0s;">
    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.75s" repeatCount="indefinite" style="animation-play-state: running; animation-delay: 0s;"></animate>
  </rect>
</g><g transform="rotate(90 50 50)" style="animation-play-state: running; animation-delay: 0s;">
  <rect x="47" y="24" rx="0" ry="0" width="6" height="12" fill="#ce64a6" style="animation-play-state: running; animation-delay: 0s;">
    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.6666666666666666s" repeatCount="indefinite" style="animation-play-state: running; animation-delay: 0s;"></animate>
  </rect>
</g><g transform="rotate(120 50 50)" style="animation-play-state: running; animation-delay: 0s;">
  <rect x="47" y="24" rx="0" ry="0" width="6" height="12" fill="#d8f05b" style="animation-play-state: running; animation-delay: 0s;">
    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.5833333333333334s" repeatCount="indefinite" style="animation-play-state: running; animation-delay: 0s;"></animate>
  </rect>
</g><g transform="rotate(150 50 50)" style="animation-play-state: running; animation-delay: 0s;">
  <rect x="47" y="24" rx="0" ry="0" width="6" height="12" fill="#15ad75" style="animation-play-state: running; animation-delay: 0s;">
    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.5s" repeatCount="indefinite" style="animation-play-state: running; animation-delay: 0s;"></animate>
  </rect>
</g><g transform="rotate(180 50 50)" style="animation-play-state: running; animation-delay: 0s;">
  <rect x="47" y="24" rx="0" ry="0" width="6" height="12" fill="#0055a5" style="animation-play-state: running; animation-delay: 0s;">
    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.4166666666666667s" repeatCount="indefinite" style="animation-play-state: running; animation-delay: 0s;"></animate>
  </rect>
</g><g transform="rotate(210 50 50)" style="animation-play-state: running; animation-delay: 0s;">
  <rect x="47" y="24" rx="0" ry="0" width="6" height="12" fill="#45aee7" style="animation-play-state: running; animation-delay: 0s;">
    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.3333333333333333s" repeatCount="indefinite" style="animation-play-state: running; animation-delay: 0s;"></animate>
  </rect>
</g><g transform="rotate(240 50 50)" style="animation-play-state: running; animation-delay: 0s;">
  <rect x="47" y="24" rx="0" ry="0" width="6" height="12" fill="#bda0b2" style="animation-play-state: running; animation-delay: 0s;">
    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.25s" repeatCount="indefinite" style="animation-play-state: running; animation-delay: 0s;"></animate>
  </rect>
</g><g transform="rotate(270 50 50)" style="animation-play-state: running; animation-delay: 0s;">
  <rect x="47" y="24" rx="0" ry="0" width="6" height="12" fill="#ce64a6" style="animation-play-state: running; animation-delay: 0s;">
    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.16666666666666666s" repeatCount="indefinite" style="animation-play-state: running; animation-delay: 0s;"></animate>
  </rect>
</g><g transform="rotate(300 50 50)" style="animation-play-state: running; animation-delay: 0s;">
  <rect x="47" y="24" rx="0" ry="0" width="6" height="12" fill="#d8f05b" style="animation-play-state: running; animation-delay: 0s;">
    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.08333333333333333s" repeatCount="indefinite" style="animation-play-state: running; animation-delay: 0s;"></animate>
  </rect>
</g><g transform="rotate(330 50 50)" style="animation-play-state: running; animation-delay: 0s;">
  <rect x="47" y="24" rx="0" ry="0" width="6" height="12" fill="#15ad75" style="animation-play-state: running; animation-delay: 0s;">
    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="0s" repeatCount="indefinite" style="animation-play-state: running; animation-delay: 0s;"></animate>
  </rect>
</g>
<!-- [ldio] generated by https://loading.io/ --></svg>
<p style="text-align:center;">Loading...</p>
`

  return (
    <div>
      <ReactMarkdown rehypePlugins={[rehypeRaw]} remarkPlugins={[remarkGfm]}>
        {markdownContent === '' ? spinner : markdownContent}
      </ReactMarkdown>
    </div>
  )
}

export default MarkdownReader
