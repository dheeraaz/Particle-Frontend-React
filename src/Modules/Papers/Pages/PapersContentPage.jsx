import React from 'react'
import { Breadcrumbs } from '../../../Common/Components';
import { paperContent } from '../../../Constants/contents/paperContent'
import { useParams } from 'react-router-dom';
import { truncate } from '../../../Common/HelperFunctions/truncate';

const PapersContentPage = () => {
  const { subjectTitle, paperId } = useParams();
  let singlePaper;

  //For getting the relevent blog content
  paperContent.forEach((subject) => {
    if (subject.subjectTitle.toLowerCase() === subjectTitle) {
      subject.chapters.forEach((paper) => {
        if (paper.id === paperId) {
          singlePaper = paper;
        }
      })
    }
  })

  // for creating the breadcrumbs
  let finalBreadCrumbs = singlePaper.title;
  let pathArray = ["/", "papers", subjectTitle, finalBreadCrumbs];


  return (
    <div className='container'>
      <Breadcrumbs path={pathArray} />

      {/* <section className='w-[1270px] mx-auto bg-white pageShadow mt-6 px-[10px] py-5 '> */}

      <section className='_a4-paper flex flex-col '>
        <div>
          {/* title Section */}
          <div className='text-center text-xl font-medium'>{singlePaper.title}</div>

          {/* Writer's Details */}
          <div className='text-center mt-4'>
            <h2 className='text-base font-medium'>
              {
                singlePaper?.body?.writers.map((writer, index) => (
                  <span key={index}>{writer} </span>
                ))
              }
            </h2>
            <p className=' font-light'>{singlePaper?.body?.address}</p>
          </div>

          <hr className='w-full h-[1px] mt-4 border-extraLightText' />

          {/* Abstract Section */}
          <div className='mt-4 text-justify text-sm '>
            <h3 className='font-medium'>Abstract</h3>
            {singlePaper?.body?.abstract.map((abs, index) => (
              <p key={index} className='mt-2 font-light'>{abs}</p>
            ))}
          </div>

          {/* Keywords Section */}
          <div className='mt-4 text-sm'>
            <p className='font-medium'>Keywords:&nbsp;
              {singlePaper?.body?.keywords.map((kw, index) => (
                <span key={index} className='font-light'>
                  {kw}{index !== singlePaper?.body?.keywords.length - 1 ? ', ' : '. '}
                </span>
              ))}
            </p>
          </div>

          <hr className='w-full h-[1px] mt-4 border-extraLightText' />
        </div>

        {/* main content */}
        {/* <div className='bg-red-100 h-[1190px] mt-4 _article_column text-sm font-light text-justify'> */}
        <div className='mt-4 _article_column text-sm font-light text-justify '>
          {singlePaper?.body?.contents.map((con, m_index) => (
            <div key={m_index} className='mb-4'>
              <div>
                <h5 className='font-medium'>{m_index + 1}. {con.secTitle}</h5>
                {con?.secContent.map((para, index) => (
                  <p key={index} className='mt-2'>{para}</p>
                ))}
              </div>
              {con.secImage && <div>
                <img src={con.secImage} alt={`${con.secTitle}_img`} className='mt-4 w-full h-full object-cover' />
                <p className='text-center'>Fig: {con.secImageCaption}</p>
              </div>}

              {
                con.subSection?.map((subsec, s_index) => (
                  <div key={s_index}>
                    <div>
                      <h6 className='font-medium mt-2'>{m_index + 1}.{s_index + 1}. {subsec.subSectionTitle}</h6>
                      {subsec?.subSectionContent?.map((para, index) => (
                        <p key={index} className='mt-2'>{para}</p>
                      ))}
                    </div>
                    {subsec?.subSectionImage && <div>
                      <img src={subsec.subSectionImage} alt={`${subsec.subSectionTitle}_img`} className='mt-4 w-full h-full object-cover' />
                      <p className='text-center'>Fig: {subsec.subSectionImageCaption}</p>
                    </div>}

                    {subsec.subSubSection?.map((subSubSec, ss_index) => (
                      <div key={ss_index}>
                        <div>
                          <h6 className='font-medium mt-2'>{m_index + 1}.{s_index + 1}.{ss_index + 1} {subSubSec.subsubSectionTitle}</h6>
                          {subSubSec?.subsubSectionContent?.map((para, index) => (
                            <p key={index} className='mt-2'>{para}</p>
                          ))}
                        </div>
                        {subSubSec.subsubSectionImage && <div>
                          <img src={subSubSec.subsubSectionImage} alt={`${subSubSec.subsubSectionTitle}_img`} className='mt-4 w-full h-full object-cover' />
                          <p className='text-center'>Fig: {subSubSec.subsubSectionImageCaption}</p>
                        </div>}
                      </div>
                    ))}
                  </div>
                ))
              }

            </div>
          ))}

        </div>


      </section>

    </div>
  )
}

export default PapersContentPage