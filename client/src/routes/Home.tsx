import React, { Fragment } from 'react'
import Header from '../components/Header'
import BreadCrumb from '../components/BreadCrumb'

const Home = () => {
  return (
    <Fragment>
      <div className="home">
        <Header />
        <BreadCrumb />
      </div>
    </Fragment>
  )
}

export default Home
