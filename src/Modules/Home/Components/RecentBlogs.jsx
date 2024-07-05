import React from 'react'
import { BlogCard } from '../../../Common/Components'
import { blogContent } from '../../../Constants/contents/blogContents'

const blogCardContent = {
    title: 'how you React',
    imageSrc: '/images/React-image.jpg',
    date: 'July 03, 2024',
    cardExcerpt: 'React is a popular JavaScript library for creating user interfaces which was developed by Facebook. Its component-based architecture enables reusable UI components, enhancing maintainability and scalability. JSX, a syntax extension, allows you to write HTML-like code inside JavaScript, making it more readable. ',
    cardRoute: '/blogs',

}


const RecentBlogs = () => {

    return (
        <div className='mt-14 mb-20 container'>
            <h3 className='subHeading mb-9'><span className='text-accent'>Recent</span> Blogs</h3>
            {/* recent blogs section */}
            <div className='flex justify-between gap-10'>
                {blogContent.slice(0,3).map((blog) => {
                    return <BlogCard
                        title={blog.title}
                        imageSrc={blog.thumbnailImage}
                        date={blog.createdAt}
                        cardExcerpt={blog.excerpt}
                        cardRoute={`/blogs/${blog.id}`}
                    />
                })}
            </div>
        </div>
    )
}

export default RecentBlogs