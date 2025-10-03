// useContext : useContext is a React Hook that lets you share the data across component without props drilling

// its use only function component
// steps to use useContext Hook in function Component
// 1. create a context with React.createContext().
// 2. wrap parent component with a provider - it provides value to the component
// 3. consume context in child comonents using useContext

import React, { createContext, useContext } from "react";


// create context
const NameContext = createContext();


function GrandChild() {
const name = useContext(NameContext)
return <h2> Hello, {name} </h2>
}

function Child(){
return <GrandChild />
}
// wrap a parent component with a provider - provide value
function Parent(){
return(<NameContext.Provider value="xyz">
    <Child />
</NameContext.Provider>
)
}

export default Parent;