

export const BLOGS = [

    {
        title: 'React',
        excerpt: 'This blog contains the various concepts related to react which I learnt while learning front-end development',
        image: '',
        href: '',
        chapter: [
            {
                title: 'React Components',
                content: [
                    {
                        subtitle: "Introduction",
                        description: "React components are the building blocks of a React application. They are reusable pieces of code that represent parts of the user interface (UI). Each component is like a small, self-contained unit that can be combined with others to build complex UIs. Not just this, a react component allows us to write Javascript inside HTML, i.e react component can be defined as a Javascript functions which returns markup leveraging us the power of using variables, conditional rendering, using loops, etc within a markup language which a HTML fails to deliver.",
                    },
                    {
                        subtitle: "Why We Need Components",
                        description: "We need components because they help us organize the code better. By breaking down the UI into smaller parts, it becomes easier to manage and make changes in future. Components can be reused in different parts of the application, which saves time and reduces errors, something like supporting DRY[Donot Repeat Yourself] principle. They also make the code more readable and maintainable.",
                    },
                ]
            },
            {
                title: 'React Props',
                content: [
                    {
                        subtitle: "Introduction",
                        description: "Props [or properties], are the method to pass data from one component to another in React. They are like passing arguments to functions, helping to create more customizable and dynamic components. Props are read-only, meaning a component cannot change the props it receives.",
                    },
                    {
                        subtitle: "Why We Need Props",
                        description: "Props are essential for making components reusable and dynamic. By passing different props, the same component can display different data or behave in different ways. This makes the UI more flexible and the code more modular.",
                    },
                ]
            },
            {
                title: 'React Hooks',
                content: [
                    {
                        subtitle: "Introduction",
                        description: "Since the modern react follows the principle of component-based architecture, with React Hooks, we can use state, and other react features in a functional component which were previously only possible in class components.",
                    },
                    {
                        subtitle: "Why We Need Hooks",
                        description: "Hooks simplify the process of using state and other features such as: handling side effect, DOM manipulation in functional components. They make the code cleaner and more readable by avoiding the complexities of class-based components. ",
                    },
                ]
            },

        ]

    }

]