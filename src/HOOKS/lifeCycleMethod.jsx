// // --- life cycle method ----

// // -- it's used only in class method
// // 1. life cycle method is special function which allow us to run specific code at different stage of component's life

// // 1. Birth (Mounting) - when the component is display in your screen
// // 2. growth / update (updating) - when the compoent is change or update the existing data
// // 3. death / detroy (unmount) - when a component is removed from the


// // stage : 1 : initialised data / start
// // stage: 2: update existing data
// // stage: 3: remove data from the DOM


// // Stage: 1 : mounting
// // 1. constructor() - used for initialised the class component
// // 2. render() - return is JSX code (UI)
// // 3. componentDidMount() - runs after the component is added to the DOM
// // - fetching data or start timer

// // stage:2: updating (growth stage)
// // - this happens whrn componet 's state or props will change
// // - render() - runs again to update the ui based component

// // - componentDidUpdate()

// // stage: 3: detroy / delete (unmount)
// // - runs just after the component is detroyed


// // ---------------------- coding ---------------------------

// // import React, { Component } from 'react'

// // export class LifeCycle extends Component {
// // constructor(props){
// // // initiased the state or props for component
// // super(props)
// // // it will call the parent constructor or check the set up of constructor

// // console.log("COnstructor: component is being initiased")
// // this.state = {count: 0}
// // }

// // componentDidUpdate(prevProps, prevState){
// // console.log("compoenentDidUpdate: component was changed")
// // console.log("prevoius state:", prevState)
// // console.log("current state:", this.state)

// // if(prevState.count !== this.state.count){
// // console.log(`Count changed from ${prevState.count} to ${this.state.count}`)
// // }
// // }

// // Increment = () => {
// // this.setState({count: this.state.count + 1});
// // }

// // Decrement = () => {
// // this.setState({count: this.state.count - 1});
// // }
// // compopentWillUnmount(){
// // console.log('componentWillUnmount: componet is about to the destroyed or removed')
// // }
// // render() {
// // return (
// // <div>
// //     <h1> Life cycle method </h1>
// //     <p> Count : {this.state.count} </p>
// //     <button onClick={this.Increment}> Increment </button>
// //     <button onClick={this.Decrement}> Decrement </button>
// // </div>
// // )
// // }
// // }

// // // export default LifeCycle


// import React, { Component } from 'react'

// export default class lifeCycleMethod extends Component {
//     constructor(){
//         super()
//         console.log("constructor has being started")
//         this.state = {count: 0}
//     }

//     componentDidUpdate(prevState, prevProps){
// console.log("componentDidUpdate: has been changed or updated")
// console.log("prevState:", prevState)
// console.log("currentState", this.state)


// if(prevState.count !== this.state.count){
//     console.log(`component changed from ${prevState.count} to ${this.state.count}`)
// }

// Increment = () => {
//     this.setState = ({count: this.state.count + 1})
// }

// Decrement = () => {
//     this.setState = ({count: this.state.count - 1})
// }
//     }
//   render() {
//     return (
//       <div>
        
//       </div>
//     )
//   }
// }
