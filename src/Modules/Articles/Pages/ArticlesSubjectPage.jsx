import React from 'react'
import { Breadcrumbs } from '../../../Common/Components';

const ArticlesSubjectPage = () => {
  let pathArray=["/","articles"];
  return (
    <div className='container'>
      <Breadcrumbs path={pathArray} />
      <h2>Articles</h2>
    </div>
  )
}

export default ArticlesSubjectPage