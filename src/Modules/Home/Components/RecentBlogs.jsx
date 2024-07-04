import React from 'react'
import { BlogCard } from '../../../Common/Components'

const blogCardContent = {
    title: 'how you React',
    imageSrc:'/images/React-image.jpg',
    date: 'July 03, 2024',
    cardExcerpt: 'React is a popular JavaScript library for creating user interfaces which was developed by Facebook. Its component-based architecture enables reusable UI components, enhancing maintainability and scalability. JSX, a syntax extension, allows you to write HTML-like code inside JavaScript, making it more readable. ',
    cardRoute: '/blogs',

}


const RecentBlogs = () => {

    return (
        <div className='mt-14 mb-20 container'>
            <h3 className='subHeading'><span className='text-accent'>Recent</span> Blogs</h3>

            {/* recent blogs section */}
            <div className='wrapper flex justify-between gap-10'>
                <BlogCard
                    title={blogCardContent.title}
                    imageSrc={blogCardContent.imageSrc}
                    date={blogCardContent.date}
                    cardExcerpt={blogCardContent.cardExcerpt}
                    cardRoute={blogCardContent.cardRoute}
                />
                <BlogCard
                    title={blogCardContent.title}
                    imageSrc={blogCardContent.imageSrc}
                    date={blogCardContent.date}
                    cardExcerpt={blogCardContent.cardExcerpt}
                    cardRoute={blogCardContent.cardRoute}
                />
                <BlogCard
                    title={blogCardContent.title}
                    imageSrc={blogCardContent.imageSrc}
                    date={blogCardContent.date}
                    cardExcerpt={blogCardContent.cardExcerpt}
                    cardRoute={blogCardContent.cardRoute}
                />
            </div>
        </div>
    )
}

export default RecentBlogs