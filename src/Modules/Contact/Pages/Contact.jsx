import React from 'react'
import { Breadcrumbs } from '../../../Common/Components';

const Contact = () => {
  let pathArray=["/","contact"];
  return (
    <div className='container'>
      <Breadcrumbs path={pathArray} />
      <h2>Contact</h2>
    </div>
  )
}

export default Contact