// useRef = its hook which is used for store a data especially mutable Data or reference to a 
// DOM elmeney or a value that presists across the render - without re-rendering when its change 

import React, {useState, useEffect, useRef} from "react";
const PreviousValueExample = () => {
    const [count, setCount] = useState(0);
    const prevCount = useRef(0);

    useEffect(() => {
prevCount.current = count;
    })

    return(
        <>
        <p> Current : {count} </p>
        <p> Previous Count: {prevCount.current} </p>
        <button onClick={() => setCount(count + 1 )}> Increment </button>
        </>
    )
}

export default PreviousValueExample

