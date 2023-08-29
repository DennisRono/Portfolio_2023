import React, { Fragment, useEffect, useState } from 'react'
import '../styles/css/bloglist.css'
import { Link } from 'react-router-dom'
import api from '../api/axios'

interface RBlogs {
  datePosted: string
  views: number
  title: string
  tags: Array<string>
  preview: string
  slug: string
}

const BlogList = (props: { count: string }) => {
  const [blogs, setBlogs] = useState<{ status: string; data: Array<RBlogs> }>({
    status: 'loading',
    data: [],
  })
  // fetch blogs from database
  useEffect(() => {
    try {
      const fetchBlogs = async (no: number) => {
        const res = await api('POST', 'bloglist', { no: no })
        console.log(res.data)
        if (res.status === 200) {
          setBlogs({ status: 'success', data: res.data.data })
        } else {
          setBlogs({ status: 'error', data: [] })
        }
      }
      fetchBlogs(parseInt(props.count))
    } catch (error) {}
  }, [props.count])
  return (
    <Fragment>
      <div className="bloglist">
        <div className="bloglist_wrapper">
          {blogs.status === 'loading' ? (
            <p>Loading...</p>
          ) : blogs.status === 'error' ? (
            <p>Could not fetch the blogs</p>
          ) : (
            blogs.data.map((i) => {
              return (
                <div
                  className="bl_cont c_p"
                  key={i.title}
                  onClick={() => {
                    window.scrollTo({
                      top: 0,
                      behavior: 'smooth',
                    })
                  }}
                >
                  <Link to={`/blog/${i.slug}`} className="bl_cont_link">
                    <div className="bl_blg_meta flex f_row f_align_center">
                      <span className="bl_date">{i.datePosted}</span>
                      <span>.</span>
                      <span className="bl_views">{i.views} views</span>
                    </div>
                    <h1 className="bl_title">{i.title}</h1>
                    <div className="bl_blg_tags flex f_row f_align_center">
                      {i.tags.map((j) => {
                        return (
                          <span className="bl_tgs" key={j}>
                            {j}
                          </span>
                        )
                      })}
                    </div>
                    <p className="blg_bl_prev_par">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Eaque architecto, iste aut assumenda possimus cupiditate
                      recusandae ab nam, quidem maiores est, fuga eligendi
                      aliquid optio alias doloribus neque veniam? Nostrum non
                      accusamus quas, maxime magnam quibusdam corporis aliquam
                      nihil aspernatur sint autem labore adipisci dolorum.
                    </p>
                  </Link>
                </div>
              )
            })
          )}
        </div>
      </div>
    </Fragment>
  )
}

export default BlogList
