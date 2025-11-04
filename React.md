--------------------- core concepts of react js -------------------------

** most important concept ** (interview question)
- react js run twice because firstly it run virtual DOM and second time run real DOM  (for static code only)

## what is reactJs
-- open source javascript library for building user interfaces
<!-- -- its not a framework  --> // most probably asked in interview 
-- Focus on building UI and provide rich eco-system and placed with other libraries and its more  capable then building full flexed web-application.

## why we want to learn reactJs
-- reactJs  is a project created and maintained by facebook
-- more than 100k stars on github 
-- huge community behind it 
-- in demand skillset
-- seamlessly integrate react into any of your application
-- portion of your page or a complete page or even an entire application itself.

## how reactJs work
-- ReactJs is component based architecture 
-- provide Reusable coding structure means we can use same code for multiple time
-- React is declarative (tell react what you want and react will build the actual UI)
-- React will handle efficiently updating and rendering of the component
-- DOM updates are handles gracefully in react js

## prerequisites of React Js
-- HTML, CSS and Javascript fundamentals
-- good knowledge of modern javascript (ES6, ES8)
-- javascript - 'this' keyword, filter, map and reduce method

## Fundamentals of React Js
-- JSX (JavaScript XML)
-- Virtual DOM  (DOM : document object model)
-- Hooks
-- Event Handling

## basic commands for installtion and run React Js code in browser 
step: 1: install Node js in your system
step: 2: create blank folder and open it into terminal / cmd
step: 3: write a command for creating New project of react Js
command:  npx create-react-app <projectName> 
step: 4: after creating project write a command for check your react js project is working or not 
command:  npm start

-- *** another useful command *** --
1. npm install - for install only node-modules in your folder
2. it below command is not working due to some technical issues then try (command: npm i --force)

## what is npm 
-- npm stands for node package manager 

## React Js Folder Structure
1. package.json : This file contains dependencies and scripts which is required for this project
2. package-lock.json : it ensures continuosly for your dependencies and you don't really want to worry about them 
3. node-modules : provide all needed packages,  mentioned all installed dependencies, it is generated when run create-react-app command or when you run npm install (npm i --force)
4. public folder : its contains 3 main files 
     1. manifest.json - This file provide consent for progreesive web-app which is out of scope of our decision
     2. favicon.ico - provide logo
     3. index.html - provide html code in this react-app provide "root" id 
5. src folder:  used for project development (for content)
     1. index.js : provide root component and dom element which is control by react (provide Virtual DOM)
6. README.md : provide all related information  (like how to run code , basic infromation about project, etc.)

7. public/manifest.js : improve loading performance
- avoid re-downloading unchanged code 

8. public/robots.txt : helpful for SEO and provide instruction to the google search engine
- React app ko web pe deploy karne ke baad, ye file search engine bots (Google, Bing, etc.) ko instructions dene

---- ----------- --------- run application in browser
command: npm start

## what is virtual DOM and real DOM 
-- real DOM / physical DOM / actual DOM : find id, class in document ** we use real DOM in javascript, node js **
-- Virtual DOM : search element through browser  ** we use virtual DOM in react **

## React JS component based architecture
-- in reactJS component represent the part of user interface
-- components describes a part of the user interface
-- They are re-usable and can be nested inside other components
-- basic component our web-application needs 
  1. header 
  2. footer
  3. navbar
  4. sidebar
  5. Main component
  6. one another componet who contains all below component - root app compponent
-- component can contain other components

## Types of Component

1. Stateless Functional Component - javascript function 
----------------- key features of function components -------------------
-- simple function
-- use function components as much as possible
-- absence of 'this' keyword
-- solution without using state
-- mainly responsible for the UI
-- stateless/ dumb / presentational 

------------- how it works on react js --------------
step: 1: its normal javascript function they can optionally receive an object of properties (props)as input which is refer to as props and return HTML (JSX) to describe the UI

2. Stateful class Component - class extending component class render method returning HTML
----------------- key features of function components -------------------
-- more feature  
-- maintain  their own private data - state
-- complex UI logic
-- Provide lifecycle hooks
-- stateful/ smart / container

## difference between js and JSX file extension
-- js : js is javascript file
-- jsx : js +  XML (its allow to html with javascript) used in ReactJs
-- jsx is not a necessity to write react application.
-- jsx makes your code simpler and elegant.
-- jsx ultimately transpiles to pure javascript which is understood by the browsers.

## JSX differences
-- class -> className
-- for -> htmlFor
-- camelCase Property naming convention
like onclick -> onClick
     tabindex -> tabIndex
     
## Difference between class Component and Function component
--- Function components: 

