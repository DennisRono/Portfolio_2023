import React, { Fragment } from 'react'
import Header from '../components/Header'
import BreadCrumb from '../components/BreadCrumb'
import { Helmet } from 'react-helmet'

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
      <div className="blog"></div>
    </Fragment>
  )
}

export default Blog
