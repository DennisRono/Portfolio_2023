import React, { Fragment } from 'react'
import 'animate.css'
import './styles/css/styles.css'
import 'react-toastify/dist/ReactToastify.css'
import Routes from './Routes'
import { useAppSelector } from './state/hooks'
import ScrollingIndicator from './components/ScrollingIndicator'
import { ToastContainer } from 'react-toastify'

const App = () => {
  const theme = useAppSelector((state) => state.theme)
  return (
    <Fragment>
      <div className="app" data-theme={theme}>
        <ScrollingIndicator />
        <ToastContainer />
        <div className="container_12">
          <Routes />
        </div>
      </div>
    </Fragment>
  )
}

export default App
