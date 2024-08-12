import React from 'react'
import { Breadcrumbs, ContentLink, ReleventCard, SubjectDescription} from '../../../Common/Components';
import { useParams } from 'react-router-dom';
import { paperContent } from '../../../Constants/contents/paperContent';

const PapersChaptersPage = () => {
  const { subjectTitle } = useParams();

  // for creating the breadcrumbs
  let pathArray = ["/", "papers", subjectTitle];

  let singleSubject;
  const releventPapers = [];

  // for getting the desired subject
  paperContent.forEach((subject) => {
    if (subject.subjectTitle.toLowerCase() === subjectTitle) {
      singleSubject = subject;
    }
  })

  // for relevent papers, selecting random blogs from the chapters other than current chapters
  paperContent.forEach((subject) => {
    if (subject.subjectTitle.toLowerCase() !== subjectTitle) {
      const randomChapter = subject.chapters[(Math.floor(Math.random() * subject.chapters.length))];

      const singlePaperCard = {
        "subjectTitle": subject.subjectTitle.toLowerCase(),
        "paperId": randomChapter.id,
        "paperTitle": randomChapter.title,
        "createdAt": randomChapter.createdAt,
        "imgSrc": randomChapter.thumbnailImage,
      };

      releventPapers.push(singlePaperCard);
    }
  })
  return (
    <div className='container'>
      <Breadcrumbs path={pathArray} />
      {/* Upper Section */}
      <SubjectDescription imgSrc ={singleSubject?.subjectPageImage} subjectTitle={singleSubject?.subjectTitle} description={singleSubject?.subjectPageIntro}/>

      {/* Bottom Section */}
      <section className='my-20 xl:my-[72px] flex justify-between'>
        <aside className='w-[733px] xl:w-[664px] pr-[60px] border-r-[1px] border-extraLightText'>
          <h3 className=' text-primary text-[32px] xl:text-[30px] font-medium'>Papers / Contents</h3>
          <div className='mt-8 xl:mt-7'>
            {singleSubject?.chapters?.map((chap, index) => {
              return (
                <ContentLink key={index} contentRoute = {`/papers/${subjectTitle.toLowerCase()}/${chap.id}`} contentTitle = {chap.title} />
              )
            })}
          </div>
        </aside>

        <aside className='w-[547px] xl:w-[496px] ml-10 xl:ml-9'>
          <h3 className='text-2xl xl:text-xl font-medium text-primary'>You May Also Like</h3>
          <div className='mt-[31px] xl:mt-[27px] flex flex-col gap-9'>
            {releventPapers?.slice(0, 3).map((paper, index) => {
              return <ReleventCard key={index} title={paper.paperTitle} imageSrc={paper.imgSrc} date={paper.createdAt} cardRoute={`/papers/${paper.subjectTitle}/${paper.paperId}`} />
            })}
          </div>

        </aside>
      </section>
    </div>
  )
}

export default PapersChaptersPage