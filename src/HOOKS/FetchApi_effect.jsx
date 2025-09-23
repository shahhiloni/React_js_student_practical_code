import React, {useState, useEffect} from 'react'
const FetchApi_effect = () => {
const[data, setData] = useState(null); 

// useEffect : useEffect used for the fetch external resource ir data
// 1. Fetch API - 
// 2. DOM Update / manipulation (document object model)

// why we need useEffect in function component
// - useEffect used for re-render data without useEffect we can't re-render the data and phase error-prone

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