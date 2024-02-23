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
interface RBlogs {
  datePosted: string
  views: number
  title: string
  tags: Array<string>
  preview: string
  slug: string
}

const Read = () => {
  const { slug } = useParams()
  const [isError, setIsError] = useState(false)
  const [meta, setMeta] = useState<{ status: boolean; meta: RBlogs }>({
    status: false,
    meta: {
      datePosted: '',
      views: 0,
      title: '',
      tags: [],
      preview: '',
      slug: '',
    },
  })
  const [markdownContent, setMarkdownContent] = useState<string>('')
  // fetch blog from database
  useEffect(() => {
    try {
      const fetchBlog = async (slug: string | undefined) => {
        const res = await api('GET', `blog/${slug}`, {})

        if (res.status === 200) {
          setMeta({
            status: true,
            meta: {
              datePosted: res.data.createdAt,
              views: res.data.views,
              title: res.data.title,
              tags: res.data.tags,
              preview: res.data.preview,
              slug: res.data.slug,
            },
          })
          setMarkdownContent(res.data.content)
        } else {
          setIsError(true)
          console.error('Error fetching the blog')
        }
      }
      fetchBlog(slug)
    } catch (error) {
      console.error('Error fetching the blog:', error)
    }
  }, [slug])
  console.log(meta)

  return (
    <Fragment>
      {' '}
      <Helmet>
        <title>{meta ? meta.meta.title : 'Blog'} | Dennis Kibet</title>
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
                  {meta.status
                    ? new Intl.DateTimeFormat('en-US', {
                        day: 'numeric',
                        month: 'short',
                        year: 'numeric',
                      }).format(new Date(meta.meta.datePosted))
                    : ''}
                </p>
              </div>
              <h1 className="read_blog_title">
                {meta.status ? meta.meta.title : ''}
              </h1>
              <div className="r_blg_meta flex f_row f_align_center">
                <div className="r_blg_met_item flex f_row f_align_center">
                  <Clock className="r_blg_met_Ic" />
                  <span>6 min read</span>
                </div>
                <div className="r_blg_met_item flex f_row f_align_center">
                  <Eye className="r_blg_met_Ic" />
                  <span>{meta.status ? meta.meta.views : ''} views</span>
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
                      <h2>Dennis Kibet</h2>
                    </div>
                  </div>
                  <div className="blog_tags flex f_row f_align_center">
                    {meta.status
                      ? meta.meta.tags.map((i) => {
                          return <span className="tag_text">{i}</span>
                        })
                      : ''}
                  </div>
                  <div className="read_blg_similar_blogs">
                    <h3 className="smlar_blg_title">Similar Blogs</h3>
                    <div className="smlar_blgs_t_wrapper">
                      <Link to="/blog/" className="smlar_blgs_titles c_p">
                        Building a Chatbot for your E-commerce Business using
                        Django
                      </Link>
                    </div>
                    <div className="smlar_blgs_t_wrapper">
                      <Link to="/blog/" className="smlar_blgs_titles c_p">
                        Building a Chatbot for your E-commerce Business using
                        Django
                      </Link>
                    </div>
                    <div className="smlar_blgs_t_wrapper">
                      <Link to="/blog/" className="smlar_blgs_titles c_p">
                        Building a Chatbot for your E-commerce Business using
                        Django
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="r_blg_body_right">
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
                  {markdownContent === '' ? spinner : markdownContent}
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
