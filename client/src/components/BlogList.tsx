import React, { Fragment } from 'react'
import '../styles/css/bloglist.css'
import blogs from '../data/blogs'
import { Link } from 'react-router-dom'

interface RBlogs {
  datePosted: string
  views: number
  title: string
  tags: Array<string>
  preview: string
  slug: string
}

const BlogList = (props: { count: string }) => {
  const blogsCount = parseInt(props.count)
  const getRandomBlogs = (arr: RBlogs[], count: number) =>
    arr.sort(() => Math.random() - 0.5).slice(0, count)
  const rblogs: RBlogs[] = getRandomBlogs(blogs, blogsCount)
  return (
    <Fragment>
      <div className="bloglist">
        <div className="bloglist_wrapper">
          {rblogs.map((i) => {
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
                    recusandae ab nam, quidem maiores est, fuga eligendi aliquid
                    optio alias doloribus neque veniam? Nostrum non accusamus
                    quas, maxime magnam quibusdam corporis aliquam nihil
                    aspernatur sint autem labore adipisci dolorum.
                  </p>
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </Fragment>
  )
}

export default BlogList
