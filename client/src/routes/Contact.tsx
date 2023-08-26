import React, { Fragment, useState } from 'react'
import '../styles/css/contact.css'
import Header from '../components/Header'
import BreadCrumb from '../components/BreadCrumb'
import { Helmet } from 'react-helmet'
import Footer from '../components/Footer'
import { ReactComponent as Upload } from '../assets/svg/icon-download.svg'
import { ReactComponent as TwitterX } from '../assets/svg/twitter-x.svg'
import { ReactComponent as Github } from '../assets/svg/github.svg'
import { ReactComponent as Facebook } from '../assets/svg/facebook.svg'
import { ReactComponent as LinkedIn } from '../assets/svg/linkedin.svg'
import Envelop from '../assets/images/envelope_notif.png'
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'

interface FormDataAssets {
  [key: string]: File
}

interface ContactFormData {
  name: string
  email: string
  phone: string
  website: string
  brief: string
  assets: FormDataAssets | null
}

interface FormResponse {
  message: string
  type: string
}

const Contact: React.FC = () => {
  const [data, setData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    website: '',
    brief: '',
    assets: null,
  })

  const [response, setResponse] = useState<FormResponse>({
    message: '',
    type: '',
  })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData()
    if (data.assets) {
      Object.values(data.assets).forEach((file) => {
        formData.append('assets', file)
      })
    }
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        const value = data[key as keyof ContactFormData]
        if (value !== null && typeof value !== 'object') {
          formData.append(key, value)
        }
      }
    }
    try {
      let config: AxiosRequestConfig = {
        method: 'post',
        url: 'https://api.denniskibet.com/den/contact',
        headers: {
          Authorization: 'Bearer dfghjksdbhjdsfskjfb',
        },
        data: formData,
      }
      const res: AxiosResponse = await axios(config)
      setResponse(res.data)
      setData({
        name: '',
        email: '',
        phone: '',
        website: '',
        brief: '',
        assets: null,
      })
      getFile(true)
      setTimeout(() => {
        setResponse({ message: '', type: '' })
      }, 5000)
    } catch (error: any) {
      setResponse({ type: 'error', message: 'Something Wrong Happened' })
    }
  }

  const [btntxt, setBtntxt] = useState<string>('submit')

  const handleBtn = () => {
    setBtntxt('sending...')
    const btninterval = setInterval(() => {
      setBtntxt('submit')
    }, 1000)
    if (response.message !== '') {
      clearInterval(btninterval)
    }
  }
  const getFile = (c: boolean): void => {
    const files: FileList | null | undefined =
      document.querySelector<HTMLInputElement>('.file-field')?.files
    let label: HTMLDivElement | null =
      document.querySelector<HTMLDivElement>('.content-label')
    let finlabel: string = ''
    let filenames: string[] = []
    if (files) {
      for (let i = 0; i < files?.length || 0; ++i) {
        const name: string = files?.item(i)?.name || ''
        filenames.push(name)
      }
    }

    filenames.map((i) => {
      return (finlabel =
        finlabel + "<span class='filenames-list'>" + i + '</span>')
    })

    if (c && label) {
      label.innerHTML =
        'Drag or browse your project brief (you can upload multiple files)'
    } else if (label) {
      label.innerHTML = finlabel
    }
  }

  return (
    <Fragment>
      <Helmet>
        <title>Contact | Dennis Kibet</title>
        <link
          rel="canonical"
          href={window.location.pathname + window.location.search}
        />
      </Helmet>
      <Header />
      <BreadCrumb />
      <div className="contact">
        <section className="contact-page flex f_row">
          <div className="contact-page-wrapper">
            <div className="contFormSec">
              {response.message !== '' ? (
                <p
                  className={
                    response.type === 'success'
                      ? 'formNotifySucc'
                      : 'formNotify'
                  }
                >
                  {response.message}
                </p>
              ) : null}
              <form onSubmit={handleSubmit} encType="multipart/form-data">
                <h3>1. Tell me more about yourself</h3>
                <div className="cont-group">
                  <div className="user-input-wrp">
                    <br />
                    <input
                      id="id-input"
                      type="text"
                      className="inputText"
                      name="name"
                      value={data.name}
                      onChange={(e) => {
                        setData({ ...data, [e.target.name]: e.target.value })
                      }}
                    />
                    <span className="floating-label">
                      Your Name <span style={{ color: 'red' }}>*</span>
                    </span>
                  </div>
                  <span id="id-err"></span>
                  <div className="cont-gr-flex">
                    <div className="contPut">
                      <div className="user-input-wrp">
                        <br />
                        <input
                          id="id-input"
                          type="text"
                          className="inputText"
                          name="email"
                          value={data.email}
                          onChange={(e) => {
                            setData({
                              ...data,
                              [e.target.name]: e.target.value,
                            })
                          }}
                        />
                        <span className="floating-label">
                          Your Email <span style={{ color: 'red' }}>*</span>
                        </span>
                      </div>
                      <span id="id-err"></span>
                    </div>
                    <div className="contPut">
                      <div className="user-input-wrp">
                        <br />
                        <input
                          id="id-input"
                          type="text"
                          className="inputText"
                          name="phone"
                          value={data.phone}
                          onChange={(e) => {
                            setData({
                              ...data,
                              [e.target.name]: e.target.value,
                            })
                          }}
                        />
                        <span className="floating-label">Phone Number</span>
                      </div>
                      <span id="id-err"></span>
                    </div>
                  </div>
                  <div className="user-input-wrp">
                    <br />
                    <input
                      id="id-input"
                      type="text"
                      className="inputText"
                      name="website"
                      value={data.website}
                      onChange={(e) => {
                        setData({ ...data, [e.target.name]: e.target.value })
                      }}
                    />
                    <span className="floating-label">Company Website</span>
                  </div>
                  <span id="id-err"></span>
                </div>

                <h3>2. What are you looking to work on?</h3>
                <div className="cont-group">
                  <div className="user-input-wrp">
                    <br />
                    <textarea
                      id="id-input"
                      className="inputText"
                      name="brief"
                      value={data.brief}
                      onChange={(e) => {
                        setData({ ...data, [e.target.name]: e.target.value })
                      }}
                      style={{ minHeight: '100px' }}
                    ></textarea>
                    <span className="floating-label">
                      Describe your project briefly{' '}
                      <span style={{ color: 'red' }}>*</span>
                    </span>
                  </div>
                  <span id="id-err"></span>
                  <div className="input-field-row">
                    <div className="input-file-row">
                      <label htmlFor="project_brief" className="project_brief">
                        <div className="file-content">
                          <div className="icon">
                            <Upload className="image-upload-icon" />
                          </div>
                          <div className="content-label">
                            Drag or browse your project brief (you can upload
                            multipe files)
                          </div>
                        </div>
                        <div className="row-wrap">
                          <div id="filePush" className="button">
                            upload
                          </div>
                        </div>
                      </label>
                      <input
                        className="file-field"
                        type="file"
                        name="assets"
                        onChange={(e) => {
                          setData({ ...data, [e.target.name]: e.target.files })
                          getFile(false)
                        }}
                        multiple
                      />
                    </div>
                    <span id="id-err fileErr"></span>
                  </div>
                </div>
                <input
                  type="submit"
                  value={btntxt}
                  onClick={() => {
                    handleBtn()
                  }}
                  name="contact-page"
                  className="contact-page-btn"
                />
              </form>
            </div>
          </div>
          <div className="cont_textuals">
            <div className="cont_textuals_wrapper">
              <div className="cont_t_high">
                <div className="cont_ic_wrapper">
                  {/* <Envelope className="cont_t_ic" /> */}
                  <img src={Envelop} alt="" className="image cont_t_ic" />
                </div>
                <p>
                  Shoot me an email at{' '}
                  <a href="mailto:dennisrkibet@gmail.com">
                    dennisrkibet@gmail.com
                  </a>{' '}
                  and i'll get right back to you.
                </p>
              </div>
              <div className="cont_socials flex f_row f_align_center">
                <a
                  href="https://x.com/dennisrkibet"
                  target="_blank"
                  className="cont_soc_item c_p"
                  rel="noreferrer"
                >
                  <TwitterX className="cont_soc_ic" />
                </a>
                <a
                  href="https://github.com/DennisRono"
                  target="_blank"
                  className="cont_soc_item c_p"
                  rel="noreferrer"
                >
                  <Github className="cont_soc_ic" />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61550052502186"
                  target="_blank"
                  className="cont_soc_item c_p"
                  rel="noreferrer"
                >
                  <Facebook className="cont_soc_ic" />
                </a>
                <a
                  href="https://www.linkedin.com/in/dennisrkibet/"
                  target="_blank"
                  className="cont_soc_item c_p"
                  rel="noreferrer"
                >
                  <LinkedIn className="cont_soc_ic" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </Fragment>
  )
}

export default Contact
