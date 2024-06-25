import { Home, Gallery} from '../Modules/index.js';

export const HeaderLinks = [
    {
        "id": 1,
        "name": "HOME",
        "component": Home,
        "path": ''
    },
    {
        "id": 2,
        "name": "GALLERY",
        "component": Gallery,
        "path": '/gallery'
    },
    
    {
        "id": 3,
        "name": "INFORMATION",
        "component": Home,
        "path": '/information'
    },
    {
        "id": 4,
        "name": "HOW IT WORKS",
        "component": Gallery,
        "path": '/howitworks'
    },
    {
        "id": 5,
        "name": "HELP",
        "component": Home,
        "path": '/help'
    },
    
];