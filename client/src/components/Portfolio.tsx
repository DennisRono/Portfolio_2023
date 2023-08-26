import React, { Fragment, useEffect, useRef } from 'react'
import '../styles/css/portfolio.css'
import iPix from '../assets/images/ipix.png'
import Casa from '../assets/images/casa.png'
import Shyro from '../assets/images/shyro.png'
import Planrr from '../assets/images/planrr.png'
import TwoSister from '../assets/images/twosister.png'
import Blnng from '../assets/images/blnng.png'
import { Link } from 'react-router-dom'

const Portfolio = () => {
  const observer = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2, // Adjust this threshold as needed
    }

    observer.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > 0) {
          entry.target.classList.add(
            'animate__animated',
            'animate__slideInUp',
            'animate__slow'
          )
        }
      })
    }, options)

    // Observe all .animated-div elements
    const animatedDivs = document.querySelectorAll('.pl_proj_item')
    animatedDivs.forEach((div) => {
      observer.current!.observe(div)
    })

    return () => {
      // Clean up the observer when the component unmounts
      if (observer.current) {
        observer.current.disconnect()
      }
    }
  }, [])
  return (
    <Fragment>
      <div className="portfolio" id="projects">
        <div className="pl_wrap">
          <h1 className="pl_title">Portfolio</h1>
          <h4 className="pl_sub_title">~ Featured Projects</h4>
          <div className="pl_showcase flex f_row f_align_center">
            <div className="pl_proj_item">
              <div className="pl_shw_overlap  flex f_row">
                <h4 className="pl_projname">WenotiFy</h4>
                <div className="pl_shw_spacer"></div>
                <span className="pl_shw_stack">Flutter/Django</span>
              </div>
              <img className="pl_pr_image" src={iPix} alt="" />
              <Link to="/npay" className="pl_pr_learn_more c_p">
                <div className="plr_lmore_bg"></div>
                <div className="plr_lmore_wrapper">
                  <span>learn more</span>
                </div>
              </Link>
            </div>
            <div className="pl_proj_item">
              <div className="pl_shw_overlap  flex f_row">
                <h4 className="pl_projname">Med & Gromart</h4>
                <div className="pl_shw_spacer"></div>
                <span className="pl_shw_stack">
                  React.js/Express.js/MongoDB
                </span>
              </div>
              <img className="pl_pr_image" src={Shyro} alt="" />
              <Link to="/npay" className="pl_pr_learn_more c_p">
                <div className="plr_lmore_bg"></div>
                <div className="plr_lmore_wrapper">
                  <span>learn more</span>
                </div>
              </Link>
            </div>
            <div className="pl_proj_item">
              <div className="pl_shw_overlap  flex f_row">
                <h4 className="pl_projname">NPay</h4>
                <div className="pl_shw_spacer"></div>
                <span className="pl_shw_stack">Flutter/Express.js/MySQL</span>
              </div>
              <img className="pl_pr_image" src={TwoSister} alt="" />
              <Link to="/npay" className="pl_pr_learn_more c_p">
                <div className="plr_lmore_bg"></div>
                <div className="plr_lmore_wrapper">
                  <span>learn more</span>
                </div>
              </Link>
            </div>
            <div className="pl_proj_item">
              <div className="pl_shw_overlap  flex f_row">
                <h4 className="pl_projname">N-Analytics</h4>
                <div className="pl_shw_spacer"></div>
                <span className="pl_shw_stack">React.js/Express.js</span>
              </div>
              <img className="pl_pr_image" src={Blnng} alt="" />
              <Link to="/npay" className="pl_pr_learn_more c_p">
                <div className="plr_lmore_bg"></div>
                <div className="plr_lmore_wrapper">
                  <span>learn more</span>
                </div>
              </Link>
            </div>
            <div className="pl_proj_item">
              <div className="pl_shw_overlap  flex f_row">
                <h4 className="pl_projname">WeCare</h4>
                <div className="pl_shw_spacer"></div>
                <span className="pl_shw_stack">
                  React Native/Express/Postgress
                </span>
              </div>
              <img className="pl_pr_image" src={Casa} alt="" />
              <Link to="/npay" className="pl_pr_learn_more c_p">
                <div className="plr_lmore_bg"></div>
                <div className="plr_lmore_wrapper">
                  <span>learn more</span>
                </div>
              </Link>
            </div>
            <div className="pl_proj_item">
              <div className="pl_shw_overlap  flex f_row">
                <h4 className="pl_projname">NullEMS</h4>
                <div className="pl_shw_spacer"></div>
                <span className="pl_shw_stack">Electron.js/Django/MySQL</span>
              </div>
              <img className="pl_pr_image" src={Planrr} alt="" />
              <Link to="/npay" className="pl_pr_learn_more c_p">
                <div className="plr_lmore_bg"></div>
                <div className="plr_lmore_wrapper">
                  <span>learn more</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Portfolio
