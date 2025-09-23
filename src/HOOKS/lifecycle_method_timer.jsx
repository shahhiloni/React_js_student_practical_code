import React, { Component } from 'react'

export class Timer extends Component {
constructor(){
super()
console.log(`constructor : Timer is being initialised`)
this.state = {
seconds: 0,
isRunning: false // default is not running
}

this.internal = null;
}

startTime = () => {
if(!this.state.isRunning){
this.setState({isRunning: true})
this.interval = setInterval(() => {
this.setState((prevState) => ({seconds: prevState.seconds + 1}))
}, 1000)
}
}

pauseTime = () => {
clearInterval(this.interval);
this.setState({isRunning: false})
}

resetTime = () => {
clearInterval(this.interval)
this.setState({seconds: 0, isRunning: false})
}

setCustomTime = (e) => {
e.preventDefault(); // stops the browser reloading
const customTime = parseInt(e.target.customTime.value);

if(!isNaN(customTime)){
console.log(`custom time set to: ${customTime} seconds`)
this.setState({seconds: customTime})
} else {
console.log("invalid timer entered")
}
}


componentDidMount() {
    console.log('componentDidMount: Timer have been mounted');
    this.interval = setInterval(() => {
        this.setState((prevState) => ({
            seconds: prevState.seconds + 1
        }))
    }, 1000)
}

componentDidUpdate(prevProps, prevState){
    console.log('componentDidUpdate; Timer has been updated');
    console.log('previous seconds:' ,prevState.seconds);
    console.log('current seconds:', this.state.seconds);
}

componentWillUnmount(){
    console.log('componentWillUnmount: timer has been unmounted');
    clearInterval(this.interval);
}

render() {
    console.log('render: timer is being rendered')
return (
<div>
    <h2> Enhanced Timer </h2>
    <h3> Time: {this.state.seconds} </h3>
    <button onClick={this.startTime}> Start </button>
    <button onClick={this.pauseTime}> Pause </button>
    <button onClick={this.resetTime}> Reset </button>


    <form onSubmit={this.setCustomTime}>
        <input type="number" name="customTime" />
        <button type="submit"> set Timer </button>
    </form>
</div>
)
}
}

export default Timer