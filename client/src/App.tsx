import React, { Fragment } from 'react'
import './styles/css/styles.css'
import Routes from './Routes'
import { useAppSelector } from './state/hooks'

const App = () => {
  const theme = useAppSelector((state) => state.theme)
  return (
    <Fragment>
      <div className="app" data-theme={theme}>
        <div className="container_12">
          <Routes />
        </div>
      </div>
    </Fragment>
  )
}

export default App
