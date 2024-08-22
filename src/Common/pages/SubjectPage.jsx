import React from 'react'
import { BlogCard, Breadcrumbs } from '../Components'
import { useLocation } from 'react-router-dom';

import { blogContent } from '../../Constants/contents/blogContents';
import { paperContent } from '../../Constants/contents/paperContent';
import { articleContent } from '../../Constants/contents/articleContent';


const SubjectPage = () => {

    const location = useLocation();
    const pathNames = location.pathname.split("/").filter((x) => x);
    const contentType = pathNames[pathNames.length - 1];

    let pathArray = ["/", contentType];

    let content;
    if (contentType === "blogs") {
        content = blogContent;
    } else if (contentType === "papers") {
        content = paperContent;
    } else {
        content = articleContent
    }

    return (
        <div className='container'>
            <Breadcrumbs path={pathArray} />
            {/* <section className='my-6 xl:my-5 flex justify-between flex-wrap '> */}
            <section className='my-6 xl:my-5 w-full grid grid-cols-4 gap-10 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 xl:gap-9 lg:gap-8 md:gap-7'>
                {content.map((subject, index) => {
                    return <div className='sm:w-fit sm:mx-auto' key={index}>
                        <BlogCard
                            title={subject.subjectTitle}
                            titleRight
                            imageSrc={subject.subjectCardImage}
                            cardExcerpt={subject.subjectExcerpt}
                            cardRoute={`/${contentType}/${subject.subjectTitle.toLowerCase()}`}
                        />
                    </div>
                })}

                {contentType==="blogs" && content.map((subject, index) => {
                    return <div className='sm:w-fit sm:mx-auto' key={index}>
                        <BlogCard
                            title={subject.subjectTitle}
                            titleRight
                            imageSrc={subject.subjectCardImage}
                            cardExcerpt={subject.subjectExcerpt}
                            cardRoute={`/${contentType}/${subject.subjectTitle.toLowerCase()}`}
                        />
                    </div>
                })}

            </section>
        </div>
    )
}

export default SubjectPage

