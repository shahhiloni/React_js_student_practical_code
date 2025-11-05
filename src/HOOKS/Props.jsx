import React from "react";

// child component 
function Student(props) {
return (
    <div>
        <h2> Student Name: {props.name} </h2>
        <h2> Course: {props.course} </h2>
    </div>
)
}

// parent component 
function Parent() {
    return(
        <div> 
            <Student name="sakir" course="full stack development" />
            <Student name="devarsh" course="full stack development" />
        </div>
    )
}

export default Parent;

