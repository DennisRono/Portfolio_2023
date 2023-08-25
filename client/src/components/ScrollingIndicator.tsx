import React, { useState, useEffect } from 'react'
import '../styles/css/scrollingindicator.css'

const ScrollingIndicator: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [scrollWidth, setScrollWidth] = useState(0)

  useEffect(() => {
    const handleLoad = () => {
      setIsLoading(false)
      let progress = 0
      const increment = 5
      const interval = setInterval(() => {
        progress += increment
        if (progress > 100) {
          clearInterval(interval)
        }
        setScrollWidth(progress)
      }, 50)
      setTimeout(() => {
        setIsLoading(false)
        setScrollWidth(0)
      }, 2000)
    }

    window.addEventListener('load', handleLoad)

    return () => {
      window.removeEventListener('load', handleLoad)
    }
  }, [])

  const handleScroll = () => {
    const windowHeight = window.innerHeight
    const documentHeight = document.documentElement.scrollHeight
    const scrollTop = document.documentElement.scrollTop
    const remainingHeight = documentHeight - scrollTop - windowHeight
    const maxScroll = documentHeight - windowHeight

    const newScrollWidth = Math.min(
      100,
      ((maxScroll - remainingHeight) / maxScroll) * 100
    )
    setScrollWidth(newScrollWidth)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div
      className={`scrolling-indicator ${isLoading ? 'loading' : ''}`}
      style={{ width: `${scrollWidth}%` }}
    >
      <div className="indicator"></div>
    </div>
  )
}

export default ScrollingIndicator
