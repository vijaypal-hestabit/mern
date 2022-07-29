import { useState } from "react";

let HOC = (props) =>{
    return (
        <HOCred cmp={Counter}/>
    )
}

let HOCred = (props) =>{
    return (
        <h2>{<props.cmp/>}</h2>
    )
}

let Counter = () => {
    const [count, setCount] = useState(0)
    return (
        <div>
            <h2>{count}</h2>
            <button onClick={() => setCount(count + 1)}>Update</button>
        </div>
    )
}

export default HOC;