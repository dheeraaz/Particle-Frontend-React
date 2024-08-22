import React from 'react'
import { Breadcrumbs, ContentLink, SubjectDescription, ReleventCard } from '../Components';
import { useLocation, useParams } from 'react-router-dom';
import { blogContent } from '../../Constants/contents/blogContents';
import { paperContent } from '../../Constants/contents/paperContent';
import { articleContent } from '../../Constants/contents/articleContent';
import { capitalizeWords } from '../HelperFunctions/capitalize';

const BlogsChaptersPage = () => {
  const { subjectTitle } = useParams();
  const location = useLocation();

  const pathNames = location.pathname.split("/").filter((x) => x);

  // for creating the breadcrumbs
  // let pathArray = ["/", "blogs", subjectTitle];
  let contentType = pathNames[pathNames.length - 2]
  let pathArray = ["/", contentType, subjectTitle];

  let content;
  if (contentType === "blogs") {
    content = blogContent;
  } else if (contentType === "papers") {
    content = paperContent;
  } else {
    content = articleContent
  }


  let singleSubject;
  const releventItems = [];

  // for getting the relevent subject
  content.forEach((subject) => {
    if (subject.subjectTitle.toLowerCase() === subjectTitle) {
      singleSubject = subject;
    }
  })

  // for relevent Blogs, selecting random blogs from the chapters other than current chapters
  content.forEach((subject) => {
    if (subject.subjectTitle.toLowerCase() !== subjectTitle) {
      const randomChapter = subject.chapters[(Math.floor(Math.random() * subject.chapters.length))];

      const singleBlog = {
        "subjectTitle": subject.subjectTitle.toLowerCase(),
        "chapterId": randomChapter.id,
        "chapterTitle": randomChapter.title,
        "createdAt": randomChapter.createdAt,
        "imgSrc": randomChapter.thumbnailImage,
      };

      releventItems.push(singleBlog);
    }
  })

  return (
    <div className='container'>
      <Breadcrumbs path={pathArray} />
      {/* Upper Section */}
      <SubjectDescription imgSrc={singleSubject?.subjectPageImage} subjectTitle={singleSubject?.subjectTitle} description={singleSubject?.subjectPageIntro} />

      {/* Bottom Section */}
      <section className='my-20 xl:my-[72px] flex justify-between'>
        <aside className='w-[733px] xl:w-[664px] pr-[60px] border-r-[1px] border-extraLightText'>
          <h3 className=' text-primary text-[32px] xl:text-[30px] font-medium'>{capitalizeWords(contentType)} / Contents</h3>
          <div className='mt-8 xl:mt-7'>
            {singleSubject?.chapters?.map((chap, index) => {
              return (
                <ContentLink key={index} contentRoute={`/${contentType}/${subjectTitle.toLowerCase()}/${chap.id}`} contentTitle={chap.title} />
              )
            })}
          </div>
        </aside>
        <aside className='w-[547px] xl:w-[496px] ml-10 xl:ml-9'>
          <h3 className='text-2xl xl:text-xl font-medium text-primary'>You May Also Like</h3>
          <div className='mt-[31px] xl:mt-[27px] flex flex-col gap-9'>
            {releventItems.slice(0, 3).map((item, index) => {
              return <ReleventCard key={index} title={item.chapterTitle} imageSrc={item.imgSrc} date={item.createdAt} cardRoute={`/${contentType}/${item.subjectTitle}/${item.chapterId}`} />
            })}
          </div>

        </aside>
      </section>
    </div>
  )
}

export default BlogsChaptersPage