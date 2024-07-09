import React from 'react'
import { Breadcrumbs } from '../../../Common/Components';

const AOI = () => {
  let pathArray=["/","AOI"];
  return (
    <div className='container'>
      <Breadcrumbs path={pathArray} />
      <h2>AOI</h2>
    </div>
  )
}

export default AOI