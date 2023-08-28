import React, { useState, useEffect, Fragment } from 'react'
import '../styles/css/projectsslider.css'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import WeCare from '../assets/images/wecare.png'
import NAnalytics from '../assets/images/n_analytics.png'
import MedAndGromart from '../assets/images/med_and_gromart.png'
import NPay from '../assets/images/n_pay.png'
import Nems from '../assets/images/null_ems.png'
import WenotiFy from '../assets/images/wenotify.png'
import { Link } from 'react-router-dom'
import LazyLoad from './LazyLoad'

interface Slide {
  id: number
  imageUrl: string
  stack: string
  title: string
  preview: string
  slug: string
}

const slides: Slide[] = [
  {
    id: 1,
    imageUrl: WeCare,
    stack: 'Flutter/Express.js/Redis/MongoDB',
    title: 'WeCare',
    preview: '',
    slug: 'wecare',
  },
  {
    id: 2,
    imageUrl: MedAndGromart,
    stack: 'React.js/Express.js/MySQL',
    title: 'Med & Gromart',
    preview: '',
    slug: 'med-and-gromart',
  },
  {
    id: 3,
    imageUrl: NPay,
    stack: 'Flutter/Express.js/MySQL',
    title: 'NPay',
    preview: '',
    slug: 'npay',
  },
  {
    id: 4,
    imageUrl: NAnalytics,
    stack: 'React Native/Express.js/MySQL',
    title: 'N-Analytics',
    preview: '',
    slug: 'n-analytics',
  },
  {
    id: 5,
    imageUrl: Nems,
    stack: 'React.js/Express.js/MySQL',
    title: 'Null-EMS',
    preview: '',
    slug: 'null-ems',
  },
  {
    id: 6,
    imageUrl: WenotiFy,
    stack: 'React Native/Django/MongoDB',
    title: 'WenotiFy Kenya',
    preview:
      "I made an app that helps people easily tell the police about crimes and show proof in real time. This app keeps everyone safe and solves problems like distance and not having records. Let's build a safer community together using this technology!",
    slug: 'wenotify-kenya',
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
                    <Link
                      to={'/' + slides[activeSlideIndex].slug}
                      className="pl_pr_learn_more c_p"
                    >
                      <span>learn more</span>
                    </Link>
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
      </div>
    </Fragment>
  )
}

export default ProjectsSlider
