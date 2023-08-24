import React, { Fragment } from 'react'
import '../styles/css/blog.css'
import Header from '../components/Header'
import BreadCrumb from '../components/BreadCrumb'
import { Helmet } from 'react-helmet'
import BlogList from '../components/BlogList'
import Footer from '../components/Footer'

const Blog = () => {
  return (
    <Fragment>
      <Helmet>
        <title>Blog | Dennis Kibet</title>
        <link
          rel="canonical"
          href={window.location.pathname + window.location.search}
        />
      </Helmet>
      <Header />
      <BreadCrumb />
      <div className="blog">
        <div className="blogTop">
          <h1 className="blg_top_Title">All Posts</h1>
          <form className="blg_search_form">
            <div className="blg_form_group">
              <input type="text" className="blg_srch_input" />
            </div>
          </form>
        </div>
        <BlogList count="6" />
      </div>
      <Footer />
    </Fragment>
  )
}

export default Blog
