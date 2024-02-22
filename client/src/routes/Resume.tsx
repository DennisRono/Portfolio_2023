import React, { FormEvent, Fragment, useState } from 'react'
import '../styles/css/resume.css'
import Header from '../components/Header'
import BreadCrumb from '../components/BreadCrumb'
import Footer from '../components/Footer'
import resume from '../assets/images/graduation-cap.png'
import api from '../api/axios'
import { toast } from 'react-toastify'
const Resume = () => {
  const [email, setEmail] = useState('')

  const handleRequest = async (e: FormEvent) => {
    e.preventDefault()
    if (email !== '') {
      const res: any = api('POST', 'hire-me', { email: email })
      if (res.status === 200) {
        toast('Request received', {
          type: 'success',
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          theme: 'light',
        })
      }
    } else {
      toast('Email is required', {
        type: 'error',
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        theme: 'light',
      })
    }
  }
  return (
    <Fragment>
      <Header />
      <BreadCrumb />
      <div className="resume">
        <div className="resume_wrapper">
          <div className="resume_req_form flex f_column f_align_center">
            <img src={resume} className="grad_cap_resume" alt="" />
            <form
              className="res_res_frm flex f_row f_align_center"
              onSubmit={(e) => {
                handleRequest(e)
              }}
            >
              <div className="res_req_frm_group">
                <input
                  type="text"
                  value={email}
                  className="res_req_input"
                  placeholder="Type in your email..."
                  onChange={(e) => {
                    setEmail(e.target.value)
                  }}
                />
              </div>
              <button type="submit" className="c_p btn res_req_btn">
                request
              </button>
            </form>
            <p className="res_req_info">
              Request and I will get in touch soonest possible*
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  )
}

export default Resume
