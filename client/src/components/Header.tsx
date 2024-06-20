import React, { Fragment, useEffect, useRef, useState } from 'react'
import '../styles/css/header.css'
import Logo from '../assets/images/logo.png'
import { Link } from 'react-router-dom'
import { ReactComponent as Sun } from '../assets/svg/sun.svg'
import { ReactComponent as Crecent } from '../assets/svg/crecent.svg'
import { ReactComponent as Bars } from '../assets/svg/bars.svg'
import { useAppDispatch, useAppSelector } from '../state/hooks'
import { setTheme } from '../state/actions/themeAction'

const Header = () => {
  //theme
  const dispatch = useAppDispatch()
  const theme = useAppSelector((state) => state.theme)
  const [miniDrop, setMiniDrop] = useState<boolean>(false)
  const miniDropRef: any = useRef(null)
  const handleClickOutside = (event: any) => {
    if (miniDropRef.current && !miniDropRef.current.contains(event.target)) {
      setMiniDrop(false)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])
  return (
    <Fragment>
      <div className="header">
        <div className="container">
          <div className="h_wrapper flex f_row f_space_between f_align_center p_v_40">
            <div className="h_brand c_p">
              <Link to="/">
                <img src={Logo} alt="" className="image h_b_image" />
              </Link>
            </div>
            <div className="h_nav_wrapper flex f_row f_align_center">
              <nav className="h_navigation">
                <ul className="h_unlist flex f_row f_align_center">
                  <li className="n_link_item">
                    <Link className="n_lnk_redirect p_h_20" to="/">
                      Home
                    </Link>
                  </li>
                  <li className="n_link_item">
                    <Link className="n_lnk_redirect p_h_20" to="/blog">
                      Blog
                    </Link>
                  </li>
                  <li className="n_link_item">
                    <Link className="n_lnk_redirect p_h_20" to="/about-me">
                      About
                    </Link>
                  </li>
                  {/* <li className="n_link_item">
                    <Link className="n_lnk_redirect p_h_20" to="/gallery">
                      Gallery
                    </Link>
                  </li> */}
                  <li className="n_link_item">
                    <Link className="n_lnk_redirect p_h_20" to="/contact-me">
                      Contact
                    </Link>
                  </li>
                </ul>
              </nav>
              <div className="h_actions flex f_row f_align_center gap_20">
                {theme === 'dark' ? (
                  <Sun
                    className="icon h_actions_theme_ic c_p sm_rotate_h"
                    onClick={() => {
                      dispatch(setTheme('light'))
                    }}
                  />
                ) : (
                  <Crecent
                    className="icon h_actions_theme_ic c_p sm_rotate_h"
                    onClick={() => {
                      dispatch(setTheme('dark'))
                    }}
                  />
                )}
                <div className="relative">
                  <Bars
                    className="icon h_actions_theme_ic c_p"
                    ref={miniDropRef}
                    onClick={() => {
                      setMiniDrop(!miniDrop)
                    }}
                  />
                  {miniDrop && (
                    <div className="minidropdown">
                      <ul>
                        <li>
                          <a href="https://nullchemy.com">nullchemy</a>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Header
