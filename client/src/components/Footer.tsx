import React from 'react'
import '../styles/css/footer.css'
import { ReactComponent as Github } from '../assets/svg/github.svg'

const Footer = () => {
  return (
    <div className="footer">
      <div className="fwrapper">
        <div className="fcontainer">
          <div className="fflex">
            <div className="fcopy flex">
              <p>
                &copy; denniskibet {new Date().getFullYear()} <br />
              </p>
              <a
                className="f_red_wrap"
                href="https://github.com/DennisRono"
                target="_blank"
                rel="noreferrer"
              >
                <Github title="Github" className="f_Ic" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
