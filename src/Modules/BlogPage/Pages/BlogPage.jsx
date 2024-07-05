import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { blogContent } from '../../../Constants/contents/blogContents';
import { capitalizeWords } from '../../../Common/HelperFunctions/capitalize'

const BlogPage = () => {
    const { blogId } = useParams();
    let singleBlog;

    //For getting the relevent blog content from blogId
    blogContent.forEach((blog) => {
        if (blog.id === blogId) {
            singleBlog = blog;
        }
    })

    useEffect(() => {
        // For ensuring scrollbar remains at top position whenever this page loads
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className='container'>
            <div className=' my-6 flex justify-between'>
                {/* left */}
                <div className='flex-1 pr-[107px] border-r-[1px] border-extraLightText '>
                    <img src={singleBlog.heroImage} alt="hero_img" className='w-full rounded-lg' />

                    {/* main heading */}
                    <h2 className='mt-12 text-primary text-[40px] font-medium'>{capitalizeWords(singleBlog.title)}</h2>

                    {/* read time section */}
                    <div className='flex gap-8 mb-10'>
                        <div className='flexVerCenter gap-2'>
                            <img src="/icons/date-icon.svg" alt="date_icon" />
                            <p className='font-links text-sm font-normal text-extraLightText'>{singleBlog.createdAt}</p>
                        </div>
                        <div className='flexVerCenter gap-2'>
                            <img src="/icons/time-icon.svg" alt="date_icon" />
                            <p className='font-links text-sm font-normal text-extraLightText'>{`${singleBlog.readTime} mins read`}</p>
                        </div>
                    </div>

                    {/* Abstract */}
                    {singleBlog.body.abstract.map((para, index) => {
                        return <p key={index} className='paragraphBody mb-4'>{para}</p>
                    })}

                    {/* section and subsection */}
                    {
                        singleBlog.body.section.map((sec) => {
                            return (
                                <div key={sec.sectionId} className='mt-4'>
                                    <h3 id={sec.sectionId} className='sectionHeading mb-2 mt-8'>{sec.sectionTitle}</h3>

                                    {sec?.sectionContent && sec?.sectionContent.length > 0 && sec.sectionContent.map((para, index) => {
                                        return <p key={index} className='paragraphBody mb-4'>{para}</p>
                                    })}

                                    {sec?.subSection && sec?.subSection.length > 0 && sec.subSection.map((subSec, index) => {
                                        return <div key={index}>
                                            <h4 className='subSectionHeading mb-1'>{subSec.subSectionTitle}</h4>
                                            {subSec.subSectionContent.map((para, index) => {
                                                return <p key={index} className='paragraphBody mb-4'>{para}</p>
                                            })}
                                        </div>
                                    })}

                                </div>
                            );
                        })
                    }

                </div>
                {/* right */}
                <div className='pl-[39px] h-fit sticky top-20'>
                    <h5 className='text-primary text-[32px] font-medium'>{capitalizeWords('table of content')}</h5>
                    {singleBlog.body.section.map((singleSec) => (
                        <h4 key={singleSec.sectionId} className='mt-[26px] font-links text-xl font-medium text-extraLightText'><a href={`#${singleSec.sectionId}`}>{capitalizeWords(singleSec.sectionTitle)}</a></h4>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default BlogPage

