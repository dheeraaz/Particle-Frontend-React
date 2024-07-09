import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { blogContent } from '../../../Constants/contents/blogContents';
import { capitalizeWords } from '../../../Common/HelperFunctions/capitalize'
import { Breadcrumbs } from '../../../Common/Components';

const BlogPage = () => {
    const { blogId } = useParams();
    let singleBlog;

    //For getting the relevent blog content from blogId
    blogContent.forEach((blog) => {
        if (blog.id === blogId) {
            singleBlog = blog;
        }
    })

    // for creating the breadcrumbs
    let finalBreadCrumbs = capitalizeWords(singleBlog.title);
    let pathArray = ["/", "blogs", finalBreadCrumbs];

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
    
    // adds active state when the element is visible, as soon as it appears on the screen
    // const determineActiveSection = () => {
    //     let lastVisibleSectionId = "";

    //     singleBlog.body.section.forEach((singleSec) => {
    //         const section = document.getElementById(singleSec.sectionId);
    //         if (section) {
    //             const rect = section.getBoundingClientRect();
    //             if (rect.bottom >= 100 && rect.top <= window.innerHeight) {
    //                 lastVisibleSectionId = singleSec.sectionId;
    //             }
    //         }
    //     });
    
    //     setActiveLink(lastVisibleSectionId);
    // }
    
    // adds active state when the element is within 10% from top of viewport to 50% from top of viewport
    const determineActiveSection = () => {
        let lastVisibleSectionId = "";

        singleBlog.body.section.forEach((singleSec) => {
            const section = document.getElementById(singleSec.sectionId);
            if (section) {
                const rect = section.getBoundingClientRect();
                if (rect.top >= 0.1*window.innerHeight && rect.top <= 0.5*window.innerHeight) {
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
            <div className=' my-6 flex justify-between'>
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
                                <div key={sec.sectionId} className='mt-4'>
                                    <h3 id={sec.sectionId}  className='sectionHeading mb-2 mt-8'>{sec.sectionTitle}</h3>

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
                <section className='w-[373px] pl-[39px] h-fit sticky top-24'>
                    <h5 className='text-primary text-[32px] font-medium mb-[20px]'>{capitalizeWords('table of content')}</h5>
                    {singleBlog.body.section.map((singleSec) => (
                        <h4 onClick={() => scrollToSection(singleSec.sectionId)} key={singleSec.sectionId} className={`mb-[15px] font-links text-xl font-medium cursor-pointer ${activeLink === singleSec.sectionId ? "text-accent" : "text-extraLightText"}`}>{capitalizeWords(singleSec.sectionTitle)}</h4>
                    ))}
                </section>
            </div>
        </div>
    )
}

export default BlogPage

