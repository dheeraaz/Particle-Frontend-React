import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { articleContent } from '../../../Constants/contents/articleContent';
import { capitalizeWords } from '../../../Common/HelperFunctions/capitalize'
import { Breadcrumbs } from '../../../Common/Components';

const ArticlesContentPage = () => {
    const { subjectTitle, articleId} = useParams();
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
            <div className='my-6 flex justify-between'>
               <p>{subjectTitle}</p>
            </div>
        </div>
    )
}

export default ArticlesContentPage

