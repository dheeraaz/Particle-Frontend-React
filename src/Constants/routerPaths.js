import { 
    Home, 
    BlogsSubjectPage, 
    BlogsChaptersPage, 
    BlogsContentPage, 
    PapersSubjectPage, 
    PapersChaptersPage, 
    PapersContentPage, 
    ArticlesSubjectPage, 
    ArticlesChaptersPage,
    ArticlesContentPage,
    AOI, 
    Contact 
} from '../Modules/index.js';

export const routerPaths = [
    {
        "id": "1",
        "name": "home",
        "path": '',
        "component": Home
    },
    {
        "id": "2",
        "name": "blogs",
        "path": 'blogs',
        "component": BlogsSubjectPage,
    },
    {
        "id": "2.1",
        "name": "blogsChapters",
        "path": 'blogs/:subjectTitle',
        "component": BlogsChaptersPage,
    },
    {
        "id": "2.1.1",
        "name": "blogsContent",
        "path": 'blogs/:subjectTitle/:blogId',
        "component": BlogsContentPage,
    },
    {
        "id": "3",
        "name": "papers",
        "path": 'papers',
        "component": PapersSubjectPage,
    },
    {
        "id": "3.1",
        "name": "papersChapters",
        "path": 'papers/:subjectTitle',
        "component": PapersChaptersPage,
    },
    {
        "id": "3.1.1",
        "name": "papersContent",
        "path": 'papers/:subjectTitle/:paperId',
        "component": PapersContentPage,
    },
    {
        "id": "4",
        "name": "articles",
        "path": 'articles',
        "component": ArticlesSubjectPage,
    },
    {
        "id": "4.1",
        "name": "articles",
        "path": 'articles/:subjectTitle',
        "component": ArticlesChaptersPage,
    },
    {
        "id": "4.1.1",
        "name": "articles",
        "path": 'articles/:subjectTitle/:articleId',
        "component": ArticlesContentPage,
    },
    {
        "id": "5",
        "name": "aoi",
        "path": 'aoi',
        "component": AOI,
    },
    {
        "id": "6",
        "name": "contact",
        "path": 'contact',
        "component": Contact,
    },
    

];