1. state support : useState hook
2. LifeCycle Method :  useEffect hook
3. Function components are shorter and easier to read.
4. Pehle function components me state ya lifecycle support nahi tha, isliye class use karte the.
- Ab Hooks aane ke baad, function components preferred hain.
5. part of modern Javascript

--- class Compoenents: 

1. state support : this.state and this.setState
2. LifeCycle Method : 
componentDidMount() { }
componentDidUpdate() { }
componentWillUnmount() { }
3. Class components are verbose and complex for small logic.
4. used in old javascript 

## what is hooks 
-- use for react's apis
-- to manipulate data | dom
-- no breaking changes
-- completely opt-in  & 100% backward-compatible
-- what ever we're learned so far in this series still holds good
-- component types - functional component and class components.

** Types of hooks 
-- useState, useEffect, useContext, ...

## what is promise 
-- its part of modern javascript (ES6)

## what is props
-- props means properties 

## what is state
-- State in React is an object that stores dynamic data of a component and determines how that component behaves and looks.
-- It represents the current situation of a component.
-- When state changes, React re-renders the component to update the UI.

## props vs state
props: 
- props get passed to the component
- function parameters
- props are immutable
- props - functional components 
this.props - class components

state: 
- state is managed within the component
- variables declared in the function body
- state can be changed
- useState Hook - functional components
this.state - class components

## types of Hooks in react js 

1. useState :- This hook allows you to add state to functional components. It returns a stateful value and a function to update it.
Example: const [count, setCount] = useState(0); 0= initial value
-- use can also use let/var/const

2. useEffect :- This hook lets you perform side effects in functional components. Side effects include data fetching, subscriptions, or manually changing the DOM. It runs after every render by default, but you can control when it runs by providing a dependency array.
Example: useEffect(() => { document.title =You clicked ${count} times; }, [count]);

3. useContext :- This hook allows you to subscribe to React context from a functional component. It provides a way to share values (like themes or authenticated user data) that are considered "global" for a tree of React components without explicitly passing props down through every level.
Example: const theme = useContext(ThemeContext);

5. useDisptch:- part of redux for manage complex state management

6. useReducer:- An alternative to useState for more complex state logic. It's often preferred when the state logic involves multiple sub-values or when the next state depends on the previous one. It's similar to Redux.  
Example: const [state, dispatch] = useReducer(reducer, initialState);

7. useRef:- This hook returns a mutable ref object whose .current property is initialized to the passed argument (initialValue). The returned object will persist for the full lifetime of the component. It's commonly used to access DOM elements directly or to store mutable values that don't trigger re-renders.
Example: const inputEl = useRef(null);

8. useCallback:- This hook returns a memoized callback function. It's useful for optimizing child components that rely on reference equality to prevent unnecessary re-renders.
Example: const memoizedCallback = useCallback(() => { doSomething(a, b); }, [a, b]);

9. useLayoutEffect:- This hook is similar to useEffect, but it fires synchronously after all DOM mutations but before the browser paints. It's useful for reading layout from the DOM and synchronously re-rendering.

## Component	       Role
BrowserRouter : Routing system ko enable karta hai
Routes : Route components ka wrapper
Route : Path aur uss path ke corresponding component define karta hai

<!-- ---------- important command when npx create-react-app my-app is not working  ------- -->
         Command                                         Use When
npx create-react-app my-app	                    Default recommended way
npx --ignore-existing create-react-app my-app	If cache is messed
npm init react-app my-app	                    Alternative CLI
npm init vite@latest my-app -- --template react	Super fast modern setup
npm install -g create-react-app	               Rarely needed (legacy)

## Status Code 
1. 100 - series : Informational
- The request was received and is still being processed.
** Example:
- 100 Continue → Server received headers, client should send the body.

2. 200 - series : Success
- The request was successfully received, understood, and accepted.
** Examples:
- 200 OK → Standard success response.
- 201 Created → New resource created successfully.

3. 300 - series : Redirection
- The client must take additional action to complete the request.

** Examples:
1. 301 Moved Permanently → Resource moved to a new URL.
2. 302 Found → Resource temporarily at another URL.
3. 304 Not Modified → Cached version is still valid (no need to re-download).

4. 400 - series : Clients Error
- The request has an error (issue from the client side).
** Examples:
- 400 Bad Request → Invalid request (wrong syntax/parameters).
- 401 Unauthorized → Authentication required (login needed).
- 403 Forbidden → Not allowed (even if logged in).
- 404 Not Found → Resource doesn’t exist.

5. 500 - series : Server Errors
- The request was valid, but the server failed to process it.
- Examples:
1. 500 Internal Server Error → Generic server error.
2. 502 Bad Gateway → Server got an invalid response from another server.
3. 503 Service Unavailable → Server is down or overloaded.










