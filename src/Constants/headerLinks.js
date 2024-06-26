import { Home, Gallery} from '../Modules/index.js';

export const headerLinks = [
    {
        "id": 1,
        "name": "home",
        "component": Home,
        "path": ''
    },
    {
        "id": 2,
        "name": "gallery",
        "component": Gallery,
        "path": '/gallery'
    },
    
    {
        "id": 3,
        "name": "information",
        "component": Home,
        "path": '/information'
    },
    {
        "id": 4,
        "name": "how it works",
        "component": Gallery,
        "path": '/howitworks'
    },
    {
        "id": 5,
        "name": "help",
        "component": Home,
        "path": '/help'
    },
    
];