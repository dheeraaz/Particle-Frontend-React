import React from 'react'
import { BlogCard } from '../../../Common/Components'
import { blogContent } from '../../../Constants/contents/blogContents'

const RecentBlogs = () => {
    return (
        <div className='mt-14 mb-20 container'>
            <h3 className='subHeading mb-9'><span className='text-accent'>Recent</span> Blogs</h3>
            {/* recent blogs section */}
            <div className='flex justify-between gap-10'>
                {blogContent[0].chapters.slice(0,3).map((blog) => {
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
    )
}

export default RecentBlogs