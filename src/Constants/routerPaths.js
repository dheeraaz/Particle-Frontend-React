import { 
    Home, 
    BlogsChaptersPage, 
    BlogsContentPage, 
    PapersChaptersPage, 
    PapersContentPage, 
    ArticlesChaptersPage,
    ArticlesContentPage,
    Contact 
} from '../Modules/index.js';
import SubjectPage from '../Common/pages/SubjectPage.jsx';

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
        "component": SubjectPage,
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
        "component": SubjectPage,
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
        "component": SubjectPage,
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
        "name": "contact",
        "path": 'contact',
        "component": Contact,
    },
    

];