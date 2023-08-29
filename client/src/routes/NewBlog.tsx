import React, { Fragment, useState } from 'react'
import '../styles/css/newblog.css'
import Header from '../components/Header'
import BreadCrumb from '../components/BreadCrumb'
import Footer from '../components/Footer'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism'
import spinner from '../utils/spinner'
import api from '../api/axios'

interface BlogTypes {
  title: string
  tags: Array<string>
  content: string
}

const NewBlog = () => {
  //const preview = ``
  const [blog, setBlog] = useState<BlogTypes>({
    title: '',
    tags: [],
    content: '',
  })
  const [preview, setPreview] = useState('')

  const handleTagInput = (event: any) => {
    const inputValue = event.target.value
    if (inputValue.endsWith(',')) {
      const newTag = inputValue.slice(0, -1).trim()
      if (newTag !== '') {
        setBlog((prevBlog) => ({
          ...prevBlog,
          tags: [...prevBlog.tags, newTag],
        }))
        event.target.value = ''
      }
    }
  }

  const handleTextareaChange = (event: any) => {
    setPreview(event.target.value)
    setBlog(() => ({
      ...blog,
      content: event.target.value,
    }))
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    const res = await api('POST', 'newblog', { data: blog })
    if (res.status === 200) {
      console.log('Posted new blog successfully')
    } else {
      console.log('Error posting blog')
    }
  }
  return (
    <Fragment>
      <Header />
      <BreadCrumb />
      <div className="newblog">
        <div className="newblog_wrapper">
          <h1 className="newblog_title">Write a new Blog</h1>
          <div className="nwblg_wrap">
            <div className="newblog_form">
              <form className="nwblg_form" onSubmit={handleSubmit}>
                <div className="newblog_form_group">
                  <input
                    type="text"
                    className="formgroup_input"
                    placeholder="title..."
                    value={blog.title}
                    onChange={(event) =>
                      setBlog(() => ({
                        ...blog,
                        title: event.target.value,
                      }))
                    }
                  />
                </div>
                <div className="newblog_form_group">
                  <label htmlFor="tags">
                    separate by comma to add a new tag
                  </label>
                  <input
                    type="text"
                    className="formgroup_input"
                    placeholder="tags..."
                    onChange={handleTagInput}
                  />
                  <div className="tags-container flex f_row f_align_center">
                    {blog.tags.map((tag, index) => (
                      <div key={index} className="new_tag">
                        {tag}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="newblog_form_group">
                  <label htmlFor="tags">
                    write your blog in markdown format
                  </label>
                  <textarea
                    className="formgroup_input formgroup_input_textarea"
                    onChange={handleTextareaChange}
                    value={preview}
                  ></textarea>
                </div>
                <div className="newblog_submit_preview flex f_row f_align_center c_p">
                  <div>
                    <p>
                      remember to create a new discussion on Github for comments
                      to work
                    </p>
                  </div>
                  <button type="submit" className="btn nwblg_btn">
                    post
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="newblog_preview">
            <h1 className="nwblg_preview">Blog Preview</h1>
            <ReactMarkdown
              rehypePlugins={[rehypeRaw]}
              remarkPlugins={[remarkGfm]}
              components={{
                code({ node, inline, className, children, ...props }) {
                  const match = /language-(\w+)/.exec(className || '')
                  return !inline && match ? (
                    <SyntaxHighlighter
                      {...props}
                      children={String(children).replace(/\n$/, '')}
                      style={dracula}
                      language={match[1]}
                      PreTag="div"
                    />
                  ) : (
                    <code {...props} className={className}>
                      {children}
                    </code>
                  )
                },
              }}
            >
              {preview === '' ? spinner : preview}
            </ReactMarkdown>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  )
}

export default NewBlog
