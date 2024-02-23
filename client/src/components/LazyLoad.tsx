import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
//import 'react-lazy-load-image-component/src/effects/blur.css'
import PlaceholderImage from '../assets/images/placeholder.png'

const LazyLoad = (props: any) => {
  const key: string = props.key
  const alt: string = props.alt
  const src: string = props.src
  return (
    <div>
      <LazyLoadImage
        key={key}
        alt={alt}
        //effect="blur"
        src={src}
        height="100%"
        width="100%"
        placeholderSrc={PlaceholderImage}
      />
    </div>
  )
}

export default LazyLoad
