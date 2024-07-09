import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { capitalizeWords } from '../HelperFunctions/capitalize';

// This breadcrumbs uses useLocation hook provided by router to create a breadcrumbs
// since uselocation provides path from url, and url contains numeric value[id of blogs instead of blog title] so this solution is not quite fruitful
const Breadcrumbs = () => {
    const location = useLocation();
    const pathNames = location.pathname.split("/").filter((x) => x);

    let breadcrumbsPath = '';
    
    if (pathNames.length === 0) return null;
    return (
        <div className='container mt-6'>
            <Link to={'/'} className='generalLink generalLinkHover'>Home</Link>
            {
                pathNames.map((name, index) => {
                    breadcrumbsPath += `/${name}`;

                    const isLast = index === pathNames.length - 1;

                    return isLast ? (
                        <span key={index} className='generalLink'><span>{" > "}</span><span className='text-accent'>{capitalizeWords(name)}</span></span>
                    ) : (
                        <Link to={breadcrumbsPath} key={index} className='generalLink'><span>{" > "}</span><span className='generalLinkHover'>{capitalizeWords(name)}</span></Link>
                    )
                })
            }
        </div>
    )
}

export default Breadcrumbs