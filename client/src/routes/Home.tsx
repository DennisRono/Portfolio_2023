import React, { Fragment } from 'react'
import '../styles/css/home.css'
import Header from '../components/Header'
import BreadCrumb from '../components/BreadCrumb'
import { Helmet } from 'react-helmet'
import Projects from '../assets/images/projects.png'
import About from '../assets/images/book.png'
import Hire from '../assets/images/graduation-cap.png'
import { ReactComponent as ArrowRight } from '../assets/svg/arrow-right.svg'
import { ReactComponent as BuyMeCofee } from '../assets/svg/bmc-full-logo.svg'
import BlogList from '../components/BlogList'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import ProjectsSlider from '../components/ProjectsSlider'

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
        <div className="home_wrapper">
          <div className="landing flex f_row">
            <div className="home_landing_left">
              <h1 className="landing_intro_large">
                Hi, I am <span>Dennis Kibet</span>
              </h1>
              <p className="l_intro_par">
                Welcome to my blog, a haven for my thoughts. I'm a passionate
                Full Stack Software Developer, Entrepreneur, and tech
                enthusiast. In leisure, I craft side projects and explore new
                technologies.
              </p>
              <p className="l_intro_par">
                This is my place for contemplation, candid reflections, and all
                the nuances. Have a good read!
              </p>
              <Link to="https://www.buymeacoffee.com/dennisrkibet">
                <BuyMeCofee className="lnd_buymeacofee" />
              </Link>
            </div>
            <div className="home_landing_right flex">
              <div className="l_cta_wrapper">
                <div className="l_cta_bg_proj"></div>
                <a
                  href="#projects"
                  className="l_cta_projects flex f_row f_align_center c_p"
                >
                  <img src={Projects} alt="" className="image lcta_Ic" />
                  <p className="l_cta_par_one">
                    What i've <br />
                    worked on
                  </p>
                  <span>|</span>
                  <p>Projects</p>
                  <ArrowRight className="l_cta_trigger" />
                </a>
              </div>
              <div className="l_cta_wrapper">
                <div className="l_cta_bg_proj"></div>
                <Link
                  to="/about-me"
                  onClick={() => {
                    window.scrollTo({
                      top: 0,
                      behavior: 'smooth',
                    })
                  }}
                  className="l_cta_projects flex f_row f_align_center c_p"
                >
                  <img src={About} alt="" className="image lcta_Ic" />
                  <p className="l_cta_par_one">Know me</p>
                  <span>|</span>
                  <p>About me</p>
                  <ArrowRight className="l_cta_trigger" />
                </Link>
              </div>
              <div className="l_cta_wrapper">
                <div className="l_cta_bg_proj"></div>
                <Link
                  to="/resume"
                  className="l_cta_projects flex f_row f_align_center c_p"
                >
                  <img src={Hire} alt="" className="image lcta_Ic" />
                  <p className="l_cta_par_one">Hire me</p>
                  <span>|</span>
                  <p>Resume</p>
                  <ArrowRight className="l_cta_trigger" />
                </Link>
              </div>
            </div>
          </div>
          <div className="home_blog_highlights">
            <div className="home_blog_high_top">
              <h1 className="home_blog_high_title">Highlights From My Blog</h1>
            </div>
            <div className="home_blog_high_btm">
              <BlogList count="3" />
            </div>
          </div>
          <ProjectsSlider />
        </div>
        <Footer />
      </div>
    </Fragment>
  )
}

export default Home
