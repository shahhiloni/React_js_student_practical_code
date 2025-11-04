import React, {useState, useEffect} from 'react'
const FetchApi_effect = () => {
const[data, setData] = useState(null); 

// useEffect : useEffect used for the fetch external resource ir data
// 1. Fetch API - 
// 2. DOM Update / manipulation (document object model)
// 3. set up the timer or event listener

// why we need useEffect in function component
// - useEffect used for re-render data without useEffect we can't re-render the data and phase error-prone

// How does use Effect works?
// - use Effect accept 2 effects

// 1. function : the effect you want to run
// 2. dependency Array: tells react when to run effect in output 

// what is dependency and array and how it works 
// 1. empty array:  the effect only once, when the component is mounted 
// 2. with dependency: the effect runs whenever the specified dependency change or update 
// 3. no array: effect runs after every render

useEffect(() => {
fetch("https://jsonplaceholder.typicode.com/posts/1")
.then((response) => response.json())
.then((json) => setData(json))
},[])

return (
<div>
    <h2> Fetch Api using UseEffect </h2>
    { data ? <p> {data.title} </p> : <p> loading ... </p> }
    { data ? <p> {data.body} </p> : <p> loading .... </p>}
</div>
)
}

export default FetchApi_effect