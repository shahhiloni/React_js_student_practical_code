// useContext : useContext is a React Hook that lets you share the data across component without props drilling

// its use only function component
// steps to use useContext Hook in function Component
// 1. create a context with React.createContext().
// 2. wrap parent component with a provider - it provides value to the component
// 3. consume context in child components using useContext

// import React, { useContext, createContext } from "react";
// const NameContext  = createContext();

// function GrandChild(){
// const name = useContext(NameContext);
// return <h3> Hello, {name} </h3>
// }

// function Child(){
// return <GrandChild />
// }
// function Parent (){
// return (
//     <NameContext.Provider value="eeee">
//         <Child />
//     </NameContext.Provider>
// )
// }

// export default Parent;


import React, { createContext, useContext } from "react";
const NameContext = createContext();
function GrandChild() {
const name = useContext(NameContext)
return <h3> Hello, {name} </h3>
}

function Child() {
return <GrandChild />
}

function Parent() {
return (<NameContext.Provider value="xxx">
    <Child />
</NameContext.Provider>
)
}

export default Parent;
