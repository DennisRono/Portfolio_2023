import React, { Fragment } from 'react'
import '../styles/css/header.css'
import Logo from '../assets/images/logo.png'
import { Link } from 'react-router-dom'
import { ReactComponent as Sun } from '../assets/svg/sun.svg'
import { ReactComponent as Crecent } from '../assets/svg/crecent.svg'
import { ReactComponent as Bars } from '../assets/svg/bars.svg'

const Header = () => {
  return (
    <Fragment>
      <div className="header">
        <div className="container container_10">
          <div className="h_wrapper flex f_row f_space_between f_align_center p_v_10">
            <div className="h_brand">
              <img src={Logo} alt="" className="h_b_image" />
            </div>
            <div className="h_navigation flex f_row f_align_center">
              <nav className="h_navigation">
                <ul className="h_unlist flex f_row f_align_center">
                  <li className="n_link_item">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="n_link_item">
                    <Link to="/blog">Blog</Link>
                  </li>
                  <li className="n_link_item">
                    <Link to="/about-me">About</Link>
                  </li>
                  <li className="n_link_item">
                    <Link to="/contact-me">Contact</Link>
                  </li>
                </ul>
              </nav>
              <div className="h_actions flex f_row f_align_center">
                <Sun onClick={() => {}} />
                <Bars onClick={() => {}} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Header
