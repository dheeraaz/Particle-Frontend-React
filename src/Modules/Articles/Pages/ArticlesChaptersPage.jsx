import React from 'react'
import { Breadcrumbs, ContentLink, SubjectDescription } from '../../../Common/Components';
import { useParams } from 'react-router-dom';
import { articleContent } from '../../../Constants/contents/articleContent';
import {ReleventCard} from '../../../Common/Components';

const ArticlesChaptersPage = () => {
  const { subjectTitle } = useParams();

  // for creating the breadcrumbs
  let pathArray = ["/", "blogs", subjectTitle];

  let singleSubject;
  const releventArticles = [];

  // for getting the relevent subject
  articleContent.forEach((subject) => {
    if (subject.subjectTitle.toLowerCase() === subjectTitle) {
      singleSubject = subject;
    }
  })

  // for relevent articles, selecting random blogs from the chapters other than current chapters
  articleContent.forEach((subject) => {
    if (subject.subjectTitle.toLowerCase() !== subjectTitle) {
      const randomChapter = subject.chapters[(Math.floor(Math.random() * subject.chapters.length))];

      const singleBlog = {
        "subjectTitle": subject.subjectTitle.toLowerCase(),
        "articleId": randomChapter.id,
        "articleTitle": randomChapter.title,
        "createdAt": randomChapter.createdAt,
        "imgSrc": randomChapter.thumbnailImage,
      };

      releventArticles.push(singleBlog);
    }
  })
  return (
    <div className='container'>
      <Breadcrumbs path={pathArray} />
      {/* Upper Section */}
      <SubjectDescription imgSrc ={singleSubject?.subjectPageImage} subjectTitle={singleSubject?.subjectTitle} description={singleSubject?.subjectPageIntro}/>

      {/* Bottom Section */}
      <section className='my-20 xl:my-[72px] flex justify-between'>
        <aside className='w-[733px] xl:w-[664px] pr-[60px] border-r-[1px] border-extraLightText'>
          <h3 className=' text-primary text-[32px] xl:text-[30px] font-medium'>Blogs / Contents</h3>
          <div className='mt-8 xl:mt-7'>
            {singleSubject?.chapters?.map((chap, index) => {
              return (
                <ContentLink key={index} contentRoute = {`/articles/${subjectTitle.toLowerCase()}/${chap.id}`} contentTitle = {chap.title} />
              )
            })}
          </div>
        </aside>
        <aside className='w-[547px] xl:w-[496px] ml-10 xl:ml-9'>
          <h3 className='text-2xl xl:text-xl font-medium text-primary'>You May Also Like</h3>
          <div className='mt-[31px] xl:mt-[27px] flex flex-col gap-9'>
            {releventArticles.slice(0, 3).map((article, index) => {
              return <ReleventCard key={index} title={article.articleTitle} imageSrc={article.imgSrc} date={article.createdAt} cardRoute={`/articles/${article.subjectTitle}/${article.articleId}`} />
            })}
          </div>

        </aside>
      </section>
    </div>
  )
}

export default ArticlesChaptersPage