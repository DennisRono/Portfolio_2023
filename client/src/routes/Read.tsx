import React, { Fragment, useEffect, useState } from 'react'
import '../styles/css/read.css'
import { Helmet } from 'react-helmet'
import { Link, useParams } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'
import BreadCrumb from '../components/BreadCrumb'
import calendar from '../assets/images/calendar.png'
import { ReactComponent as Eye } from '../assets/svg/eye.svg'
import { ReactComponent as Clock } from '../assets/svg/clock.svg'
import ProfileImage from '../assets/images/profile.png'
import Comments from '../components/Comments'
import api from '../api/axios'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism'
import spinner from '../utils/spinner'
import { toast } from 'react-toastify'
import { formatDate } from '../utils/formatDate'
import CodeCopyBtn from '../components/CopyCodeBtn'
interface BlgCont {
  content: string
  assets: []
  createdAt: string
  length: number
  slug: string
  summary: string
  title: string
  toc: []
  updatedAt: string
  views: number
  _id: string
  author: string
  tags: string[]
}

const Read = () => {
  const { slug } = useParams()
  const [isError, setIsError] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [cont, setCont] = useState<BlgCont>({
    content: '',
    assets: [],
    createdAt: '',
    length: 0,
    slug: '',
    summary: '',
    title: '',
    toc: [],
    updatedAt: '',
    views: Math.random() * (1000 - 100) + 100,
    _id: '',
    author: 'Dennis Kibet',
    tags: [],
  })
  const [allblogs, setAllBlogs] = useState([])
  // fetch blog from database
  useEffect(() => {
    try {
      const fetchBlog = async (slug: string | undefined, retries = 3) => {
        setIsLoading(true)
        const res = await api('GET', `blog/get/${slug}`, {})
        console.log(res)
        if (res.status === 200) {
          if (cont.title === '') {
            setCont(res.data.data)
          }
          await api('PUT', `blog/view/${slug}`, {})
        } else {
          if (cont.title !== '') {
            if (retries > 0) {
              if (slug && cont.title === '') {
                fetchBlog(slug, retries - 1)
              }
            } else {
              setIsError(true)
              console.error('Error fetching the blog')
            }
          }
        }
      }
      if (slug && cont.title === '') {
        fetchBlog(slug)
      }
    } catch (error) {
      console.error('Error fetching the blog:', error)
      toast('could not fetch the blog', { type: 'error' })
    } finally {
      setIsLoading(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    const fetchBlogs = async (no: number = 4, retries = 3) => {
      try {
        const res = await api('GET', 'blog/all', { no: no })
        if (res.status === 200) {
          setAllBlogs(res.data.data)
        } else {
          if (retries > 0) {
            fetchBlogs(no, retries - 1)
          } else {
            toast('Could not fetch similar blogs', { type: 'error' })
          }
        }
      } catch (error) {
        if (retries > 0) {
          fetchBlogs(no, retries - 1)
        } else {
          toast('Could not fetch similar blogs', { type: 'error' })
        }
      }
    }

    if (Array.isArray(allblogs) && allblogs.length === 0) {
      fetchBlogs(4)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const Pre = ({ children }: any) => (
    <pre className="blog-pre">
      <CodeCopyBtn>{children}</CodeCopyBtn>
      {children}
    </pre>
  )

  return (
    <Fragment>
      {' '}
      <Helmet>
        <title>{cont.title} | Dennis Kibet</title>
        <link
          rel="canonical"
          href={window.location.pathname + window.location.search}
        />
      </Helmet>
      <Header />
      <BreadCrumb />
      <div className="read">
        {isError ? (
          <div className="read_error">
            <h2 className="read_not_found">404</h2>
            <p className="read_par_err">
              <strong>broken link</strong> - the blog you are looking for does
              not exist in our servers
            </p>
          </div>
        ) : (
          <div className="read_wrapper">
            <div className="read_blog_header">
              <div className="read_blog_date flex f_row f_align_center">
                <img className="image" src={calendar} alt="" />
                {/* <p>Sunday, April 30, 2023</p> */}
                <p>
                  {cont.updatedAt !== ''
                    ? formatDate(cont.updatedAt)
                    : cont.updatedAt}
                </p>
              </div>
              <h1 className="read_blog_title">{cont.title}</h1>
              <div className="r_blg_meta flex f_row f_align_center">
                <div className="r_blg_met_item flex f_row f_align_center">
                  <Clock className="r_blg_met_Ic" />
                  <span>{cont.length} min read</span>
                </div>
                <div className="r_blg_met_item flex f_row f_align_center">
                  <Eye className="r_blg_met_Ic" />
                  <span>
                    {Math.round(
                      cont.views < 10
                        ? Math.random() * (20 - 10) + 10
                        : cont.views
                    )}{' '}
                    views
                  </span>
                </div>
              </div>
            </div>
            <div className="read_blog_body">
              <div className="r_blg_body_left">
                <div className="r_blg_body_left_sticky_wrap">
                  <div className="blog_author flex f_row f_align_center">
                    <div className="blg_author_profile">
                      <img className="image" src={ProfileImage} alt="" />
                    </div>
                    <div className="blg_author_textuals">
                      <h2>{cont.author ? cont.author : 'Dennis Kibet'}</h2>
                    </div>
                  </div>
                  <div className="blog_tags flex f_row f_align_center">
                    {cont.tags && Array.isArray(cont.tags)
                      ? cont.tags.map((i: string) => {
                          return <span className="tag_text">{i}</span>
                        })
                      : ''}
                  </div>
                  <div className="read_blg_similar_blogs">
                    <h3 className="smlar_blg_title">Similar Blogs</h3>
                    {Array.isArray(allblogs) &&
                      allblogs.map((blog: any) => (
                        <div className="smlar_blgs_t_wrapper" key={blog._id}>
                          <Link
                            to={`/read/${blog.slug}`}
                            className="smlar_blgs_titles c_p"
                            onClick={() => {
                              window.scrollTo({
                                top: 0,
                                behavior: 'smooth',
                              })
                            }}
                          >
                            {blog.title}
                          </Link>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
              <div className="r_blg_body_right">
                <ReactMarkdown
                  rehypePlugins={[rehypeRaw]}
                  remarkPlugins={[remarkGfm]}
                  className="r_blg_body__content"
                  components={{
                    pre: Pre,
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
                  {isLoading ? spinner : cont.content}
                </ReactMarkdown>
                <div className="r_blg_body_comments">
                  <Comments />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </Fragment>
  )
}

export default Read
