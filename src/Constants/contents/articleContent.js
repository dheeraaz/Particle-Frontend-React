export const articleContent = [
    {
        subjectId: "1",
        subjectTitle: "Angular_1",
        subjectExcerpt: ["Angular is a comprehensive open-source web application framework maintained by Google. ", "It is designed to build dynamic and complex web applications efficiently using TypeScript."
        ], 
        subjectCardImage: "/images/articleImage/angularImg.jpg",
        subjectPageImage: "/images/articleImage/angularImg2.png",
        subjectPageIntro: ["React is a framework that employs Webpack to automatically compile React, JSX, and ES6 code while handling CSS file prefixes. React is a JavaScript-based UI development library. Although React is a library rather than a language, it is widely used in web development. The library first appeared in May 2013 and is now one of the most commonly used frontend libraries for web development.", "React offers various extensions for entire application architectural support, such as Flux and React Native, beyond mere UI.",],
        chapters: [
            {
                id: "1",
                type: "article",
                createdAt: "July 03, 2024",
                thumbnailImage: "/images/blogImage/React-image.jpg",
                excerpt: "Designed to encapsulate and manage the user interface (UI) in a modular, reusable manner. React components are the fundamental building blocks of React applications, designed to encapsulate and manage the user interface (UI) in a modular, reusable manner. This blog explores the core concepts behind React components, their importance, and best practices for their implementation.",
                title: "The Definitive Guide to RxJS Creation Operators in Angular",
                body: {
                    author: "John Doe", 
                    titleDesc: "Harness the real power for RxJS",
                    section: [
                        {
                            sectionId: "1.1",
                            sectionTitle: "Introduction to RxJS",
                            subSection: [
                                {
                                    subSectionTitle: "What is RxJS?",
                                    subSectionContent: ["RxJS (Reactive Extensions for JavaScript) is a library for composing asynchronous and event-based programs by using observable sequences. It provides powerful operators to work with asynchronous data streams.",],
                                },
                                {
                                    subSectionTitle: "Importance of RxJS",
                                    subSectionContent: ["RxJS (Reactive Extensions for JavaScript) is a library for composing asynchronous and event-based programs by using observable sequences. It provides powerful operators to work with asynchronous data streams.",],
                                    subSectionImage: "/images/articleImage/articleContentImg1.jpg",
                                },
                            ]
                        },
                        {
                            sectionId: "1.2",
                            sectionTitle: "Setting up RxJS in Angular",
                            sectionContent: ["Setting up RxJS in an Angular project is straightforward, as RxJS is included out of the box with Angular. When you create a new Angular project using the Angular CLI, RxJS is automatically installed as one of the dependencies. This means that you can start using RxJS operators and observables immediately without any additional setup. To verify that RxJS is installed, you can check the package.json file in your Angular project, where you should see RxJS listed as a dependency.", "Although RxJS is included by default, it is important to understand how to properly integrate it into your Angular services, components, and modules. You will often import specific RxJS operators and creation functions in your TypeScript files to work with observables. Angular services, for instance, frequently return observables that can be subscribed to in components. By leveraging Angular's dependency injection system, you can inject these services wherever needed, allowing for clean and efficient data handling throughout your application. Properly setting up and using RxJS in Angular is the first step towards harnessing the full power of reactive programming in your projects.",],
                        },
                        {
                            sectionId: "1.3",
                            sectionTitle: "Understand the observable",
                            subSection: [
                                {
                                    subSectionTitle: "What is observable?",
                                    subSectionContent: ["An observable is a stream that can emit multiple values over time. It’s a powerful way to handle asynchronous operations in Angular.",],
                                },
                                {
                                    subSectionTitle: "Why is observable important?",
                                    subSectionContent: ["An observable is a stream that can emit multiple values over time. It’s a powerful way to handle asynchronous operations in Angular.",],
                                    subSectionImage: "/images/articleImage/articleContentImg2.jpg",
                                },
                            ]
                        },
                        {
                            sectionId: "1.4",
                            sectionTitle: "Conclusion",
                            sectionContent: ["RxJS is a vital tool for Angular developers, providing a flexible and powerful way to handle asynchronous operations. By mastering RxJS creation operators and understanding how to compose and manage observables, you can build robust, scalable, and maintainable Angular applications.","For further reading, consider exploring the official RxJS documentation, as well as advanced topics like custom operators and higher-order observables.",],
                        },
                    ]
                }
            },
            
        ]
    },
    {
        subjectId: "1",
        subjectTitle: "Angular_2",
        subjectExcerpt: ["Angular is a comprehensive open-source web application framework maintained by Google. ", "It is designed to build dynamic and complex web applications efficiently using TypeScript."
        ], 
        subjectCardImage: "/images/articleImage/angularImg.jpg",
        subjectPageImage: "/images/articleImage/angularImg2.png",
        subjectPageIntro: ["React is a framework that employs Webpack to automatically compile React, JSX, and ES6 code while handling CSS file prefixes. React is a JavaScript-based UI development library. Although React is a library rather than a language, it is widely used in web development. The library first appeared in May 2013 and is now one of the most commonly used frontend libraries for web development.", "React offers various extensions for entire application architectural support, such as Flux and React Native, beyond mere UI.",],
        chapters: [
            {
                id: "1",
                type: "article",
                createdAt: "July 03, 2024",
                thumbnailImage: "/images/blogImage/React-image.jpg",
                excerpt: "Designed to encapsulate and manage the user interface (UI) in a modular, reusable manner. React components are the fundamental building blocks of React applications, designed to encapsulate and manage the user interface (UI) in a modular, reusable manner. This blog explores the core concepts behind React components, their importance, and best practices for their implementation.",
                title: "The Definitive Guide to RxJS Creation Operators in Angular",
                body: {
                    abstract: ["React components are the fundamental building blocks of React applications, designed to encapsulate and manage the user interface (UI) in a modular, reusable manner. By breaking down the UI into smaller, self-contained pieces, React components make it easier to develop, test, and maintain complex web applications. Each component encapsulates its own structure, logic, and styling, allowing developers to focus on specific parts of the UI without being overwhelmed by the entire application.", "This blog explores the core concepts behind React components, their importance, and best practices for their implementation. We will delve into why components are essential for building scalable and maintainable applications, the different types of components in React, and how to optimize their performance. Whether you are a beginner or an experienced developer, understanding and mastering React components is crucial for effective modern web development.",],
                    section: [
                        {
                            sectionId: "1.1",
                            sectionTitle: "Why We Need Components",
                            subSection: [
                                {
                                    subSectionTitle: "Modularity and Reusability",
                                    subSectionContent: ["One of the primary reasons we need components in React is modularity. Components allow developers to break down the UI into smaller, manageable pieces. Each component encapsulates its own structure, logic, and styling, making it easier to understand, test, and maintain. Additionally, components are reusable. A well-designed component can be used across different parts of an application, reducing redundancy and enhancing consistency.",],
                                },
                                {
                                    subSectionTitle: "Separation of Concerns",
                                    subSectionContent: ["React components promote the separation of concerns, a principle in software engineering that helps keep different aspects of the application isolated. This separation means that each component handles a specific piece of the UI, leading to cleaner and more maintainable code. Developers can focus on building and debugging individual components without worrying about the entire application.",],
                                },
                                {
                                    subSectionTitle: "Improved Performance",
                                    subSectionContent: ["React components are designed to be highly efficient. React's virtual DOM (Document Object Model) optimizes updates by comparing the current state with a virtual representation of the UI and applying changes only where necessary. This approach minimizes direct manipulations to the real DOM, resulting in better performance and smoother user experiences.",],
                                },
                            ]
                        },
                        {
                            sectionId: "1.2",
                            sectionTitle: "Types of React Components",
                            sectionContent: ["There are two types of react components which are:- Functional Components and Class Components which are described as bekow",],
                            subSection: [
                                {
                                    subSectionTitle: "Functional Components",
                                    subSectionContent: ["Functional components are simple JavaScript functions that return JSX (JavaScript XML) to define the UI. They are typically used for presenting static data or UI elements that do not require internal state management. Functional components are concise, easy to read, and promote a functional programming style.",],
                                },
                                {
                                    subSectionTitle: "Class Components",
                                    subSectionContent: ["Class components are ES6 classes that extend from React.Component. They can manage their own state and lifecycle methods, making them suitable for more complex UIs that require stateful logic. Although functional components have become the preferred approach due to hooks, class components are still widely used and understood.",],
                                },
                            ]
                        },
                        {
                            sectionId: "1.3",
                            sectionTitle: "Conclusion",
                            sectionContent: ["React components are a powerful paradigm that enables developers to build scalable, maintainable, and high-performance user interfaces. By embracing the principles of modularity, reusability, and separation of concerns, React components pave the way for efficient and organized codebases. Whether you are a beginner or an experienced developer, mastering React components is essential for modern web development.", "Feel free to dive deeper into the world of React and experiment with components to harness their full potential in your projects. Happy coding!",],
                        },
                    ]
                }
            },
            
        ]
    },
    
]