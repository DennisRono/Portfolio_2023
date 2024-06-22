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
import Read from './routes/Read'
import Resume from './routes/Resume'
import NewBlog from './routes/NewBlog'
import NotFound from './routes/NotFound'
import Gallery from './routes/Gallery'
import WeCare from './routes/WeCare'
import MedAndGromart from './routes/MedAndGromart'
import NPay from './routes/NPay'
import NAnalytics from './routes/NAnalytics'
import Nems from './routes/Nems'
import WenotiFy from './routes/WenotiFy'
import AllProjetcs from './routes/AllProjects'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} errorElement={<ErrorBoundary />} />
      <Route path="/blog" element={<Blog />} errorElement={<ErrorBoundary />} />
      <Route
        path="/new-blog"
        element={<NewBlog />}
        errorElement={<ErrorBoundary />}
      />
      <Route
        path="/resume"
        element={<Resume />}
        errorElement={<ErrorBoundary />}
      />
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
      <Route
        path="/gallery"
        element={<Gallery />}
        errorElement={<ErrorBoundary />}
      />
      <Route
        path="/read/:slug"
        element={<Read />}
        errorElement={<ErrorBoundary />}
      />
      <Route
        path="/wecare"
        element={<WeCare />}
        errorElement={<ErrorBoundary />}
      />
      <Route
        path="/med-and-gromart"
        element={<MedAndGromart />}
        errorElement={<ErrorBoundary />}
      />
      <Route path="/npay" element={<NPay />} errorElement={<ErrorBoundary />} />
      <Route
        path="/n-analytics"
        element={<NAnalytics />}
        errorElement={<ErrorBoundary />}
      />
      <Route
        path="/null-ems"
        element={<Nems />}
        errorElement={<ErrorBoundary />}
      />
      <Route
        path="/wenotify-kenya"
        element={<WenotiFy />}
        errorElement={<ErrorBoundary />}
      />
      <Route
        path="/all-projects"
        element={<AllProjetcs />}
        errorElement={<ErrorBoundary />}
      />
      <Route path="*" element={<NotFound />} errorElement={<ErrorBoundary />} />
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
