// useState :  


import React, {useState} from 'react'
const Block = () => {
const [count, setCount] = useState(0);

const add = () => {
setCount(count + 1);
}

const Minus = () => {
setCount (count - 1);
}
return (
<div>
    <h3> useState hook method </h3>
    <h4> {count} </h4>
    <button onClick={add}> + </button>
    <button onClick={Minus}> - </button>
</div>
)
}

export default Block