import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { articleContent } from '../../../Constants/contents/articleContent';
import { capitalizeWords } from '../../../Common/HelperFunctions/capitalize'
import { Breadcrumbs } from '../../../Common/Components';

const ArticlesContentPage = () => {
    const { subjectTitle, articleId } = useParams();
    let singleArticle;

    //For getting article content
    articleContent.forEach((subject) => {
        if (subject.subjectTitle.toLowerCase() === subjectTitle) {
            subject.chapters.forEach((article) => {
                if (article.id === articleId) {
                    singleArticle = article;
                }
            })
        }
    })

    // for creating the breadcrumbs
    let finalBreadCrumbs = capitalizeWords(singleArticle.title);
    let pathArray = ["/", "articles", subjectTitle, finalBreadCrumbs];


    return (
        <div className='container'>
            <Breadcrumbs path={pathArray} />
            <section className='my-6'>
                {/* author name */}
                <h3 className=' text-end font-links font-medium text-base'>{singleArticle?.body?.author}</h3>

                <hr className='w-full h-[1px] mt-1 mb-6 border-extraLightText' />

                {/* title and description */}
                <h1 className='font-links text-5xl md:text-4xl sm:text-3xl font-semibold leading-normal'>{capitalizeWords(singleArticle.title)}</h1>
                <p className='text-[40px] md:text-3xl sm:text-2xl font-normal'>{capitalizeWords(singleArticle?.body?.titleDesc)}</p>

                {/* article date */}
                <div className='flexVerCenter gap-2 justify-end mt-6 md:mt-4 sm:mt-2'>
                    <img src="/icons/date-icon.svg" alt="date_icon" />
                    <p className='text-sm xl:text-xs font-normal text-extraLightText'>{singleArticle?.createdAt}</p>
                </div>

                <hr className='w-full h-[1px] mt-1 mb-6 border-extraLightText' />

                {/* main content */}
                <div className='_article_column text-base text-justify'>
                    {singleArticle?.body?.section?.map((section, index) => (
                        <div key={index}>
                            <h1 className=' font-semibold text-2xl'>{section.sectionTitle}</h1>
                            {section?.sectionContent && section.sectionContent.map((para, index) => (
                                <p key={index} className='mb-4 paragraphBody'>{para}</p>
                            ))}

                            {section?.sectionImage && <div>
                                <img src={section?.sectionImage} alt={`${section?.sectionImage}_img`} className='my-4 w-full h-full object-cover' />
                            </div>}

                            {section?.subSection && section?.subSection.map((subSec, index) => (
                                <div key={index}>
                                    <h1 className=' font-semibold text-base'>{subSec.subSectionTitle}</h1>
                                    {subSec?.subSectionContent && subSec.subSectionContent.map((para, index) => (
                                        <p key={index} className='mb-4 paragraphBody'>{para}</p>
                                    ))}

                                    {subSec?.subSectionImage && <div>
                                        <img src={subSec?.subSectionImage} alt={`${subSec?.subSectionImage}_img`} className='my-4 w-full object-cover' />
                                    </div>}
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default ArticlesContentPage

