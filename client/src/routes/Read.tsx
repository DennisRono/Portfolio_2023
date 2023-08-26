import React, { Fragment } from 'react'
import '../styles/css/read.css'
import { Helmet } from 'react-helmet'
import { useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import Footer from '../components/Footer'
import Header from '../components/Header'
import BreadCrumb from '../components/BreadCrumb'
import calendar from '../assets/images/calendar.png'

const Read = () => {
  const { slug } = useParams()
  const markdown = `A paragraph with *emphasis* and **strong importance**.

> A block quote with ~strikethrough~ and a URL: https://reactjs.org.

* Lists
* [ ] todo
* [x] done

A table:

| a | b |
| - | - |
`
  return (
    <Fragment>
      {' '}
      <Helmet>
        <title>{slug ? slug : 'Blog'} | Dennis Kibet</title>
        <link
          rel="canonical"
          href={window.location.pathname + window.location.search}
        />
      </Helmet>
      <Header />
      <BreadCrumb />
      <div className="read">
        <div className="read_wrapper">
          <div className="read_blog_header">
            <div className="read_blog_date flex f_row f_align_center">
              <img src={calendar} alt="" />
              <p>Sunday, April 30, 2023</p>
            </div>
            <h1 className="read_blog_title">
              Stock Price Prediction with Apache Spark and Apache Cassandra.
            </h1>
            <div className="r_blg_meta flex f_row f_align_center">
              <div className="r_blg_met_item">370 views</div>
            </div>
          </div>
        </div>
      </div>
      <ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]} />
      <Footer />
    </Fragment>
  )
}

export default Read
