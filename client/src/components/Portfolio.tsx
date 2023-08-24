import React, { Fragment } from 'react'
import '../styles/css/portfolio.css'
import iPix from '../assets/images/ipix.png'
import Casa from '../assets/images/casa.png'
import Shyro from '../assets/images/shyro.png'
import Planrr from '../assets/images/planrr.png'
import TwoSister from '../assets/images/twosister.png'
import Blnng from '../assets/images/blnng.png'

const Portfolio = () => {
  return (
    <Fragment>
      <div className="portfolio" id="projects">
        <div className="pl_wrap">
          <h1 className="pl_title">Portfolio</h1>
          <h4 className="pl_sub_title">~ Featured Projects</h4>
          <div className="pl_showcase flex f_row f_align_center">
            <div className="pl_proj_item">
              <div className="pl_shw_overlap  flex f_row">
                <h4 className="pl_projname">iPix</h4>
                <div className="pl_shw_spacer"></div>
                <span className="pl_shw_stack">React Native/Django</span>
              </div>
              <img className="pl_pr_image" src={iPix} alt="" />
            </div>
            <div className="pl_proj_item">
              <div className="pl_shw_overlap  flex f_row">
                <h4 className="pl_projname">iPix</h4>
                <div className="pl_shw_spacer"></div>
                <span className="pl_shw_stack">React Native/Django</span>
              </div>
              <img className="pl_pr_image" src={Shyro} alt="" />
            </div>
            <div className="pl_proj_item">
              <div className="pl_shw_overlap  flex f_row">
                <h4 className="pl_projname">iPix</h4>
                <div className="pl_shw_spacer"></div>
                <span className="pl_shw_stack">React Native/Django</span>
              </div>
              <img className="pl_pr_image" src={TwoSister} alt="" />
            </div>
            <div className="pl_proj_item">
              <div className="pl_shw_overlap  flex f_row">
                <h4 className="pl_projname">iPix</h4>
                <div className="pl_shw_spacer"></div>
                <span className="pl_shw_stack">React Native/Django</span>
              </div>
              <img className="pl_pr_image" src={Blnng} alt="" />
            </div>
            <div className="pl_proj_item">
              <div className="pl_shw_overlap  flex f_row">
                <h4 className="pl_projname">iPix</h4>
                <div className="pl_shw_spacer"></div>
                <span className="pl_shw_stack">React Native/Django</span>
              </div>
              <img className="pl_pr_image" src={Casa} alt="" />
            </div>
            <div className="pl_proj_item">
              <div className="pl_shw_overlap  flex f_row">
                <h4 className="pl_projname">iPix</h4>
                <div className="pl_shw_spacer"></div>
                <span className="pl_shw_stack">React Native/Django</span>
              </div>
              <img className="pl_pr_image" src={Planrr} alt="" />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Portfolio
