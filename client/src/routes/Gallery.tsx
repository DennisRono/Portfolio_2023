import React, { Fragment } from 'react'
import '../styles/css/gallery.css'
import { Helmet } from 'react-helmet'
import Header from '../components/Header'
import BreadCrumb from '../components/BreadCrumb'
import Footer from '../components/Footer'
import Image from '../components/Image'

//const baseURL =
// 'https://res.cloudinary.com/dkazrhnxq/image/upload/v1718384693/kibet/'
const baseURL =
  'https://res.cloudinary.com/dkazrhnxq/image/upload/f_auto,q_auto/v1/kibet/'

const array = [
  'tqtvve1yabvr7sn6e4ij',
  'ft0qtdqp6b6ouhyox3bz',
  'lsan4vyojazpwddwz3ng',
  'i9izpbw3l5qvozxaevrf',
  'rwwa2k4lihfguxnccgsz',
  'eb1v2gev6yeg6dix1uez',
  'acwp0hkb2nsutfr3glfd',
  'iyqjwxjsjy4ho97ykf98',
  'rompqmv4bhui4tloqduj',
  'vaqmem6r7tgdnvb5v5zm',
  'oymk71nacb0vhjshxucl',
  'zlbuzhcwlrshz6ap1q0k',
  'wcneujqwz5sliedzivut',
  'r7xya3consfbysav8wwe',
  'lpyrkfgltgexatfgx19g',
  'gk6fnmsh4ytcptxbmac0',
  't2nzfnzcf9gbetiycm2a',
  's79hp2qz3jq9bfjwzdxi',
  'bw0ie22kxhlqvunnbpcl',
  'g3ii8orkdx4qgohoaaph',
  'atm0xkq28mt8qqg3h8cd',
  'et2qiinvqry3hhyohpj3',
  'v5ifnyyddldyib7ms5jl',
  'ae9mn6o3pwbm92ngmhs7',
  'ijrwbczlzq0kp8orfphf',
  'jbm7qsqd9otocnonnxib',
  'qbmmbjxcqa3slxwujxyl',
  'rez9emjo4ctzbbslk0pg',
  'qjmi8ypm9hczkfevxift',
  'jebrergvcofw03d6fkru',
  'jbvde4g18qaqxt9tatie',
  'msfbyjana7ngrk2t5ixf',
  'syjjxvydzt5wwkynzffp',
  'exsf8g45zano5n8absts',
  'hkgdikrm4s9vnx5kic1x',
  'auly79kux6n17yan8bpd',
  'wotfvfsg1otfackg5uls',
  'lkvbd3yo96deg7w8cdvw',
  'zsfgj9utnadt925wadsv',
  'is8llldx0xvxl3h5uil8',
  'acxw29domprmgkkxqvtz',
  'rqvbbxy4moeal6cwyfbs',
  'mfb1n9yomhpnkwsmnjb6',
  'zpcbbqnmsxk3tltyrty5',
  'i7hlysgf7djw8a7hhwb4',
  'v25gsfjtlybtn3ag35gk',
  'k91v0uujhnday7cecreq',
  'bbsycremtdw2co02uybs',
  'k7akycdsonm9prmzsigu',
  'l6myk8ynnror9hq4mdob',
]

const shuffleArray = (arr: string[]) => {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr
}

const Gallery: React.FC = () => {
  const imageNames = shuffleArray([...array])

  return (
    <Fragment>
      <Helmet>
        <title>Gallery | Dennis Kibet</title>
        <link
          rel="canonical"
          href={window.location.pathname + window.location.search}
        />
      </Helmet>
      <Header />
      <BreadCrumb />
      <div className="container">
        <div className="gallery">
          {Array.isArray(imageNames) &&
            imageNames.map((image, index) => {
              const rand = Math.random()
              const randomClass =
                rand > 0.3 && rand < 0.6
                  ? 'gallery__item--vert'
                  : rand < 0.3
                  ? 'gallery__item--hor'
                  : ''
              return (
                <Image
                  key={index}
                  src={`${baseURL}${image}.jpg`}
                  alt={`Image ${index + 1}`}
                  className={`gallery__item ${randomClass}`}
                />
              )
            })}
        </div>
      </div>
      <Footer />
    </Fragment>
  )
}

export default Gallery
