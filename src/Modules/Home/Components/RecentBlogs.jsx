import React, { useEffect, useState } from 'react'
import { BlogCard } from '../../../Common/Components'
import { blogContent } from '../../../Constants/contents/blogContents'

const RecentBlogs = () => {
    // const [isXl, setIsXl] = useState(document.documentElement.clientWidth<=1280)
    const [blogsToShow, setBlogsToShow] = useState(0);
    useEffect(() => {
        function determineBlogsToShow() {
            // Get width of the window excluding scrollbars
            let w = document.documentElement.clientWidth;
            if (w <= 640) {
                setBlogsToShow(3);
            } else if (w > 640 && w <= 768) {
                setBlogsToShow(4);
            } else if (w > 768 && w <= 1280) {
                setBlogsToShow(3)
            } else {
                setBlogsToShow(4)
            }
        }

        // sets the blogs count for the first time component is loaded
        determineBlogsToShow();

        // Attaching the event listener function to window's resize event
        // blog count is changed when the user resizes the window width
        window.addEventListener("resize", determineBlogsToShow);

        // removing eventlistener on component unmount
        return () => {
            window.removeEventListener("resize", determineBlogsToShow)
        }
    }, [])

    return (
        <section className='mt-14 mb-20 xl:mt-10 xl:mb-16 container'>
            <h3 className='subHeading mb-9 xl:mb-8'><span className='text-accent'>Recent</span> Blogs</h3>
            {/* recent blogs section */}
            <div className='mx-auto w-fit'>
                <div className='w-full grid grid-cols-4 gap-10 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 xl:gap-8'>
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
            </div>
        </section>
    )
}

export default RecentBlogs