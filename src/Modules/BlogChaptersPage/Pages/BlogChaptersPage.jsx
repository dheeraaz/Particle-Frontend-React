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
                <div onClick={() => navigate(`/blogs/${singleSubject.subjectTitle.toLowerCase()}/${chap.id}`)} key={index} className='h-11 font-links text-lightText hover:text-black text-xl xl:h-10 xl:text-lg font-normal flex items-center justify-between border-b-[1px] border-divDividerBg hover:border-black cursor-pointer group'>
                  <h4 className='flex-1'>{capitalizeWords(chap.title)}</h4>
                  {/* <img src="/icons/right_arrow.svg" alt="right_arrow_img" className='group-hover:translate-x-2 transition-all duration-200 max-w-[27px] max-h-[24px] xl:max-w-[24px] xl:max-h-[22]' /> */}
                  <svg
                    className='text-lightText group-hover:text-black group-hover:translate-x-2 transition-all duration-200 max-w-[24px] max-h-[25px] xl:max-w-[22px] xl:max-h-[20]'
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12.2929 5.23185C12.6834 4.84133 13.3166 4.84133 13.7071 5.23185L20.7071 12.2319C21.0976 12.6224 21.0976 13.2556 20.7071 13.6461L13.7071 20.6461C13.3166 21.0366 12.6834 21.0366 12.2929 20.6461C11.9024 20.2556 11.9024 19.6224 12.2929 19.2319L17.5858 13.939H4C3.44772 13.939 3 13.4913 3 12.939C3 12.3867 3.44772 11.939 4 11.939H17.5858L12.2929 6.64607C11.9024 6.25554 11.9024 5.62238 12.2929 5.23185Z"
                      className="fill-current" />
                  </svg>
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