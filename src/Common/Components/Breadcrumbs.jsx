import React from 'react'
import { Link } from 'react-router-dom'
import { capitalizeWords } from '../HelperFunctions/capitalize';
import { truncate } from '../HelperFunctions/truncate';


const Breadcrumbs = ({path}) => {
    let breadcrumbsPath = '';
  return (
    <div className='mt-6'>
        {path.map((p,index)=>{
            if(p==="/"){
               return <Link key={index} to={"/"} className='generalLink generalLinkHover'>Home</Link>
            }else{
                const isLast = index === path.length-1;
                breadcrumbsPath += "/"+ p.toLowerCase();
                return isLast ? (
                    <span key={index} className='generalLink'><span>{" > "}</span><span className='text-accent'>{truncate(capitalizeWords(p),40)}</span></span>
                ) : (
                    <Link to={breadcrumbsPath} key={index} className='generalLink'><span>{" > "}</span><span className='generalLinkHover'>{truncate(capitalizeWords(p),40)}</span></Link>
                )
            }

        })}
    </div>
  )
}

export default Breadcrumbs