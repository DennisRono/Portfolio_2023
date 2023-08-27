import Giscus from '@giscus/react'
import React, { Fragment } from 'react'
import { useAppSelector } from '../state/hooks'

const Comments = () => {
  //theme
  const theme = useAppSelector((state: any) => state.theme)
  return (
    <Fragment>
      <Giscus
        id="comments"
        repo="DennisRono/Portfolio_2023"
        repoId="R_kgDOKKZmcg"
        category="Comments"
        categoryId="DIC_kwDOKKZmcs4CY5EG"
        mapping="pathname"
        term="Welcome to @giscus/react component!"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme={theme}
        lang="en"
        loading="eager"
      />
    </Fragment>
  )
}

export default Comments
