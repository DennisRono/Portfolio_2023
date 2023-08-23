import React, { Fragment } from 'react'
import Header from '../components/Header'
import BreadCrumb from '../components/BreadCrumb'

const About = () => {
  return (
    <Fragment>
      <Header />
      <BreadCrumb />
      <div className="about"></div>
    </Fragment>
  )
}

export default About
