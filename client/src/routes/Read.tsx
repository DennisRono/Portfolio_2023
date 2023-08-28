import React, { Fragment } from 'react'
import '../styles/css/read.css'
import { Helmet } from 'react-helmet'
import { Link, useParams } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'
import BreadCrumb from '../components/BreadCrumb'
import calendar from '../assets/images/calendar.png'
import { ReactComponent as Eye } from '../assets/svg/eye.svg'
import { ReactComponent as Clock } from '../assets/svg/clock.svg'
import ProfileImage from '../assets/images/profile.png'
import Comments from '../components/Comments'
import MarkdownReader from '../markdown/MarkdownReader'

const Read = () => {
  const { slug } = useParams()
  //path to makdown file
  const markdown = 'starter.md'

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
              <img className="image" src={calendar} alt="" />
              <p>Sunday, April 30, 2023</p>
            </div>
            <h1 className="read_blog_title">
              Stock Price Prediction with Apache Spark and Apache Cassandra.
            </h1>
            <div className="r_blg_meta flex f_row f_align_center">
              <div className="r_blg_met_item flex f_row f_align_center">
                <Clock className="r_blg_met_Ic" />
                <span>6 min read</span>
              </div>
              <div className="r_blg_met_item flex f_row f_align_center">
                <Eye className="r_blg_met_Ic" />
                <span>370 views</span>
              </div>
            </div>
          </div>
          <div className="read_blog_body">
            <div className="r_blg_body_left">
              <div className="r_blg_body_left_sticky_wrap">
                <div className="blog_author flex f_row f_align_center">
                  <div className="blg_author_profile">
                    <img className="image" src={ProfileImage} alt="" />
                  </div>
                  <div className="blg_author_textuals">
                    <h2>Dennis Kibet</h2>
                  </div>
                </div>
                <div className="blog_tags flex f_row f_align_center">
                  <span className="tag_text">spark</span>
                  <span className="tag_text">Cassandra</span>
                  <span className="tag_text">Machine Learning</span>
                </div>
                <div className="read_blg_similar_blogs">
                  <h3 className="smlar_blg_title">Similar Blogs</h3>
                  <div className="smlar_blgs_t_wrapper">
                    <Link to="/blog/" className="smlar_blgs_titles c_p">
                      Building a Chatbot for your E-commerce Business using
                      Django
                    </Link>
                  </div>
                  <div className="smlar_blgs_t_wrapper">
                    <Link to="/blog/" className="smlar_blgs_titles c_p">
                      Building a Chatbot for your E-commerce Business using
                      Django
                    </Link>
                  </div>
                  <div className="smlar_blgs_t_wrapper">
                    <Link to="/blog/" className="smlar_blgs_titles c_p">
                      Building a Chatbot for your E-commerce Business using
                      Django
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="r_blg_body_right">
              <MarkdownReader filePath={markdown} />
              <div className="r_blg_body_comments">
                <Comments />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  )
}

export default Read
