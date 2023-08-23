import React, { Fragment } from 'react'
import Header from '../components/Header'
import BreadCrumb from '../components/BreadCrumb'
import { Helmet } from 'react-helmet'

const About = () => {
  return (
    <Fragment>
      <Helmet>
        <title>About | Dennis Kibet</title>
        <link
          rel="canonical"
          href={window.location.pathname + window.location.search}
        />
      </Helmet>
      <Header />
      <BreadCrumb />
      <div className="about"></div>
    </Fragment>
  )
}

export default About
