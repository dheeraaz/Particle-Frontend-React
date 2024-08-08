import { 
    Home, 
    BlogsSubjectPage, 
    BlogChaptersPage, 
    BlogContentPage, 
    PapersSubjectPage, 
    PapersChaptersPage, 
    PapersContentPage, 
    Articles, 
    AOI, 
    Contact 
} from '../Modules/index.js';

export const routerPaths = [
    {
        "id": "1",
        "name": "home",
        "component": Home,
        "path": ''
    },
    {
        "id": "2",
        "name": "blogs",
        "path": '/blogs',
        "component": BlogsSubjectPage,
    },
    {
        "id": "2.1",
        "name": "blogsChapters",
        "path": '/blogs/:subjectTitle',
        "component": BlogChaptersPage,
    },
    {
        "id": "2.1.1",
        "name": "blogsContent",
        "path": '/blogs/:subjectTitle/:blogId',
        "component": BlogContentPage,
    },
    {
        "id": "3",
        "name": "papers",
        "path": '/papers',
        "component": PapersSubjectPage,
    },
    {
        "id": "3.1",
        "name": "papersChapters",
        "path": '/papers/:subjectTitle',
        "component": PapersChaptersPage,
    },
    {
        "id": "3.1.1",
        "name": "papersContent",
        "path": '/papers/:subjectTitle/:paperId',
        "component": PapersContentPage,
    },
    {
        "id": "4",
        "name": "articles",
        "path": '/articles',
        "component": Articles,
    },
    {
        "id": "5",
        "name": "aoi",
        "path": '/aoi',
        "component": AOI,
    },
    {
        "id": "6",
        "name": "contact",
        "path": '/contact',
        "component": Contact,
    },
    

];