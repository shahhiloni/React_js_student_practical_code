import React, { Component } from 'react'

export default class LifeCycle extends Component {
  // initiased the stateor props for components
    constructor(props){
        // it will call the parent constructor or check the set up of constructor
        super(props)
console.log("constructor : component is being initiased")
this.state = {count: 0}
    }

    componentDidUpdate(prevProps,prevState){
      console.log("compoemtDidUpdate: component was changed")
console.log("previous state:", prevState)
console.log("current state:", this.state)
 
    }
  render() {
    return (
      <div>
        
      </div>
    )
  }
}
