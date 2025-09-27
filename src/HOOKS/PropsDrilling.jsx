import React from 'react'

const PropsDrilling = () => {
    function GrandChild({name}){
        return <h2> Hello, {name} </h2>
            }
        
            function Child({name}) {
        return <GrandChild name={name} />
            }
        
            function Parent(){
        return <Child name="xyz" />
            }
  return (
    <div>
      <Parent />
    </div>
  )
}

export default PropsDrilling


// important For Interview (difference between State Vs Props Vs Props-Drilling)


// state: 
// - state use for change data 
// - state managed data within a component
// useState - Hook (in fucntional component)
// variable declared in functional body 

// (this.state) - written class Component 

// Props: 
// pass data through parent Component to Child Component (parent -> child)
// Simple Data or use For simple Websites
// Props declared in Parameters
// one - way process for data passing 
// (this,props) - written in class Components 

// PropsDrilling: pass Data if we have nested Data Structure or Complex data Structure 