import React, { Fragment } from 'react'
import '../styles/css/about.css'
import Header from '../components/Header'
import BreadCrumb from '../components/BreadCrumb'
import { Helmet } from 'react-helmet'
import Footer from '../components/Footer'
import ProfileImage from '../assets/images/profile.png'
import LazyLoad from '../components/LazyLoad'

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
                    <LazyLoad
                      className="slide-image image"
                      key={`profile-picture`}
                      alt="my profile picture"
                      src={ProfileImage}
                    />
                    {/* <img className="image" src={ProfileImage} alt="" /> */}
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
                <h2 className="abt_b_title font-bold text-2xl">
                  {' '}
                  &nbsp;&nbsp;{' '}
                  <span style={{ paddingRight: '15px' }}>Background</span>{' '}
                  &nbsp;&nbsp; <span className="secCounter"> .01</span>{' '}
                </h2>
                <p className="abt_back_texts">
                  Hello, I am Dennis. I am currently a student at Moringa School
                  Kenya, studying Software Engineering. I love building things
                  for the internet. My native home place is Eldoret Kenya. My
                  intrest in computers started back when I was in High School
                  when I did a science fair project on web develpment. As simple
                  as the project was it taught me alot on how the internet works
                  and moreover gave me a little Experience on HTML & CSS.
                  <br />
                  <br />
                  currently i focus on finding reliable solutions for software
                  issues. I am fluent in English and accustomed to working with
                  cross-cultural, global terms.
                </p>
              </div>
              <div className="abt_tech_stack">
                <h2 className="abt_stack_title font-bold text-2xl">
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
            <h2 className="abt_exp_title font-bold text-2xl">
              <span className="eCounter">03.</span>Career
            </h2>
            <div className="abt_career flex f_row">
              <div className="abt_career_left">
                <h2 className="abt_career_title">
                  Full-Stack Software Developer
                </h2>
                <p className="abt_career_par">
                  I am an innovative full-stack software developer with over
                  three years of expertise, specializing in the seamless
                  integration of frontend and backend components for intricate,
                  scalable web and mobile applications.{' '}
                </p>
                <p className="abt_career_par">
                  Over the past three years, my journey as a software artisan
                  led to a portfolio with remote agency work, startup
                  collaborations, and diverse partnerships. This path resulted
                  in innovative digital solutions for business and consumer
                  domains, reflecting my dedication to advancing technology.
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
            <div className="abt_visualizations p_v_40">
              <div className="abt_vis_wrapper flex f_row f_align_center">
                <div className="abt_vis_left flex f_row f_align_center">
                  <h3>4+</h3>
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
            <h2 className="eTitle font-bold text-2xl">
              <span className="eCounter -mb-1 mr-1">04. </span>{' '}
              &nbsp;&nbsp;&nbsp;&nbsp; Experience & Schooling
            </h2>
            <div className="experiences">
              <div className="exp">
                <h2 className="eOneTitle font-bold text-2xl">
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
                <h2 className="eOneTitle font-bold text-2xl">
                  Alphax College (Web Development), Eldoret
                </h2>
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
                <h2 className="eOneTitle font-bold text-2xl">
                  Machakos University (Computer Science), Machakos
                </h2>
                <div className="eOneTexts">
                  <p>
                    At Machakos University, I gained a deep understanding of the
                    theoretical foundations of computing technologies. I had the
                    opportunity to collaborate with many peers on various school
                    projects over the four years. This experience was incredibly
                    rewarding, allowing me to forge lifelong connections and
                    acquire a range of skills that enhanced my personal
                    development and advanced my career.
                  </p>
                  <span className="eduration">2020 Sept - 2024 April</span>
                </div>
              </div>
              <div className="exp">
                <h2 className="eOneTitle font-bold text-2xl">
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
              <div className="exp">
                <h2 className="eOneTitle font-bold text-2xl">
                  Moringa School (Software Engineering), Nairobi
                </h2>
                <div className="eOneTexts">
                  <p>
                    I am currently at Moringa School persuing software
                    engineering. So far so good here.
                  </p>
                  <span className="eduration">2024 June - 2024 December</span>
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
