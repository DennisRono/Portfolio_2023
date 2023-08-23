import React, { Fragment, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../state/hooks'
import { useLocation } from 'react-router-dom'
import { setPath } from '../state/actions/pathAction'

const BreadCrumb = () => {
  //path
  const dispatch = useAppDispatch()
  const path = useAppSelector((state) => state.path)
  const location = useLocation()
  useEffect(() => {
    dispatch(setPath(location.pathname))
  }, [location.pathname, dispatch])
  return (
    <Fragment>
      <div className="BreadCrumb">
        <h4 className="br_crumb_text">~{path}</h4>
      </div>
    </Fragment>
  )
}

export default BreadCrumb
