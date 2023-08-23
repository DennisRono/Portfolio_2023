import React, { Fragment } from 'react'
import Header from '../components/Header'
import BreadCrumb from '../components/BreadCrumb'

const Blog = () => {
  return (
    <Fragment>
      <Header />
      <BreadCrumb />
      <div className="blog"></div>
    </Fragment>
  )
}

export default Blog
