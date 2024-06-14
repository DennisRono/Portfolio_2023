import { useState, useEffect } from 'react'

const useImageLoader = (src: string, retries: number = 3) => {
  const [imageSrc, setImageSrc] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<boolean>(false)

  useEffect(() => {
    let retryCount = 0
    let isMounted = true

    const loadImage = () => {
      const img = new Image()
      img.src = src
      img.loading = 'lazy'

      img.onload = () => {
        if (isMounted) {
          setImageSrc(src)
          setLoading(false)
          setError(false)
        }
      }

      img.onerror = () => {
        if (retryCount < retries) {
          retryCount += 1
          loadImage()
        } else {
          if (isMounted) {
            setLoading(false)
            setError(true)
          }
        }
      }
    }

    loadImage()

    return () => {
      isMounted = false
    }
  }, [src, retries])

  return { imageSrc, loading, error }
}

export default useImageLoader
