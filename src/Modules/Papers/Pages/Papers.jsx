import React from 'react'
import { Breadcrumbs } from '../../../Common/Components';

const Papers = () => {
  let pathArray=["/","papers"];
  return (
    <div className='container'>
      <Breadcrumbs path={pathArray} />
      <h2>Papers</h2>
    </div>
  )
}

export default Papers