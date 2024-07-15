// using intersection observer api

import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { blogContent } from '../../../Constants/contents/blogContents';
import { capitalizeWords } from '../../../Common/HelperFunctions/capitalize'
import { Breadcrumbs } from '../../../Common/Components';

const BlogPage = () => {
    const { subjectTitle, blogId } = useParams();
    let singleBlog;

    //For getting the relevent blog content
    blogContent.forEach((subject) => {
        if (subject.subjectTitle.toLowerCase() === subjectTitle) {
            subject.chapters.forEach((blog) => {
                if (blog.id === blogId) {
                    singleBlog = blog;
                }
            })
        }
    })

    // for creating the breadcrumbs
    let finalBreadCrumbs = capitalizeWords(singleBlog.title);
    let pathArray = ["/", "blogs", subjectTitle, finalBreadCrumbs];

    // state to track the active link and scroll state
    const [activeLink, setActiveLink] = useState(null);

    // function to smoothly scroll to a section by its IDs
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);

        if (element) {
            const distanceFromTop = 95;
            const scrollToY = element.getBoundingClientRect().top + window.scrollY - distanceFromTop;
            window.scrollTo({ top: scrollToY, behavior: "smooth" });
        }
    }

    useEffect(() => {
        let observer = new IntersectionObserver((entries) => {
            for (let i = 0; i < entries.length; i++) {
                if (entries[i].isIntersecting) {
                    setActiveLink(entries[i].target.id);
                    break;
                }
            }
        }, { threshold: 1.0, })

        let sections = document.querySelectorAll("._sections");
        sections.forEach((item) => {
            observer.observe(item)
        })

        // Cleanup the observer on component unmount
        return () => {
            sections.forEach((item) => {
                observer.unobserve(item);
            })
        }
    }, []);


    return (
        <div className='container'>
            <Breadcrumbs path={pathArray} />
            <div className='my-6 flex justify-between'>
                {/* leftSide */}
                <section className='w-[907px] pr-[107px] border-r-[1px] border-extraLightText '>
                    <img src={singleBlog.heroImage} alt="hero_img" className='w-full  rounded-lg' />

                    {/* main heading */}
                    <h2 className='mt-12 text-primary text-[40px] font-medium'>{capitalizeWords(singleBlog.title)}</h2>

                    {/* read time section */}
                    <div className='flex gap-8 mb-10'>
                        <div className='flexVerCenter gap-2'>
                            <img src="/icons/date-icon.svg" alt="date_icon" />
                            <p className='text-sm font-normal text-extraLightText'>{singleBlog.createdAt}</p>
                        </div>
                        <div className='flexVerCenter gap-2'>
                            <img src="/icons/time-icon.svg" alt="date_icon" />
                            <p className='text-sm font-normal text-extraLightText'>{`${singleBlog.readTime} mins read`}</p>
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
                                <div key={sec.sectionId} id={sec.sectionId} className='mt-4 _sections'>
                                    <h3 className='sectionHeading mb-2 mt-8'>{sec.sectionTitle}</h3>

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

                </section>
                {/* rightSide */}
                <aside className='w-[373px] pl-[39px] h-fit sticky top-24'>
                    <h5 className='text-primary text-[32px] font-medium mb-[20px]'>{capitalizeWords('table of content')}</h5>
                    {singleBlog.body.section.map((singleSec) => (
                        <h4 onClick={() => scrollToSection(singleSec.sectionId)} key={singleSec.sectionId} className={`mb-[15px] font-links text-xl font-medium cursor-pointer ${activeLink === singleSec.sectionId ? "text-accent" : "text-extraLightText"}`}>{capitalizeWords(singleSec.sectionTitle)}</h4>
                    ))}
                </aside>
            </div>
        </div>
    )
}

export default BlogPage

