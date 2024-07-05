import { Home, Blogs,BlogPage, Papers, Articles, AOI, Contact } from '../Modules/index.js';

export const routerPaths = [
    {
        "id": 1,
        "name": "home",
        "component": Home,
        "path": ''
    },
    {
        "id": 2,
        "name": "blogs",
        "path": '/blogs',
        "component": Blogs,
    },
    {
        "id": 2.1,
        "name": "blogPage",
        "path": '/blogs/:blogId',
        "component": BlogPage,
    },
    {
        "id": 3,
        "name": "papers",
        "path": '/papers',
        "component": Papers,
    },
    {
        "id": 4,
        "name": "articles",
        "path": '/articles',
        "component": Articles,
    },
    {
        "id": 5,
        "name": "aoi",
        "path": '/aoi',
        "component": AOI,
    },
    {
        "id": 6,
        "name": "contact",
        "path": '/contact',
        "component": Contact,
    },
    

];