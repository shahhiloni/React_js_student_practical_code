// useEffect (sample code of Timer function)

import React, {useState, useEffect} from 'react'

const Effect = () => {
const [time, setTime] = useState(0);
useEffect(() => {
const id = setInterval(() => setTime(t => t+1),1000)
return() => clearInterval(id)
}, [])
return (
<div>
    <h3> time: {time} </h3>
</div>
)
}

export default Effect
