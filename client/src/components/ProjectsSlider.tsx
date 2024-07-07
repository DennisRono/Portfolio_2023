import React, { useState, useEffect, Fragment } from 'react'
import '../styles/css/projectsslider.css'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import WeCare from '../assets/images/wecare_one.png'
import NAnalytics from '../assets/images/n_analytics.png'
import MedAndGromart from '../assets/images/med-and-gromart.png'
import NPay from '../assets/images/n_pay.png'
import Nems from '../assets/images/null_ems.png'
import WenotiFy from '../assets/images/wenotify_login.png'
import { Link } from 'react-router-dom'
import LazyLoad from './LazyLoad'
import { ReactComponent as ExternalLink } from '../assets/svg/external_link.svg'

interface Slide {
  id: number
  imageUrl: string
  stack: string
  title: string
  preview: string
  slug: string
  external_url: string
}

const slides: Slide[] = [
  {
    id: 1,
    imageUrl: WeCare,
    stack: 'React.js/Flask/Redis/MongoDB/Electra/Bert',
    title: 'WeCare',
    preview:
      'WeCare is a chatbot application that is designed to help users with suicidal thoughts, and offer emotional support when in distress, it runs Two models for text generation Electra and Bert',
    slug: 'wecare',
    external_url: 'https://wecare.nullchemy.com',
  },
  {
    id: 2,
    imageUrl: MedAndGromart,
    stack: 'Next.js/MongoDb',
    title: 'Med & Gromart',
    preview:
      'Med & Gromart is an online marketplace for sellers and buyers to sell and buy products, it offers analytical tools and wide reach to customers',
    slug: 'med-and-gromart',
    external_url: 'https://shop.nullchemy.com',
  },
  {
    id: 3,
    imageUrl: NPay,
    stack: 'Flutter/Express.js/MySQL',
    title: 'NPay',
    preview:
      'NPay is a next generation mobile payment system, that is meant to easen payments and give users insightful analytics on their money, it also has feautures for planning, schedule Pay amd more',
    slug: 'npay',
    external_url: 'https://npay.nullchemy.com',
  },
  {
    id: 4,
    imageUrl: NAnalytics,
    stack: 'React Native/Express.js/MySQL',
    title: 'N-Analytics',
    preview:
      'this app is designed for business analytics, supply chain and business management',
    slug: 'n-analytics',
    external_url: 'https://analytics.nullchemy.com',
  },
  {
    id: 5,
    imageUrl: Nems,
    stack: 'React.js/Express.js/MySQL',
    title: 'Null-EMS',
    preview: 'Null-EMS is an HR system to manage people in an organization',
    slug: 'null-ems',
    external_url: 'https://nems.nullchemy.com',
  },
  {
    id: 6,
    imageUrl: WenotiFy,
    stack: 'React Native/Django/MongoDB',
    title: 'WenotiFy Kenya',
    preview:
      "I made an app that helps people easily tell the police about crimes and show proof in real time. This app keeps everyone safe and solves problems like distance and not having records. Let's build a safer community together using this technology!",
    slug: 'wenotify-kenya',
    external_url: 'https://wenotify.nullchemy.com',
  },
]

const ProjectsSlider: React.FC = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0)
  const [progress, setProgress] = useState(0) // Start at 0%
  const duration = 20000
  const intervalTime = 100 // Interval time in milliseconds

  useEffect(() => {
    let elapsedTime = 0

    const interval = setInterval(() => {
      elapsedTime += intervalTime
      const progressPercentage = (elapsedTime / duration) * 100

      if (progressPercentage <= 100) {
        setProgress(progressPercentage)
      } else {
        clearInterval(interval)
        setProgress(0)
        setActiveSlideIndex((prevIndex) => (prevIndex + 1) % slides.length)
      }
    }, intervalTime)

    return () => clearInterval(interval)
  }, [activeSlideIndex])

  return (
    <Fragment>
      <div className="projects_slider" id="projects">
        <h1 className="pl_title">Portfolio</h1>
        <h4 className="pl_sub_title">~ Featured Projects</h4>
        <div className="projects_slider_container">
          <TransitionGroup>
            <CSSTransition
              key={slides[activeSlideIndex].id}
              timeout={500}
              classNames="slide"
              appear
            >
              <div className="projects_slide_item flex f_row f_align_center">
                <div className="projects_slide_item_left">
                  <div className="p_s_it_img_wrapper">
                    <LazyLoad
                      className="slide-image image"
                      key={`slide-${activeSlideIndex}`}
                      alt={`Slide ${activeSlideIndex + 1}`}
                      src={slides[activeSlideIndex].imageUrl}
                    />
                    {/* <img
                      className="slide-image image"
                      src={slides[activeSlideIndex].imageUrl}
                      alt={`Slide ${activeSlideIndex + 1}`}
                    /> */}
                  </div>
                </div>
                <div className="projects_slide_item_right">
                  <div className="p_s_it_texts_wrapper flex f_column">
                    <h1 className="projects_slide_item_title">
                      {slides[activeSlideIndex].title}
                    </h1>
                    <span className="projects_slide_item_stack">
                      {slides[activeSlideIndex].stack}
                    </span>
                    <p className="projects_slide_item_par">
                      {slides[activeSlideIndex].preview}
                    </p>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '20px',
                      }}
                    >
                      <Link
                        to={'/' + slides[activeSlideIndex].slug}
                        className="pl_pr_learn_more c_p"
                      >
                        <span>learn more</span>
                      </Link>
                      <a
                        href={slides[activeSlideIndex].external_url}
                        target="__blank"
                        rel="noreferer"
                      >
                        <ExternalLink
                          style={{ height: '20px', width: '20px' }}
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </CSSTransition>
          </TransitionGroup>
          <div className="p_indicator-container">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`p_indicator ${
                  index === activeSlideIndex ? 'active' : ''
                }`}
                onClick={() => setActiveSlideIndex(index)}
              >
                <div
                  className="progress-bar"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-center w-full py-8">
          <Link
            to="/all-projects"
            className="py-2 px-4 border border-slate-600 rounded-md"
          >
            All Projects List
          </Link>
        </div>
      </div>
    </Fragment>
  )
}

export default ProjectsSlider
