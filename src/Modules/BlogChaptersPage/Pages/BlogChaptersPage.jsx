import React from 'react'
import { Breadcrumbs } from '../../../Common/Components';
import { useNavigate, useParams } from 'react-router-dom';
import { blogContent } from '../../../Constants/contents/blogContents';
import { capitalizeWords } from '../../../Common/HelperFunctions/capitalize';
import ReleventBlogCard from '../Components/ReleventBlogCard';

const BlogChaptersPage = () => {
  const navigate = useNavigate();
  const { subjectTitle } = useParams();

  // for creating the breadcrumbs
  let pathArray = ["/", "blogs", subjectTitle];

  let singleSubject;
  const releventBlogs = [];

  // for getting the relevent subject
  blogContent.forEach((subject) => {
    if (subject.subjectTitle.toLowerCase() === subjectTitle) {
      singleSubject = subject;
    }
  })

  // for relevent Blogs, selecting random blogs from the chapters other than current chapters
  blogContent.forEach((subject) => {
    if (subject.subjectTitle.toLowerCase() !== subjectTitle) {
      const randomChapter = subject.chapters[(Math.floor(Math.random() * subject.chapters.length))];

      const singleBlog = {
        "subjectTitle": subject.subjectTitle.toLowerCase(),
        "blogId": randomChapter.id,
        "blogTitle": randomChapter.title,
        "createdAt": randomChapter.createdAt,
        "imgSrc": randomChapter.thumbnailImage,
      };

      releventBlogs.push(singleBlog);
    }
  })
  return (
    <div className='container'>
      <Breadcrumbs path={pathArray} />
      {/* Upper Section */}
      <section className='my-6 flex gap-16 xl:my-5 xl:gap-14 justify-between items-center'>
        <div className='w-[547px] h-[278px] xl:w-[496px] xl:h-[252px] rounded-lg'>
          <img src={singleSubject?.subjectPageImage} alt={`${singleSubject?.subjectTitle}_img`} className='w-full h-full rounded-lg' />
        </div>
        <div className='flex flex-1 flex-col gap-8 text-justify text-base font-light xl:text-sm xl:gap-7'>
          {singleSubject?.subjectPageIntro?.map((para, index) => {
            return <p key={index}>{para}</p>
          })}
        </div>
      </section>

      {/* Bottom Section */}
      <section className='my-20 xl:my-[72px] flex justify-between'>
        <aside className='w-[733px] xl:w-[664px] pr-[60px] border-r-[1px] border-extraLightText'>
          <h3 className=' text-primary text-[32px] xl:text-[30px] font-medium'>Blogs / Contents</h3>
          <div className='mt-8 xl:mt-7'>
            {singleSubject?.chapters?.map((chap, index) => {
              return (
                <div onClick={() => navigate(`/blogs/${singleSubject.subjectTitle.toLowerCase()}/${chap.id}`)} key={index} className='h-11 font-links text-xl xl:h-10 xl:text-lg font-normal flex items-center justify-between border-b-[1px] border-divDividerBg hover:border-black cursor-pointer group'>
                  <h4 className='flex-1'>{capitalizeWords(chap.title)}</h4>
                  <img src="/icons/right_arrow.svg" alt="right_arrow_img" className='group-hover:translate-x-2 transition-all duration-200 max-w-[27px] max-h-[24px] xl:max-w-[24px] xl:max-h-[22]' />
                </div>
              )
            })}
          </div>
        </aside>
        <aside className='w-[547px] xl:w-[496px] ml-10 xl:ml-9'>
          <h3 className=' text-primary text-[32px] xl:text-[30px] font-medium'>You may also like</h3>
          <div className='mt-[31px] xl:mt-[27px] flex flex-col gap-9'>
            {releventBlogs.slice(0, 3).map((blog, index) => {
              return <ReleventBlogCard key={index} title={blog.blogTitle} imageSrc={blog.imgSrc} date={blog.createdAt} cardRoute={`/blogs/${blog.subjectTitle}/${blog.blogId}`} />
            })}
          </div>

        </aside>
      </section>
    </div>
  )
}

export default BlogChaptersPage