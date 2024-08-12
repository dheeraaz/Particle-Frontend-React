import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { blogContent } from '../../../Constants/contents/blogContents';
import { capitalizeWords } from '../../../Common/HelperFunctions/capitalize'
import { Breadcrumbs } from '../../../Common/Components';

const BlogsContentPage = () => {
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

    // adds active state when the element is within 10% from top of viewport to 50% from top of viewport
    const determineActiveSection = () => {
        let lastVisibleSectionId = "";

        singleBlog.body.section.forEach((singleSec) => {
            const section = document.getElementById(singleSec.sectionId);
            if (section) {
                const rect = section.getBoundingClientRect();
                if (rect.top >= 0.1 * window.innerHeight && rect.top <= 0.5 * window.innerHeight) {
                    lastVisibleSectionId = singleSec.sectionId;
                }
            }
        });

        setActiveLink(lastVisibleSectionId);
    }

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 90) {
                ///call the function to determine the active section while scrolling
                determineActiveSection()
            }
        };

        //adding handleScroll to event listener when this component/page mounts
        window.addEventListener("scroll", handleScroll);

        //remove the scroll event listener when this component/page unmounts
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, []);


    return (
        <div className='container'>
            <Breadcrumbs path={pathArray} />
            <div className='my-6 flex justify-between'>
                {/* leftSide */}
                <section className='w-[907px] pr-[105px] xl:w-[822px] xl:pr-[93px] border-r-[1px] border-extraLightText '>
                    <img src={singleBlog.heroImage} alt="hero_img" className='w-full max-h-[420px] xl:max-h-[394px] rounded-lg' />

                    {/* main heading */}
                    <h2 className='mt-12 xl:mt-10 text-primary text-[40px] xl:text-4xl font-medium'>{capitalizeWords(singleBlog.title)}</h2>

                    {/* read time section */}
                    <div className='flex gap-8 mb-10 xl:mb-8 xl:mt-2'>
                        <div className='flexVerCenter gap-2'>
                            <img src="/icons/date-icon.svg" alt="date_icon" />
                            <p className='text-sm xl:text-xs font-normal text-extraLightText'>{singleBlog.createdAt}</p>
                        </div>
                        <div className='flexVerCenter gap-2'>
                            <img src="/icons/time-icon.svg" alt="date_icon" />
                            <p className='text-sm xl:text-xs font-normal text-extraLightText'>{`${singleBlog.readTime} mins read`}</p>
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
                                <div key={sec.sectionId} className='mt-4 xl:mt-3'>
                                    <h3 id={sec.sectionId} className='sectionHeading mb-2 mt-8 xl:mt-6'>{sec.sectionTitle}</h3>

                                    {sec?.sectionContent && sec?.sectionContent.length > 0 && sec.sectionContent.map((para, index) => {
                                        return <p key={index} className='paragraphBody mb-4 xl:mb-3'>{para}</p>
                                    })}

                                    {sec?.subSection && sec?.subSection.length > 0 && sec.subSection.map((subSec, index) => {
                                        return <div key={index}>
                                            <h4 className='subSectionHeading mb-1'>{subSec.subSectionTitle}</h4>
                                            {subSec.subSectionContent.map((para, index) => {
                                                return <p key={index} className='paragraphBody mb-4 xl:mb-3'>{para}</p>
                                            })}
                                        </div>
                                    })}

                                </div>
                            );
                        })
                    }

                </section>
                {/* rightSide */}
                <aside className='w-[373px]  pl-[41px] xl:w-[338px] xl:pl-[38px] h-fit sticky top-32 xl:top-28'>
                    {/* <h5 className='text-primary text-[32px] xl:text-[30px] font-medium mb-4'>{capitalizeWords('table of content')}</h5> */}
                    <h5 className='sectionHeading mb-4'>{capitalizeWords('table of content')}</h5>
                    {singleBlog.body.section.map((singleSec) => (
                        // <h4 onClick={() => scrollToSection(singleSec.sectionId)} key={singleSec.sectionId} className={`mb-3 xl:mb-2 text-xl xl:text-lg font-medium cursor-pointer ${activeLink === singleSec.sectionId ? "text-accent" : "text-lightText"}`}>{capitalizeWords(singleSec.sectionTitle)}</h4>
                        <h4 onClick={() => scrollToSection(singleSec.sectionId)} key={singleSec.sectionId} className={`mb-3 xl:mb-2 paragraphBody cursor-pointer ${activeLink === singleSec.sectionId ? "text-accent" : ""} hover:text-accent`}>{capitalizeWords(singleSec.sectionTitle)}</h4>
                    ))}
                </aside>
            </div>
        </div>
    )
}

export default BlogsContentPage

