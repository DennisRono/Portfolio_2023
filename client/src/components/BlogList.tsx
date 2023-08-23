import React, { Fragment } from 'react'
import '../styles/css/bloglist.css'
import blogs from '../data/blogs'

const BlogList = () => {
  return (
    <Fragment>
      <div className="bloglist">
        <div className="bloglist_wrapper">
          <div className="bl_cont c_p">
            <div className="bl_blg_meta">
              <span className="bl_date">April 30, 2023</span>
              <span>.</span>
              <span className="bl_views">368 views</span>
            </div>
            <h1 className="bl_title">sample title for this page</h1>
            <div className="bl_blg_tags">
              <span className="bl_tgs">we're hiring</span>
            </div>
            <p className="blg_bl_prev_par">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
              nam labore. Esse, doloremque! Facilis architecto excepturi atque
              magni temporibus eius reiciendis, odio dolor saepe debitis
              consequatur eaque dolorum? Culpa nam minima asperiores, beatae
              commodi enim.
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default BlogList
