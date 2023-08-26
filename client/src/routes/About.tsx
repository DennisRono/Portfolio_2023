import React, { Fragment } from 'react'
import '../styles/css/about.css'
import Header from '../components/Header'
import BreadCrumb from '../components/BreadCrumb'
import { Helmet } from 'react-helmet'
import Footer from '../components/Footer'
import ProfileImage from '../assets/images/profile.png'

const About = () => {
  return (
    <Fragment>
      <Helmet>
        <title>About | Dennis Kibet</title>
        <link
          rel="canonical"
          href={window.location.pathname + window.location.search}
        />
      </Helmet>
      <Header />
      <BreadCrumb />
      <div className="about">
        <div className="abt_wrapper">
          <div className="abt_top flex f_row">
            <div className="abt_left">
              <div className="abt_p_sticky_wrap">
                <h1 className="abt_me_title">
                  About me <code>&lt;/&gt;</code>
                </h1>
                <div className="abt_p_wrap">
                  <div className="abt_p_bg"></div>
                  <div className="abt_profile_pic">
                    <img className="image" src={ProfileImage} alt="" />
                  </div>
                </div>
                <div className="abt_lname">
                  <h2 className="abt_my_name">Dennis Kibet R.</h2>
                  <h4 className="abt_career_line">
                    Full-Stack Software Developer
                  </h4>
                </div>
              </div>
            </div>
            <div className="abt_right">
              <div className="abt_background">
                <h2 className="abt_b_title">
                  {' '}
                  &nbsp;&nbsp;{' '}
                  <span style={{ paddingRight: '15px' }}>Background</span>{' '}
                  &nbsp;&nbsp; <span className="secCounter"> .01</span>{' '}
                </h2>
                <p className="abt_back_texts">
                  Hello, I am Dennis. I am currently a student at Machakos
                  University Kenya. I love building things for the internet. My
                  native home place is Eldoret Kenya. My intrest in computers
                  started back when I was in High School when I did a science
                  fair project on web develpment. As simple as the project was
                  it taught me alot on how the internet works and moreover gave
                  me a little Experience on HTML & CSS.
                  <br />
                  <br />
                  currently i focus on finding reliable solutions for software
                  issues. I am fluent in English and accustomed to working with
                  cross-cultural, global terms.
                </p>
              </div>
              <div className="abt_tech_stack">
                <h2 className="abt_stack_title">
                  <span className="sCounter">02.</span> &nbsp;&nbsp;&nbsp;&nbsp;
                  Technologies I use
                </h2>
                <br />
                <p className="abt_skillsTexts">
                  Here are a few technologies I've been working with recently:
                </p>
                <nav className="abt_stack_nav">
                  <ul>
                    <h2>Languages</h2>
                    <li>php</li>
                    <li>Node.js</li>
                    <li>Java</li>
                    <li>C#</li>
                    <li>Python</li>
                    <li>Javascript (ES6+)</li>
                  </ul>
                  <ul>
                    <h2>Frameworks</h2>
                    <li>React.js</li>
                    <li>TensorFlow</li>
                    <li>Electron</li>
                    <li>Django</li>
                  </ul>
                  <ul>
                    <h2>Design</h2>
                    <li>Adobe XD</li>
                    <li>Figma</li>
                    <li>Sketch</li>
                    <li>Webflow</li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
          <div className="abt_exp">
            <h2 className="abt_exp_title">
              <span className="eCounter">03.</span>Career
            </h2>
            <div className="abt_career flex f_row">
              <div className="abt_career_left">
                <h2 className="abt_career_title">
                  Full-Stack Software Developer
                </h2>
                <p className="abt_career_par">
                  I'm a creative fullstack developer with <strong>3+</strong>{' '}
                  years of experience. I specialise in frontend and backend
                  development for complex scalable web and mobile apps.
                </p>
                <p className="abt_career_par">
                  Since the beginning of my journey as a software developer 3
                  years ago, I've done remote work for agencies, developed for
                  startups, and collaborated with talents to create digital
                  products for both business and consumer use.
                </p>
              </div>
              <div className="abt_career_right">
                <h4 className="abt_wid"> ~ what i do</h4>
                <div className="abt_wid_wrapper">
                  <div className="abt_wid_item">
                    <h3 className="abt_tiwid">Web Apps & APIs</h3>
                    <p className="_abt_tiwid">
                      I develop both front-end & back-end of websites using
                      Express.js, React.js, Python Flask/Django, Node.js and
                      Go-lang
                    </p>
                  </div>
                  <div className="abt_wid_item">
                    <h3 className="abt_tiwid">Mobile Applications</h3>
                    <p className="_abt_tiwid">
                      I develop both IOS & android apps using Flutter and React
                      Native
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="abt_visualizations">
              <div className="abt_vis_wrapper flex f_row f_align_center">
                <div className="abt_vis_left flex f_row f_align_center">
                  <h3>5+</h3>
                  <div className="abt_vis_divider">
                    <p>Years of</p>
                    <p>Experience</p>
                  </div>
                </div>
                <div className="abt_vis_right flex f_row f_align_center">
                  <h3>30+</h3>
                  <div className="abt_vis_divider">
                    <p>Projects</p>
                    <p>Completed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="eTexts">
            <h2 className="eTitle">
              <span className="eCounter">04. </span> &nbsp;&nbsp;&nbsp;&nbsp;
              Experience & Schooling
            </h2>
            <div className="experiences">
              <div className="exp">
                <h2 className="eOneTitle">
                  Samoei Boys Secondary School, Nandi Hills
                </h2>
                <div className="eOneTexts">
                  <p>
                    at samoei i learned alot of life skills and career
                    developing skills through my four years there, This is where
                    i had my first intrest in computers
                  </p>
                  <span className="eduration">2016 Jan - 2019 Dec</span>
                </div>
              </div>
              <div className="exp">
                <h2 className="eOneTitle">Alphax College, Eldoret</h2>
                <div className="eOneTexts">
                  <p>
                    here i took a practical course on web development where i
                    gained skills in HTML, css, javascript and php. I also got
                    certified in web development
                  </p>
                  <span className="eduration">2020 Jan - 2020 April</span>
                </div>
              </div>
              <div className="exp">
                <h2 className="eOneTitle">Machakos University, Machakos</h2>
                <div className="eOneTexts">
                  <p>
                    I am currently at Machakos University persuing a course in
                    computer science. So far so good here
                  </p>
                  <span className="eduration">2020 Sept - current</span>
                </div>
              </div>
              <div className="exp">
                <h2 className="eOneTitle">
                  Water Resources Authority (Attaché), Nairobi
                </h2>
                <div className="eOneTexts">
                  <p>
                    As an Attaché at WRA, I adeptly applied ICT expertise,
                    enhancing tech solutions, workflow efficiency, and
                    communication. Adept in tech advancements, I boosted
                    organizational proficiency and innovation.
                  </p>
                  <span className="eduration">2023 May - 2023 August</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  )
}

export default About
