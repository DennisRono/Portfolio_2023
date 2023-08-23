import React, { Fragment } from 'react'
import Header from '../components/Header'
import BreadCrumb from '../components/BreadCrumb'
import { Helmet } from 'react-helmet'

const Home = () => {
  return (
    <Fragment>
      <Helmet>
        <title>Home | Dennis Kibet</title>
        <link
          rel="canonical"
          href={window.location.pathname + window.location.search}
        />
      </Helmet>
      <div className="home">
        <Header />
        <BreadCrumb />
      </div>
    </Fragment>
  )
}

export default Home
