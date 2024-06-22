import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const NPay = () => {
  return (
    <div>
      <Header />
      <div className="pt-4">
        <h1
          className="text-6xl font-bold text-center"
          style={{ fontFamily: 'Apercu' }}
        >
          <span
            style={{
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundImage: 'linear-gradient(90deg, #db2777, #9333ea)',
            }}
          >
            NPay
          </span>{' '}
          - A Mobile Payment System
        </h1>
      </div>
      <Footer />
    </div>
  )
}

export default NPay
