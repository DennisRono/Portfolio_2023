import React, { Fragment } from 'react'
import '../styles/css/read.css'
import { Helmet } from 'react-helmet'
import { Link, useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import Footer from '../components/Footer'
import Header from '../components/Header'
import BreadCrumb from '../components/BreadCrumb'
import calendar from '../assets/images/calendar.png'
import { ReactComponent as Eye } from '../assets/svg/eye.svg'
import { ReactComponent as Clock } from '../assets/svg/clock.svg'
import ProfileImage from '../assets/images/profile.png'
import GiscusWidget from '../components/ComTest'

const Read = () => {
  const { slug } = useParams()
  const markdown = `
  <img class="image" src="https://sabare.me/static/images/Blog/stock-price-prediction.jpg" alt="drawing" style="height: 400px; border-radius: 15px;"/>
  <h1>Hey, 👋 Iam Dennis Rono</h1>
<p>I am a full-stack developer who enjoy writing computer programs ✌</p>

<div style="height: 300px;">
<a href="https://denniskibet.com/" class="flex f_align_center f_wrap">
  <img height="137px" src="https://github-readme-stats.vercel.app/api?username=DennisRono&hide_title=true&hide_border=true&show_icons=true&include_all_commits=true&count_private=true&line_height=21&theme=dark" />&nbsp;
  <img height="137px" src="https://github-readme-stats.vercel.app/api/top-langs/?username=dennisrono&layout=compact&langs_count=8&hide=scss,html,less,css&show_icons=true&theme=dark&hide_title=true&hide_border=true&card_width=400px" /></a>
</div>

<h2>About Me</h2>
<h4>Developer & Designer</h4>
<p>
My interest in computer programming started back in High School when I decided to do a science fair project on web development. As simple as my science fair project was, it taught me a lot about HTML & CSS.
</p>
<p>
  I've had the privilege of participating in Kenya Robotics competitions for high schools. Fast forward to today, where I am currently a student at Machakos University where I am studying for a degree in computer science.
</p>
<p>
  Currently, my main focus is finding reliable solutions for software issues. I am fluent in English and accustomed to working with cross-cultural, global terms.
</p>
<p>Iam currently a student at Machakos university studying Computer science.</p>

<h2>🚀 Some Tools I Use</h2>

![Python](https://img.shields.io/badge/-Python-000?&logo=Python)
![JavaScript](https://img.shields.io/badge/-JavaScript-000?&logo=JavaScript)
![TypeScript](https://img.shields.io/badge/-TypeScript-000?&logo=TypeScript)
![Dart](https://img.shields.io/badge/-Dart-000?&logo=Dart)
![Kotlin](https://img.shields.io/badge/-Kotlin-000?&logo=Kotlin)
![Swift](https://img.shields.io/badge/-Swift-000?&logo=Swift)
![AWS](https://img.shields.io/badge/-AWS-000?&logo=Amazon-AWS&logoColor=F90)
![Linux](https://img.shields.io/badge/-Linux-000?&logo=Linux)
![Node.js](https://img.shields.io/badge/-Node.js-000?&logo=node.js)
![React](https://img.shields.io/badge/-React-000?&logo=React)
![TensorFlow](https://img.shields.io/badge/-TensorFlow-000?&logo=TensorFlow)
![Ruby](https://img.shields.io/badge/-Ruby-000?&logo=Ruby)

 
 ## contact me:
<a href="https://www.instagram.com/finn_neron/">
<img alt="instagram" src="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white"/>
</a> 
<a href="https://www.linkedin.com/in/dennis-kibet-7911161aa/">
<img alt="linkedin" src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" />
</a>
<a href="https://discord.gg/t7dEEgGE6y">
<img alt="linkedin" src="https://img.shields.io/badge/Discord-5865F2?logo=Discord&logoColor=white&style=for-the-badge" />
</a>
<a href="https://profile.codersrank.io/user/dennisrono/">
<img alt="CodersRank" src="https://img.shields.io/badge/CodersRank-50B0BA?logo=CodersRank&logoColor=white&style=for-the-badge" />
</a>
<a href="https://stackoverflow.com/users/18003296/denniskibet">
<img alt="StackOverFlow" src="https://img.shields.io/badge/Stack_Overflow-FE7A16?style=for-the-badge&logo=stack-overflow&logoColor=white" />
</a> 
<a href="https://medium.com/@dennisrkibet">
<img alt="Medium" src="https://img.shields.io/badge/Medium-00000E?style=for-the-badge&logo=medium&logoColor=white" />
</a>
</a> 
<a href="https://twitter.com/FinnNeron">
<img alt="Twitter" src="https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white" />
</a>
<a href="https://www.youtube.com/channel/UCMkdukYhvLw-3ebLs9LmpQA?sub_confirmation=1">
<img alt="YouTube" src="https://img.shields.io/badge/YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white" />
</a>

<p>
  <a href="https://denniskibet.netlify.app">
  <img src="https://img.shields.io/badge/website-portfolio-brightgreen" alt="my porfolio" />
  </a>
</p>

![](https://komarev.com/ghpvc/?username=DennisRono&label=PROFILE+VIEWS)

  `

  return (
    <Fragment>
      {' '}
      <Helmet>
        <title>{slug ? slug : 'Blog'} | Dennis Kibet</title>
        <link
          rel="canonical"
          href={window.location.pathname + window.location.search}
        />
      </Helmet>
      <Header />
      <BreadCrumb />
      <div className="read">
        <div className="read_wrapper">
          <div className="read_blog_header">
            <div className="read_blog_date flex f_row f_align_center">
              <img className="image" src={calendar} alt="" />
              <p>Sunday, April 30, 2023</p>
            </div>
            <h1 className="read_blog_title">
              Stock Price Prediction with Apache Spark and Apache Cassandra.
            </h1>
            <div className="r_blg_meta flex f_row f_align_center">
              <div className="r_blg_met_item flex f_row f_align_center">
                <Clock className="r_blg_met_Ic" />
                <span>6 min read</span>
              </div>
              <div className="r_blg_met_item flex f_row f_align_center">
                <Eye className="r_blg_met_Ic" />
                <span>370 views</span>
              </div>
            </div>
          </div>
          <div className="read_blog_body">
            <div className="r_blg_body_left">
              <div className="r_blg_body_left_sticky_wrap">
                <div className="blog_author flex f_row f_align_center">
                  <div className="blg_author_profile">
                    <img className="image" src={ProfileImage} alt="" />
                  </div>
                  <div className="blg_author_textuals">
                    <h2>Dennis Kibet</h2>
                  </div>
                </div>
                <div className="blog_tags flex f_row f_align_center">
                  <span className="tag_text">spark</span>
                  <span className="tag_text">Cassandra</span>
                  <span className="tag_text">Machine Learning</span>
                </div>
                <div className="read_blg_similar_blogs">
                  <h3 className="smlar_blg_title">Similar Blogs</h3>
                  <div className="smlar_blgs_t_wrapper">
                    <Link to="/blog/" className="smlar_blgs_titles c_p">
                      Building a Chatbot for your E-commerce Business using
                      Django
                    </Link>
                  </div>
                  <div className="smlar_blgs_t_wrapper">
                    <Link to="/blog/" className="smlar_blgs_titles c_p">
                      Building a Chatbot for your E-commerce Business using
                      Django
                    </Link>
                  </div>
                  <div className="smlar_blgs_t_wrapper">
                    <Link to="/blog/" className="smlar_blgs_titles c_p">
                      Building a Chatbot for your E-commerce Business using
                      Django
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="r_blg_body_right">
              <ReactMarkdown
                rehypePlugins={[rehypeRaw]}
                remarkPlugins={[remarkGfm]}
                children={markdown}
              />
              <div className="r_blg_body_comments">
                {/* <Comments /> */}
                <GiscusWidget />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  )
}

export default Read
