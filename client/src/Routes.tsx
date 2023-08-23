import React, { Fragment } from 'react'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'
import Home from './routes/Home'
import ErrorBoundary from './routes/ErrorBoundary'
import Blog from './routes/Blog'
import About from './routes/About'
import Contact from './routes/Contact'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} errorElement={<ErrorBoundary />} />
      <Route path="/blog" element={<Blog />} errorElement={<ErrorBoundary />} />
      <Route
        path="/about-me"
        element={<About />}
        errorElement={<ErrorBoundary />}
      />
      <Route
        path="/contact-me"
        element={<Contact />}
        errorElement={<ErrorBoundary />}
      />
    </>
  )
)

const Routes = () => {
  return (
    <Fragment>
      <RouterProvider router={router} />
    </Fragment>
  )
}

export default Routes
