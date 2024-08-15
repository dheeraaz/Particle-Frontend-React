import React, { useEffect, useState } from 'react'
import { BlogCard } from '../../../Common/Components'
import { blogContent } from '../../../Constants/contents/blogContents'

const RecentBlogs = () => {
    const [isXl, setIsXl] = useState(document.documentElement.clientWidth<=1280)
    useEffect(() => {
        function getWindowWidth() {
            // Get width of the window excluding scrollbars
            let w = document.documentElement.clientWidth;
            setIsXl(w<=1280);
        }

        // Attaching the event listener function to window's resize event
        window.addEventListener("resize", getWindowWidth);

        // removing eventlistener on component unmount
        return ()=>{
            window.removeEventListener("resize", getWindowWidth)
        }
    }, [])

    const blogsToShow = isXl?3:4;

    return (
        <section className='mt-14 mb-20 xl:mt-10 xl:mb-16 container'>
            <h3 className='subHeading mb-9 xl:mb-8'><span className='text-accent'>Recent</span> Blogs</h3>
            {/* recent blogs section */}
            <div className='w-full grid grid-cols-4 gap-10 xl:grid-cols-3 xl:gap-8'>
                {blogContent[0].chapters.slice(0, blogsToShow).map((blog) => {
                    return <BlogCard
                        key={blog.id}
                        title={blog.title}
                        imageSrc={blog.thumbnailImage}
                        date={blog.createdAt}
                        cardExcerpt={blog.excerpt}
                        cardRoute={`/blogs/${blogContent[0].subjectTitle.toLowerCase()}/${blog.id}`}
                    />
                })}
            </div>
        </section>
    )
}

export default RecentBlogs