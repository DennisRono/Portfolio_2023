import React from 'react'
import useImageLoader from '../utils/useImageLoader'

type ImageProps = {
  src: string
  alt: string
  className: string
}

const Image: React.FC<ImageProps> = ({ src, alt, className }) => {
  const { imageSrc, loading, error } = useImageLoader(src)

  if (loading) {
    return <div className={`${className} loading-skeleton`}></div>
  }

  if (error) {
    return (
      <div className={className}>
        <p>Failed to Load the Image :(</p>
      </div>
    )
  }

  return (
    <div className={className}>
      <img src={imageSrc} alt={alt} loading="lazy" />
    </div>
  )
}

export default Image
