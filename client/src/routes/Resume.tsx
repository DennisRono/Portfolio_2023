import React, { Fragment } from 'react'
import '../styles/css/resume.css'
import Header from '../components/Header'
import BreadCrumb from '../components/BreadCrumb'
import Footer from '../components/Footer'

const Resume = () => {
  return (
    <Fragment>
      <Header />
      <BreadCrumb />
      <div className="resume">
        <div className="resume_wrapper">
          <div className="resume_req_form">
            <form className="res_res_frm flex f_row f_align_center">
              <div className="res_req_frm_group">
                <input
                  type="text"
                  className="res_req_input"
                  placeholder="type in your email..."
                />
              </div>
              <button type="submit" className="c_p btn res_req_btn">
                request
              </button>
            </form>
            <p className="res_req_info">
              Enter your email and i will receive your request*
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  )
}

export default Resume
