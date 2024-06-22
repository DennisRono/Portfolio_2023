import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const NAnalytics = () => {
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
            Null-Analytics
          </span>{' '}
          - A Business Analytics System
        </h1>
      </div>
      <Footer />
    </div>
  )
}

export default NAnalytics
