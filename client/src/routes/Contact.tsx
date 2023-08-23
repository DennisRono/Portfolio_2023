import React, { Fragment } from 'react'
import Header from '../components/Header'
import BreadCrumb from '../components/BreadCrumb'
import { Helmet } from 'react-helmet'

const Contact = () => {
  return (
    <Fragment>
      <Helmet>
        <title>Contact | Dennis Kibet</title>
        <link
          rel="canonical"
          href={window.location.pathname + window.location.search}
        />
      </Helmet>
      <Header />
      <BreadCrumb />
      <div className="contact"></div>
    </Fragment>
  )
}

export default Contact
