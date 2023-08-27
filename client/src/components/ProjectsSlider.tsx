import React, { useState, useEffect, Fragment } from 'react'
import '../styles/css/projectsslider.css'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import WeCare from '../assets/images/wecare.png'
import Casa from '../assets/images/casa.png'
import Shyro from '../assets/images/shyro.png'
import Planrr from '../assets/images/planrr.png'
import TwoSister from '../assets/images/twosister.png'
import Blnng from '../assets/images/blnng.png'
import { Link } from 'react-router-dom'
//   { id: 2, imageUrl: Casa },
//   { id: 3, imageUrl: Shyro },
//   { id: 4, imageUrl: Planrr },
//   { id: 5, imageUrl: TwoSister },
//   { id: 6, imageUrl: Blnng },
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
    imageUrl: WeCare,
    stack: 'React/Express.js/Redis/MySQL',
    title: 'Med & Gromart',
    preview: '',
    slug: 'med-and-gromart',
  },
  {
    id: 3,
    imageUrl: WeCare,
    stack: 'React/Express.js/Redis/MySQL',
    title: 'NPay',
    preview: '',
    slug: 'npay',
  },
  {
    id: 4,
    imageUrl: WeCare,
    stack: 'React/Express.js/Redis/MySQL',
    title: 'N-Analytics',
    preview: '',
    slug: 'n-analytics',
  },
  {
    id: 5,
    imageUrl: WeCare,
    stack: 'React/Express.js/Redis/MySQL',
    title: 'NullEMS',
    preview: '',
    slug: 'null-ems',
  },
  {
    id: 6,
    imageUrl: WeCare,
    stack: 'React/Express.js/Redis/MySQL',
    title: 'WenotiFy Kenya',
    preview: '',
    slug: 'wenotify-kenya',
  },
]

const ProjectsSlider: React.FC = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0)
  const [progress, setProgress] = useState(0) // Start at 0%
  const duration = 7000
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
                    <img
                      className="slide-image image"
                      src={slides[activeSlideIndex].imageUrl}
                      alt={`Slide ${activeSlideIndex + 1}`}
                    />
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
