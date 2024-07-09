import React from 'react'
import { Breadcrumbs } from '../../../Common/Components'

const Blogs = () => {
  let pathArray=["/","blogs"];
  return (
    <div className='container'>
      <Breadcrumbs path={pathArray} />
      <h2>Blogs</h2>
    </div>
  )
}

export default Blogs